<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use App\Models\Planning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\Param;

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
        return $formation->with([
            'promotions',
            'uniteparformation.modules.cours',
            'titre',
        ])->get()->first()->toJson();
    }

    /**
     * Récupère les cours en fonction de la formation, du lieu et de la periode d'alternance
     *
     * @param  Formation $formation
     * @param  Planning $planning
     * @return \Illuminate\Http\Response
     */
    public function showByPeriodLieu(Formation $formation, Planning $planning)
    {
        return Formation::with(['uniteparformation.modules.cours' => function ($query) use ($planning) {
            $query
                ->where('Cours.CodeLieu', '=', $planning->lieu_id)
                ->whereDate('Cours.Debut', '>=', $planning->date_start_formation)
                ->whereDate('Cours.Fin', '<=', $planning->date_end_formation);
        }])->get()->find($formation->CodeFormation)->toJson();
    }
}
