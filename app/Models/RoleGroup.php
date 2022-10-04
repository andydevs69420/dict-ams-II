<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleGroup extends Model
{
    use HasFactory;
    protected $table = "role_group";
    protected $fillable = ["role_group_name"];
    public $timestamps = false;
}
