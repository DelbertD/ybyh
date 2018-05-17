<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/16
 * Time: 13:33
 */

namespace app\index\controller;


use think\Controller;
use think\Db;
use think\Request;

class Base extends Controller
{
    public function __construct(Request $request = null)
    {
        parent::__construct($request);

        /*
         * 页面公共部分
         *
         */
        $model = 'index';
        $controller = strtolower($this->request->controller());
        $action = strtolower($this->request->action());
        $keyword = $model . '/' . $controller . '/' . $action;
        $nav = Db::name('pmenu')
            ->where('url', '=', $keyword)
            ->where('is_show', 1)
            ->field('name,title,alt,keys,keywords,desc')
            ->find();
        if (!empty($nav)){
            $this->assign([
                'curMenu'  => $nav['name'],
                'keys'     => $nav['keys'],
                'desc'     => $nav['desc'],
                'keywords' => $nav['keywords'],
            ]);
        }else{
            $id = request()->param('id');
            switch ($controller){
                case 'pro':
                    $table = 'pro';
                    break;
                case 'project':
                    $table = 'anli';
                    break;
                case 'news':
                    $table = 'news';
                case 'personnel':
                    $table = 'zw';
                    break;
                default:
                    break;
            }
            if ($id){
                $info = Db::name($table)
                    ->where('is_show', 1)
                    ->field('keys,keywords,desc')
                    ->find($id);
                $this->assign([
                    'keys'     => !empty($info['keys']) ? $info['keys'] : '西安一笔一画科技有限公司官网',
                    'desc'     => $info['desc'],
                    'keywords' => $info['keywords'],
                ]);
            }
        }
        //导航栏
        $pmenu = Db::name('pmenu')
            ->where('is_show', 1)
            ->order('sort asc')
            ->select();

        //底部联系我们展示
        $products1 = Db::name('pro')->where('is_show', 1)->limit(6)->select();
        $products2 = Db::name('pro')->where('is_show', 1)->limit(6,6)->select();
        $contact = Db::name('contact')->find(1);
        $this->assign([
            'pmenu'     => $pmenu,
            'contact'   => $contact,
            'products1'  => $products1,
            'products2'  => $products2
        ]);
    }


    protected function _list($dbQuery = null, $row_page = 10)
    {
        $db = is_null($dbQuery) ? Db::name($this->table) : (is_string($dbQuery) ? Db::name($dbQuery) : $dbQuery);
        // 列表数据查询与显示
        $result = [];
        $page = $db->paginate($row_page, false, ['query' => $this->request->get()]);
        $result['list'] = $page->all();
        $result['page'] = $page->render();
        return $result;
    }

}