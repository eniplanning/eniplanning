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
        'CodePromotion' => 'code_promotion',
        'PrixPublic' => 'public_price',
        'IdModule' => 'module_id',
        'LibelleCours' => 'short_label',
        'DureePrevueEnHeures' => 'expected_time_hour',
        'DateAdefinir' => 'date_to_be_defined',
        'CodeSalle' => 'code_room',
        'CodeFormateur' => 'code_teacher',
        'CodeLieu' => 'code_location'
    ];

    public function planningCourses()
    {
        return $this->hasMany(PlanningCourse::class);
    }

    public function toModule()
    {
        return $this->belongsTo(Module::class, 'IdModule');
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class, 'CodePromotion');
    }

}
