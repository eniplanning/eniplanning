<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Formation';
    protected $primaryKey = 'CodeFormation';
    protected $keyType = 'string';
    protected $dateFormat = 'Y-d-m H:i:s';
    protected $map = [
        'LibelleLong' => 'long_label',
        'LibelleCourt' => 'short_label',
        'DureeEnHeures' => 'time_hour',
        'TauxHoraire' => 'hourly_rate',
        'CodeTitre' => 'code_title',
        'PrixPublicEnCours' => 'current_public_price',
        'HeureCentre' => 'center_hour',
        'HeureStage' => 'internship_hour',
        'SemainesCentre' => 'center_week',
        'SemainesStage' => 'internship_week',
        'DureeEnSemaine' => 'duration_week',
        'Archiver' => 'archive',
        'ECFaPasser' => 'ecf_to_pass',
        'TypeFormation' => 'formation_type',
        'CodeLieu' => 'code_location'
    ];

    public function promotions()
    {
        return $this->hasMany(Promotion::class);
    }
}
