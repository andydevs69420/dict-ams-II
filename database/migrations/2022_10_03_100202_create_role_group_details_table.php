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
            $table->bigInteger("role_id_fk")->unsigned();
            $table->bigInteger("role_group_id_fk")->unsigned();

            $table->foreign("role_id_fk")->references("role_id")->on("role");
            $table->foreign("role_group_id_fk")->references("role_group_id")->on("role_group");
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
