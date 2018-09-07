<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;
use PhpParser\Node\Param;
use Illuminate\Support\Facades\Log;

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
        // Config::set('database.default', 'enierp');  //Only set database.default for current request

        // return Formation::where('CodeFormation', "=", $request->id)->with([
        return $formation->with([
            'promotions',
            'uniteparformation.module.cours',
            'titre',
        ])->get()->first()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  String $id
     * @param  String $action
     * @param  String $date
     * @param  String $end
     * @return \Illuminate\Http\Response
     */
    public function showWithCoursPeriod($id, $start, $end)
    {
        $formation = Formation::find($id);
        
        Log::info('FormationController.showWithCoursPeriod.$formation->CodeLieu');
        Log::info($formation->CodeFormation);
        
        $formation
            // ->where('uniteparformation.modules.cours.CodeLieu', '=', $formation->CodeLieu)
            ->whereDate('uniteparformation->module->cours->Debut', '>=', $start)
            ->whereDate('uniteparformation->module->cours->Fin', '<=', $end)
            ->get()->first()->toJson();
    }
}
