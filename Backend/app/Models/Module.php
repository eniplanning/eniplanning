<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Module';
    protected $primaryKey = 'IdModule';
    protected $dateFormat = 'Y-d-m H:i:s';
    protected $map = [
        'Libelle' => 'label',
        'DureeEnHeures' => 'time_hour',
        'DureeEnSemaines' => 'time_week',
        'PrixPublicEnCours' => 'current_public_price',
        'LibelleCourt' => 'short_label',
        'Archiver' => 'archive',
        'TypeModule' => 'module_type',
    ];

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
}
