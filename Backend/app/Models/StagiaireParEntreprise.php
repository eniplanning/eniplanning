<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StagiaireParEntreprise extends Model
{
    
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'StagiaireParEntreprise';
    protected $primaryKey = 'NumLien';
    protected $dateFormat = 'Y-d-m H:i:s';
}
