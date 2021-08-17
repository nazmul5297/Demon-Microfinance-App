<?php

namespace App\Http\Controllers;

use App\membersetupforms;
use Illuminate\Http\Request;

class MembersetupformsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return membersetupforms::all();
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
            'somiteename'=> 'nullable',
            'fullname' => 'nullable',
             'fathername' => 'nullable',
            'mothername' => 'nullable',
            'phone' => 'nullable',
            'dob'=> 'nullable',
            'nid'=> 'nullable',
            'nomini_fullname' => 'nullable',
             'nomini_fathername' => 'nullable',
            'nomini_mothername' => 'nullable',
            'nomini_relation' => 'nullable',
            'nomini_phone' => 'nullable',
            'nomini_dob'=> 'nullable',
            'nomini_nid'=> 'nullable'
            ]);
             membersetupforms::create($request->all());
             return ($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\membersetupforms  $membersetupforms
     * @return \Illuminate\Http\Response
     */
    public function show(membersetupforms $membersetupforms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\membersetupforms  $membersetupforms
     * @return \Illuminate\Http\Response
     */
    public function edit(membersetupforms $membersetupforms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\membersetupforms  $membersetupforms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, membersetupforms $membersetupforms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\membersetupforms  $membersetupforms
     * @return \Illuminate\Http\Response
     */
    public function destroy(membersetupforms $membersetupforms)
    {
        //
    }

    public function member_details_somitee (Request $request ){
        $request->validate([
            'somiteename' => 'nullable'
            ]);
    
            //  return branchsetupforms::all('branchid')->where ('officeid', '=',  $request->officeid);
            return membersetupforms::where ('somiteename', '=',  $request->somiteename)
                                    ->get(['fullname','phone','nomini_fullname','nomini_phone']);
       }
}
