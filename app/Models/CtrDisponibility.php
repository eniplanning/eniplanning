<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CtrDisponibility extends Model
{
    protected $fillable = ['date_start', 'date_end', 'is_available', 'planning_id'];

    public function planning(){
        return $this->belongsTo('App\Models\Planning', 'planning_id');
    }
}
