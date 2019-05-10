<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username')->comment('登录用户名');
            $table->string('name')->comment('显示用户名');
            $table->string('email')->nullable()->comment('用户邮箱');
            $table->string('mobile', 11)->nullable()->comment('用户手机号');
            $table->string('password')->comment('登录密码');
            $table->string('avatar')->nullable()->comment('头像');
            $table->string('remember_token')->nullable()->comment('显示token');
            $table->tinyInteger('status')->default(1)->comment('状态 0禁用 1启用');
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
        Schema::dropIfExists('admin_users');
    }
}
