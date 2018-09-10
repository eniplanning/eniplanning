<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use PhpOffice\PhpWord\PhpWord;
// use PhpOffice\PhpWord\Escaper\RTF;
// use PhpOffice\PhpWord\IOFactory;
// use PhpOffice\PhpWord\Shared\Html;
// use PhpOffice\PhpWord\Style\Font; 
use Jstewmc\Rtf\Document;
use Jstewmc\Rtf\Element;
use Jstewmc\Rtf\Style;
use Log;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPlanning()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $title = '{ENI PLANNING}';
        $document = new Document($title);
        $document->save(storage_path('planning.rtf'));   // puts contents "{\b foo\b0}"
  
        return response()
            ->download(storage_path('planning.rtf'), 'planning.rtf')
            ->deleteFileAfterSend(true);
        }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
