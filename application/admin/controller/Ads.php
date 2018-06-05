<?php
/**
 * Created by lovey
 * User : wyg
 * Email: 1984025877@qq.com
 * Date : 2018/5/14
 * Time : 11:12
 * company : 西安一笔一画有限公司
 */

namespace app\admin\controller;


use think\Db;

class Ads extends Base
{
    //图片列表
    public function lists(){
        $db = Db::name('ads')->order('sort');
        return parent::_list($db, 5);
    }

    public function add(){
        if (request()->isPost()){
            $post = request()->post();
            unset($post['file']);
            $res = Db::name('ads')->insert($post);
            if ($res){
                $this->success('添加成功');
            }else{
                $this->error('添加失败');
            }
        }else{
            $ads_cate = Db::name('ads_cate')
                ->where('is_show', 1)
                ->order('sort')
                ->select();
            $this->assign('cate', $ads_cate);
            return $this->fetch();
        }
    }

    public function edit($id = 0){
        if (request()->isPost()){
            $post = request()->post();
            unset($post['file']);
            $res = Db::name('ads')->update($post);
            if ($res){
                $this->success('编辑成功');
            }else{
                $this->error('编辑失败');
            }
        }else{
            $ads_cate = Db::name('ads_cate')
                ->where('is_show', 1)
                ->order('sort')
                ->select();
            $ads = Db::name('ads')->find($id);
            $this->assign('cate', $ads_cate);
            $this->assign('ads', $ads);
            return $this->fetch();
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
        $info = Db::name('ads')->field('path')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['path'];
        if (is_file($file)){
            unlink($file);
        }

        $res = Db::name('ads')->delete($id);
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

}