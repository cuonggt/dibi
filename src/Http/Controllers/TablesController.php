<?php

namespace Cuonggt\Dibi\Http\Controllers;

use Cuonggt\Dibi\Dibi;

class TablesController extends Controller
{
    public function index()
    {
        return Dibi::service()->tables();
    }

    public function show($name)
    {
        return response()->json(Dibi::service()->table($name));
    }
}
