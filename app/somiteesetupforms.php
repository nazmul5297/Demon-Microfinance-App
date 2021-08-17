<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class somiteesetupforms extends Model
{
    protected $connection= 'mongodb';
    protected $fillable = ['officeid', 'branchid','somiteetype','somiteename','somiteeadress','somiteeincharge', 'maximum_member','formationdate'];
}         