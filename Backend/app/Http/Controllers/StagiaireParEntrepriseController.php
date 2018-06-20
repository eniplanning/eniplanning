<?php

namespace App\Http\Controllers;

use Illuminate\Support\facades\Config;
use App\Models\StagiaireParEntreprise;
use App\Models\Stagiaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StagiaireParEntrepriseController extends Controller
{
    // TODO NOM TABLE
    const TABLE_NAME_STAGIAIRE_PAR_ENTREPRISE = 'dbo.StagiaireParEntreprise';
    
    /**
     * Get the specified resource by $codeStagiaire.
     * https://laravel.com/docs/5.6/database
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    static function getByStagiaire(Stagiaire $stagiaire)
    {
        $stagiaireParEntreprise= DB::select('select top(1) * from '. Config::get('app.db_erp_name') . self::TABLE_NAME_STAGIAIRE_PAR_ENTREPRISE.
            ' where codeStagiaire = ? order by DateDebutEnEts desc', [$stagiaire->CodeStagiaire]);
        return $stagiaireParEntreprise;
    }

}
