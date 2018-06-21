<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Cours';
    protected $primaryKey = 'IdCours';
    protected $keyType = 'string';
    
    public function getRouteKeyName()
    {
        return 'IdCours';
    }

    public function planningCourse()
    {
        return $this->hasOne('App\Models\PlanningCourse');
    }

}
