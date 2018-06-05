<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/2
 * Time: 10:48
 */

namespace app\admin\controller;
use think\Db;

class News extends Base
{

    public function lists(){
        $db = Db::name('news');
        return parent::_list($db, 10);
    }
    /*
     * 新闻添加
     */
    public function add(){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            $cate = Db::name('news_cate')
                ->where('is_show', 1)
                ->order('sort,id desc')
                ->select();
            $this->assign([
                'cate' => $cate
            ]);
            return $this->fetch('add');
        }else{
            $post = request()->post();
            $detail = $post['detail'];
            unset($post['detail']);
            unset($post['file']);
            $post['addtime'] = time();

            Db::startTrans();
            try{
                Db::name('news')->insert($post);
                $news_id = Db::name('news')->getLastInsID();
                Db::name('news_dtl')->insert(['news_id' => $news_id,'detail' => $detail]);
                Db::commit();
                $this->success('添加成功');
            }catch (Exception $e){
                Db::rollback();
                $this->error('添加失败');
            }
        }
    }

    /*
     * 编辑新闻
     *
     */

    public function edit($id = 0){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            $cate = Db::name('news_cate')
                ->where('is_show', 1)
                ->order('sort,id desc')
                ->select();

            $news = Db::name('news')
                ->alias('n')
                ->join('news_dtl nd', 'n.id = nd.news_id','LEFT')
                ->field('n.*,nd.detail')
                ->where('n.id', $id)
                ->find();
            $this->assign([
                'cate' => $cate,
                'news' => $news
            ]);
            return $this->fetch('edit');
        }else{
            $post = request()->post();
            $detail = $post['detail'];
            unset($post['detail']);
            unset($post['file']);
            $post['addtime'] = time();
            Db::startTrans();
            try{
                Db::name('news')->update($post);
                $news_id = $post['id'];
                Db::name('news_dtl')->where('news_id', $news_id)->update(['detail' => $detail]);
                Db::commit();
                $this->success('编辑成功');
            }catch (Exception $e){
                Db::rollback();
                $this->error('编辑失败');
            }
        }
    }


    /*
     *
     *删除
     */

    public function del($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        //删除图片
        $info = Db::name('news')->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (is_file($file)){
            unlink($file);
        }
        //删除新闻
        $res = Db::name('news')->delete($id);
        //删除新闻内容
        Db::name('news_dtl')->where('news_id', $id)->delete();
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }


}