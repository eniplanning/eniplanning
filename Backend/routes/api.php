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


Route::group([
    'middleware' => [
        
    ],
], function () {

    Route::resource('stagiaireparentreprise', 'StagiaireParEntrepriseController', ['except' => ['create', 'edit']]);
    Route::resource('entreprise', 'EntrepriseController', ['except' => ['create', 'edit']]);
    Route::resource('titre', 'TitreController', ['except' => ['create', 'edit']]);
    Route::resource('stagiaire', 'StagiaireController', ['except' => ['create', 'edit']]);
    
    Route::resource('module', 'ModuleController', ['except' => ['create', 'edit']]);
    Route::resource('ctrPrioritization', 'CtrPrioritizationController', ['except' => ['create', 'edit']]);
    Route::resource('ctrExemption', 'CtrExemptionController', ['except' => ['create', 'edit']]);
    Route::resource('ctrDisponibility', 'CtrDisponibilityController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryCourse', 'ComplementaryCourseController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryModule', 'ComplementaryModuleController', ['except' => ['create', 'edit']]);
    Route::resource('chainingModule', 'ChainingModuleController', ['except' => ['create', 'edit']]);
    Route::resource('cours', 'CoursController', ['except' => ['create', 'edit']]);
    Route::resource('lieu', 'LieuController', ['except' => ['create', 'edit']]);

    
    Route::get('getModuleByLibelleCourt/{LibelleCourt}', 'ModuleController@getModuleByLibelleCourt');


    // ActivityLogController Routes
    Route::post('activity-log/purge', 'ActivityLogController@purge');
    Route::resource('activity-log', 'ActivityLogController', ['except' => ['create', 'edit', 'destroy']]);

    // PlanningCourseController Routes
    Route::get('planningcoursebyplanning/{id}', 'PlanningCourseController@getPlanningCourseByPlanningId');
    Route::resource('planningCourse', 'PlanningCourseController', ['except' => ['create', 'edit']]);

    // UserController Routes
    Route::resource('user', 'UserController', ['except' => ['create', 'edit', 'destroy']]);
    Route::put('userpassword/{id}', 'UserController@updatePassword');

    // AuthController Routes
    Route::post('logout', 'AuthController@logout');
    Route::post('me', 'AuthController@me');
    Route::post('login', 'AuthController@login');
    Route::post('refresh', 'AuthController@refresh');

    // StatusServiceController Routes
    Route::get('backend', 'StatusServiceController@backend');
    Route::get('erpstatus', 'StatusServiceController@erpStatus');
    Route::get('enidbstatus', 'StatusServiceController@eniDbStatus');

    // PlanningController Routes
    Route::resource('planning', 'PlanningController', ['except' => ['create', 'edit']]);
    Route::get('planningsByCodeStagiaire/{code}', 'PlanningController@getByCodeStagiaire');
    Route::get('planningGlobal/{id}', 'PlanningController@showWithGlobal');
    Route::get('setPlanningBroken', 'PlanningController@setPlanningBroken');
    Route::get('getPlanningBroken', 'PlanningController@getPlanningBroken');

    // FormationController Routes
    Route::get('formationGlobal/{id}', 'FormationController@showWithGlobal');
    Route::get('formationByPeriodLieu/{formation}/{planning}', 'FormationController@showByPeriodLieu');
    Route::resource('formation', 'FormationController', ['except' => ['create', 'edit']]);

    // DocumentController Routes
    Route::get('document/getplanning','DocumentController@getPlanning');
});
