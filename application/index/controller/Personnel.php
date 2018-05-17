<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/16
 * Time: 17:46
 */

namespace app\index\controller;
use think\Db;

class Personnel extends Base
{

    //人才理念
    public function lists(){

        $zw = Db::name('zw')
            ->where('is_show', 1)
            ->where('endtime', '>', time())
            ->limit(10)
            ->select();
        $this->assign([
            'zw' => $zw
        ]);
        return $this->fetch();
    }


    //招聘信息
    public function show($id = 0){
        $zw = Db::name('zw')
            ->join('zw_dtl', 'zw.id = zw_dtl.zw_id')
            ->where('zw.id', $id)
            ->find();
        $curMenu = "招聘详情";
        $this->assign([
            'curMenu' => $curMenu,
            'zw'     =>  $zw
        ]);
        return $this->fetch();
    }
}