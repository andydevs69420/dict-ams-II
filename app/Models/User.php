<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use \App\Models\UserDetails;
use \App\Models\Role;
use \App\Models\RoleGroupDetails;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey = 'user_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "lastname",
        "firstname",
        "email",
        "password",
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        "password",
        "remember_token",
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        "email_verified_at" => "datetime",
    ];


    /**
     * Checks if user has the following role
     **/ 
    public function hasRole($roleName) {
        // user
        $user = UserDetails::where("user_id_fk", "=", $this->user_id)
            ->first();

        // check if exists in group
        $exist = RoleGroupDetails::join("role", "role_id_fk", "=", "role.role_id")
            ->join("role_group", "role_group_id_fk", "role_group.role_group_id")
            ->where("role_id", "=", $user->role_id_fk)
            ->where("role_group_name", "=", $roleName)
            ->exists();
        
        if ($exist) return true;
      
        
        return Role::where("role_id", "=", $user->role_id_fk)
        ->where("role_name", "=", $roleName)
        ->exists();
    }
}
