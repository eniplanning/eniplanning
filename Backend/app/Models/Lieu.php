<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lieu extends Model
{
    // https://laravel.com/docs/5.6/eloquent
    protected $connection = 'enierp';
    protected $table = 'lieu';
    protected $primaryKey = 'CodeLieu';

    public function plannings()
    {
        return $this->hasMany(Planning::class, 'lieu_id');
    }
}
