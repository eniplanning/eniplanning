<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function () {
    // Les routes seront transférées ici quand l'authentification sera terminé.
});

Route::group(['middleware' => 'addHeadersCors'], function () {
    Route::resource('user', 'UserController', ['except' => ['create', 'edit']]);
    Route::resource('stagiaire', 'StagiaireController', ['except' => ['create', 'edit']]);
    Route::resource('planningCourse', 'PlanningCourseController', ['except' => ['create', 'edit']]);
    Route::resource('planning', 'PlanningController', ['except' => ['create', 'edit']]);
    Route::resource('module', 'ModuleController', ['except' => ['create', 'edit']]);
    Route::resource('formation', 'FormationController', ['except' => ['create', 'edit']]);
    Route::resource('ctrPrioritization', 'CtrPrioritizationController', ['except' => ['create', 'edit']]);
    Route::resource('ctrExemption', 'CtrExemptionController', ['except' => ['create', 'edit']]);
    Route::resource('ctrDisponibility', 'CtrDisponibilityController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryCourse', 'ComplementaryCourseController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryModule', 'ComplementaryModuleController', ['except' => ['create', 'edit']]);
    Route::resource('chainingModule', 'ChainingModuleController', ['except' => ['create', 'edit']]);
    Route::resource('cours', 'CoursController', ['except' => ['create', 'edit']]);
});
