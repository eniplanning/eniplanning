<?php

namespace App\Http\Controllers;

use App\Models\ComplementaryCourse;
use App\Models\Cours;
use App\Models\Planning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PlanningController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Planning::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $request->validate([
            'label' => 'required',
            // 'date_start_contract'
        ]);
        $planning = Planning::create($request->all());
        return $planning->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Planning $planning)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return $planning->toJson();
    }

    /*
     *  Get the planning with the id specified in the request, including constraintes and courses
     *
     */
    public function showWithGlobal(Planning $planning, Request $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return $planning->with([
            'planningCourses',
            'ctrDisponibilities',
            'ctrExemptions',
            'ctrPrioritizations',
        ])->get()->first()->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Planning $planning)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $planning->update($request->all());
        return $planning->toJson();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Planning $planning)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        $planning->planningCourses()->delete();
        $planning->delete();
    }

    /**
     * Return the list of plannings that belongs to the specified user
     *
     *
     */
    public function getByCodeStagiaire(Request $request)
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Planning::where('stagiaire_id', '=', $request->code)->with([
            'planningCourses',
            'ctrDisponibilities',
            'ctrExemptions',
            'ctrPrioritizations',
        ])->get()->toJson();
    }

    /*
     *  TO BE COMMENTED, OR NOT TO BE COMMENTED : That is the question
     * Compre toutes les informations des cours enregistrés par planning dans la BDD eniplanning avec les informations de la BDD ERP
     * Si une différence est trouvé, tous les plannings concernés sont passés à is_broken=True
     * Ces plannings seront listé par la fonction, getPlanningBroken()
     */
    public function setPlanningBroken()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        // On récupère tous les plannings et leurs cours
        $plannings = Planning::with('planningCourses')->get();

        // On parcours tous les plannings
        foreach ($plannings as $planning) {
            $x = 0; // compteur de cours testé

            // On récupère tous les cours à comparés du planning
            $courses_to_compare = $planning->planningCourses;

            // On boucle sur tous les cours
            do {

                // On récupère le cours d'origni à comparer au cours $x
                // Si course_id est non null, alors on va chercher le cours dans la BDD enierp, sinon dans la BDD eniplanning
                if ($courses_to_compare[$x]->course_id) {
                    $course_of_origin = Cours::find($courses_to_compare[$x]->course_id);
                    $db = 'enierp';
                } else {
                    $course_of_origin = ComplementaryCourse::find($courses_to_compare[$x]->complementary_course_id);
                    $db = 'eniplanning';
                }

                // Tableau de correspondance des champs cours eniplanning et enierp
                $fields = [
                    array('eniplanning' => 'date_start', 'enierp' => 'Debut'),
                    array('eniplanning' => 'date_end', 'enierp' => 'Fin'),
                    array('eniplanning' => 'real_time_hour', 'enierp' => 'DureeReelleEnHeures'),
                    array('eniplanning' => 'expected_time_hour', 'enierp' => 'DureePrevueEnHeures'),
                    array('eniplanning' => 'date_to_be_define', 'enierp' => 'DateAdefinir'),
                    array('eniplanning' => 'code_promotion', 'enierp' => 'CodePromotion'),
                    array('eniplanning' => 'module_id', 'enierp' => 'IdModule'),
                    array('eniplanning' => 'code_location', 'enierp' => 'CodeLieu'),
                ];

                $fx = 0; // Compteur de champs testé

                do {
                    // On récupère le champs $fx du cours à comparer et celui du cours d'origine
                    $field_to_compare = $courses_to_compare[$x][$fields[$fx]['eniplanning']];
                    $field_of_origin = $course_of_origin[$fields[$fx][$db]];

                    // On compare les deux champs,
                    // s'ils sont différent l'attribue is_broken du planning passe à TRUE et on sort de la boucle
                    if ($field_to_compare != $field_of_origin) {
                        $planning->is_broken = true;
                        break;
                    }

                    $fx++; // On incrémente le compteur de champs testé

                    // On boucle tant que tous les champs n'ont pas été testés
                } while ($fx < count($fields));

                // Si le planning est en défaut, on enregistre les modifications et on sort de la boucle
                if ($planning->is_broken) {
                    $planning->save();
                    break;
                }

                $x++; // On incrémente le compteur de cours testé

                // On boucle tant que tous les cours n'ont pas été testés
            } while ($x < count($courses_to_compare));
        }
    }

    /**
     * Retourne la liste des plannings en défaut
     */
    public function getPlanningBroken()
    {
        Log::info('=> ' . get_class($this) . ' :: ' . __FUNCTION__ .' ()');
        return Planning::where('is_broken', '=', TRUE)->get()->toJson();
    }
}
