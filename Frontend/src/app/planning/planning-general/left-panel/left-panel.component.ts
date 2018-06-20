import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { db_config } from '../../../utils/config';


@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
	  
	selectedStagiaire: string;

  	stagiaires: any;
	stagiairesUrl = db_config.url_stagiaires;
	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.stagiaires = [{
			Nom: 'Valjean',
			Prenom: 'Jean',
			CodeStagiaire: '32'
		}]
		//this.getRestStagiaires();
	}

	// Read all REST Stagiaires
	getRestStagiaires(): void {
		this.restStagiairesServiceGetRestItems()
			.subscribe(
				restStagiaires => {
					this.stagiaires = restStagiaires;
					console.log(this.stagiaires);
				}
			)
	}

	// Rest Items Service: Read all REST Items
	restStagiairesServiceGetRestItems() {
		return this.http
			.get<any[]>(this.stagiairesUrl)
			.pipe(map(data => data));
	}
}
