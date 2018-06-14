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
}