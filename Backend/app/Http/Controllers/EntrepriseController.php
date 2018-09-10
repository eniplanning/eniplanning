<?php

namespace App\Http\Controllers;

use Illuminate\Support\facades\Config;
use App\Models\Entreprise;
use App\Models\StagiaireParEntreprise;
use App\Models\Stagiaire;
use App\Http\Controllers\StagiaireParEntrepriseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Log;


class EntrepriseController extends Controller
{
    //NOT USED ANYMORE. USING BELONGSTOMANY ON STAGIAIRE MODEL = ONLY 1 LINE
    // /**
    //  * Récuperer une Entreprise à partir d'un stagiaire.
    //  * @param  Stagiaire = Instance de Stagiaire
    //  * @return \Illuminate\Http\Response = Instance de Entreprise
    //  */
    // static function getByStagiaire(Stagiaire $stagiaire)
    // {
    //     $stagiaireParEntreprise = StagiaireParEntrepriseController::getByStagiaire($stagiaire);
    //     $entreprise = null;
    //     if (!is_null($stagiaireParEntreprise))
    //     {
    //         $entreprise = Entreprise::where('codeEntreprise', [$stagiaireParEntreprise->CodeEntreprise])->first();
    //     }
    //     return $entreprise;
    // }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Entreprise::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Entreprise $entreprise)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Entreprise::findOrFail(trim($entreprise->CodeEntreprise))->toJson();
    }
}
