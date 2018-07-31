<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ComplementaryCourse;

class ComplementaryCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ComplementaryCourse::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $complementaryCourse = ComplementaryCourse::create($request->all());
        return $complementaryCourse;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ComplementaryCourse $complementaryCourse)
    {
        return $complementaryCourse->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ComplementaryCourse $complementaryCourse)
    {
        $complementaryCourse->update($request->all());
        return $complementaryCourse;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ComplementaryCourse $complementaryCourse)
    {
        $complementaryCourse->delete();
    }
}
