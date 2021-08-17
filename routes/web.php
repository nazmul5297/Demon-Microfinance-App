<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{path?}', function () {
    return view('welcome');
});

Route::post ('memberdatastore', 'MembersetupformsController@store' );
Route::post('store', 'RegistrationformsController@store');
Route::post('login', 'RegistrationformsController@login');
 Route::post('loginadmin', 'AdminLoginController@login');


Route::post('officesetup', 'OfficesetupformsController@store');
// Route::get('find_office_id','OfficesetupformsController@findofficeid');
// Route::get('index','OfficesetupformsController@index');
Route::post('branchsetup', 'BranchsetupformsController@store');
Route::post ('/somiteesetup', 'SomiteesetupformsController@store' );
Route::post('checkofficeid', 'OfficesetupformsController@chechkid');
