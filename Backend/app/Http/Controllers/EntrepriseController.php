<?php

namespace App\Http\Controllers;

use Illuminate\Support\facades\Config;
use App\Models\Entreprise;
use App\Models\StagiaireParEntreprise;
use App\Models\Stagiaire;
use App\Http\Controllers\StagiaireParEntrepriseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EntrepriseController extends Controller
{
    const TABLE_NAME_ENTREPRISE = 'dbo.Entreprise';

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Stagiaire  $stagiaire
     * @return \Illuminate\Http\Response
     */
    static function getByStagiaire(Stagiaire $stagiaire)
    {
        $stagiaireParEntreprise = StagiaireParEntrepriseController::getByStagiaire($stagiaire);
        if (is_null($stagiaireParEntreprise)) {
            return;
        } else {
            $entreprise = DB::select('select * from '. Config::get('app.db_erp_name') . self::TABLE_NAME_ENTREPRISE  .' where codeentreprise = ?',
                 [$stagiaireParEntreprise[0]->CodeEntreprise]);
            if (is_null($entreprise)) {
                return;
            }
            return $entreprise;
        } 
    }

}
