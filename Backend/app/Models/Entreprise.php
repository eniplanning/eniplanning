<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'entreprise';
    protected $primaryKey = 'CodeEntreprise';
    protected $dateFormat = 'Y-d-m H:i:s';
}
