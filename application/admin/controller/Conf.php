<?php
/**
 * Created by lovey
 * User : wyg
 * Email: 1984025877@qq.com
 * Date : 2018/5/17
 * Time : 16:43
 * company : 西安一笔一画有限公司
 */

namespace app\admin\controller;


use think\Db;

class Conf extends Base
{
    public function contact($id = 1){
        if (request()->isPost()){
            $post = request()->post();
            $res = Db::name('contact')->update($post);
            if ($res){
                $this->success('修改成功');
            }else{
                $this->error('修改失败');
            }
        }else{
            $concat = Db::name('contact')->find($id);
            $this->assign([
                'contact' => $concat
            ]);
            return $this->fetch();
        }
    }
}