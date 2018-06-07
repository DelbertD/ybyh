<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/5
 * Time: 15:40
 *-----------------------------||
 */

namespace app\admin\controller;
use think\Db;

class Ask extends Base
{
    public function lists(){
        $db = Db::name('ask');
        return parent::_list($db, 10);
    }

    public function add(){
        if (request()->isPost()){
            $post = request()->post();
            $detail = $post['detail'];
            unset($post['detail']);
            unset($post['file']);
            $post['addtime'] = time();
            Db::startTrans();
            try{
                Db::name('ask')->insert($post);
                $ask_id = Db::name('ask')->getLastInsID();
                Db::name('ask_dtl')->insert(['ask_id' => $ask_id,'detail' => $detail]);
                Db::commit();
                $this->success('添加成功');
            }catch (Exception $e){
                Db::rollback();
                $this->error('添加失败');
            }
        }else{
            return $this->fetch('add');
        }
    }

    public function edit($id = 0){
        if (request()->isPost()){
            $post = request()->post();
            $detail = $post['detail'];
            unset($post['detail']);
            unset($post['file']);
            $post['addtime'] = time();
            Db::startTrans();
            try{
                Db::name('ask')->update($post);
                $ask_id = Db::name('ask')->getLastInsID();
                Db::name('ask_dtl')->where('ask_id', $ask_id)->update(['detail' => $detail]);
                Db::commit();
                $this->success('编辑成功');
            }catch (Exception $e){
                Db::rollback();
                $this->error('编辑失败');
            }
        }else{
            $ask = Db::name('ask')
                ->alias('n')
                ->join('ask_dtl nd', 'n.id = nd.ask_id','LEFT')
                ->field('n.*,nd.detail')
                ->where('n.id', $id)
                ->find();
            $this->assign('ask', $ask);
            return $this->fetch('edit');
        }
    }

    public function del($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        //删除图片
        $info = Db::name('ask')->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (is_file($file)){
            unlink($file);
        }
        $res = Db::name('ask')->delete($id);
        Db::name('ask_dtl')->where('ask_id', $id)->delete();
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }
}