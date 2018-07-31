<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChainingModule extends Model
{
    protected $fillable = ['module_id', 'previous_module_id', 'is_required', 'formation_id'];

    public function module()
    {
        return $this->hasOne(Module::class, 'module_id');
    }
    
    public function previousModule()
    {
        return $this->hasOne(Module::class, 'module_id', 'previous_module_id');
    }
}
