<?php
/**
 * Created by PhpStorm.
 * User: lovey
 * Date: 2018/5/7
 * Time: 14:35
 */
namespace service;


class Tool
{

    /**
     * 一维数据数组生成数据树
     * @param array $list 数据列表
     * @param string $id 父ID Key
     * @param string $pid ID Key
     * @param string $son 定义子数据Key
     * @return array
     */
    public static function arr2tree($list, $id = 'id', $pid = 'pid', $son = 'sub')
    {
        $tree = $map = [];
        foreach ($list as $item) {
            $map[$item[$id]] = $item;
        }
        foreach ($list as $item) {
            if (isset($item[$pid]) && isset($map[$item[$pid]])) {
                $map[$item[$pid]][$son][] = &$map[$item[$id]];
            } else {
                $tree[] = &$map[$item[$id]];
            }
        }
        unset($map);
        return $tree;
    }

    /**
     * 一维数据数组生成数据树
     * @param array $list 数据列表
     * @param string $id ID Key
     * @param string $pid 父ID Key
     * @param string $path
     * @return array
     */
    public static function arr2table($list, $id = 'id', $pid = 'pid', $path = 'path', $ppath = '')
    {
        $_array_tree = self::arr2tree($list, $id, $pid);
        $tree = [];
        foreach ($_array_tree as $_tree) {
            $_tree[$path] = $ppath . '-' . $_tree[$id];
            $_tree['spl'] = str_repeat("&nbsp;&nbsp;&nbsp;├&nbsp;&nbsp;", substr_count($ppath, '-'));
            if (!isset($_tree['sub'])) {
                $_tree['sub'] = array();
            }
            $sub = $_tree['sub'];
            unset($_tree['sub']);
            $tree[] = $_tree;
            if (!empty($sub)) {
                $sub_array = self::arr2table($sub, $id, $pid, $path, $_tree[$path]);
                $tree = array_merge($tree, (Array)$sub_array);
            }
        }
        return $tree;
    }

}