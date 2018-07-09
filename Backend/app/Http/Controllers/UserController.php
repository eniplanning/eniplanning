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
    public function store(SignUpRequest $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.')');
        $user = User::create($request->all());
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.','.$id.')');
        $user = User::find($id);
        $user->is_active = $request->input('is_active') == 'false' ? false : true;
        return $user->save();
        //User::update($user);
    }
    
}
