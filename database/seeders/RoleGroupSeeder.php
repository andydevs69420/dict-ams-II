<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ROLEGROUP = [
            // add role group here
            "Requisitioner",
        ];

        foreach($ROLEGROUP as $rolegroup) {
            \App\Models\RoleGroup::create([
                "role_group_name" => $rolegroup
            ]);
        }

    }
}
