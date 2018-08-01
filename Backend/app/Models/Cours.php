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

    public function planningCourses()
    {
        return $this->hasMany(PlanningCourse::class);
    }

    public function modules()
    {
        return $this->hasMany(Module::class);
    }

}
