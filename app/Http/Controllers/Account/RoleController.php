<?php
namespace App\Http\Controllers\Account;

use App\Http\Controllers\BaseController;
use App\Models\AdminRole;
use App\Support\ApiRespCode;
use App\Validators\AdminRoleValidator;
use Illuminate\Http\Request;

class RoleController extends BaseController
{
    public function index()
    {
        $lists = AdminRole::query()->paginate(per_page_num());
        return $this->successResponse($lists);
    }

    public function store(AdminRoleValidator $roleValidator, Request $request)
    {
        $data = $request->all();
        $roleValidator->with($data)->passes('create');
        $user = AdminRole::query()->create($data);
        if ($user) {
            return $this->successResponse();
        } else {
            return $this->errorInterval(ApiRespCode::INTERVAL, '添加失败');
        }
    }

    public function show($id)
    {
        $user = AdminRole::query()->findOrFail($id);
        return $this->successResponse($user);
    }

    public function update(AdminRoleValidator $roleValidator, Request $request, $id)
    {
        $data = $request->all();
        $roleValidator->with($data)->passes('update');
        $result = AdminRole::query()->where('id', $id)->update($data);
        if ($result) {
            return $this->successResponse();
        } else {
            return $this->errorInterval(ApiRespCode::INTERVAL, '更新失败');
        }
    }

    public function multiDestroy(Request $request)
    {
        $ids = $request->input('ids');
        if (!empty($ids)) {
            AdminRole::destroy($ids);
        }
        return $this->successResponse();
    }

    public function getOptions()
    {
        $lists = AdminRole::query()->get();
        return $this->successResponse($lists);
    }
}
