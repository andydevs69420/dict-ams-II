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
        Schema::create("user_details", function (Blueprint $table) {
            $table->id("user_details_id");
            $table->foreignId("user_id_fk")->constrained("users", "user_id");
            $table->foreignId("division_id_fk")->constrained("division", "division_id");
            $table->foreignId("office_id_fk")->constrained("office", "office_id");
            $table->foreignId("role_id_fk")->constrained("role", "role_id");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("user_details");
    }
};
