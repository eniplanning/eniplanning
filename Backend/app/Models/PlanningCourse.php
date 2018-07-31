<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanningCourse extends Model
{
    protected $fillable = [
        'planning_id',
        'course_id',
        'complementary_course_id',
        'is_complementary',
        'start',
        'end',
        'public_price_affected',
        'label_course',
        'real_time_hour',
        'expected_time_hour',
        'date_to_be_define',
        'code_promotion',
        'module_id',
        'code_room',
        'code_teacher',
        'code_location'
    ];

    public function planning(){
        return $this->belongsTo('App\Models\Planning', 'planning_id');
    }

    public function cours(){
        return $this->belongsTo('App\Models\Cours', 'course_id');
    }

    public function complementaryCourse(){
        return $this->belongsTo('App\Models\ComplementaryCourse', 'complementary_course_id');
    }
}
