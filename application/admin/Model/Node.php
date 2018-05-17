<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/7
 * Time: 14:21
 */

namespace app\admin\Model;

use think\Model;

class Node extends Model
{
    protected $table = 'node';

    protected $pk = 'id';

    //获取指定节点的详细信息
    public static function getSelf($id){
        return self::find($id);
    }


    //判断是否有子节点
    public static function hasChild($id){
        return self::where('pid', $id)->count() > 0 ? true : false;
    }

    //获取一级父节点
    public static function getPar($id){
        $node = self::getSelf($id);
        if($node['pid'] == 0) return null;
        return self::getSelf($node['pid']);
    }

    //获取一级子节点的信息，如果没有将返回null
    public static function getChild($id, $status=false, $level=99){
        if ($status){
            return self::where('pid', $id)
                ->where('status', 1)
                ->where('level' ,'<', $level)
                ->order('sort')
                ->select();
        }else {
            return self::where('pid', $id)
                ->where('level' ,'<', $level)
                ->order('sort')
                ->select();
        }
    }

    //获取节点数
    public static function getNodeTree($id = 0, &$ret, $level = 99){
        //判断是否有一级子节点,没有返回false,有就获取子节点
        if(!self::hasChild($id,$level)) return false;
        $childs = self::getChild($id,false, $level);
        //遍历二维数组，用递归判断子栏目是否还有子节点
        foreach ($childs as $val){
            if(self::hasChild($val['id'],$level)){
                self::getNodeTree($val['id'],$ret['sub'],$level);
            }
        }
    }
}