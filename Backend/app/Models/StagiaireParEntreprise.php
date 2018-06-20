<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StagiaireParEntreprise extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'stagiaireparentreprise';
    protected $primaryKey = 'NumLien';
    
    
    // Liste des attributs restitués dans les tableaux d'objets
    // https://laravel.com/docs/5.6/eloquent-serialization
    protected $visible = ['CodeStagiaire', 'CodeEntreprise', 'NumLien'];
    public $timestamps = false;
}