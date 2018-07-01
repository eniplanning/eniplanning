<?php

namespace App\Models;


use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

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

    protected $visible = ['id', 'firstname', 'name', 'email', 'is_active', 'role_id'];
    protected $connection = 'eniplanning';
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $dateFormat = 'Y-d-m H:i:s';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function planning(){
        return $this->hasOne('App\Models\Planning');
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
    
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = strtoupper($value);
    }

    public function setFirstnameAttribute($value)
    {
        $firstname = '';
        $firstname = strtoupper($value[0]);
        for($i = 1; $i<strlen($value);$i++){
            $firstname.=strtolower($value[$i]);
        }
        $this->attributes['firstname'] = $firstname;
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
