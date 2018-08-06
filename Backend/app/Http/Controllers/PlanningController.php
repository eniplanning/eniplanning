<?php

namespace App\Http\Controllers;

use App\Models\Planning;
use Illuminate\Http\Request;

class PlanningController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Planning::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required',
            // 'date_start_contract'
        ]);
        $planning = Planning::create($request->all());
        return $planning->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Planning $planning)
    {
        return $planning::with('planningCourse')->get()->toJson();
    }

    public function showWithGlobal(Planning $planning)
    {
        return $planning->with([
            'planningCourses',
            'ctrDisponibilities',
            'ctrExempptions',
            'ctrPrioritizations',
        ])->get()->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Planning $planning)
    {
        $planning->update($request->all());
        return $planning->toJson();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Planning $planning)
    {
        $planning->delete();
    }


    /**
     * Return the list of plannings that belongs to the specified user
     *
     * 
     */
    public function getByCodeStagiaire(Request $request)
    {
        return Planning::where('stagiaire_id', '=', $request->code)->toJson();
    }

}
