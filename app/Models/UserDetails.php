<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    use HasFactory;
    protected $table = "user_details";
    protected $fillable = ["user_id_fk", "division_id_fk", "office_id_fk", "role_id_fk"];
    public $timestamps = false;
}
