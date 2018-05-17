<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/4
 * Time: 14:18
 */

namespace app\admin\controller;
use think\Db;

class Index extends Base
{
    //后台首页
    public function index(){
        $res = Db::query('select version()');
        $mysql_ver = $res[0]['version()'];
        $this->assign([
            'mysql_ver' => $mysql_ver,
            'title'     => '系统首页',
            'icon'      => '&#xe68e;',
            'app_ver'   => 'v1.0',
            'app_name'  => '一笔一画 Admin'
        ]);
        return $this->fetch();
    }

}