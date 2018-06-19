<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/11
 * Time: 11:37
 */

namespace app\admin\controller;

use think\Db;

class Personnel extends Base
{
    //招聘列表
    public function lists(){
        $db = Db::name('zw');
        return parent::_list($db, 10);
    }

    /*
     * 职位添加
     */
    public function add(){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            return $this->fetch('add');
        }else{
            $post = request()->post();
            $detail = $post['detail'];
            $post['endtime'] = strtotime($post['endtime']);
            unset($post['detail']);
            $post['addtime'] = time();
            Db::startTrans();
            try{
                Db::name('zw')->insert($post);
                $zw_id = Db::name('zw')->getLastInsID();
                Db::name('zw_dtl')->insert(['zw_id' => $zw_id,'detail' => $detail]);
                Db::commit();
                $this->writeRecord($zw_id,7);
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
            $zw = Db::name('zw')
                ->alias('n')
                ->join('zw_dtl nd', 'n.id = nd.zw_id','LEFT')
                ->field('n.*,nd.detail')
                ->where('n.id', $id)
                ->find();
            $this->assign([
                'zw' => $zw
            ]);
            return $this->fetch('edit');
        }else{
            $post = request()->post();
            $detail = $post['detail'];
            $post['endtime'] = is_numeric($post['endtime']) ? $post['endtime'] : strtotime($post['endtime']);
            unset($post['detail']);
            $post['addtime'] = time();
            Db::startTrans();
            try{
                Db::name('zw')->update($post);
                $zw_id = $post['id'];
                Db::name('zw_dtl')->where('zw_id', $zw_id)->update(['detail' => $detail]);
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
        $res = Db::name('zw')->delete($id);
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

}