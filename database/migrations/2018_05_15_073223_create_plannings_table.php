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
            $table->date('date_start_contract');
            $table->date('date_end_contract');
            $table->date('date_start_formation');
            $table->date('date_end_formation');
            $table->date('date_subscription');
            $table->integer('nb_weeks_formation');
            $table->integer('nb_weeks_enterprise');
            $table->integer('limit_day_formation');
            $table->integer('num_version');
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
