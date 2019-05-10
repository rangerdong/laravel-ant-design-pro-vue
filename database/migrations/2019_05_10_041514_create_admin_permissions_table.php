<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_permissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 100)->comment('权限名称');
            $table->string('identify', 50)->unique()->comment('权限标识');
            $table->string('type', 10)->default('menu')->comment('权限类型 menu菜单路由权限 api 操作权限');
            $table->string('path', 255)->comment('地址path');
            $table->integer('order')->default(0);
            $table->unsignedBigInteger('pid')->default(0)->comment('上级ID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_permissions');
    }
}
