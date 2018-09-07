<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;

class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Formation::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Formation $formation)
    {
        return $formation->toJson();
    }

    public function showWithGlobal(Formation $formation)
    {
        return $formation->with([
            'promotions',
            'uniteparformation.modules.cours',
            'titre',
        ])->get()->first()->toJson();
    }
}
