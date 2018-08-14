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

    public function formation()
    {
        return $this->hasOne(Formation::class);
    }

    public function cours()
    {
        return $this->hasMany(Cours::class);
    }

    // @todo : Voir l'utilité de créer un controller pour récupérer les cours via un formation en passant par la promotion
}
