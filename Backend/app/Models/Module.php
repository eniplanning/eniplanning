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
        return $this->hasMany(Cours::class, 'IdModule');
    }

    public function coursPeriode()
    {
        return $this->hasMany(Cours::class, 'IdModule');
        // return $this->hasMany(Cours::class, 'IdModule')
        //     ->where('Cours.Debut', '>=', '2018-01-01')
        //     ->where('Cours.Fin', '<=', '2018-01-06')
        //     ->where('Cours.CodeLieu', '=', '1');
    }

    // public function uniteparformations()
    // {
    //     return $this->belongsToMany(UniteParFormation::class, 'ModuleParUnite', 'IdUnite', 'IdModule');
    // }
}
