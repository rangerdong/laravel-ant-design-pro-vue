<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => config('app.admin_base')], function () {
    Route::any('/{route?}', function () {
        return view('admin');
    })->where(['route' => '.*']);
});
//
//Route::get('/', function () {
//    return view('index');
//});
//Route::get('/example', function () {
//    return view('example');
//});
//Route::get('/login', function () {
//    return view('Login.login');
//});
