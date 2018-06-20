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
        $time2 = request()->get('time2', '');
        $uname = request()->get('uname', '');
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
            $start = strtotime($start);
            $end = strtotime($end);
            if ($start == $end){
                $end = $end + 24 * 3600;
            }
            $db = $db->where('addtime', 'between time', [$start, $end]);
        }else{
            $end = time();
            $start = $end - 30 * 24 * 60 * 60;
            $db = $db->where('addtime', 'between time', [$start, $end]);
        }
        $data = $db->select();
        $list = $this->fromData($data);
        $count = array_column($list, 'num', 'uid');
        $this->assign([
            'list' => $list
        ]);
        $json1 = $this->getData1($uname);
        $json2 = $this->getData2($time2);
        $this->assign([
            'json1' => $json1,
            'json2' => $json2,
            'count' => array_sum($count)
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

    private function getData1($uname = ''){
        $user = session('user.name');
        $userid = session('user.id');
        $admin = config('admin.user_auth_admin');
        $end = time();
        $start = $end - 29 * 24 * 60 * 60;
        $begin = $start;
        $day = [];
        for ($i = 0; $begin <= $end; $i++) {
            $day[] = date('Y-m-d', $begin);
            $begin += 24 * 3600;
        }
        $db = Db::name('record');
        if ($user != $admin){
            $db = $db->where('uid', $userid);
        }
        $uid = $uname ? Db::name('admin_user')->where('name', $uname)->value('id') : 0;
        $db = $uid && $uname ? $db->where('uid', $uid) : $db;
        $db = !$uid && $uname ? $db->where('uid', $uid) : $db;
        $data = $db
            ->field("tab,count(*) as n,FROM_UNIXTIME(addtime,'%Y-%m-%d') as day")
            ->group('day,tab')
            ->select();

        $list = [];
        foreach ($data as $v){
            $list[$v['day']]['day'] = $v['day'];
            $list[$v['day']]['con'][] = $v['n'];
            $list[$v['day']]['all'] = array_sum($list[$v['day']]['con']);
            for ($i = 1; $i <= 7; $i++){
                if ($i == $v['tab']){
                    $list[$v['day']]['type'][$i][] = $v['n'];
                }else{
                    $list[$v['day']]['type'][$i][] = 0;
                }
            }
            for ($i = 1; $i <= 7; $i++){
                $list[$v['day']]['num'][$i] = array_sum($list[$v['day']]['type'][$i]);
            }
        }
        $retArr = [
            'day' => [],
            'n'   => [],
            'n1'  => [],
            'n2'  => [],
            'n3'  => [],
            'n4'  => [],
            'n5'  => [],
            'n6'  => [],
            'n7'  => []
        ];
        foreach ($day as $v) {
            if (array_key_exists($v, $list)) {
                $retArr['day'][] = $v;
                for ($i = 1; $i <= 7; $i++){
                    $retArr['n' . $i][] = $list[$v]['num'][$i];
                }
            } else {
                $retArr['day'][] = $v;
                for ($i = 1; $i <= 7; $i++){
                    $retArr['n' . $i][] = 0;
                }
            }
            if (isset($list[$v])){
                $retArr['n'][] = $list[$v]['all'];
            }else{
                $retArr['n'][] = 0;
            }
        }
        return json_encode($retArr);
    }


    private function getData2($time2 = ''){
        $user = session('user.name');
        $userid = session('user.id');
        $admin = config('admin.user_auth_admin');
        $db = Db::name('record');
        if ($user != $admin){
            $db = $db->where('uid', $userid);
        }
        if ($time2){
            list($start, $end) = explode('~', $time2);
            $start = strtotime($start);
            $end = strtotime($end);
            if ($start == $end){
                $end = $end + 24 * 3600;
            }
            $db = $db->where('addtime', 'between time', [$start, $end]);
        }
        $data = $db
            ->field("uid,tab,count(*) as n")
            ->group('uid,tab')
            ->select();
        $list = [];
        foreach ($data as $v){
            $list[$v['uid']]['uid'] = $v['uid'];
            $list[$v['uid']]['num'][$v['tab']] = $v['n'];
        }
        $user = Db::name('admin_user')
            ->field('id,name')
            ->select();
        $retArr = [
            'uid' => [],
            'name' => [],
            'num'   => [],
            'n1'  => [],
            'n2'  => [],
            'n3'  => [],
            'n4'  => [],
            'n5'  => [],
            'n6'  => [],
            'n7'  => []
        ];

        foreach ($user as $v){
            $num = 0;
            $retArr['uid'][]  = $v['id'];
            $retArr['name'][] = $v['name'];
            $retArr['uid'][]  = $v['id'];
            if (array_key_exists($v['id'], $list)) {
                for ($i = 1; $i <= 7; $i++){
                   if (array_key_exists($i, $list[$v['id']]['num'])) {
                       $retArr['n' . $i][] = $list[$v['id']]['num'][$i];
                       $num += $list[$v['id']]['num'][$i];
                    }else{
                       $retArr['n' . $i][] = 0;
                   }
                }
            }else{
                for ($i = 1; $i <= 7; $i++){
                    $retArr['n' . $i][] = 0;
                }

            }

            $retArr['num'][] = $num;
        }
        return json_encode($retArr);
    }
}