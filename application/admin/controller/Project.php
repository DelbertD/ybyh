<?php
/**
 * Created by PhpStorm.
 * User: zhaoby
 * Date: 2018/4/28
 * Time: 10:32
 */

namespace app\admin\controller;


use think\Db;

class Project extends Base
{
    public function lists(){
        $db = Db::name('anli');
        return parent::_list($db, 10);
    }

    /**
     * 添加工程案例
     */
    public function add()
    {
        header("Content-type: text/html; charset=utf-8");
        if(request()->isGet())
        {
            //获取工程案例类别
            $anliCate = db('anli_cate')
                ->where('is_show',1)
                ->order('sort asc')
                ->field('id,name')
                ->select();
            $this->assign([
                'cate' => $anliCate
            ]);
            return $this->fetch();
        }elseif(request()->isPost()){
            $data = input('post.');
            $detail = $data['detail'];
            $data['addtime'] = time();

            unset($data['detail']);
            unset($data['file']);

            //事务数据库操作添加数据
            Db::startTrans();
            try {
                Db::name('anli')->insert($data);
                $anli_id = Db::name('anli')->getLastInsID();
                Db::name('anli_dtl')
                    ->insert([
                        'anli_id'=>$anli_id,
                        'detail'=>$detail
                    ]);
                Db::commit();
                $this->success('添加成功！');
            } catch (Exception $e) {
                Db::rollback();
                $this->error('添加失败！');
            }
        }
    }

    public function edit($id = 0){
        //很重要，否则乱码
        header("Content-type: text/html; charset=utf-8");
        if (request()->isGet()){
            $cate = Db::name('anli_cate')
                ->where('is_show', 1)
                ->order('sort,id desc')
                ->select();

            $anli = Db::name('anli')
                ->alias('n')
                ->join('anli_dtl nd', 'n.id = nd.anli_id','LEFT')
                ->field('n.*,nd.detail')
                ->where('n.id', $id)
                ->find();
            $this->assign([
                'cate' => $cate,
                'anli' => $anli
            ]);
            return $this->fetch('edit');
        }else {
            $post = request()->post();
            $detail = $post['detail'];
            unset($post['detail']);
            unset($post['file']);
            $post['addtime'] = time();
            Db::startTrans();
            try {
                Db::name('anli')->update($post);
                $anli_id = $post['id'];
                Db::name('anli_dtl')->where('anli_id', $anli_id)->update(['detail' => $detail]);
                Db::commit();
                $this->success('编辑成功');
            } catch (Exception $e) {
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
        $info = Db::name('anli')->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (file_exists($file)){
            unlink($file);
        }
        //删除新闻
        $res = Db::name('anli')->delete($id);
        //删除新闻内容
        Db::name('anli_dtl')->where('anli_id', $id)->delete();
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }


    //分类列表

    public function cateList(){
        $db = Db::name('anli_cate')
            ->orderRaw('sort = 0,sort');
        return parent::_list($db, 10);
    }

    /*
     * 添加分类
     */
    public function addCate(){
        if (request()->isPost()){
            $post = request()->post();
            $res = Db::name('anli_cate')->insert($post);
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
            $res = Db::name('anli_cate')->update($post);
            if ($res){
                $this->success('编辑成功');
            }else{
                $this->error('编辑失败');
            }
        }else{
            $anli_cate = Db::name('anli_cate')->find($id);
            $this->assign([
                'anli_cate' => $anli_cate
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
        $res = Db::name('anli_cate')->delete($id);
        //删除新闻内容
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }
}