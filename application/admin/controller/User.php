<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/14
 * Time: 10:09
 *-----------------------------||
 */

namespace app\admin\controller;


use think\Db;

class User extends Base
{
    public function lists(){
        $db = Db::name('admin_user')
            ->field('id,sex,nc,name,num,last_login_ip as ip,last_login_time as t,thumb,is_lock');
        $user = session('user.name');
        $admin = config('admin.user_auth_admin');
        if ($user == $admin){
            $db = $db->where('name', '<>', $admin);
        }else{
            $db = $db->where('name', $user);
        }
        return parent::_list($db, 10);
    }

    public function add(){
        if (request()->isPost()){
            $post = request()->post();
            unset($post['file']);
            unset($post['rpass']);
            $pass = $post['pass'];
            $salt = time();
            $newPass = md5(md5($pass . $salt));
            $post['pass'] = $newPass;
            $post['salt'] = $salt;
            $res = Db::name('admin_user')->insert($post);
            if ($res){
                $this->success('恭喜昵，注册成功！现在可以登录啦');
            }else{
                $this->error('很遗憾，注册失败！');
            }
        }else{
            return $this->fetch();
        }
    }

    public function edit($id = 0){
        if (request()->isPost()){
            $post = request()->post();
            unset($post['file']);
            $res = Db::name('admin_user')->update($post);
            if ($res){
                $this->success('用户编辑成功！');
            }else{
                $this->error('用户编辑失败！');
            }
        }else{
            $user = Db::name('admin_user')->find($id);
            $this->assign('user', $user);
            return $this->fetch();
        }
    }

    public function chPwd($id = 0){
        if (request()->isPost()){
            $post = request()->post();
            $pwd = $post['pwd'];
            $pass = $post['pass'];
            $user = Db::name('admin_user')->find($id);
            $salt = $user['salt'];
            $oldPass = md5(md5($pwd . $salt));
            if ($oldPass != $user['pass']){
                $this->error('用户旧密码错误！');
            }
            $newPass = md5(md5($pass . $salt));
            $res = Db::name('admin_user')->update(['id' => $id, 'pass' => $newPass]);
            if ($res){
                $user = session('user.name');
                $admin = config('admin.user_auth_admin');
                if ($user == $admin){
                    $this->success('密码修改成功！');
                }else{
                    $this->success('密码修改成功！','admin/Pub/logout');
                }
            }else{
                $this->error('密码修改失败！');
            }
        }else{
            $name = Db::name('admin_user')->where('id', $id)->value('name');
            $this->assign('name', $name);
            return $this->fetch();
        }
    }

    public function del($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        //删除图片
        $info = Db::name('admin_user')->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (is_file($file)){
            unlink($file);
        }
        //删除新闻
        $res = Db::name('admin_user')->delete($id);
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

    public function delRecord($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        $res = Db::name('record')->delete($id);
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

    public function saveVal($id = 0, $val = 0){
        $ret = [
            'suc' => 0
        ];
        $res = Db::name('admin_user')->update([
            'id'      => $id,
            'is_lock' => $val
        ]);
        if (!$res){
            $ret['suc'] = 1;
        }
        return $ret;
    }


    public function recordLists(){
        $db = Db::name('record');
        return parent::_list($db, 10);
    }

    public function info(){
        $name = request()->get('name', '');
        $time = request()->get('time', '');
        $user = session('user.name');
        $uid  = session('user.id');
        $admin = config('admin.user_auth_admin');
        $db = Db::name('record')
            ->field('uid,tab,rid,count(1) as n')
            ->group('uid,tab,rid');
        if ($user != $admin){
            $db = $db->where('uid', $uid);
        }
        $sid = $name ? Db::name('admin_user')->where('name', $name)->value('id') : 0;
        $db = $sid && $name ? $db->where('uid', $sid) : $db;
        $db = !$sid && $name ? $db->where('uid', $sid) : $db;
        if ($time){
            list($start, $end) = explode('~', $time);
            if ($start == $end){
                $end = date('Y-m-d', strtolower($end) + 3600);
            }
            $db = $db->where('addtime', 'between time', [$start, $end]);
        }else{
            $end = time();
            $start = $end - 30 * 24 * 60 * 60;
            $db = $db->where('addtime', 'between time', [$start, $end]);
        }
        $data = $db->select();
        $list = $this->fromData($data);
        $this->assign([
            'list' => $list
        ]);
        return $this->fetch();
    }

    protected function fromData($data = []){
        $list = [];
        foreach ($data as $v){
            $list[$v['uid']]['uid'] = $v['uid'];
            $list[$v['uid']]['tab'] = $v['tab'];
            $list[$v['uid']]['con'][] = $v['rid'];
            $list[$v['uid']]['rids'][$v['tab']][] = $v['rid'];
            $list[$v['uid']]['num'] = count($list[$v['uid']]['con']);
        }
        return $list;
    }
}