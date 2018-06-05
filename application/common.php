<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

use think\Db;
use think\Image;

if (!function_exists('genSubMenu')){
    function genSubMenu($m_id = 0){
        $menu = Db::name('menu')
            ->where('is_show', 1)
            ->where('m_id', $m_id)
            ->order('sort asc')
            ->select();
        return $menu ? $menu : [];
    }
}

if (!function_exists('getVal')){
    function getVal($str){
        if (!empty($str)){
            list($dbName, $field, $id) = explode('.',  $str);
            return Db::name($dbName)->where('id', $id)->value($field);
        }else{
            return '';
        }
    }
}

if (!function_exists('thumb')){
    function thumb($fileName, $mark = '_small', $width = '400', $height = '300', $ext = 'jpg'){
        if (!file_exists($fileName)){
            return false;
        }
        $baseName = explode('.', $fileName)[0];
        $baseName .= '.' . $mark . $ext;
        $image = Image::open($fileName);
        $image->thumb($width, $height)->save($baseName);
        $image->__destruct();
        return true;
    }

}

if (!function_exists('addWater')){
    function addWater($fileName, $mark = '_water', $ext = 'jpg', $text = 'ThinkPHP', $font = '', $size = '14', $color = '#ffffff'){
        if (!file_exists($fileName)){
            return false;
        }
        $baseName = explode('.', $fileName)[0];
        $baseName .= '.' . $mark . $ext;
        $image = Image::open($fileName);
        $image->text($text, $font, $size, $color)->save($baseName);
        $image->__destruct();
        return true;
    }
}

if (!function_exists('addLogo')){
    function addLogo($fileName){

    }
}

