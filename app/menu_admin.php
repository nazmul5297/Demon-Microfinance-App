<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class menu_admin extends Model
{
    protected $connection= 'mongodb';
    protected $collection = 'menu_admin';
    
}
