<?php
/**
 *-----------------------------||
 * Created by PhpStorm
 * Company: 西安一笔一画有限公司
 * User: wyg
 * Email: 1984025877@qq.com
 * Date: 2018/6/6
 * Time: 12:16
 *-----------------------------||
 */

namespace app\index\controller;
use think\Db;

class Ask extends Base
{
    public function show($id = 0){
        if (!$id){
            $id = Db::name('ask')
                ->where('is_show', 1)
                ->limit(1)
                ->value('id');
        }
        $this->setNum($id);
        $hotData = Db::name('ask')
            ->order('num desc')
            ->where('is_show', 1)
            ->limit(6)
            ->select();
        $zxData = Db::name('ask')
            ->order('addtime desc')
            ->where('is_show', 1)
            ->limit(6)
            ->select();
        $db = Db::name('ask')->where('is_show', 1);
        $list =  Db::name('ask')
                ->order('sort,addtime desc')
                ->where('is_show', 1)
                ->select();
        $data = Db::name('ask')
            ->alias('a')
            ->join('ask_dtl ad', 'a.id = ad.ask_id')
            ->find($id);
        $this->assign([
            'curMenu'  => '知识问答',
            'zxData'   => $zxData,
            'hotData'  => $hotData,
            'data'     => $data,
            'list'     => $list
        ]);

        return $this->fetch();
    }

    public function setNum($id = 0){
        Db::name('ask')->where('id', $id)->setInc('num');
    }
}