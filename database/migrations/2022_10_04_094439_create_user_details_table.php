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
            $table->bigInteger("user_id_fk")->unsigned();
            $table->bigInteger("division_id_fk")->unsigned();
            $table->bigInteger("office_id_fk")->unsigned();
            $table->bigInteger("role_id_fk")->unsigned();

            $table->foreign("user_id_fk")->references("user_id")->on("users");
            $table->foreign("division_id_fk")->references("division_id")->on("division");
            $table->foreign("office_id_fk")->references("office_id")->on("office");
            $table->foreign("role_id_fk")->references("role_id")->on("role");
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
