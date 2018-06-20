<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Cours';
    public $incrementing = false;
    protected $casts = [
        'id' => 'string',
    ];
    public $primaryKey = 'IdCours';

    public function planningCourse()
    {
        return $this->hasOne('App\Models\PlanningCourse');
    }
}
