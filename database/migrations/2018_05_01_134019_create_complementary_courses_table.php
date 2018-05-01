<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComplementaryCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complementary_courses', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('date_start');
            $table->dateTime('date_end');
            $table->time('real_duration');
            $table->boolean('date_to_be_defined');
            $table->index('id_complementary_module');
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
        Schema::dropIfExists('complementary_courses');
    }
}
