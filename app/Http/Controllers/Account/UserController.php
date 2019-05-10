<?php
namespace App\Http\Controllers\Account;

use App\Http\Controllers\BaseController;
use App\Models\AdminUser;
use App\Support\ApiRespCode;
use App\Validators\AdminUserValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends BaseController
{
    public function index()
    {
        $lists = AdminUser::query()->paginate(per_page_num());
        return $this->successResponse($lists);
    }

    public function add(AdminUserValidator $userValidator, Request $request)
    {
        $data = $request->all();
        $validation = $userValidator->with($data)->passes('create');
        if (!$validation) {
            return $this->errorRequestValidator($userValidator);
        }
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        $user = AdminUser::query()->create($data);
        if ($user) {
            if (!empty($data['roles'])) {
                $user->roles()->attach($data['roles']);
            }
            return $this->successResponse();
        } else {
            return $this->errorInterval(ApiRespCode::INTERVAL, '添加失败');
        }
    }

    public function info($id)
    {
        $user = AdminUser::query()->with('roles')->findOrFail($id);
        return $this->successResponse($user);
    }

    public function update(Request $request, AdminUserValidator $userValidator, $id)
    {
        $data = $request->all();
        $validation = $userValidator->with($data)->passes( 'update');
        if (!$validation) {
            return $this->errorRequestValidator($userValidator);
        }
        if (isset($data['password']) && $data['password']) {
            $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        }
        $user = AdminUser::query()->find($id);
        $user->update($data);
        if (!empty($data['roles'])) {
            $user->roles()->sync($data['roles']);
        }
        return $this->successResponse();
    }

    public function delete(Request $request)
    {
        $ids = $request->input('ids');
        if (!empty($ids)) {
            AdminUser::destroy($ids);
        }
        return $this->successResponse();
    }
}
