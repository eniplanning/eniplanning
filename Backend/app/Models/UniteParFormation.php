<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UniteParFormation extends Model
{
    protected $connection = 'enierp';
    protected $table = 'UniteParFormation';
    protected $primaryKey = 'Id';
    protected $keyType = 'string';
    protected $dateFormat = 'Y-d-m H:i:s';

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'ModuleParUnite', 'IdUnite', 'IdModule');
    }
}
