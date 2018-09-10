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
            $table->uuid('course_id')->nullable();
            $table->integer('complementary_course_id')->unsigned()->nullable();
            $table->dateTime('date_start');
            $table->dateTime('date_end');
            $table->float('public_price_affected')->nullable();
            $table->string('label')->nullable();
            $table->string('short_label')->nullable();
            $table->integer('real_time_hour')->nullable();
            $table->integer('expected_time_hour')->nullable();
            $table->boolean('date_to_be_defined')->nullable();
            $table->string('code_promotion')->nullable();
            $table->integer('module_id')->nullable();
            $table->string('code_room')->nullable();
            $table->integer('code_teacher')->nullable();
            $table->integer('code_location')->nullable();
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
