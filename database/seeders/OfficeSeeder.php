<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $OFFICE = [
            "Provincial Office",
            "Main Office"
        ];

        foreach($OFFICE as $office) {
            \App\Models\Office::create([
                "office_name" => $office
            ]);
        }
    }
}
