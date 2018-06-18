<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    protected $connection = 'enierp';
    protected $table = 'Formation';
    protected $primaryKey = 'CodeFormation';
}
