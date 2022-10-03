<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $DIVISIONS = [
            "Cagayan de Oro City",
            "Isabela City"
        ];

        foreach($DIVISIONS as $division) {
            \App\Models\Division::create([
                "division_name" => $division
            ]);
        }
    }
}
