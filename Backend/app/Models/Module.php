<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Module';
    protected $primaryKey = 'IdModule';

    public function chainingModule(){
        return $this->hasOne('App\Models\ChainingModule');
    }

    public function ctrPrioritization(){
        return $this->hasOne('App\Models\CtrPrioritization');
    }

    public function ctrExemption(){
        return $this->hasOne('App\Models\CtrExemption');
    }
}
