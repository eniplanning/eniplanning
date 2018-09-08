<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PlanningCourse;

class PlanningCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PlanningCourse::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        \Log::error($request);
        $planningCourse = PlanningCourse::create($request->all());
        return $planningCourse->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(PlanningCourse $planningCourse)
    {
        return $planningCourse->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PlanningCourse $planningCourse)
    {
        $planningCourse->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PlanningCourse $planningCourse)
    {
        $planningCourse->delete();
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getPlanningCourseByPlanningId(int $idPlanning)
    {
        return PlanningCourse::where('planning_id', $idPlanning)
            ->orderBy('date_start', 'asc')
            ->get()
            ->toJson();
    }
}
