<?php
/**
 * Created by lovey
 * User : wyg
 * Email: 1984025877@qq.com
 * Date : 2018/5/17
 * Time : 17:37
 * company : 西安一笔一画有限公司
 */

namespace app\admin\controller;


use think\Db;

class Menu extends Base
{
    public function lists(){
        $db = Db::name('pmenu');
        return parent::_list($db, 10);
    }
}