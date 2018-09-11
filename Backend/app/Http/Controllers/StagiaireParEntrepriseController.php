<?php

namespace App\Http\Controllers;

use App\Models\Stagiaire;
use App\Models\StagiaireParEntreprise;
use Illuminate\Support\Facades\DB;
use Log;

class StagiaireParEntrepriseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return StagiaireParEntreprise::all()->toJson();
    }

    /**
     * Récuperer un StagiaireParEntreprise à partir d'un stagiaire.
     * @param  Stagiaire = Instance de Stagiaire
     * @return \Illuminate\Http\Response = Instance de StagiaireParEntreprise
     */
    public static function getByStagiaire(Stagiaire $stagiaire)
    {
        //Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return StagiaireParEntreprise::where('codeStagiaire', [$stagiaire->CodeStagiaire])
            ->orderBy('DateDebutEnEts', 'desc')
            ->first();
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $spe = new StagiaireParEntreprise();
        $spe->setConnection('enierp');
        $spe = StagiaireParEntreprise::where('CodeStagiaire', $id)
            ->orderBy('NumLien', 'desc')
            ->first();
        return $spe->toJson();
    }
}
