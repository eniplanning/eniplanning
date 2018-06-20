<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCtrExemptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ctr_exemptions', function (Blueprint $table) {
            $table->integer('planning_id')->unsigned();
            $table->integer('module_id')->unsigned();
            $table->integer('num_week')->nullable();
            $table->timestamps();
            $table->primary(['planning_id', 'module_id'], 'exemption_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ctr_exemptions');
    }
}
