<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CtrPrioritization extends Model
{
    protected $fillable = ['planning_id', 'module_id', 'before_date', 'priority'];

    protected $dateFormat = 'Y-d-m H:i:s';

    public function planning(){
        return $this->belongsTo('App\Models\Planning', 'planning_id');
    }

    public function module(){
        return $this->belongsTo('App\Models\Module', 'module_id');
    }
}
