<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Titre extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Titre';
    protected $primaryKey = 'CodeTitre';
    protected $keyType = 'string';

    public function formations()
    {
        return $this->hasMany(Formation::class, 'CodeFormation', 'CodeFormation');
    }
}
