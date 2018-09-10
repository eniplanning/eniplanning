<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanningCourse extends Model
{
    protected $fillable = [
        'planning_id',
        'course_id',
        'complementary_course_id',
        'date_start',
        'date_end',
        'public_price_affected',
        'label',
        'short_label',
        'real_time_hour',
        'expected_time_hour',
        'date_to_be_define',
        'code_promotion',
        'module_id',
        'code_room',
        'code_teacher',
        'code_location',
    ];

    public function planning()
    {
        return $this->hasOne(Planning::class);
    }

    public function cours()
    {
        return $this->hasOne(Cours::class);
    }

    public function complementaryCourse()
    {
        return $this->hasOne(ComplementaryCourse::class);
    }
}
