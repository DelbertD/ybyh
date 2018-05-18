<?php
/**
 * Created by lovey
 * User : wyg
 * Email: 1984025877@qq.com
 * Date : 2018/5/17
 * Time : 17:37
 * company : 西安一笔一画有限公司
 */

namespace app\admin\controller;


use think\Db;

class Menu extends Base
{
    public function lists(){
        $db = Db::name('pmenu')
            ->orderRaw('sort = 0,sort');
        return parent::_list($db, 10);
    }

    public function edit($id = 0){
        if (request()->post()){
            $post = request()->post();
            $res = Db::name('pmenu')->update($post);
            if ($res){
                $this->success('编辑成功');
            }else{
                $this->error('编辑失败');
            }
        }else{
            $menu = Db::name('pmenu')->find($id);
            $this->assign([
                'menu' => $menu
            ]);
            return $this->fetch();
        }
    }


    //更改节点排序值
    public function sort($id = 0, $val = 0){
        $ret = [
            'suc' => 0
        ];
        $res = Db::name('pmenu')->update([
            'id'   => $id,
            'sort' => $val
        ]);
        if (!$res){
            $ret['suc'] = 1;
        }
        return $ret;
    }
}