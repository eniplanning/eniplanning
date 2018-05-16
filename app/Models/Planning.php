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
        'planning_id',
        'stagiaire_id',
        'formation_id',
        'user_id'
        ];

    public function ctrDisponibility(){
        return $this->hasOne('App\Models\CtrDisponibility');
    }

    public function ctrExempption(){
        return $this->hasOne('App\Models\CtrExemption');
    }

    public function ctrPrioritization(){
        return $this->hasOne('App\Models\CtrPrioritization');
    }
}
