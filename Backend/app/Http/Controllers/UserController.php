<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Log;


/**
 * User Controller Class
 */
class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return User::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SignUpRequest $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.')');
        $user = User::create($request->all());
        return $user->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {   
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$user.')');
        return $user->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.' '.$user.')');
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => [
                'required',
                Rule::unique('users')->ignore($user->id),
                'email',
            ]
        ]);
        $user->update($request->all());
        return $user->toJson();
    }

    /**
     * Update the specified resource Password in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(Request $request, User $user)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.' '.$user.')');
        $validatedData = $request->validate([
            'password' => [
                'required',
                'string',
                'confirmed',
                'min:6',
            ]
        ]);
        $user = User::find($request['id']);
        $user->update(['password'=>$request->password]);
        return $user->toJson();
    }
}
