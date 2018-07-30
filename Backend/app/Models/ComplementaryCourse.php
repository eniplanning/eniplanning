<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComplementaryCourse extends Model
{
    protected $fillable = [
        'date_start',
        'date_end',
        'real_duration',
        'date_to_be_defined',
        'complementary_module_id'
    ];
    
    public function planningCourse(){
        return $this->hasOne('App\Models\PlanningCourse');
    }

    public function complementaryModule(){
        return $this->belongsTo('App\Models\ComplementaryModule', 'complementary_module_id');
    }
}
