<?php
/**
 * Created by PhpStorm.
 * Author: Lin
 * Date: 2017/4/13
 * Time: 14:28
 */

namespace app\admin\controller;

use app\common\controller\AdminBase;

class Client extends AdminBase
{
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
    }

    public function index()
    {
        return $this->view->fetch();
    }
}