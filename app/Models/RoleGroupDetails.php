<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleGroupDetails extends Model
{
    use HasFactory;
    protected $table = "role_group_details";
    protected $fillable = ["role_id_fk", "role_group_id_fk"];
    public $timestamps = false;
}
