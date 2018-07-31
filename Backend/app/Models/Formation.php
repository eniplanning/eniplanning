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
        return $this->hasMany(Promotion::class);
    }
}
