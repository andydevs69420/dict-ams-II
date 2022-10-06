<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("role_group_details", function (Blueprint $table) {
            $table->id("role_group_details_id");
            $table->foreignId("role_id_fk")->constrained("role", "role_id");
            $table->foreignId("role_group_id_fk")->constrained("role_group", "role_group_id");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("role_group_details");
    }
};
