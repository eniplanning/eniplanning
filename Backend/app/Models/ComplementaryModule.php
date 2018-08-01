<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComplementaryModule extends Model
{
    protected $fillable = ['label', 'description', 'duration'];

    public function complementaryCourses()
    {
        return $this->hasMany(ComplementaryCourse::class);
    }
}
