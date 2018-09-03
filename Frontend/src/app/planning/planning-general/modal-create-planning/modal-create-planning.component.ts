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
    selectedDebutC:         Date;
    selectedFinC:           Date;
    selectedDebutF:         Date;
    selectedFinF:           Date;
    date_inscription:       Date;
    user: User
    // user_id: number

    constructor(
        private logger: LoggerService,
        private formationService:FormationService,
        private lieuService:LieuService,
        private planningService:PlanningService,
        private stagiaireService: StagiaireService)
    { }

    ngOnInit() {
        registerLocaleData(localeFr);
        this.getFormation();
        this.getLieu();
        this.getSelectedStagiaire();
        this.getUser();
        console.log(JSON.parse(sessionStorage.getItem('user')));
        // console.log(this.selectedStagiaire.CodeStagiaire);
    }

    // Récupération des formations depuis le service Formation
    getFormation():void {
        this.formationService.getFormations().subscribe(formation => this.formations = formation);
    }

    getLieu():void {
        this.lieuService.getLieux().subscribe(lieu => this.lieux = lieu);
    }

    getSelectedStagiaire(): void {
        this.selectedStagiaire = JSON.parse(sessionStorage.getItem('selectedStagiaire'));
    }

    getUser(): void{
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }

    createPlanning():void {
        var planning = new Planning();
        planning.setLabel(this.nomPlanning);
        planning.setDate_start_contract(this.selectedDebutC);
        planning.setDate_end_contract(this.selectedFinC);
        planning.setDate_start_formation(this.selectedDebutF);
        planning.setDate_end_formation(this.selectedFinF);
        planning.setDate_inscription(this.date_inscription);
        planning.setIs_archived(false);
        planning.setIs_model(false);
        // planning.setPlanning_id(3);
        planning.setStagiaire_id(this.selectedStagiaire.CodeStagiaire);
        planning.setFormation_id(this.selectedFormation.CodeFormation);
        planning.setUser_id(this.user.id);
        console.log(formatDate(this.selectedDebutC, "yyy-MM-dd", "FR"));
        console.log(this.selectedFinC);
        console.log(this.selectedDebutF);
        console.log(this.selectedFinF);
        console.log(planning);
        console.log(this.planningService.createPlanning(planning));
    }

}
