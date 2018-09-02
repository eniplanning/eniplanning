<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Log;

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
    //public function store(Request $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.')');
        $user = User::create($request->all());
        return $user->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {   
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$user.')');
        // dd($user);
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
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        Log::info('request :' .$request);
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => [
                'required',
                Rule::unique('users')->ignore($user->id),
                'email'
            ]
        ]);
    
        //$request['password'] = Hash::make($request['password']);
        $user->update($request->all());
        return $user->toJson();
     
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(Request $request, User $user)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $validatedData = $request->validate([
            'password' => [
                'required',
                'string',
                'confirmed'
            ]
        ]);
        $user = User::find($request['id']);
        $user->update(['password'=>$request->password]);
        return $user->toJson();
    }
}
