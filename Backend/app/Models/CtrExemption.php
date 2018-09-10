<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CtrExemption extends Model
{
    protected $fillable = ['planning_id', 'module_id', 'num_week'];

    public function planning()
    {
        return $this->hasOne(Planning::class);
    }

    public function module()
    {
        return $this->hasOne(Module::class);
    }
}
