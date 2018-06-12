<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/4/26
 * Time: 16:53
 */

namespace app\admin\controller;

use think\Controller;
use think\Db;
use app\admin\Model\Node;
use think\Request;

class Base extends Controller
{
    protected $table;

    public function __construct(Request $request)
    {
        parent::__construct($request);

        //登录检测
        if (!session(config('admin.user_auth_key'))){
            $this->redirect(url(config('admin.user_auth_gateway')));
        }
        //后台菜单数据处理
        $model = Db::name('node')->where('level', 1)->find();
        $action = Db::name('node')->where('level', 2)->orderRaw('sort = 0,sort')->select();
        $navList = [];
        foreach ($action as $val){
            if ($val['is_show'] == 2) continue;
            if (Node::hasChild($val['id'])){
                $child = Node::getChild($val['id']);
                $item = [];
                //模块名称以及图标
                $item['title'] = $val['title'];
                $item['name']  = $val['name'];
                $item['icon']  = $val['icon'];
                foreach ($child as $k => $subVal){
                    if ($subVal['is_show'] == 2) continue;
                    //方法名称以及图标
                    $item['son'][$k]['title'] = $subVal['title'];
                    $item['son'][$k]['icon']  = $subVal['icon'];
                    //生成超链接字符串 model/action/method
                    $url = $model['name'] . '/' . $val['name'] . '/' . $subVal['name'];
                    $item['son'][$k]['url']   = url($url);
                }
                $navList[] = $item;
            }
        }
        //导航标题处理
        $controller = $request->controller();
        $action     = $request->action();
        $nav = Db::name('node')->where('name', $controller)->find();
        $child = Node::getChild($nav['id']);
        $sonTitle = '';
        if (!empty($child)){
            foreach ($child as $v){
                if (strtolower($v->name) == $action){
                    $sonTitle = $v['title'];
                }
            }
        }
        $this->assign([
            'navList'    => $navList,
            'title'      => $nav['title'],
            'icon'       => $nav['icon'],
            'sonTitle'   => $sonTitle,
            'controller' => $controller,
            'url'        => request()->url()
        ]);
    }

    protected function _list($dbQuery = null, $row_page = 15)
    {
        $db = is_null($dbQuery) ? Db::name($this->table) : (is_string($dbQuery) ? Db::name($dbQuery) : $dbQuery);
        // 列表数据查询与显示
        $result = [];
        $page = $db->paginate($row_page, false, ['query' => $this->request->get(),'type'     => 'layui', 'var_page' => 'page',]);
        $result['list'] = $page->all();
        $result['page'] = $page->render();
        if (false === $this->_callback('_data_filter', $result['list'])) {
            return $result;
        }
        $this->assign($result);
        return $this->fetch();
    }

    /**
     * 当前对象回调成员方法
     * @param string $method
     * @param array|bool $data
     * @return bool
     */
    protected function _callback($method, &$data)
    {
        foreach ([$method, "_" . $this->request->action() . "{$method}"] as $_method) {
            if (method_exists($this, $_method) && false === $this->$_method($data)) {
                return false;
            }
        }
        return true;
    }

    public function sort($id = 0, $val = 0, $table){
        $ret = [
            'suc' => 0
        ];
        $res = Db::name($table)->update([
            'id'   => $id,
            'sort' => $val
        ]);
        if (!$res){
            $ret['suc'] = 1;
        }
        return $ret;
    }

}