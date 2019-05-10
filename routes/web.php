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


Route::group(['prefix' => 'api'], function () {
    Route::get('users/', 'Account\\UserController@index');
    Route::post('users/', 'Account\\UserController@add');
    Route::get('users/{id}', 'Account\\UserController@info');
    Route::put('users/{id}', 'Account\\UserController@update');
    Route::delete('users', 'Account\\UserController@delete');

    Route::delete('roles', 'Account\\RoleController@multiDestroy');
    Route::get('roles/options', 'Account\\RoleController@getOptions');
    Route::resource('roles', 'Account\\RoleController');

    Route::resource('permissions', 'Account\\PermissionController');

    Route::post('tools/upload/{path?}', 'Tool\\FileController@imageUpload');
});
