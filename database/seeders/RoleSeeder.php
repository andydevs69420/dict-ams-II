<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ROLES = [
            "Regional director",
            "Assistan Regional Director",
            "Chief Admin Officer",
            "Provincial Officer",
            "Focal",
            "Inspector",
            "BAC Member",
            "BAC Chair",
            "Canvasser",
            "Supply Officer",
            "Budget Officer",
            "Chief TOD",
            "Staff",
            "Admin"
        ];

        foreach($ROLES as $role) {
            \App\Models\Role::create([
                "role_name" => $role
            ]);
        }
    }
}
