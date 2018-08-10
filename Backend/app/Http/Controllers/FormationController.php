<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use App\Models\Formation;

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

    public function showWithGlobal(Formation $formation, Request $request)
    {   
        Config::set('database.default', 'enierp');  //Only set database.default for current request

        return Formation::where('CodeFormation', "=", $request->id)->with([
            'uniteparformation.modules.cours',
        ])->get()->first()->toJson();
    }
}
