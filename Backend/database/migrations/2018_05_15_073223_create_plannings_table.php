<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlanningsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plannings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label');
            $table->date('date_start_contract')->nullable();
            $table->date('date_end_contract')->nullable();
            $table->date('date_start_formation');
            $table->date('date_end_formation');
            $table->date('date_inscription')->nullable();
            $table->integer('nb_weeks_formation')->nullable();
            $table->integer('nb_weeks_enterprise')->nullable();
            $table->integer('limit_day_formation')->nullable();
            $table->integer('num_version')->nullable();
            $table->integer('status');
            $table->boolean('is_archived');
            $table->boolean('is_model');
            $table->integer('planning_id')->unsigned();
            $table->integer('stagiaire_id')->unsigned();
            $table->char('formation_id');
            $table->integer('user_id')->unsigned();
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
        Schema::dropIfExists('plannings');
    }
}
