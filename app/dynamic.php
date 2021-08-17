<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class dynamic extends Model
{
    protected $connection= 'mongodb';
    protected $collection = 'dynamic';
    protected $fillable = ['name','menu'];
}
