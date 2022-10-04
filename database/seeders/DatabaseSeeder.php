<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Division;
use App\Models\Office;
use App\Models\Role;
use App\Models\RoleGroup;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            DivisionSeeder::class,
            OfficeSeeder::class,
            RoleSeeder::class,
            RoleGroupSeeder::class,
            RoleGroupDetailsSeeder::class
        ]);
    }
}
