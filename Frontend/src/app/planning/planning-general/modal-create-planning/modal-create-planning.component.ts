import { Component, OnInit } from '@angular/core';
import { Formation } from "../../../utils/models/formation";
import { LoggerService } from '../../../utils/services/logger.service';
import { FormationService } from "../../../utils/services/formation.service";
import { StagiaireService } from '../../../utils/services/stagiaire.service';
import { Stagiaire } from '../../../utils/models/stagiaire';

@Component({
  selector: 'app-modal-create-planning',
  templateUrl: './modal-create-planning.component.html',
  styleUrls: ['./modal-create-planning.component.scss']
})
export class ModalCreatePlanningComponent implements OnInit {

    formations: Formation[];
    selectedFormation: Formation;

    constructor(private logger: LoggerService, private formationService:FormationService)
    { }

    ngOnInit() {
        this.getFormation();
    }

    // Récupération des formations depuis le service Formation
    getFormation():void
    {
        this.formationService.getFormations().subscribe(formation => this.formations = formation);
    }

}
