<?php
namespace App\Support;

use App\Validators\ValidatorBaseAbstract;

trait ApiBaseTrait
{
    /**
     * 正确响应
     *
     * @param array $data
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function successResponse($data = [], $message = 'success')
    {
        return response()->json([
            'status' => 200,
            'code' => 200,
            'message' => $message,
            'data' => $data
        ]);
    }

    /**
     * 错误响应
     *
     * @param $code
     * @param int $http_code
     * @param array $data
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorResponse($code, $http_code = 400, $message = '', $data=[])
    {
        return response()->json([
            'status' => $http_code,
            'code' => $code,
            'message' => $message ? $message : ApiRespCode::getMessage($code),
            'data' => $data
        ], $http_code);
    }

    /**
     * 内部错误
     *
     * @param int $code
     * @param string $message
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorInterval($code = 500, $message = '', $data = [])
    {
        return $this->errorResponse($code, 500, $message, $data);
    }

    /**
     * 请求错误
     *
     * @param int $code
     * @param string $message
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorBadRequest($code = 400, $message = '', $data = [])
    {
        return $this->errorResponse($code, 400, $message, $data);
    }

    /**
     * 资源不存在
     *
     * @param int $code
     * @param string $message
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorNotFound($code = 404, $message = '', $data=[])
    {
        return $this->errorResponse($code, 404, $message, $data);
    }

    /**
     * 无权限访问
     *
     * @param int $code
     * @param string $message
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function errorForbidden($code = 403, $message = '', $data = [])
    {
        return $this->errorResponse($code, 403, $message, $data);
    }

    public function errorRequestValidator(ValidatorBaseAbstract $baseAbstract, $code = 422)
    {
        return $this->errorResponse($code, 422, $baseAbstract->getErrorMessage(), $baseAbstract->getErrors());
    }
}
