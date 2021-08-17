<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class admin_logins extends Model
{
    protected $connection= 'mongodb';
    protected $fillable = ["email","pass"];
}
