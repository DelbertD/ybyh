<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/6
 * Time: 12:16
 *-----------------------------||
 */

namespace app\index\controller;
use think\Db;

class Ask extends Base
{
    public function show($id = 0){
        $this->setNum($id);
    }

    public function setNum($id = 0){
        Db::name('ask')->where('id', $id)->setInc('num');
    }
}