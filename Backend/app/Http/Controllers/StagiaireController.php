<?php

namespace App\Http\Controllers;


use App\Models\Stagiaire;
use Illuminate\Http\Request;
use App\Http\Middleware;


class StagiaireController extends Controller
{
    /**
     * Display a listing of the resource.
     * url : .../Backend/public/stagiaire
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Stagiaire::all();
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Stagiaire::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Stagiaire $stagiaire)
    {
        return $stagiaire->toJson();
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Stagiaire $stagiaire)
    {
        $stagiaire->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stagiaire $stagiaire)
    {
        $stagiaire->delete();
    }
}
