<?php

namespace App\Http\Controllers;

use App\Models\ComplementaryCourse;
use App\Models\Cours;
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
        return $planning->toJson();
    }

    /*
     *  Get the planning with the id specified in the request, including constraintes and courses
     *
     */
    public function showWithGlobal(Planning $planning, Request $request)
    {
        return Planning::where('id', "=", $request->id)->with([
            'planningCourses',
            'ctrDisponibilities',
            'ctrExemptions',
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
        return Planning::where('stagiaire_id', '=', $request->code)->with([
            'planningCourses',
            'ctrDisponibilities',
            'ctrExemptions',
            'ctrPrioritizations',
        ])->get()->toJson();
    }

    /*
     *  TO BE COMMENTED
     */
    public function setPlanningBroken()
    {
        $plannings = Planning::with('planningCourses')->get();
        foreach ($plannings as $planning) {
            $x = 0;
            do {
                $course = $planning->planningCourses;
                $comparedCourse = $course[$x]->course_id ? Cours::find($course[$x]->course_id) : ComplementaryCourse::find($course[$x]->course_id);
                
                $field = ['date_start', 'date_end', 'real_time_hour', 'expected_time_hour', 'date_to_be_define'];
                $fx = 0;
                do {
                    // @todo : Vérifier que la condition fonctionne
                    $planning->is_broken = $course[$x][$field[$fx]] != $comparedCourse[$x][$field[$fx]] ? true : false;
                    $fx++;
                } while (!$planning->is_broken);

                $planning->save();
                $x++;
            } while (!$planning->is_broken);
        }
    }

}
