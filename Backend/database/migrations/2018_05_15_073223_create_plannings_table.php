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
            $table->date('date_start_formation')->nullable();
            $table->date('date_end_formation')->nullable();
            $table->date('date_subscription')->nullable();
            $table->integer('nb_weeks_formation')->nullable();
            $table->integer('nb_weeks_enterprise')->nullable();
            $table->integer('limit_day_formation')->nullable();
            $table->integer('num_version')->nullable();
            $table->integer('status')->default(1); // 1 : brouillon ; 2 : inscrit
            $table->boolean('is_archived')->default(0); // 0 : non archivé ; 1 : archivé
            $table->boolean('is_model')->default(0); // 0 : non modèle ; 1 : est un modèle
            $table->boolean('is_broken')->defaul(0); // 0 : Pas en défaut ; 1 : est en défaut
            $table->integer('planning_id')->unsigned()->nullable();
            $table->integer('stagiaire_id')->unsigned();
            $table->char('formation_id');
            $table->integer('user_id')->unsigned();
            $table->integer('code_lieu')->unsigned()->nullable();
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
