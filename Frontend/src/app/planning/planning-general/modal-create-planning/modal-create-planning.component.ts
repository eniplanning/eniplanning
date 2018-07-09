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

@Component({
  selector: 'app-modal-create-planning',
  templateUrl: './modal-create-planning.component.html',
  styleUrls: ['./modal-create-planning.component.scss']
})
export class ModalCreatePlanningComponent implements OnInit {

    formations:         Formation[];
    lieux:              Lieu[];
    selectedFormation:  Formation;
    selectedLieu :      Lieu;
    nomPlanning:        string;

    constructor(private logger: LoggerService, private formationService:FormationService, private lieuService:LieuService, private planningService:PlanningService)
    { }

    ngOnInit() {
        this.getFormation();
        this.getLieu();
    }

    // Récupération des formations depuis le service Formation
    getFormation():void
    {
        this.formationService.getFormations().subscribe(formation => this.formations = formation);
    }

    getLieu():void
    {
        this.lieuService.getLieux().subscribe(lieu => this.lieux = lieu);
    }

    createPlanning():void
    {
        var planning = new Planning();
        planning.setLabel(this.nomPlanning);
        console.log(this.nomPlanning);
        // this.planningService.createPlanning(planning);
    }

}
