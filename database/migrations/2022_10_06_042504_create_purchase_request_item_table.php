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
        Schema::create("purchase_request_item", function (Blueprint $table) {
            $table->id("purchase_request_item_id");
            $table->integer("stockno");
            $table->bigInteger("unit_id_fk")->unsigned();
            $table->integer("quantity");
            $table->double("unit_cost");
            $table->double("total_cost");
            $table->string("description");
            $table->foreignId("purchase_request_form_id_fk")->constrained("purchase_request_form", "purchase_request_form_id");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("purchase_request_item");
    }
};
