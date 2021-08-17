<?php

namespace App\Http\Controllers;

use App\admin_logins;
use Illuminate\Http\Request;

class AdminLoginController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\admin_login  $admin_login
     * @return \Illuminate\Http\Response
     */
    public function show(admin_login $admin_login)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\admin_login  $admin_login
     * @return \Illuminate\Http\Response
     */
    public function edit(admin_login $admin_login)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\admin_login  $admin_login
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, admin_login $admin_login)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\admin_login  $admin_login
     * @return \Illuminate\Http\Response
     */
    public function destroy(admin_login $admin_login)
    {
        //
    }

    public function login(Request $request)
    {   
        
        
        $validator= $request->validate([
            'email' => 'required',
            'pass' => 'required'
            ]);

            //  admin_logins::create($request->all());
            //  return ($request);
          
    
        $email_status = admin_logins ::where('email', '=',  $request->email)->first();
        if(!is_null($email_status)){
            $pass_status=  admin_logins::where('email', '=',  $request->email)->where('pass', '=',  $request->pass)->first();
            if(!is_null($pass_status)){
                $email_status=  admin_logins ::where('email', '=',  $request->email)->where('pass', '=',  $request->pass)->first();
                // return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $email_status]);
                return (200);
            }
                else {
                    return response()->json(["status" => "failed", "success" => false, "message" => "password does not match"]);

                }

            }

            else{
                 return response()->json(["status" => "failed", "success" => false, "message" => "email isn't avialable in the database"]);
            }
        
     }
}
