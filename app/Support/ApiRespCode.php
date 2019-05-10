<?php
namespace App\Support;

class ApiRespCode
{
    const SUCCESS = 200;
    const NOT_FOUND = 404;
    const BAD_REQUEST = 400;
    const FORBIDDEN = 403;
    const VALIDATOR = 422;
    const INTERVAL = 500;

    public static function getMessage($code)
    {
        $messages = [
            self::SUCCESS => 'success',
            self::NOT_FOUND => 'resources not found',
            self::BAD_REQUEST => 'bad requests',
            self::VALIDATOR => 'params validate error',
            self::INTERVAL => 'error interval',
            self::FORBIDDEN => 'request not forbidden',

        ];
        return h_property_exists($messages, $code, $code);
    }
}
