<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/favicon.ico">
    <title>laravel Ant Design Pro Vue</title>
    <style>#loading-mask{position:fixed;left:0;top:0;height:100%;width:100%;background:#fff;user-select:none;z-index:9999;overflow:hidden}.loading-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-100%)}.loading-dot{animation:antRotate 1.2s infinite linear;transform:rotate(45deg);position:relative;display:inline-block;font-size:64px;width:64px;height:64px;box-sizing:border-box}.loading-dot i{width:22px;height:22px;position:absolute;display:block;background-color:#1890ff;border-radius:100%;transform:scale(.75);transform-origin:50% 50%;opacity:.3;animation:antSpinMove 1s infinite linear alternate}.loading-dot i:nth-child(1){top:0;left:0}.loading-dot i:nth-child(2){top:0;right:0;-webkit-animation-delay:.4s;animation-delay:.4s}.loading-dot i:nth-child(3){right:0;bottom:0;-webkit-animation-delay:.8s;animation-delay:.8s}.loading-dot i:nth-child(4){bottom:0;left:0;-webkit-animation-delay:1.2s;animation-delay:1.2s}@keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@-webkit-keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antSpinMove{to{opacity:1}}</style>
</head>
<body>
<noscript>
    <strong>We're sorry but vue-antd-pro doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app">
    <div id="loading-mask">
        <div class="loading-wrapper">
            <span class="loading-dot loading-dot-spin"><i></i><i></i><i></i><i></i></span>
        </div>
    </div>
</div>
<!-- built files will be auto injected -->
<script type="text/javascript" src="{{ mix('/js/main.js') }}"></script>
</body>
</html>
