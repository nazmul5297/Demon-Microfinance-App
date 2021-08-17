<?php

namespace App\Http\Controllers;

use App\dynamic;
use Illuminate\Http\Request;

class DynamicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return dynamic::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\dynamic  $dynamic
     * @return \Illuminate\Http\Response
     */
    public function show(dynamic $dynamic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\dynamic  $dynamic
     * @return \Illuminate\Http\Response
     */
    public function edit(dynamic $dynamic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\dynamic  $dynamic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, dynamic $dynamic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\dynamic  $dynamic
     * @return \Illuminate\Http\Response
     */
    public function destroy(dynamic $dynamic)
    {
        //
    }
}
