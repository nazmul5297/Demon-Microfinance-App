<?php

namespace App\Http\Controllers;

use App\somiteesetupforms;
use Illuminate\Http\Request;

class SomiteesetupformsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return somiteesetupforms:: all('somiteename');
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
         $request->validate([
            'officeid' => 'nullable',
            'branchid'=> 'nullable',
            'somiteetype'=> 'nullable',
            'somiteename'=> 'nullable',
            'somiteeadress' => 'nullable',
             'somiteeincharge' => 'nullable',
            'maximum_member' => 'nullable',
            'formationdate' => 'nullable'
            ]);
            somiteesetupforms::create($request->all());
             return ($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\somiteesetupforms  $somiteesetupforms
     * @return \Illuminate\Http\Response
     */
    public function show(somiteesetupforms $somiteesetupforms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\somiteesetupforms  $somiteesetupforms
     * @return \Illuminate\Http\Response
     */
    public function edit(somiteesetupforms $somiteesetupforms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\somiteesetupforms  $somiteesetupforms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, somiteesetupforms $somiteesetupforms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\somiteesetupforms  $somiteesetupforms
     * @return \Illuminate\Http\Response
     */
    public function destroy(somiteesetupforms $somiteesetupforms)
    {
        //
    }


    public function findsomiteename ( Request $request ){
        $request->validate([
            'officeid' => 'nullable'
            ]);

            //  return branchsetupforms::all('branchid')->where ('officeid', '=',  $request->officeid);
            return somiteesetupforms::where ('officeid', '=',  $request->officeid)
                                     ->where ('branchid', '=',  $request->branchid)
                                    ->get(['somiteename']);
    }

    

    public function getallsomiteename(){
        return somiteesetupforms::all(['somiteename']);
    }

    public function find_branchid( Request $request ){
        $request->validate([
            'somiteename' => 'nullable'
            ]);

            //  return branchsetupforms::all('branchid')->where ('officeid', '=',  $request->officeid);
            return somiteesetupforms::where ('somiteename', '=',  $request->somiteename)
                                    ->get(['branchid']);
    }

    public function find_officeid( Request $request ){
        $request->validate([
            'somiteename' => 'nullable'
            ]);

            //  return branchsetupforms::all('branchid')->where ('officeid', '=',  $request->officeid);
            return somiteesetupforms::where ('somiteename', '=',  $request->somiteename)
                                    ->get(['officeid']);
    }

 
}
