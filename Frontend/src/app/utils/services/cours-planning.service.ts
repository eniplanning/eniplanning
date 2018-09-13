import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { CONFIG } from '../../utils/config';
import { CoursPlanning } from '../models/cours-planning';
import { Cours } from '../models/cours';
import { Planning } from '../models/planning';
import { API } from '../api';
import { ComplementaryCours } from '../models/complementary-cours';
import { ComplementaryModule } from '../models/complementary-module';

@Injectable({
  providedIn: 'root'
})
export class CoursPlanningService {

	coursPlanningAPI = CONFIG.backend_url + 'planningCourse';

	httpOptions = {
	    headers: new HttpHeaders({
	      'Content-Type':  'application/json'
	    })
  	};

  	constructor(private http: HttpClient) { }

  	addCours(planning: Planning, cours: Cours, libelleModule: string) {
		let coursplanning: CoursPlanning;
		coursplanning = {
			id: null,
			planning_id: planning.id,
			course_id: cours.IdCours,
			complementary_course_id: null,
			date_start: cours.Debut,
			date_end: cours.Fin,
			public_price_affected: cours.PrixPublicAffecte,
			short_label: cours.LibelleCours,
			real_time_hour: cours.DureeReeleEnHeures,
			expected_time_hour: cours.DureePrevueEnHeures,
			date_to_be_defined: cours.DateADefinir,
			code_promotion: cours.CodePromotion,
			module_id: cours.IdModule,
			code_room: cours.CodeSalle,
			code_teacher: cours.CodeFormateur,
			code_location: cours.CodeLieu,
			label:libelleModule,
		}
  		return this.http.post<CoursPlanning>(this.coursPlanningAPI, coursplanning, this.httpOptions);
	}


  	addComplementaryCours(planning: Planning, cours: ComplementaryCours, module: ComplementaryModule) {
		let coursplanning: CoursPlanning;
		coursplanning = {
			id: null,
			planning_id: planning.id,
			course_id: null,
			complementary_course_id: cours.id,
			date_start: cours.date_start,
			date_end: cours.date_end,
			public_price_affected: 0,
			short_label: module.label,
			real_time_hour: cours.real_time_hour,
			expected_time_hour: cours.expected_time_hour,
			date_to_be_defined: cours.date_to_be_defined,
			code_promotion: null,
			module_id: module.id,
			code_room: null,
			code_teacher: null,
			code_location: null,
			label:module.description
		}
  		return this.http.post<CoursPlanning>(this.coursPlanningAPI, coursplanning, this.httpOptions);
  	}

  	deleteCours(cours: CoursPlanning) {
  		return this.http.delete<CoursPlanning>(this.coursPlanningAPI + '/' + cours.id);
	}
	  
	getCours(idPlanning: number) {
		return this.http.get(API.coursPlanning + '/' + idPlanning);
	}

}
