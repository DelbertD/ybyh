<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/20
 * Time: 16:33
 */

namespace app\admin\controller;


class Upload extends Base
{
    public function upImg($type = 'img'){

        $retArr = [
            'code' => 0,
            'msg'  => '上传成功',
            'data' => []
        ];
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('file');
        if($file){
            $path = config('imgs.' . $type);
            $info = $file->rule('uniqid')->move(ROOT_PATH . 'public' . DS . 'static' . DS . $path);
            if($info){
                $fileName = $path . '/' . $info->getFilename();
                $data['src'] = $fileName;
                $retArr['data'] = $data;
            }else{
                $retArr['code'] = 1;
                $retArr['msg']  = '上传失败';
            }
        }else{
            $retArr['code'] = 1;
            $retArr['msg']  = '上传失败';
        }
        echo json_encode($retArr);
    }

}