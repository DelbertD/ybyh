<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/2
 * Time: 10:49
 */

namespace app\admin\controller;
use think\Db;

class Pro extends Base
{
    public function lists(){
        $db = Db::name('pro');
        return parent::_list($db, 10);
    }
    /*
     * 服务添加
     */
    public function add(){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            $cate = Db::name('pro_cate')
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
                Db::name('pro')->insert($post);
                $pro_id = Db::name('pro')->getLastInsID();
                Db::name('pro_dtl')->insert(['pro_id' => $pro_id,'detail' => $detail]);
                Db::commit();
                $this->writeRecord($pro_id,3);
                $this->success('添加成功');
            }catch (Exception $e){
                Db::rollback();
                $this->error('添加失败');
            }
        }
    }



    public function edit($id = 0){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            $cate = Db::name('pro_cate')
                ->where('is_show', 1)
                ->order('sort,id desc')
                ->select();

            $pro = Db::name('pro')
                ->alias('p')
                ->join('pro_dtl pd', 'p.id = pd.pro_id','LEFT')
                ->field('p.*,pd.detail')
                ->where('p.id', $id)
                ->find();
            $this->assign([
                'cate' => $cate,
                'pro'  => $pro
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
                Db::name('pro')->update($post);
                $pro_id = $post['id'];
                Db::name('pro_dtl')->where('pro_id', $pro_id)->update(['detail' => $detail]);
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
        $info = Db::name('pro')->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (is_file($file)){
            unlink($file);
        }
        //删除新闻
        $res = Db::name('pro')->delete($id);
        //删除新闻内容
        Db::name('pro_dtl')->where('pro_id', $id)->delete();
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

    //分类列表

    public function cateList(){
        $db = Db::name('pro_cate')->orderRaw('sort = 0,sort');
        return parent::_list($db, 10);
    }

    /*
     * 添加分类
     */
    public function addCate(){
        if (request()->isPost()){
            $post = request()->post();
            unset($post['file']);
            $res = Db::name('pro_cate')->insert($post);
            if ($res){
                $this->success('添加成功');
            }else{
                $this->error('添加失败');
            }
        }else{
            return $this->fetch();
        }
    }

    public function editCate($id = 0){
        if (request()->isPost()){
            $post = request()->post();
            unset($post['file']);
            $res = Db::name('pro_cate')->update($post);
            if ($res){
                $this->success('编辑成功');
            }else{
                $this->error('编辑失败');
            }
        }else{
            $pro_cate = Db::name('pro_cate')->find($id);
            $this->assign([
                'pro_cate' => $pro_cate
            ]);
            return $this->fetch();
        }
    }

    /*
     *
     *删除
     */

    public function delCate($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        //删除图片
        $info = Db::name('pro_cate')->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (is_file($file)){
            unlink($file);
        }
        //删除新闻
        $res = Db::name('pro_cate')->delete($id);
        //删除新闻内容
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

}