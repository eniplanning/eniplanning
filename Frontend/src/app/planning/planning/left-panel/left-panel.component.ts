import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
	stagiaires: Object[] = [];
	selectedStagiaire: string;
  	constructor() {}

  	ngOnInit() {
  		this.stagiaires = [
	    	{ name: "Jean", id: 1 },
	    	{ name: "Romain", id: 2 },
	    	{ name: "Sylvie", id: 3 }
	    ]
  	}


	public onChangeSelectedStagiaire() {
		// request data from backend here
		console.log('ID du stagiaire : ' + this.selectedStagiaire);
	}

}
