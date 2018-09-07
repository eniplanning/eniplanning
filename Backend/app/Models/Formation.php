<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Formation';
    protected $primaryKey = 'CodeFormation';
    protected $keyType = 'string';
    protected $dateFormat = 'Y-d-m H:i:s';

    public function promotions()
    {
        return $this->hasMany(Promotion::class, 'CodeFormation');
    }

    public function uniteparformation()
    {
        // return $this->hasMany(UniteParFormation::class, 'CodeFormation', 'CodeFormation');
        return $this->belongsToMany(ModuleParUnite::class, 'UniteParFormation', 'CodeFormation', 'IdUniteFormation');
    }

    public function titre()
    {
        return $this->hasOne(Titre::class, 'CodeTitre', 'CodeTitre');
    }
}
