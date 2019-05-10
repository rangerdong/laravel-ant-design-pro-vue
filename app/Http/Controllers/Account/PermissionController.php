<?php
namespace App\Http\Controllers\Account;

use App\Http\Controllers\BaseController;
use App\Models\AdminPermission;

class PermissionController extends BaseController
{
    public function index()
    {
        $lists = AdminPermission::query()
            ->orderBy('pid', 'asc')
            ->orderBy('order', 'desc')
            ->orderBy('created_at', 'desc')
            ->paginate(per_page_num());
        return $this->successResponse($lists);
    }
}
