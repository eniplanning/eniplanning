<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModuleParUnite extends Model
{
    protected $connection = 'enierp';
    protected $table = 'ModuleParUnite';
    protected $primaryKey = 'Id';
    protected $keyType = 'string';
    protected $dateFormat = 'Y-d-m H:i:s';

    public function module()
    {
        return $this->hasOne(Module::class, 'IdModule', 'IdModule');
    }
}
