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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => [
        //,'role:admin'
    ],
], function () {
    Route::resource('user', 'UserController', ['except' => ['create', 'edit', 'destroy']]);
    Route::resource('planning', 'PlanningController', ['except' => ['create', 'edit']]);
    Route::resource('stagiaire', 'StagiaireController', ['except' => ['create', 'edit']]);
    Route::resource('planningCourse', 'PlanningCourseController', ['except' => ['create', 'edit']]);
    Route::resource('module', 'ModuleController', ['except' => ['create', 'edit']]);
    Route::resource('formation', 'FormationController', ['except' => ['create', 'edit']]);
    Route::resource('ctrPrioritization', 'CtrPrioritizationController', ['except' => ['create', 'edit']]);
    Route::resource('ctrExemption', 'CtrExemptionController', ['except' => ['create', 'edit']]);
    Route::resource('ctrDisponibility', 'CtrDisponibilityController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryCourse', 'ComplementaryCourseController', ['except' => ['create', 'edit']]);
    Route::resource('complementaryModule', 'ComplementaryModuleController', ['except' => ['create', 'edit']]);
    Route::resource('chainingModule', 'ChainingModuleController', ['except' => ['create', 'edit']]);
    Route::resource('cours', 'CoursController', ['except' => ['create', 'edit']]);
    Route::resource('lieu', 'LieuController', ['except' => ['create', 'edit']]);

    Route::post('logout', 'AuthController@logout');
    Route::post('me', 'AuthController@me');
    Route::post('login', 'AuthController@login');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('backend', 'StatusServiceController@backend');
    Route::get('erpstatus', 'StatusServiceController@erpStatus');
    Route::get('enidbstatus', 'StatusServiceController@eniDbStatus');

    Route::get('planningsByCodeStagiaire/{code}', 'PlanningController@getByCodeStagiaire');
    Route::get('planningGlobal/{id}', 'PlanningController@showWithGlobal');
});

// Route::put('post/{id}', function ($id) {
//     //
// })->middleware('auth', 'role:admin');
