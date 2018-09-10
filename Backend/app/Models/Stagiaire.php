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
    protected $appends = ['Entreprise', 'NomComplet'];


    public function getEntrepriseAttribute()
    {
        return $this->belongsToMany(Entreprise::class, 'StagiaireParEntreprise', 'CodeEntreprise', 'CodeStagiaire');
    }

    public function getNomCompletAttribute()
    {
        return $this->Nom.' '.$this->Prenom;
    }
}
