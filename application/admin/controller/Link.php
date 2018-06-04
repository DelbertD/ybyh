<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/4
 * Time: 11:58
 *----------------------------||
 */

namespace app\admin\controller;
use think\Db;

class Link extends Base
{
    public function lists(){
        $db = Db::name('link');
        $link = parent::_list($db,'10');
        $this->assign($link);
        return $this->fetch();
    }

    public function add(){
        if (request()->isPost()){
            $post = request()->post();
            $res = Db::name('link')->insert($post);
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
            $res = Db::name('link')->update($post);
            if ($res){
                $this->success('编辑成功！');
            }else{
                $this->error('编辑失败！');
            }
        }else{
            $link = Db::name('link')->find($id);
            $this->assign('link', $link);
            return $this->fetch();
        }
    }

    public function del($id = 0){
        $ret = ['suc' => 1];
        if (empty($id)){
            return $ret;
        }
        //删除新闻
        $res = Db::name('link')->delete($id);
        if ($res){
            $ret['suc'] = 0;
        }
        return $ret;
    }
}