<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ComplementaryModule;

class ComplementaryModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ComplementaryModule::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $complementaryModule = ComplementaryModule::create($request->all());
        return $complementaryModule->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ComplementaryModule $complementaryModule)
    {
        return $complementaryModule->with('complementaryCourses')->get()->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ComplementaryModule $complementaryModule)
    {
        $complementaryModule->update($request->all());
        return $complementaryModule->toJson();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ComplementaryModule $complementaryModule)
    {
        $complementaryModule->delete();
    }
}
