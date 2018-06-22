<?php

namespace App\Http\Controllers;

use App\Models\Stagiaire;
use App\Models\StagiaireParEntreprise;

class StagiaireParEntrepriseController extends Controller
{
<<<<<<< HEAD
    // TODO NOM TABLE
    const TABLE_NAME_STAGIAIRE_PAR_ENTREPRISE = '.dbo.StagiaireParEntreprise';
    
=======
>>>>>>> dev
    /**
     * Récuperer un StagiaireParEntreprise à partir d'un stagiaire.
     * @param  Stagiaire = Instance de Stagiaire
     * @return \Illuminate\Http\Response = Instance de StagiaireParEntreprise
     */
    public static function getByStagiaire(Stagiaire $stagiaire)
    {
        return StagiaireParEntreprise::where('codeStagiaire', [$stagiaire->CodeStagiaire])
            ->orderBy('DateDebutEnEts', 'desc')
            ->first();
    }
}
