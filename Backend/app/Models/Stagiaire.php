<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stagiaire extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'stagiaire';
    protected $primaryKey = 'CodeStagiaire';

    // Liste des attributs restitués dans les tableaux d'objets
    // https://laravel.com/docs/5.6/eloquent-serialization
    protected $visible = ['CodeStagiaire', 'Civilite', 'Nom', 'Prenom'];
    public $timestamps = false;

}
