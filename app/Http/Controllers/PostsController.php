<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB; 

class PostsController extends Controller
{

    public function index()
    {
        $posts = DB::table('posts')->select('id','title','body')->get();

        return view('app')->with('posts',json_encode($posts));
    }

    

    public function login(Request $request)
    {
        return $request->input();
    }
}
