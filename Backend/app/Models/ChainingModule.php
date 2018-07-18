<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChainingModule extends Model
{
    protected $dateFormat = 'Y-d-m H:i:s';
    protected $fillable = ['module_id', 'previous_module_id', 'is_required', 'formation_id'];

    public function module(){
        return $this->belongsTo('App\Models\Module', 'module_id', 'previous_module_id');
    }
}
