<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSomiteesetupformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('somiteesetupforms', function (Blueprint $table) {
            $table->id();
            $table-> string ('officeid');
            $table-> string ('branchid');
            $table-> string ('somiteetype');
            $table-> string ('somiteename');
            $table-> string ('somiteeadress');
            $table-> string ('office_in_charge');
            $table-> integer ('maximum_member');
            $table-> date('formationdate');
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
        Schema::dropIfExists('somiteesetupforms');
    }
}
