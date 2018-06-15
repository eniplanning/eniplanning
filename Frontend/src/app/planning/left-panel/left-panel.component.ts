import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { db_config } from '../../utils/database/config';


@Component({
  	selector: 'planning-left-panel',
  	templateUrl: './left-panel.component.html',
  	styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
	  
	selectedStagiaire: string;

  	restStagiaires: any;
	restStagiairesUrl = db_config.url_stagiaires;
	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.getRestStagiaires();
	}

	// Read all REST Stagiaires
	getRestStagiaires(): void {
		this.restStagiairesServiceGetRestItems()
			.subscribe(
				restStagiaires => {
					this.restStagiaires = restStagiaires;
					console.log(this.restStagiaires);
				}
			)
	}

	// Rest Items Service: Read all REST Items
	restStagiairesServiceGetRestItems() {
		return this.http
			.get<any[]>(this.restStagiairesUrl)
			.pipe(map(data => data));
	}

	public onChangeSelectedStagiaire() {
		// fired when the user clicks on a stagiaire
		// request data from backend here
		console.log('ID du stagiaire : ' + this.selectedStagiaire);
	}

}
