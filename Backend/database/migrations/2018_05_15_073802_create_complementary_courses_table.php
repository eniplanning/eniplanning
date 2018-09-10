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
            $table->time('real_time_hour');
            $table->time('expected_time_hour');
            $table->boolean('date_to_be_defined');
            $table->integer('complementary_module_id')->unsigned();
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
