<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lieu;

class LieuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Lieu::all()->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Lieu $lieu)
    {
        return $lieu->toJson();
    }
}
