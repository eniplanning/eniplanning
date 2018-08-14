<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComplementaryCourse extends Model
{
    protected $fillable = [
        'date_start',
        'date_end',
        'real_time_hour',
        'expected_time_hour',
        'date_to_be_defined',
        'complementary_module_id'
    ];
    
    public function planningCourses()
    {
        return $this->hasMany(PlanningCourse::class);
    }

    public function complementaryModule()
    {
        return $this->hasOne(ComplementaryModule::class);
    }
}
