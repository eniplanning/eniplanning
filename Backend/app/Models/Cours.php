<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class Cours extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Cours';
    protected $primaryKey = 'IdCours';
    protected $keyType = 'string';

    public function getDebutAttribute($value)
    {   
        return (new Carbon($value))->format('Y-m-d H:i:s');
    }
    
    public function getFinAttribute($value)
    {
        return (new Carbon($value))->format('Y-m-d H:i:s');
    }

    public function planningCourses()
    {
        return $this->hasMany(PlanningCourse::class);
    }

    public function toModule()
    {
        // return $this->belongsTo(Module::class, 'IdModule');
        return $this->hasOne(Module::class, 'IdModule');
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class, 'CodePromotion');
    }

}
