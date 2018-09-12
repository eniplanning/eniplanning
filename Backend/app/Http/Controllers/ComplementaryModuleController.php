<?php

namespace App\Http\Controllers;

use App\Http\Requests\ComplementaryModuleRequest;
use Illuminate\Http\Request;
use App\Models\ComplementaryModule;
use Log;

class ComplementaryModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return ComplementaryModule::with('complementaryCourses')->get()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ComplementaryModuleRequest $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
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
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
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
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
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
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $complementaryModule->delete();
    }


}
