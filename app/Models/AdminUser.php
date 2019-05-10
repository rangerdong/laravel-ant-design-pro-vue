<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminUser extends Model
{
    protected $fillable = [
        'name',
        'username',
        'email',
        'mobile',
        'password',
        'avatar',
        'status',
    ];
    protected $hidden = [
        'password',
        'remember_token'
    ];

    protected $appends = [
        'avatar_url',
    ];

    public function roles()
    {
        return $this->belongsToMany(AdminRole::class, 'admin_user_role', 'user_id', 'role_id')
            ->withTimestamps();
    }

    public function getAvatarUrlAttribute()
    {
        return parse_image_url($this->avatar);
    }
}
