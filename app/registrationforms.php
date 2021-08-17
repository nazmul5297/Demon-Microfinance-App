<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class registrationforms extends Model
{
    protected $connection= 'mongodb';
    protected $collection = 'registrationforms';
    protected $fillable = ['fname', 'lname', 'email','pass', 'cpass', 'phone','officeid','bid','usertype'];
}
