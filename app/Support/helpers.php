<?php

if (!function_exists('nonce_str')) {
    function nonce_str($length, $prefix='')
    {
        $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';    //字符池
        $key = $prefix;
        for ($i = 0 ; $i< $length; $i++) {
            $key .= $pattern{mt_rand(0, 35)};
        }
        return $key;
    }
}

if (!function_exists('per_page_num')) {
    function per_page_num()
    {
        return request()->input('pageSize', 20);
    }
}

if (!function_exists('page')) {
    function page()
    {
        return request()->input('pageNo', 20);
    }
}

if (!function_exists('parse_xml')) {
    function parse_xml($xml)
    {
        libxml_use_internal_errors(true);
        $data = simplexml_load_string($xml, null, LIBXML_NOERROR);
        if ($data === false) {
            throw new InvalidArgumentException(sprintf('Invalid xml response "%s"', $xml));
        }
        return json_decode(json_encode($data), true);
    }
}


function h_property_exists( $class, $property , $defualt = null) {
    if (is_null($class)) {
        return $defualt;
    }
    if (is_object($class)) {
        if ( property_exists( $class, $property ) ) {
            return $class->$property;
        } elseif ($class instanceof \Illuminate\Database\Eloquent\Model) {
            return $class->$property;
        }
    }
    if (is_array($class)) {
        if (array_key_exists($property, $class)) {
            return $class[$property];
        }
    }
    return $defualt;
}

if (!function_exists('parse_image_url')) {
    function parse_image_url($path, $disk = 'images') {
        $single_parse = function ($p) use ($disk) {
            if (filter_var($p, FILTER_VALIDATE_URL)) {
                return $p;
            }
            $driver = config('filesystems.default');
            if ($driver == 's3') {
                return \Illuminate\Support\Facades\Storage::disk('s3')->url($p);
            }
            return $prefix = \Illuminate\Support\Facades\Storage::disk($disk)->url($p);
        };
        if (is_array($path)) {
            foreach ($path as &$p) {
                $p = $single_parse($p);
            }
            return $path;
        } elseif (is_string($path) && strlen($path) != 0) {
            $path = $single_parse($path);
            return $path;
        }
        return $path;
    }
}
