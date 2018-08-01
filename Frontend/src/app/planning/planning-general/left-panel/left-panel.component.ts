import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../utils/services/logger.service';
import { StagiaireService } from '../../../utils/services/stagiaire.service';
import { PlanningService } from '../../../utils/services/planning.service';
import { Stagiaire } from '../../../utils/models/stagiaire';
import { Planning } from '../../../utils/models/planning';
// import { PLANNINGS } from '../../../utils/mocks/planning';


@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})

export class LeftPanelComponent implements OnInit {

	stagiaires: Stagiaire[];
	selectedStagiaire: Stagiaire;
	selectedPlanning: Planning;
	panelStates: {};

	groupByFirstLetter = (item) => item.Nom.slice(0,1);

	constructor(
		private logger: LoggerService,
		private stagiaireService: StagiaireService,
		private planningService: PlanningService,
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
	}

	// Récupération des Stagiaires depuis le service : stagiaire
	getStagiaires(): void {
	   	this.stagiaireService.getStagiaires().subscribe(
	   		stagiaires => this.stagiaires = stagiaires,
	   		error => console.log(error),
	   		() => this.stagiaires.sort(function(a, b) {
	   			//custom sorting function, sorts by stagiaire.Nom in alphabetical order
	   			if (a['Nom'] < b['Nom'])
	   				return -1;
	   			else if (a['Nom'] > b['Nom'])
	   				return 1;
	   			return 0
	   		})
	   	);
	}

	// Récupération des Plannings du stagiaire sélectionné depuis le service : planning
	// onCompleted : récupère le selectedPlanning dans la session. si il existe, il est automatiquement sélectionné dans la liste des plannings
	getPlanningsByStagiaire(codeStagiaire: Number): void {
		this.planningService.getPlanningsByStagiaire(codeStagiaire).subscribe(
			plannings => this.selectedStagiaire.listPlannings = plannings,
			error =>  console.log(error),
			() => this.selectedPlanning = JSON.parse(sessionStorage.getItem('selectedPlanning'))
		);
	}

	// Récupère le selectedStagiaire au chargement de la page. Si il exists, il est automatiquement sélectionné dans le ng-select
	loadSelectedStagiaire() {
		this.selectedStagiaire = JSON.parse(sessionStorage.getItem('selectedStagiaire'));
		if (this.selectedStagiaire != undefined) {
			this.getPlanningsByStagiaire(this.selectedStagiaire['CodeStagiaire']);
		}
	}

	// Mise à jour de la liste des plannings du stagiaire à la sélection d'un stagiaire
	public onChangeSelectedStagiaire() {
		this.getPlanningsByStagiaire(this.selectedStagiaire['CodeStagiaire']);
		this.stagiaireService.setSelectedStagiaire(this.selectedStagiaire);
		this.logger.LogConsole('stagiaire sélectionné' , this.selectedStagiaire);
		this.logger.LogFile('stagiaire sélectionné' , this.selectedStagiaire);
	}

	// Mise à jour de TODO à la sélection d'un planning
	public onSelectedPlanning(planning: Planning) {
		this.selectedPlanning = planning;
		this.planningService.setSelectedPlanning(this.selectedPlanning);
		this.logger.LogConsole('planning sélectionné' , this.selectedPlanning);
	}
}
