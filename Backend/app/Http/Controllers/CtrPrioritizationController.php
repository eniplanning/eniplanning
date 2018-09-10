<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CtrPrioritization;
use Log;

class CtrPrioritizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return CtrPrioritization::all()->toJson();
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
        CtrPrioritization::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CtrPrioritization $ctrPrioritization)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return $ctrPrioritization->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CtrPrioritization $ctrPrioritization)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return $ctrPrioritization->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(CtrPrioritization $ctrPrioritization)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $ctrPrioritization->delete();
    }
}
