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
        Schema::create("purchase_request_form", function (Blueprint $table) {
            $table->id("purchase_request_form_id");
            $table->foreignId("requisitioner_id_fk")->constrained("user_details", "user_details_id");
            $table->foreignId("budget_officer_id_fk")->constrained("user_details", "user_details_id");
            $table->foreignId("recommending_approval_id_fk")->constrained("user_details", "user_details_id");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("purchase_request_form");
    }
};
