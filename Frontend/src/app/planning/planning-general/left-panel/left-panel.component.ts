import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../utils/services/logger.service';
import { Router } from '@angular/router';
import { StagiaireService } from '../../../utils/services/stagiaire.service';
import { PlanningService } from '../../../utils/services/planning.service';
import { LieuService } from '../../../utils/services/lieu.service';
import { FormationService } from '../../../utils/services/formation.service';
import { CoursPlanningService } from '../../../utils/services/cours-planning.service';
import { DocumentService } from '../../../utils/services/document.service';
import { Stagiaire } from '../../../utils/models/stagiaire';
import { Lieu } from '../../../utils/models/lieu';
import { Planning } from '../../../utils/models/planning';
import { Formation } from '../../../utils/models/formation';
import { Cours } from '../../../utils/models/cours';
import { CoursPlanning } from '../../../utils/models/cours-planning';


@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})

export class LeftPanelComponent implements OnInit {

	stagiaires: 			Stagiaire[];
	selectedStagiaire: 		Stagiaire;
	selectedPlanning: 		Planning;
	formation:				Formation;
	libelleLieuFormation: 	String;
    panelStates: 			{};	 //used to keep track of panels states : open or closed
    alert_array:            Array<any>;

	groupByFirstLetter = (item) => item.Nom.slice(0,1);

	constructor(
		private logger: 				LoggerService,
		private stagiaireService: 		StagiaireService,
		private planningService: 		PlanningService,
		private formationService:		FormationService,
		private lieuService:			LieuService,
		private coursPlanningService: 	CoursPlanningService,
		private documentService: 		DocumentService,
		private router:					Router,
	) { }

	ngOnInit() {
		this.getStagiaires();
		this.panelStates = {
			informations: false,
			planning: false,
			formations: false,
			modulesComplementaires: false
		}
		this.loadSelectedStagiaire();
		this.planningService.newPlanning.subscribe(
			(planning: Planning) => {
				this.onChangeSelectedStagiaire();
				this.planningService.setSelectedPlanning(planning);
			}
		)
		this.planningService.updatePlanningsList.subscribe(
			data => {
				this.selectedPlanning = null;
				this.onChangeSelectedStagiaire();
			},
			error => console.error(error)
        )
	}

	getLieu(code_lieu: number) {
		this.lieuService.getLieu(code_lieu).subscribe(
			(lieu: Lieu) => this.libelleLieuFormation = lieu.Libelle
		);
	}

	// Récupération des Stagiaires depuis le service : stagiaire
	getStagiaires(): void {
	   	this.stagiaireService.getStagiaires().subscribe(
	   		(stagiaires: Stagiaire[]) => this.stagiaires = stagiaires,
	   		error => console.error(error),
	   		() => this.stagiaires.sort(function(a, b) {
	   			//custom sorting function, sorts by stagiaire.Nom in alphabetical order
	   			if (a.Nom < b.Nom)
	   				return -1;
	   			else if (a.Nom > b.Nom)
	   				return 1;
	   			return 0
	   		})
	   	);
	}


	// Récupère le selectedStagiaire au chargement de la page. Si il existe, il est automatiquement sélectionné dans le ng-select
	loadSelectedStagiaire() {
		//Fist time we visit the page on a new session, sessionStorage.getItem returns the string 'undefined', so JSON.parse throw an error
		let unparsedSelectedStagiaire = sessionStorage.getItem('selectedStagiaire');
		if (unparsedSelectedStagiaire != 'undefined' && unparsedSelectedStagiaire != 'null') {
			this.selectedStagiaire = JSON.parse(unparsedSelectedStagiaire);
		}
		if (this.selectedStagiaire != null) {
			this.panelStates['informations'] = true;
			this.getPlanningsByStagiaire(this.selectedStagiaire.CodeStagiaire);
		}
		else {
			this.stagiaireService.selectedStagiaire.next(this.selectedStagiaire);
			this.planningService.setSelectedPlanning(null);
		}
	}


	// Mise à jour de la liste des plannings du stagiaire à la sélection d'un stagiaire
	onChangeSelectedStagiaire() {
		if (this.selectedStagiaire != null) {
			this.getPlanningsByStagiaire(this.selectedStagiaire.CodeStagiaire);
			this.stagiaireService.setSelectedStagiaire(this.selectedStagiaire);
			this.planningService.setSelectedPlanning(null);
			console.log('stagiaire sélectionné', this.selectedStagiaire);
		}
	}

	//Lorsqu'on vide le ng-Select, on vide la valeur de selectedStagiaire, de selectedPlanning, et on effac les cours dessinés à l'écran
	onClearSelectedStagiaire() {
		this.selectedStagiaire = null;
		this.stagiaireService.setSelectedStagiaire(this.selectedStagiaire);

		this.selectedPlanning = null;
		this.planningService.setSelectedPlanning(this.selectedPlanning);
	}


	// Récupération des Plannings du stagiaire sélectionné depuis le service : planning
	// onCompleted : récupère le selectedPlanning dans la session. si il existe, il est automatiquement sélectionné dans la liste des plannings
	getPlanningsByStagiaire(codeStagiaire: Number): void {
		this.planningService.getPlanningsByStagiaire(codeStagiaire).subscribe(
			(plannings: Planning[]) => {
				this.selectedStagiaire.ListPlannings = plannings;
				this.selectedStagiaire.ListPlannings.sort(function(a, b) {
					if (a.label < b.label) return -1;
					if (a.label > b.label) return 1;
					return 0;
				})
			},
			error =>  console.error(error),
			() => {
				let unparsedSelectedPlanning = sessionStorage.getItem('selectedPlanning');
				if (unparsedSelectedPlanning != 'undefined') {
					this.selectedPlanning = JSON.parse(unparsedSelectedPlanning);
				}
				if (this.selectedPlanning != null) {
					let self = this;	//necessary because 'this' is not properly recognized inside array.forEach function
					this.selectedStagiaire.ListPlannings.forEach(function(p) {
						if (p.id == self.selectedPlanning.id) {
							self.selectedPlanning = p;
						}
					});
					this.onChangeSelectedPlanning(this.selectedPlanning);
					this.panelStates['planning'] = true;
				}
			}
		);
	}


	// Mise à jour de TODO à la sélection d'un planning
	onChangeSelectedPlanning(planning: Planning) {
		if (this.selectedPlanning != null && this.selectedPlanning.id == planning.id) {
			return;
		}
		this.selectedPlanning = planning;
		this.planningService.setSelectedPlanning(this.selectedPlanning);
		this.getLieu(this.selectedPlanning.code_lieu);
		console.log('planning sélectionné', this.selectedPlanning);

		//Loading formation with list of modules with list of cours
		this.formationService.getFormation(this.selectedPlanning.formation_id, this.selectedPlanning.id).subscribe(
			(formation: Formation) => {
				//sorting modules
				formation.Modules = [];
				formation.uniteparformation.forEach(function(u) {
					formation.Modules = formation.Modules.concat(u.modules);
				});
				formation.uniteparformation = null;
				formation.Modules = formation.Modules.sort(function(a, b) {
					if (a.Libelle < b.Libelle)
						return -1;
					if (a.Libelle > b.Libelle)
						return 1;
					return 0;
				});


				//sorting cours
				formation.Modules.forEach(function(m) {
					m.cours = m.cours.sort(function(a, b) {
						if (a.Debut < b.Debut)
							return -1;
						if (a.Debut > b.Debut)
							return 1;
						return 0;
					});
				});
				this.formation = formation;
				console.log('formation sélectionnée', this.formation);
			},
			error => console.error(error)
		);

		//Drawing courses on web page
		let self = this;	//necessary because 'this' is not properly recognized inside array.forEach function
		this.selectedPlanning.planning_courses.forEach(function(c) {
			self.drawCoursOnPlanning(c);
        });
        this.checkAlertsPlanning();
	}

	onClickCours(cours: Cours) {
		let old_cours = this.selectedPlanning.planning_courses.find(function(c: CoursPlanning) {
			return c.module_id == cours.IdModule;
        })

		// if a cours from this module is already in planning_courses
		if (old_cours != undefined) {
			// removes it from database
			this.coursPlanningService.deleteCours(old_cours).subscribe(
				//if successful, removes it from the planning_courses list
				data => {
					this.selectedPlanning.planning_courses.splice(this.selectedPlanning.planning_courses.indexOf(old_cours), 1);
					this.drawCoursOnPlanning(old_cours);
				},
				error => console.error(error)
			)
		}

		//if first cours clicked or clicked on a different cours
		if (old_cours == undefined || (old_cours != undefined && old_cours.course_id != cours.IdCours)) {
			//add cours in database
			this.coursPlanningService.addCours(this.selectedPlanning, cours).subscribe(
				cours => {
					//if successfull, add clicked cours in planning_courses list
					this.selectedPlanning.planning_courses.push(cours);
					//and draw it on the page
					this.drawCoursOnPlanning(cours);
				},
				error => console.error(error)
			);
        }
        this.checkAlertsPlanning();
	}

	drawCoursOnPlanning(cours: CoursPlanning) {
		let dateRange = []
		let start = new Date(cours.date_start);
		let end = new Date(cours.date_end);
		while (start <= end) {
			dateRange.push(new Date(start));
			start.setDate(start.getDate() + 1);
		}

		dateRange.forEach(function(d) {
			let id = '' + d.getFullYear()
						+ (d.getMonth()+1<10 ? '0'+(d.getMonth()+1) : d.getMonth()+1)
						+ (d.getDate()<10 ? '0'+d.getDate() : d.getDate());
			if (document.getElementById(id).parentElement.classList.contains('green-bg')) {
				document.getElementById(id).parentElement.classList.remove('green-bg');
			} else {
				document.getElementById(id).parentElement.classList.add('green-bg');
			}
		});
	}

	openModalModifyPlanning() {
		this.planningService.openModalUpdatePlanning.next([this.selectedPlanning, this.formation]);
	}

	deletePlanning() {
		try {
			this.planningService.deletePlanning(this.selectedPlanning);
			this.planningService.updatePlanningsList.next(null);
		} catch (error) {
			console.error(error);
		}
    }

    checkAlertsPlanning()
    {
        // on vide la liste des erreurs
        this.alert_array = new Array<any>();

        //Pour chaques cours du planning, on check s'il est en conflict avec une contrainte
        this.selectedPlanning.planning_courses.forEach(cours => {
            console.log(cours);
            //Si le cours choisis entre en conflit avec une contrainte de disponibilité
            this.selectedPlanning.ctr_disponibilities.forEach(disponibility => {

                if (
                    (new Date(disponibility.date_start) <= new Date(cours.date_start) && new Date(disponibility.date_end) <= new Date(cours.date_end) && new Date(disponibility.date_end) > new Date(cours.date_start))
                    || (new Date(disponibility.date_start) > new Date(cours.date_start) && new Date(disponibility.date_end) > new Date(cours.date_end) && new Date(disponibility.date_start) < new Date(cours.date_end))
                    || (new Date(disponibility.date_start) < new Date(cours.date_start) && new Date(disponibility.date_end) > new Date(cours.date_end))
                    || (new Date(disponibility.date_start) > new Date(cours.date_start) && new Date(disponibility.date_end) < new Date(cours.date_end))
                )
                {
                    this.alert_array.push({ id: cours.module_id, message: 'Violation de la contrainte de disponibilité avec le cours ' + cours.label_course });
                }
            });

            // Test pour les autres types d'alertes
        });

        //Envoi d'un évènement pour que le composant right panel puisse récupérer la liste des alertes
        this.planningService.alertPlanningList.next(this.alert_array);
    }
}
