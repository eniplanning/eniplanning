<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'entreprise';
    protected $primaryKey = 'CodeEntreprise';
    
    // Liste des attributs restitués dans les tableaux d'objets
    // https://laravel.com/docs/5.6/eloquent-serialization
    protected $visible = ['CodeEntreprise', 'RaisonSociale', 'Adresse1', 'CodePostal', 'Ville'];
    public $timestamps = false;

}
