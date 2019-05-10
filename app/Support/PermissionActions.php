<?php
namespace App\Support;

class PermissionActions
{
    const QUERY = 'query';
    const DETAIL = 'detail';
    const ADD  = 'add';
    const EDIT = 'edit';
    const DEL  = 'del';

    public static $actions = [
        self::QUERY => '查询',
        self::DETAIL => '查看详情',
        self::ADD => '新增',
        self::EDIT => '编辑',
        self::DEL => '删除'
    ];

}
