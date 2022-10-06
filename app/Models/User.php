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
use Error;

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
     * @param String $roleName user role
     * @return Boolean
     **/
    public function hasRole(String $roleName) {
        // user
        $user = UserDetails::where("user_id_fk", "=", $this->user_id)
            ->first();

        // check if exists in group
        $exist = RoleGroupDetails::join("role", "role_id_fk", "=", "role.role_id")
            ->join("role_group", "role_group_id_fk", "=", "role_group.role_group_id")
            ->where("role_id", "=", $user->role_id_fk)
            ->where("role_group_name", "=", $roleName)
            ->exists();

        if ($exist) return true;

        return Role::where("role_id", "=", $user->role_id_fk)
        ->where("role_name", "=", $roleName)
        ->exists();
    }

    /**
     * getWorkmate
     * @param String $roleName user workmate
     **/
    public function getWorkmate(String $roleName)
    {
        error_log("compare '$roleName' ___");
        // user
        $user = UserDetails::where("user_id_fk", "=", $this->user_id)
            ->first();

        // make base instance
        $UDBase = (function() {
            return UserDetails::join("users", "user_id_fk", "=", "users.user_id")
            ->join("division", "division_id_fk", "=", "division.division_id")
            ->join("office", "office_id_fk", "=", "office.office_id")
            ->join("role", "role_id_fk", "=", "role.role_id");
        });

        $group = $UDBase()->where("user_id_fk", "!=", $user->user_id_fk)
            ->where("division_id_fk", "=", $user->division_id_fk)
            ->whereIn(
                "role_id_fk",
                /* sub query */
                RoleGroupDetails::select("role_id_fk")
                ->join("role", "role_id_fk", "=", "role.role_id")
                ->join("role_group", "role_group_id_fk", "=", "role_group.role_group_id")
                ->where("role_id", "=", $user->role_id_fk)
                ->where("role_group_name", "=", $roleName)->get()
            )->get();

        if ($group && count($group) > 0) return $group;

        return $UDBase()->where("role.role_name", "=", $roleName)->get();
    }
}
/*
        RoleGroupDetails::select("role_id_fk")
        ->join("role", "role_id_fk", "=", "role.role_id")
        ->join("role_group", "role_group_id_fk", "=", "role_group.role_group_id")
        ->where("role_id", "=", $user->role_id_fk)
        ->where("role_group_name", "=", $roleName)->get()

*/
