<?php

namespace App\Http\Controllers;


use App\Models\Stagiaire;
use Illuminate\Http\Request;
use App\Http\Middleware;
use Log;
use Illuminate\Support\facades\Config;

class StagiaireController extends Controller
{
    
    /**
     * Display a listing of the resource.
     * url : .../Backend/public/stagiaire
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Log::useDailyFiles(storage_path().Config::get('app.log_file'));
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Stagiaire::all();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
