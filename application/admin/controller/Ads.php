<?php
/**
 * Created by lovey
 * User : wyg
 * Email: 1984025877@qq.com
 * Date : 2018/5/14
 * Time : 11:12
 * company : 西安一笔一画有限公司
 */

namespace app\admin\controller;


use think\Db;

class Ads extends Base
{
    //图片列表
    public function lists(){
        $db = Db::name('ads')->order('sort');
        return parent::_list($db, 5);
    }

    public function add(){

    }

    public function edit($id = 0){

    }

    public function del($id = 0){

    }
}