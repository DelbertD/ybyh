<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/7
 * Time: 15:27
 *-----------------------------||
 */

namespace app\admin\controller;
use think\Db;

class Comment extends Base
{
    protected $table = 'comment';

    public function lists(){
        $db = Db::name($this->table);
        $rs = parent::_list($db,'10');
        $this->assign($rs);
        return $this->fetch();
    }

    public function add(){
        if (request()->isPost()){
            $post = request()->post();
            $post['addtime'] = time();
            unset($post['file']);
            $res = Db::name($this->table)->insert($post);
            if ($res){
                $this->success('添加成功！');
            }else{
                $this->error('添加失败！');
            }
        }else{
            return $this->fetch();
        }
    }

    public function edit($id = 0){
        if (request()->isPost()){
            $post = request()->post();
            $post['addtime'] = time();
            unset($post['file']);
            $res = Db::name($this->table)->update($post);
            if ($res){
                $this->success('编辑成功！');
            }else{
                $this->error('编辑失败！');
            }
        }else{
            $comment = Db::name($this->table)->find($id);
            $this->assign('comment', $comment);
            return $this->fetch();
        }
    }

    public function del($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        //删除图片
        $info = Db::name($this->table)->field('thumb')->find($id);
        $file = ROOT_PATH . DS . 'public' . DS . 'static' . DS . $info['thumb'];
        if (is_file($file)){
            unlink($file);
        }
        $res = Db::name($this->table)->delete($id);
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }

    public function setNum($id = 0){
        Db::name($this->table)->where('id', $id)->setInc('num');
    }
}