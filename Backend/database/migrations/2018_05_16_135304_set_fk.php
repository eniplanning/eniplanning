<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class SetFk extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plannings', function(Blueprint $table){
            // DB::statement("
            //     ALTER TABLE plannings ALTER COLUMN formation_id CHAR(8);
            // ");
            $table->foreign('planning_id')->references('id')->on('plannings');
            // $table->foreign('stagiaire_id')->references('CodeStagiaire')->on('stagiaires');
            // $table->foreign('formation_id')->references('CodeFormation')->on('formations');
            $table->foreign('user_id')->references('id')->on('users');
        });
        Schema::table('complementary_courses', function (Blueprint $table){
            $table->foreign('complementary_module_id')->references('id')->on('complementary_modules');
        });
        Schema::table('ctr_disponibilities', function (Blueprint $table){
            $table->foreign('planning_id')->references('id')->on('plannings');
        });
        Schema::table('ctr_prioritizations', function (Blueprint $table){
            $table->foreign('planning_id')->references('id')->on('plannings');
            // $table->foreign('module_id')->references('IdModule')->on('Module');
        });
        Schema::table('ctr_exemptions', function (Blueprint $table){
            $table->foreign('planning_id')->references('id')->on('plannings');
            // $table->foreign('module_id')->references('IdModule')->on('Module');
        });
        Schema::table('chaining_modules', function (Blueprint $table){
            // DB::statement("
            //     ALTER TABLE plannings ALTER COLUMN formation_id CHAR(8);
            // ");
            // $table->foreign('module_id')->references('IdModule')->on('Module');
            // $table->foreign('previous_module_id')->references('IdModule')->on('Module');
        });
        Schema::table('planning_courses', function (Blueprint $table){
            // DB::statement("
            //     ALTER TABLE planning_courses ALTER COLUMN course_id UNIQUEIDENTIFIER;
            // ");
            $table->foreign('planning_id')->references('id')->on('plannings');
            // $table->foreign('course_id')->references('IdCours')->on('Cours');
            $table->foreign('complementary_course_id')->references('id')->on('complementary_courses');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plannings', function (Blueprint $table){
            $table->dropForeign('plannings_planning_id_foreign');
            // $table->dropForeign('stagiaire_id_foreign');
            // $table->dropForeign('formation_id_foreign');
            $table->dropForeign('plannings_user_id_foreign');
        });
        Schema::table('complementary_courses', function (Blueprint $table){
            $table->dropForeign('complementary_courses_complementary_module_id_foreign');
        });
        Schema::table('ctr_disponibilities', function (Blueprint $table){
            $table->dropForeign('ctr_disponibilities_planning_id_foreign');
        });
        Schema::table('ctr_prioritizations', function (Blueprint $table){
            $table->dropForeign('ctr_prioritizations_planning_id_foreign');
            // $table->dropForeign('module_id_foreign');
        });
        Schema::table('ctr_exemptions', function (Blueprint $table){
            $table->dropForeign('ctr_exemptions_planning_id_foreign');
            // $table->dropForeign('module_id_foreign');
        });
        Schema::table('chaining_modules', function (Blueprint $table){
            // $table->dropForeign('module_id_foreign');
            // $table->dropForeign('previous_module_id_foreign');
            // $table->dropForeign('formation_id_foreign');
        });
        Schema::table('planning_courses', function (Blueprint $table){
            $table->dropForeign('planning_courses_planning_id_foreign');
            // $table->dropForeign('course_id_foreign');
            $table->dropForeign('planning_courses_complementary_course_id_foreign');
        });
    }
}