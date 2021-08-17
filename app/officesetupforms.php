<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class officesetupforms extends Model
{
    protected $connection= 'mongodb';
    protected $fillable = ["officeid", "officename","adress","maximum_branch","maximum_somitee","office_in_charge","phone","email"];
}
