import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../utils/services/logger.service';
import { StagiaireService } from '../../../utils/services/stagiaire.service';
import { PlanningService } from '../../../utils/services/planning.service';
import { Stagiaire } from '../../../utils/models/stagiaire';
import { Planning } from '../../../utils/models/planning';
import { PLANNINGS } from '../../../utils/mocks/planning';


@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})

export class LeftPanelComponent implements OnInit {
	  
	stagiaires: Stagiaire[];
	selectedStagiaire: Stagiaire;
	selectedPlanning: Planning;

	constructor(
		private logger: LoggerService,
		private stagiaireService: StagiaireService,
		private planningService: PlanningService,
	) { } 

	ngOnInit() {
		this.getStagiaires();
	}

	// Récupération des Stagiaires depuis le service : stagiaire
	getStagiaires(): void {
	   this.stagiaireService.getStagiaires().subscribe(stagiaires => this.stagiaires = stagiaires);
	}

	// Récupération des Plannings du stagiaire sélectionné depuis le service : planning
	getPlannings(selectedStagiaire: Stagiaire): void {
		this.planningService.getPlannings().subscribe(plannings => this.selectedStagiaire.listPlannings = plannings);
	}

	// Mise à jour de la liste des plannings du stagiaire à la sélection d'un stagiaire
	public onChangeSelectedStagiaire(selectedStagiaire: Stagiaire) {
		this.selectedStagiaire.listPlannings = PLANNINGS;
		this.logger.LogConsole('stagiaire sélectionné' , JSON.stringify(this.selectedStagiaire));
		this.logger.LogFile('stagiaire sélectionné' , this.selectedStagiaire);
	}

	// Mise à jour de TODO à la sélection d'un planning
	public onSelectedPlanning(planning: Planning){
		this.selectedPlanning = planning;
		this.logger.LogConsole('planning sélectionné' , JSON.stringify(this.selectedPlanning));	
		this.selectedPlanning.status_selected = true;
	}


}
