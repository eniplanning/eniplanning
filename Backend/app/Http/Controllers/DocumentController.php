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

        $document = new Document('{\b foo\b0}');
        
        

        $document->save(storage_path('planning.rtf'));   // puts contents "{\b foo\b0}"
        

        echo $document;           // prints "{\b foo\b0}"
        echo (string) $document;  // prints "{\b foo\b0}"
        echo ''.$document;        // prints "{\b foo\b0}" $phpWord = new PhpWord();
/*
        $section = $phpWord->addSection();


        $description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


        //$section->addImage("http://itsolutionstuff.com/frontTheme/images/logo.png");
        $section->addText($description);


        $objWriter = IOFactory::createWriter($phpWord, 'rtf');
        try {
            $objWriter->save(storage_path('helloWorld.rtf'));
        } catch (Exception $e) {
        }
*/

        return response()->download(storage_path('planning.rtf'));
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
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
