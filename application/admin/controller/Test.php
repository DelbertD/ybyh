<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/5
 * Time: 9:22
 *----------------------------||
 */

namespace app\admin\controller;


use think\Controller;
use think\Db;

class Test
{
    public function test($id = 0){
        return 123;
        $path = Db::name('news')->where('id', $id)->value('thumb');
        $fileName = 'static/' . $path;
        dump(thumb($fileName, '_small' , 300, 200)) ;
    }
}