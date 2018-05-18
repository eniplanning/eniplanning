<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCtrPrioritizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ctr_prioritizations', function (Blueprint $table) {
            $table->integer('planning_id')->unsigned();
            $table->integer('module_id')->unsigned();
            $table->date('before_date');
            $table->integer('priority');
            $table->timestamps();
            $table->primary(['planning_id', 'module_id'], 'prioritization_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ctr_prioritizations');
    }
}
