<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Module';
    protected $primaryKey = 'IdModule';
    protected $dateFormat = 'Y-d-m H:i:s';

    public function chainingModules()
    {
        return $this->hasMany(ChainingModule::class);
    }

    public function ctrPrioritizations()
    {
        return $this->hasMany(CtrPrioritization::class);
    }

    public function ctrExemptions()
    {
        return $this->hasMany(CtrExemption::class);
    }

    public function cours()
    {
        return $this->hasMany(Cours::class);
    }
}
