<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class membersetupforms extends Model
{
    protected $connection= 'mongodb';
    protected $fillable = ['officeid', 'branchid','somiteename','fullname','fathername', 
            'mothername', 'phone', 'dob','nid','nomini_fullname','nomini_fathername', 'nomini_mothername',
            'nomini_relation','nomini_phone','nomini_dob','nomini_nid'];
}
