<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlanningCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('planning_courses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('planning_id')->unsigned();
            $table->uuid('course_id');
            $table->integer('complementary_course_id')->unsigned();
            $table->boolean('is_complementary');
            $table->dateTime('start');
            $table->dateTime('end');
            $table->float('public_price_affected');
            $table->string('label_course');
            $table->integer('real_time_hour');
            $table->integer('expected_time_hour');
            $table->boolean('date_to_be_define');
            $table->string('code_promotion');
            $table->integer('module_id');
            $table->string('code_room');
            $table->integer('code_teacher');
            $table->integer('code_location');
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
        Schema::dropIfExists('planning_courses');
    }
}
