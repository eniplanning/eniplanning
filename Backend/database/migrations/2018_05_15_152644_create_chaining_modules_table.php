<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChainingModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chaining_modules', function (Blueprint $table) {
            $table->integer('module_id')->unsigned();
            $table->integer('previous_module_id')->unsigned();
            $table->boolean('is_required')->default(0);
            $table->char('formation_id');
            $table->timestamps();
            $table->primary(['module_id', 'previous_module_id'], 'chaining_module_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chaining_modules');
    }
}
