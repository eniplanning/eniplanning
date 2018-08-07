<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\StagiaireParEntrepriseController;
use App\Http\Controllers\EntrepriseController;

class Stagiaire extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'stagiaire';
    protected $primaryKey = 'CodeStagiaire';
    protected $dateFormat = 'Y-d-m H:i:s';

    
    //Make it available in the json response
    protected $appends = ['Entreprise', 'nomComplet'];

    // Liste des attributs restitués dans les tableaux d'objets
    // protected $visible = ['CodeStagiaire', 'Civilite', 'Nom', 'Prenom', 'Adresse1', 'CodePostal', 'Ville', 'Email', 'DateNaissance', 'Entreprise'];
    public $timestamps = false;


    public function getEntrepriseAttribute()
    {
        return EntrepriseController::getByStagiaire($this);
    }

    public function getNomCompletAttribute()
    {
        return $this->Nom.$this->Prenom;
    }
}
