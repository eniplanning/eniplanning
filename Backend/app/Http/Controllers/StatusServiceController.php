<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Formation;
use App\Models\User;
use Log;


/**
 * StatusService Controller Class
 */
class StatusServiceController extends Controller {
    
    use RefreshDatabase;

    const EN_SERVICE = 'En service';
    const HORS_SERVICE = 'Hors service';

    /**
     * Send the status of the BackEnd (working or not)
     * url : .../Backend/public/api/backend
     * @return \Illuminate\Http\Response
     */
    public function backend()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return json_encode(self::EN_SERVICE);
    }

    /**
     * Send the status of ENI's ERP (working or not)
     * url : .../Backend/public/api/erpstatus
     * @return \Illuminate\Http\Response
     */
    public function erpStatus()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        if (Formation::all()->count() > 0) {
            return json_encode(self::EN_SERVICE);
        } else {
            return json_encode(self::HORS_SERVICE);
        }
    }

    /**
     * Send the status of ENI PLANNING's Database (working or not)
     * url : .../Backend/public/api/enidbstatus
     * @return \Illuminate\Http\Response
     */
    public function eniDbStatus()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        if (User::all()->count() > 0) {
            return json_encode(self::EN_SERVICE);
        } else {
            return json_encode(self::HORS_SERVICE);
        }
    }

}