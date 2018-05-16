<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/26
 * Time: 11:24
 */

namespace app\index\controller;
use think\Db;

class Exhib extends Base
{
    //展厅
    public function lists($id = 0){

        //展厅类别展示
        $exCate = db('exhib_cate')
            ->where(['is_show'=>1])->order('sort asc')->select();
        //服务项目展示
        $db = Db::name('exhib')->where('is_show', 1);
        $db = $id ? $db->where('pid', $id) : $db;
        $exhib = parent::_list($db,'8');
        $this->assign($exhib);
        $this->assign('exCate',$exCate);
        return $this->fetch();
    }

    //展厅展示页
    public function show($id = 0){
        $exhib = Db::name('exhib')
            ->alias('e')
            ->join('exhib_dtl edtl', 'e.id = edtl.e_id')
            ->where('e.id', $id)
            ->find();
        $pname = Db::name('exhib_cate')->where('is_show', 1)->where('id', $exhib['pid'])->value('name');
        $curMenu = "<a class='breadcrumb-a' href='/index/exhib/lists/id/". $exhib['pid'] . "'>" . $pname . "</a>>>" . $exhib['name'];
        $this->assign([
            'curMenu' => $curMenu,
            'exhib'     =>  $exhib
        ]);
        return $this->fetch();
    }

}