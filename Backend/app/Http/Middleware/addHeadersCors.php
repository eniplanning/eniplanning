<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\facades\Config;
use App\Facades\ConsoleOutput;

class addHeadersCors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {        
        return $next($request)
            ->header('Access-Control-Allow-Origin', Config::get('app.http_client'))
            ->header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, Origin')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }
}