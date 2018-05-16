<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/16
 * Time: 17:52
 */

namespace app\index\controller;


use think\Db;

class News extends Base
{
    //新闻列表
    public function lists($id = 1){

        $this->assign([
            'id' => $id
        ]);
        $db = Db::name('news')->where('pid', $id);
        $result = parent::_list($db,5);
        $this->assign($result);
        return $this->fetch();
    }


    //新闻展示
    public function show($id = 0){
        $news = Db::name('news')
            ->alias('n')
            ->join('news_dtl nd', 'n.id = news_id')
            ->where('is_show', 1)
            ->find($id);

        //上一篇
        $pre = $this->getPre($id);

        //下一篇
        $next = $this->getNext($id);

        /*
         * 边导航栏新闻
         * 公司新闻
         * 行业新闻
         */
        $hy = Db::name('news')
            ->where('is_show', 1)
            ->where('pid', 1)
            ->field('id,title,addtime,alt')
            ->order('addtime desc')
            ->limit(5)
            ->select();

        $gs = Db::name('news')
            ->where('is_show', 1)
            ->where('pid', 2)
            ->field('id,title,addtime,alt')
            ->order('addtime desc')
            ->limit(5)
            ->select();

        $pname = Db::name('news_cate')->where('is_show', 1)->where('id', $news['pid'])->value('name');
        $curMenu = "<a class='breadcrumb-a' href='/index/news/lists/id/'". $news['pid'] . "html>" . $pname . "</a>>>" . '新闻详情';
        $this->assign([
            'curMenu' => $curMenu,
            'news'    => $news,
            'pre'     => $pre,
            'next'    => $next,
            'hy'      => $hy,
            'gs'      => $gs
        ]);
        return $this->fetch();
    }

    //上一篇
    public function getPre($id = 0){
        $news = Db::name('news')
            ->where('is_show', 1)
            ->where('id', '<', $id)
            ->field('id,title,alt')
            ->find();
        return $news;
    }

    //下一篇
    public function getNext($id = 0){
        $news = Db::name('news')
            ->where('is_show', 1)
            ->where('id', '>', $id)
            ->field('id,title,alt')
            ->find();
        return $news;
    }
}