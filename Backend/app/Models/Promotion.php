<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Promotion';
    protected $primaryKey = 'CodePromotion';
    protected $keyType = 'string';
    protected $dateFormat = 'Y-d-m H:i:s';
    protected $map = [
        'Libelle' => 'label',
        'Debut' => 'start',
        'Fin' => 'end',
        'CodeFormation' => 'code_training',
        'PrixPublicAffecte' => 'affected_public_price',
        'PrixPECAffecte' => 'affected_pec_price',
        'PrixFinanceAffecte' => 'affected_funded_price',
        'CodeLieu' => 'code_location',
    ];

    public function formation()
    {
        return $this->hasOne(Formation::class);
    }

    public function cours()
    {
        return $this->hasMany(Cours::class, 'CodePromotion');
    }
}
