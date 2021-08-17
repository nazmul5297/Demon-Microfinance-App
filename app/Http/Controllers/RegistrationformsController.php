<?php

namespace App\Http\Controllers;

use App\registrationforms;
use Illuminate\Http\Request;

class RegistrationformsController extends Controller
{


    private $status_code =  200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'fname' =>'nullable',
            'lname' => 'nullable',
            'email' => 'nullable',
            'pass' => 'nullable',
            'cpass' => 'nullable',
            'phone' => 'nullable',
             'bid' => 'nullable',
             'usertype' => 'nullable' 
         ]);
    
            registrationforms::create($request->all());
             return (200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\registrationforms  $registrationforms
     * @return \Illuminate\Http\Response
     */
    public function show(registrationforms $registrationforms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\registrationforms  $registrationforms
     * @return \Illuminate\Http\Response
     */
    public function edit(registrationforms $registrationforms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\registrationforms  $registrationforms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, registrationforms $registrationforms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\registrationforms  $registrationforms
     * @return \Illuminate\Http\Response
     */
    public function destroy(registrationforms $registrationforms)
    {
        //
    }

    public function login(Request $request)
    {   
        // get(['fname','id : 0']);

        // $validator= $request->validate([
        //     'email' => 'required',
        //     'pass' => 'required'
        //     ]);
        
            $useremail=$request->input('email');
        $email_status = registrationforms ::where('email', '=',  $request->email)->first();
        if(!is_null($email_status)){
            $pass_status=  registrationforms ::where('email', '=',  $request->email)->where('pass', '=',  $request->pass)->first();
            if(!is_null($pass_status)){
                $usertype_admin=  registrationforms ::where('email', '=',  $request->email)->where('pass', '=',  $request->pass)->where('usertype', '=', 'Admin')->first();
                $usertype_maker=  registrationforms ::where('email', '=',  $request->email)->where('pass', '=',  $request->pass)->where('usertype', '=', 'Maker_User')->first(); 
                $usertype_checkeruser=  registrationforms ::where('email', '=',  $request->email)->where('pass', '=',  $request->pass)->where('usertype', '=', 'Checker User')->first();
                // return response()->json(["statuslogin" => 200, "success" => true, "message" => "You have logged in successfully", "username" => $email_status]);
                if(!is_null($usertype_admin)){
                    return response()->json(["status" => 200, "success" => true, "message" => "Login Successful completed successfully", "data" => $useremail]);
                    //  return (200);

                }
                if(!is_null($usertype_maker)){
                    return response()->json(["status" => 100, "success" => true, "message" => "Login Successful completed successfully", "data" => $useremail]);
                    // return (100);
                  }
                  if(!is_null( $usertype_checkeruser)){
                    return response()->json(["status" => 50, "success" => true, "message" => "Login Successful completed successfully", "data" => $useremail]);
                    //  return (50);
                  }
               
               
                
                
                // return (200);
            //    return json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $email_status])
            }
                else {
                    return (10);

                }

            }

            else{
                 return (5);
            }
        
    }
} 


