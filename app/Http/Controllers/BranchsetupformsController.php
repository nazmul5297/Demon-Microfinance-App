<?php

namespace App\Http\Controllers;

use App\branchsetupforms;
use Illuminate\Http\Request;

class BranchsetupformsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return branchsetupforms::all(['branchid','branchname']);
    }

    public function Index1()
    {
        return branchsetupforms::all();
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
            'branchid' => 'nullable',
            'branchname'=> 'nullable',
            'adress' => 'nullable',
             'maximum_somitee' => 'nullable',
            'branch_in_charge' => 'nullable',
            'phone' => 'nullable',
            'email'=> 'nullable'
            ]);

            branchsetupforms::create( $request->all());
             return ($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\branchsetupforms  $branchsetupforms
     * @return \Illuminate\Http\Response
     */
    public function show(branchsetupforms $branchsetupforms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\branchsetupforms  $branchsetupforms
     * @return \Illuminate\Http\Response
     */
    public function edit(branchsetupforms $branchsetupforms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\branchsetupforms  $branchsetupforms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, branchsetupforms $branchsetupforms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\branchsetupforms  $branchsetupforms
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $branchsetupforms = branchsetupforms::find($id);
         $branchsetupforms->delete();
         return response()->json('Product Deleted Successfully.');
    }


    public function findbranchid ( Request $request ){
        $request->validate([
            'officeid' => 'nullable'
            ]);

            //  return branchsetupforms::all('branchid')->where ('officeid', '=',  $request->officeid);
            return branchsetupforms::where ('officeid', '=',  $request->officeid)->get(['branchid','branchname']);
    }
}
