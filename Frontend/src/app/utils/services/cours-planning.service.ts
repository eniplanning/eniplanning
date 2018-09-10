import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { CONFIG } from '../../utils/config';
import { CoursPlanning } from '../models/cours-planning';
import { Cours } from '../models/cours';
import { Planning } from '../models/planning';
import { API } from '../api';

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
			date_to_be_define: cours.DateADefinir,
			code_promotion: cours.CodePromotion,
			module_id: cours.IdModule,
			code_room: cours.CodeSalle,
			code_teacher: cours.CodeFormateur,
			code_location: cours.CodeLieu,
			label:libelleModule,
		  }
		console.log('Addcoursplanning:', coursplanning);
  		return this.http.post<CoursPlanning>(this.coursPlanningAPI, coursplanning, this.httpOptions);
  	}

  	deleteCours(cours: CoursPlanning) {
  		return this.http.delete<CoursPlanning>(this.coursPlanningAPI + '/' + cours.id);
	  }
	  
	getCours(idPlanning: number) {
		return this.http.get(API.coursPlanning + '/' + idPlanning);
	}

}
