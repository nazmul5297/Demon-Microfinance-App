<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchsetupformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branchsetupforms', function (Blueprint $table) {
            $table->id();
            $table-> string ('officeid');
            $table-> string ('branchid');
            $table-> string ('branchname');
            $table-> string ('adress');
            $table-> integer ('maximum_somitee');
            $table-> string ('branch_in_charge');
            $table-> integer ('phone');
            $table-> string('email');
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
        Schema::dropIfExists('branchsetupforms');
    }
}
