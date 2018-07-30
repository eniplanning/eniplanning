<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComplementaryModule extends Model
{
    protected $fillable = ['label', 'description', 'duration'];
        
    public function complementaryCourse(){
        return $this->hasOne('App\Models\ComplementaryCourse');
    }
}
