<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\ActivityLog;
use DateTime;
use Log;
use Illuminate\Support\Facades\DB;

/**
 * ActivityLog Controller Class
 */
class ActivityLogController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return ActivityLog::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.')');
        $activityLog = ActivityLog::create($request->all());
        return $activityLog->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  ActivityLog  $activityLog
     * @return \Illuminate\Http\Response
     */
    public function show(LogActivity $logActivity)
    {   
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$logActivity.')');
        return $activityLog->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  ActivityLog  $activityLog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LogActivity $logActivity)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.' '.$logActivity.')');
        $activityLog->update($request->all());
        return $activityLog->toJson();
    }
    
    /**
     * Delete the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  ActivityLog  $activityLog
     * @return \Illuminate\Http\Response
     */
    public function purge(Request $request) 
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ('.$request.')');
        return DB::table('activity_logs')->where('id', '>', '0')->delete();
    }
}   
