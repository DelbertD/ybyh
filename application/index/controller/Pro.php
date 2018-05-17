<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/16
 * Time: 17:30
 */

namespace app\index\controller;

use think\Db;

class Pro extends Base
{
    //产品分类页
    public function lists($id = 0){
        //获取服务类别
        $cate = db('pro_cate')
            ->where('is_show',1)
            ->orderRaw('sort = 0,sort')
            ->limit(6)
            ->select();
        //服务项目展示
        $db = Db::name('pro')->where('is_show', 1);
        $db = $id ? $db->where('pid', $id) : $db;
        $pro = parent::_list($db,'8');
        $this->assign($pro);
        $this->assign('cate',$cate);
        return $this->fetch();
    }

    //产品展示页
    public function show($id = 0){
        $pro = Db::name('pro')
            ->alias('p')
            ->join('pro_dtl pd', 'p.id = pd.pro_id')
            ->where('p.id', $id)
            ->find();
        $pname = Db::name('pro_cate')->where('is_show', 1)->where('id', $pro['pid'])->value('name');
        $curMenu = "<a class='breadcrumb-a' href='/index/pro/lists/id/'". $pro['pid'] . "html>" . $pname . "</a>>>" . $pro['name'];
        $this->assign([
            'curMenu' => $curMenu,
            'pro'     =>  $pro
        ]);
        return $this->fetch();
    }
}