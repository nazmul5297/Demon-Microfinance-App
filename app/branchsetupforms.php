<?php

namespace App;


use Jenssegers\Mongodb\Eloquent\Model;

class branchsetupforms extends Model
{
    protected $connection= 'mongodb';
    protected $fillable = ["officeid", "branchid","branchname","adress","maximum_somitee","branch_in_charge","phone","email"];
}
    

