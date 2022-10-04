<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleGroupDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $ROLEGROUPDETAILS = [
            /* 
                Note: only Provincial Officer and Focal is/are requisitioner

                TABLE: role
                +-----+--------------------+
                | ID  |     Position       |
                +-----+--------------------+
                |  4  | Provincial Officer |
                |  5  | Focal              |
                +-----+--------------------+

                TABLE: role_group
                +-----+--------------------+
                | ID  |     Position       |
                +-----+--------------------+
                |  1  | Requisitioner      |
                +-----+--------------------+
            */
            4 => 1,
            5 => 1,
        ];

        foreach(array_keys($ROLEGROUPDETAILS) as $rkey) {
            \App\Models\RoleGroupDetails::create([
                "role_id_fk" => $rkey,
                "role_group_id_fk" => $ROLEGROUPDETAILS[$rkey]
            ]);
        }
    }
}
