import { Component, OnInit } from '@angular/core';
import { StagiaireService } from '../../../services/stagiaire.service';
import { Stagiaire } from '../../../models/stagiaire';


@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
	  
	constructor(private stagiaireService: StagiaireService) { } 

	selectedStagiaire: Stagiaire;
  	stagiaires: Stagiaire[];

	ngOnInit() {
		this.getStagiaires();
	}

	// Méthodes qui va récupérer les Stagiaires depuis le service
	getStagiaires(): void {
	   this.stagiaireService.getStagiaires().subscribe(stagiaires => this.stagiaires = stagiaires);
	}


	public onChangeSelectedStagiaire() {
		// fired when the user clicks on a stagiaire
		// request data from backend here
		console.log('ID du stagiaire : ' + this.selectedStagiaire);
	}

}
