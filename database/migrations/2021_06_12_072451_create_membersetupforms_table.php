<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersetupformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('membersetupforms', function (Blueprint $table) {
            $table->id();
            $table-> string ('officeid');
            $table-> string ('branchid');
            $table-> string ('somiteename');
            $table-> string ('fullname');
            $table-> integer ('fathername');
            $table-> string ('mothername');
            $table-> integer ('phone');
            $table-> date('dob');
            $table-> string('nid');
            $table-> string ('nomini_fullname');
            $table-> integer ('nomini_fathername');
            $table-> string ('nomini_mothername');
            $table-> string ('nomini_relation');
            $table-> integer ('nomini_phone');
            $table-> date('nomini_dob');
            $table-> string('nomini_nid');
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
        Schema::dropIfExists('membersetupforms');
    }
}
