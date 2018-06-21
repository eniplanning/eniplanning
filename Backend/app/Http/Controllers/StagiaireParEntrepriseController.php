<?php

namespace App\Http\Controllers;

use Illuminate\Support\facades\Config;
use App\Models\StagiaireParEntreprise;
use App\Models\Stagiaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StagiaireParEntrepriseController extends Controller
{
    const TABLE_NAME = 'StagiaireParEntreprise';
    
    /**
     * Récuperer un StagiaireParEntreprise à partir d'un stagiaire.
     * @param  Stagiaire = Instance de Stagiaire
     * @return \Illuminate\Http\Response = Instance de StagiaireParEntreprise
     */
    static function getByStagiaire(Stagiaire $stagiaire)
    {
        return DB::table(Config::get('app.prefix_erp_tablename') . self::TABLE_NAME)
            ->where('codeStagiaire', [$stagiaire->CodeStagiaire])
            ->orderBy('DateDebutEnEts', 'desc')
            ->first();
    }
}
