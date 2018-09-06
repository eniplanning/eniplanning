<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * User Model Class 
 * Database Eni Planning
 */
class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'firstname',
        'email',
        'password',
        'is_active',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function plannings()
    {
        return $this->hasMany(Planning::class);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function setNameAttribute($value)
    {   
        $this->attributes['name'] = trim(ucwords(mb_strtolower($value), "- '"));
    }

    public function setFirstnameAttribute($value)
    {
        $this->attributes['firstname'] = trim(ucwords(mb_strtolower($value), "- '"));
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
