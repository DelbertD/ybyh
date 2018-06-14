<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/9
 * Time: 14:18
 */

namespace app\admin\controller;
use think\Controller;
use think\Db;

class Pub extends Controller
{
    //登录方法
    public function login(){
        if (request()->isPost()){
            $ret = [
               'suc' => 1,
               'msg' => '登录成功，正在跳转首页...'
            ];
            $post = input('param.');
            $user = $post['user'];
            $pwd  = $post['pwd'];
            $user = Db::name('admin_user')->where('name', $user)->find();
            if (empty($user)){
                $ret['msg'] = '用户不存在';
                return json_encode($ret);
            }
            $id   = $user['id'];
            $salt = $user['salt'];
            $pass = $user['pass'];
            $pwd  = md5(md5($pwd . $salt));
            if ($pwd != $pass){
                $ret['msg'] = '用户信息错误';
                return json_encode($ret);
            }
            if ($user['is_lock'] == 2){
                $ret['msg'] = '用户被锁定';
                return json_encode($ret);
            }
            //更新登录信息
            $ip = $_SERVER['REMOTE_ADDR'];
            $time = time();
            $num = $user['num'];
            $num++;
            Db::name('admin_user')->where('id', $id)->update(['last_login_ip' => $ip, 'last_login_time' => $time, 'num' => $num]);
            session('user', $user);
            session(config('admin.user_auth_key'), $id);
            $ret['suc'] = 0;
            return json_encode($ret);
        }else{
            return view();
        }
    }

    //退出
    public function logout(){
        session(config('admin.user_auth_key'), null);
        session('user', null);
        $this->redirect(url('admin/pub/login'));
    }

    public function isExist($name = ''){
        $info = Db::name('admin_user')->where('name', $name)->find();
        if (empty($info)){
            return false;
        }
        return true;
    }
}