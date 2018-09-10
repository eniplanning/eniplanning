<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CtrDisponibility;
use Log;

class CtrDisponibilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return CtrDisponibility::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return CtrDisponibility::create($request->all())->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CtrDisponibility $ctrDisponibility)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return $ctrDisponibility->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CtrDisponibility $ctrDisponibility)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $ctrDisponibility->update($request->all());
        return $ctrDisponibility->toJson();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(CtrDisponibility $ctrDisponibility)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $ctrDisponibility->delete();
    }
}
