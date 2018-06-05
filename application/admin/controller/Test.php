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

class Test
{
    public function test(){
        $fileName = 'static/upload/news/thumb/gs1.jpg';
        dump(thumb($fileName));
    }
}