<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfficesetupformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('officesetupforms', function (Blueprint $table) {
            $table->id();
            $table-> string ('officeid');
            $table-> string ('officename');
            $table-> string ('adress');
            $table-> integer ('maximum_branch');
            $table-> integer ('maximum_somitee');
            $table-> string ('office_in_charge');
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
        Schema::dropIfExists('officesetupforms');
    }
}
