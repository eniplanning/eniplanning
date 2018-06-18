<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Cours';
    protected $primaryKey = 'IdCours';

    public function planningCourse(){
        return $this->hasOne('App\Models\PlanningCourse');
    }
}
