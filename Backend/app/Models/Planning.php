<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Planning extends Model
{
    protected $fillable = [
        'label',
        'date_start_contract',
        'date_end_contract',
        'date_start_formation',
        'date_end_formation',
        'date_subscription',
        'nb_weeks_formation',
        'nb_weeks_enterprise',
        'limit_day_formation',
        'num_version',
        'status',
        'is_archived',
        'is_model',
        'is_broken',
        'planning_id',
        'stagiaire_id',
        'formation_id',
        'user_id',
        'code_lieu',
    ];

    public function ctrDisponibilities()
    {
        return $this->hasMany(CtrDisponibility::class);
    }

    public function ctrExemptions()
    {
        return $this->hasMany(CtrExemption::class);
    }

    public function ctrPrioritizations()
    {
        return $this->hasMany(CtrPrioritization::class);
    }

    public function planningCourses()
    {
        return $this->hasMany(PlanningCourse::class, 'planning_id', 'id');
    }

    public function lieu()
    {
        return $this->hasOne(Planning::class, 'lieu_id');
    }
}
