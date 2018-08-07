<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Cours';
    protected $primaryKey = 'IdCours';
    protected $keyType = 'string';
    protected $dateFormat = 'Y-d-m H:i:s';
    protected $maps = [
        'Debut' => 'date_start',
        'Fin' => 'date_end',
        'DureeReelleEnHeures' => 'real_time_hour',
        'DureePrevueEnHeures' => 'expected_time_hour',
        'DateAdefinir' => 'date_to_be_defined',
    ];

    public function planningCourses()
    {
        return $this->hasMany(PlanningCourse::class);
    }

    public function modules()
    {
        return $this->hasMany(Module::class);
    }

}
