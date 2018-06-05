<?php
namespace app\index\controller;
use think\Db;


class Index extends Base
{
    //主页内容显示
    public function index()
    {
        //轮播图查询
        $banner = Db::name('ads')
            ->where('is_show', 1)
            ->order('sort asc')
            ->select([1,2,3,4,5]);

        //公司简介图片
        $about = Db::name('ads')
            ->where('is_show', 1)
            ->order('sort asc')
            ->select([6,7,8]);

        //服务项目展示
        $pro = Db::name('pro_cate')
            ->where('is_show', 1)
            ->orderRaw('sort = 0,sort')
            ->limit(6)
            ->select();

        //案例展示
        $case = Db::name('anli')
            ->where('is_show',1)
            ->field('id,name,title,alt,thumb')
            ->limit(6)
            ->select();

        //新闻查询
        $news = Db::name('news')
            ->field('id,alt,title,zy')
            ->where('is_show', 1)
            ->limit(6)
            ->select();

        $this->assign([
            'banner' => $banner,
            'about'  => $about,
            'news'   => $news,
            'pro'    => $pro,
            'case'   => $case
        ]);
        return $this->fetch();
    }

    //关于我们页面显示|公司简介
    public function about(){
        //企业资质图片展示
        $qyzz = Db::name('ads')
            ->where('is_show', 1)
            ->select([12,13,14,15,16,17,18]);
        $this->assign([
            'qyzz' => $qyzz
        ]);
        return $this->fetch();
    }


    //企业文化展示
    public function culture(){

    }

    //企业荣誉
    public function honor(){

    }

    //联系我们
    public function contact(){
        $gw2wm = Db::name('ads')->where('is_show', 1)->find(9);
        $wx2wm = Db::name('ads')->where('is_show', 1)->find(10);
        $gsxct = Db::name('ads')->where('is_show', 1)->find(11);
        $this->assign([
            'gw2wm' => $gw2wm,
            'wx2wm' => $wx2wm,
            'gsxct' => $gsxct
        ]);
        return $this->fetch();
    }
}
