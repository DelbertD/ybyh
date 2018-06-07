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
                    break;
                case 'personnel':
                    $table = 'zw';
                    break;
                case 'ask':
                    $table = 'ask';
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
                    'keys'     => !empty($info['keys']) ? $info['keys'] : '西安一笔一画 西安一笔一画官网',
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

        //服务项目
        $proList = Db::name('pro')
            ->where('is_show', 1)
            ->limit(8)
            ->select();

        //联系我们
        $contact = Db::name('contact')->find(1);


        //案例展示
        $anliList = Db::name('anli')
            ->where('is_show',1)
            ->field('id,name,title,alt')
            ->limit(8)
            ->select();

        //新闻展示
        $newsList = Db::name('news')
            ->where('pid', 2)
            ->where('is_show', 1)
            ->order('addtime desc')
            ->limit(8)
            ->select();



        $this->assign([
            'pmenu'     => $pmenu,
            'contact'   => $contact,
            'proList'   => $proList,
            'newsList'  => $newsList,
            'anliList'  => $anliList
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