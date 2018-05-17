<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/26
 * Time: 11:24
 */

namespace app\admin\controller;

use think\Db;

class Exhib extends Base
{
    //展厅添加
    public function add(){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            $cate = Db::name('exhib_cate')->where('is_show', 1)->select();
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
                Db::name('exhib')->insert($post);
                $e_id = Db::name('news')->getLastInsID();
                Db::name('exhib_dtl')->insert(['e_id' => $e_id,'detail' => $detail]);
                Db::commit();
                $this->success('添加成功');
            }catch (Exception $e){
                Db::rollback();
                $this->error('添加失败');
            }
        }
    }

}