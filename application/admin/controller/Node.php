<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/7
 * Time: 11:21
 */

namespace app\admin\controller;
use service\Tool;
use think\Db;

class Node extends Base
{

    /*
    * 节点列表
    */
    public function lists(){
        $list = Db::name('node') ->orderRaw('sort = 0,sort')->select();
        $list = Tool::arr2table($list);
        $this->assign([
            'list' => $list
        ]);
        return $this->fetch();
    }


    /*
     * 节点添加
     */
    public function add(){
        if (request()->isPost()){
            $post = request()->param();
            $post['icon'] = !empty($post['icon']) ? '&' . $post['icon'] : '';
            $level = $post['level'];
            $pid = $post['pid'];
            $p =  Db::name('node')->find($pid);
            if ($level - $p['level'] != 1){
                $this->error('级别错误');
            }
            $res = Db::name('node')->insert($post);
            if ($res){
                $this->success('添加成功');
            }else{
                $this->error('添加失败');
            }
        }else{
            return $this->fetch();
        }
    }

    /*
    * 编辑节点
    */
    public function edit($id = 0){
        if (request()->isPost()){
            $post = request()->param();
            $post['icon'] = !empty($post['icon']) ? '&' . $post['icon'] : '';
            $level = $post['level'];
            $pid = $post['pid'];
            $p =  Db::name('node')->find($pid);
            if ($level - $p['level'] != 1){
                $this->error('级别错误');
            }
            $res = Db::name('node')->update($post);
            if ($res){
                $this->success('编辑成功');
            }else{
                $this->error('编辑失败');
            }
        }else{
            $node = Db::name('node')->find($id);
            $node['icon'] = substr($node['icon'], 1);
            $this->assign([
                'node' => $node
            ]);
            return $this->fetch();
        }
    }

    //根据节点获取父节点
    public function getJsonTree($level = 0, $pid = 0){
        $ret = ['suc' => 1,'data' =>null];
        $db = Db::name('node')->orderRaw('sort = 0,sort');
        $db = $level ? $db->where('level', '<', $level) : $db;
        $data = $db->where('is_show', 1)->select();
        if ($data){
            $tree = Tool::arr2table($data);
            $str = '';
            foreach ($tree as $v){
                $str .= '<option value=" ' . $v['id'] . ' " ';
                if ($pid == $v['id']){
                    $str .= 'selected';
                }
                $str .= '>'. $v['spl'] . $v['title'] .'</option>';
            }
            $ret['suc']  = 0;
            $ret['data'] = $str;
            return $ret;
        }else{
            $ret['suc']  = 0;
            $ret['data'] = '<option value="0" selected>作为顶级节点</option>';
            return $ret;
        }
    }


    //更改节点排序值
    public function sort($id = 0, $val = 0){
        $ret = [
            'suc' => 0
        ];
        $res = Db::name('node')->update([
            'id'   => $id,
            'sort' => $val
        ]);
        if (!$res){
            $ret['suc'] = 1;
        }
        return $ret;
    }


    /*
     *
     *删除
     */

    public function del($id = 0){
        $ret = ['suc' => 1, 'msg' => '删除失败'];
        if (empty($id)){
            return $ret;
        }
        $child = Db::name('node')->where('pid', $id)->select();
        if (!empty($child)){
            $ret['msg'] = '该节点含有子节点无法删除！';
        }else{
            $res = Db::name('node')->delete($id);
            if ($res){
                $ret['suc'] = 0;
                $ret['msg'] = '删除成功';
            }
        }
        return $ret;
    }
}