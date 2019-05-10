<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminRole extends Model
{
    protected $fillable = [
        'identify',
        'name',
        'desc'
    ];
}
