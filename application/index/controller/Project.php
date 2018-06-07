<?php
/**
 * Created by PhpStorm.
 * User: zhaoby
 * Date: 2018/4/28
 * Time: 14:47
 *
 */

namespace app\index\controller;


use think\Db;

class Project extends Base
{
    /**
     *工程案例显示
     */
    public function lists($id = 0)
    {
        //工程案例分类获取
        $caCate = Db::name('anli_cate')
            ->where('is_show',1)
            ->order('sort asc')
            ->field('id,name')
            ->limit(8)
            ->select();

        //工程案例分页获取
        $db = Db::name('anli')
            ->where('is_show',1);
        $db = $id ? $db->where('pid',$id) : $db;
        $case = parent::_list($db,8);

        $this->assign($case);
        $this->assign([
            'caCate' => $caCate
        ]);
        return $this->fetch();
    }

    /**
     *工程案例详情页
     */
    public function show($id = 0)
    {
        $case = Db::name('anli')
            ->alias('a')
            ->join('anli_dtl adtl', 'a.id = adtl.anli_id')
            ->where('a.id', $id)
            ->find();
        $pname = Db::name('anli_cate')->where('is_show', 1)->where('id', $case['pid'])->value('name');
        $curMenu = "<a class='breadcrumb-a' href='/index/project/lists/id/". $case['pid'] . "'>" . $pname . "</a>>>" . $case['name'];
        $this->assign([
            'curMenu' => $curMenu,
            'case'     =>  $case
        ]);
        return $this->fetch();

    }
}