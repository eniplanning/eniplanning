import { Component, OnInit } from '@angular/core';
import { Formation } from "../../../utils/models/formation";
import { LoggerService } from '../../../utils/services/logger.service';
import { FormationService } from "../../../utils/services/formation.service";
import { StagiaireService } from '../../../utils/services/stagiaire.service';
import { Stagiaire } from '../../../utils/models/stagiaire';
import { Lieu } from '../../../utils/models/lieu';
import { LieuService } from "../../../utils/services/Lieu.service";
import { PlanningService } from '../../../utils/services/planning.service';
import { Planning } from '../../../utils/models/planning';
import { User } from '../../../utils/models/user';
import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-modal-create-planning',
  templateUrl: './modal-create-planning.component.html',
  styleUrls: ['./modal-create-planning.component.scss']
})
export class ModalCreatePlanningComponent implements OnInit {

    formations:             Formation[];
    lieux:                  Lieu[];
    selectedStagiaire:      Stagiaire;
    selectedFormation:      Formation;
    selectedLieu :          Lieu;
    nomPlanning:            string;
    selectedDebutC:         any;
    selectedFinC:           any;
    selectedDebutF:         any;
    selectedFinF:           any;
    date_inscription:       Date;
    user:                   User;
    
    errorCreatePlanning:    String;
    successCreatePlanning:  String;

    constructor(
        private logger: LoggerService,
        private formationService:FormationService,
        private lieuService:LieuService,
        private planningService:PlanningService,
        private stagiaireService: StagiaireService
    ){}

    ngOnInit() {
        registerLocaleData(localeFr);
        this.getFormation();
        this.getLieu();
        this.getUser();
        this.stagiaireService.selectedStagiaire.subscribe(
            (stagiaire: Stagiaire) => this.selectedStagiaire = stagiaire
        );
        this.getSelectedStagiaire();
    }

    // Récupération des formations depuis le service Formation
    getFormation():void {
        this.formationService.getFormations().subscribe(formation => this.formations = formation);
    }

    getLieu():void {
        this.lieuService.getLieux().subscribe(lieu => this.lieux = lieu);
    }

    getUser(): void{
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }

    getSelectedStagiaire() {
        let unparsedSelectedStagiaire = sessionStorage.getItem('selectedStagiaire');
        if (unparsedSelectedStagiaire != 'undefined') {
            this.selectedStagiaire = JSON.parse(unparsedSelectedStagiaire);
        }
    }

    createPlanning():void {
        console.log(this.selectedLieu);
        if (this.nomPlanning == undefined || this.nomPlanning.trim().length == 0) {
            this.errorCreatePlanning = "Le nom du planning est obligatoire";
        }
        else if (this.selectedFormation == undefined) {
            this.errorCreatePlanning = "La formation est obligatoire";
        }
        else if (this.selectedLieu == undefined) {
            this.errorCreatePlanning = "Le lieu de formation est obligatoire";
        }
        else if (this.selectedDebutC == undefined) {
            this.errorCreatePlanning = "La date de début de contrat est obligatoire";
        }
        else if (this.selectedFinC == undefined) {
            this.errorCreatePlanning = "La date de fin de contrat est obligatoire";
        }
        else if (this.selectedFinC < this.selectedDebutC) {
            this.errorCreatePlanning = "La date de fin de contrat doit être postérieure à la date de début de contrat";
        }
        else if (this.selectedDebutF == undefined) {
            this.errorCreatePlanning = "La date de début de formation est obligatoire";
        }
        else if (this.selectedFinF == undefined) {
            this.errorCreatePlanning = "La date de fin de formation est obligatoire";
        }
        else if (this.selectedFinF < this.selectedDebutF) {
            this.errorCreatePlanning = "La date de fin de formation doit être postérieure à la date de début de formation";
        }
        else {
            //tous les champs sont remplis correctement
            this.errorCreatePlanning = "";
            var planning = new Planning();
            planning.setLabel(this.nomPlanning);
            planning.setDate_start_contract(this.selectedDebutC.format());
            planning.setDate_end_contract(this.selectedFinC.format());
            planning.setDate_start_formation(this.selectedDebutF.format());
            planning.setDate_end_formation(this.selectedFinF.format());
            planning.setDate_inscription(this.date_inscription);
            planning.setIs_archived(false);
            planning.setIs_model(false);
            planning.setStagiaire_id(this.selectedStagiaire.CodeStagiaire);
            planning.setFormation_id(this.selectedFormation.CodeFormation);
            planning.setUser_id(this.user.id);
            planning.setLieu(this.selectedLieu.CodeLieu);
            this.planningService.createPlanning(planning).subscribe(
                (planning: Planning) => {
                    this.successCreatePlanning = "Le planning a bien été crée";
                    console.log('planning crée', planning);
                    this.planningService.newPlanning.next(planning);
                },
                error => console.log(error)
            );
        }
    }


}
