<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SignUpRequest;
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
    // public function store(SignUpRequest $request)
    public function store(Request $request)
    {
        // Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.')');
        // $user = User::create($request->all());
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
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.','.$user.')');
        $user->update($request->all());
        return $user->toJson();
    }
    
}
