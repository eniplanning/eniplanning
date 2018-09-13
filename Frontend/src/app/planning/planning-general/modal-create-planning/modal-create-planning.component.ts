import { Component, OnInit, ViewChild } from '@angular/core';
import { Formation } from "../../../utils/models/formation";
import { LoggerService } from '../../../utils/services/logger.service';
import { FormationService } from "../../../utils/services/formation.service";
import { StagiaireService } from '../../../utils/services/stagiaire.service';
import { ConstraintService } from '../../../utils/services/constraint.service';
import { Stagiaire } from '../../../utils/models/stagiaire';
import { Lieu } from '../../../utils/models/lieu';
import { LieuService } from "../../../utils/services/lieu.service";
import { PlanningService } from '../../../utils/services/planning.service';
import { Planning } from '../../../utils/models/planning';
import { User } from '../../../utils/models/user';
import { CtrDisponibility } from '../../../utils/models/ctrDisponibility';
import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ModalDirective } from 'angular-bootstrap-md';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-create-planning',
  templateUrl: './modal-create-planning.component.html',
  styleUrls: ['./modal-create-planning.component.scss']
})
export class ModalCreatePlanningComponent implements OnInit {

    formations:             Formation[];
    lieux:                  Lieu[];
    selectedStagiaire:      Stagiaire;
    selectedConstraint:     String;
    selectedFormation:      Formation;
    selectedLieu :          Lieu;
    nomPlanning:            string;
    selectedDebutC:         any;
    selectedFinC:           any;
    selectedDebutF:         any;
    selectedFinF:           any;
    date_inscription:       Date;
    user:                   User;
    isCtrVisible:           Boolean;
    ctrDisponibilities:     CtrDisponibility[];

    errorCreatePlanning:    String;
    modalUpdateMode:        Boolean; //false if create mode, true if update mode
    selectedPlanning:       Planning;
    @ViewChild('createModal') createModal: ModalDirective;

    constructor(
        private logger:             LoggerService,
        private formationService:   FormationService,
        private lieuService:        LieuService,
        private planningService:    PlanningService,
        private stagiaireService:   StagiaireService,
        private constraintService:  ConstraintService
    ){}

    ngOnInit() {
        registerLocaleData(localeFr);
        this.isCtrVisible = false;
        this.ctrDisponibilities = new Array<CtrDisponibility>();
        this.getFormation();
        this.getLieux();
        this.getUser();
        this.getSelectedStagiaire();
        this.modalUpdateMode = false;
        this.stagiaireService.selectedStagiaire.subscribe(
            (stagiaire: Stagiaire) => this.selectedStagiaire = stagiaire
        );
        this.planningService.openModalUpdatePlanning.subscribe(
            (data: Array<any>) => {
                if (data != null) {
                    this.modalUpdateMode = true;
                    this.selectedPlanning = data[0];
                    this.ctrDisponibilities = this.selectedPlanning.ctr_disponibilities;
                    this.ctrDisponibilities.forEach(disponibility => {
                        disponibility.date_start = moment(disponibility.date_start);
                        disponibility.date_end = moment(disponibility.date_end);
                    });
                    this.nomPlanning =  this.selectedPlanning.label;
                    this.selectedDebutC = moment( this.selectedPlanning.date_start_contract);
                    this.selectedFinC = moment( this.selectedPlanning.date_end_contract);
                    this.selectedDebutF = moment( this.selectedPlanning.date_start_formation);
                    this.selectedFinF = moment( this.selectedPlanning.date_end_formation);
                    this.selectedFormation = data[1];
                    this.lieuService.getLieu( this.selectedPlanning.code_lieu).subscribe(
                        (lieu: Lieu) => {
                            this.selectedLieu = lieu;
                            this.createModal.show();
                        },
                        error => console.log(error)
                    )
                }
            },
            error => console.error(error)
        )
    }

    // Récupération des formations depuis le service Formation
    getFormation():void {
        this.formationService.getFormations().subscribe(formations => this.formations = formations);
    }

    getLieux():void {
        this.lieuService.getLieux().subscribe(lieux => this.lieux = lieux);
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

    openModalNewPlanning() {
        this.modalUpdateMode = false;
        this.nomPlanning = undefined;
        this.ctrDisponibilities = new Array<CtrDisponibility>();
        this.selectedDebutC = '';
        this.selectedFinC = '';
        this.selectedDebutF = '';
        this.selectedFinF = '';
        this.selectedFormation = new Formation;
        this.selectedLieu = new Lieu;
        this.createModal.show();
    }

    toggleContraintes()
    {
        this.isCtrVisible = !this.isCtrVisible;
        this.errorCreatePlanning = ""
    }

    addConstraint()
    {
        console.log(this.selectedConstraint);
        switch (this.selectedConstraint) {
            case 'disponibilite':
                this.ctrDisponibilities.push(new CtrDisponibility());
                console.log(this.ctrDisponibilities);
                break;

            default:
                console.log("rien a ajouter");
                break;
        }

    }

    delConstraint(index: number)
    {
        console.log(index);
        if (this.modalUpdateMode)
        {
            var ctr = this.selectedPlanning.ctr_disponibilities[index]
            console.log(ctr);
            this.constraintService.deleteDisponibilityConstraint(ctr).subscribe();
            this.ctrDisponibilities.splice(index, 1);
        }
        else
        {
            this.ctrDisponibilities.splice(index, 1);
        }
    }

    createPlanning():void {
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
        // else if (this.checkContraintes()) { }     // erreur au niveau des contraintes
        else {
            console.log('oui');
            //tous les champs sont remplis correctement
            this.errorCreatePlanning = "";
            var planning = new Planning();
            planning.setLabel(this.nomPlanning);
            planning.setDate_start_contract(this.selectedDebutC.format());
            planning.setDate_end_contract(this.selectedFinC.format());
            planning.setDate_start_formation(this.selectedDebutF.format());
            planning.setDate_end_formation(this.selectedFinF.format());
            planning.setDate_inscription(new Date());
            planning.setIs_archived(false);
            planning.setIs_model(false);
            planning.setStagiaire_id(this.selectedStagiaire.CodeStagiaire);
            planning.setFormation_id(this.selectedFormation.CodeFormation);
            planning.setUser_id(this.user.id);
            planning.setLieu(this.selectedLieu.CodeLieu);

            this.planningService.createPlanning(planning).subscribe(
                (planning: Planning) => {
                    console.log('planning crée', planning);
                    this.createModal.hide();
                    this.toggleContraintes();
                    // console.log(this.ctrDisponibilities);
                    //création des contraintes en récupérant l'ID du planning après sa création
                    this.ctrDisponibilities.forEach(disponibility => {
                        disponibility.setPlanning_id(planning.id);
                        disponibility.setDate_start(moment(disponibility.date_start).format());
                        disponibility.setDate_end(moment(disponibility.date_end).format());
                        console.log(disponibility);
                        this.constraintService.createDisponibilityConstraint(disponibility).subscribe(
                            (disponibility: CtrDisponibility) => {
                                console.log('contrainte crée', disponibility);
                                this.planningService.updatePlanningsList.next(planning);
                            },
                            error => console.log(error)
                        );
                    });
                },
                error => console.log(error)
            );

        }
    }

    updatePlanning():void {
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
            planning.setDate_inscription(new Date());
            planning.setIs_archived(false);
            planning.setIs_model(false);
            planning.setStagiaire_id(this.selectedStagiaire.CodeStagiaire);
            planning.setFormation_id(this.selectedFormation.CodeFormation);
            planning.setUser_id(this.user.id);
            planning.setLieu(this.selectedLieu.CodeLieu);
            planning.setId(this.selectedPlanning.id);
            console.log(planning);
            this.planningService.updatePlanning(planning).subscribe(
                (planning: Planning) => {
                    console.log('planning modifié', planning);
                    this.createModal.hide();
                    this.toggleContraintes();
                },
                error => console.log(error)
            );
            this.ctrDisponibilities.forEach(disponibility => {
                if (disponibility.id == undefined) {
                    disponibility.setPlanning_id(this.selectedPlanning.id);
                    disponibility.setDate_start(moment(disponibility.date_start).format());
                    disponibility.setDate_end(moment(disponibility.date_end).format());
                    this.constraintService.createDisponibilityConstraint(disponibility).subscribe(
                        (constraint: CtrDisponibility) =>{
                            console.log("contraite créée", constraint);
                            this.planningService.updatePlanningsList.next(planning);
                        }
                    );
                } else {
                    // console.log(disponibility.date_start);
                    disponibility.date_start = (moment(disponibility.date_start).format());
                    disponibility.date_end = (moment(disponibility.date_end).format());
                    this.constraintService.updateDisponibilityConstraint(disponibility).subscribe(
                        (constraint: CtrDisponibility) =>{
                            console.log("Contrainte modifiée", constraint);
                            this.planningService.updatePlanningsList.next(planning);
                        }
                    );
                }
            });
        }
    }

    resetModal()
    {
        this.isCtrVisible           = false;
        this.selectedConstraint     = undefined;
        this.selectedFormation      = undefined;
        this.selectedLieu           = undefined;
        this.selectedDebutC         = undefined;
        this.selectedFinC           = undefined;
        this.selectedDebutF         = undefined;
        this.selectedFinF           = undefined;
        this.ctrDisponibilities     = undefined;
    }

    checkContraintes()
    {
        this.ctrDisponibilities.forEach(disponibility =>{
            console.log(disponibility.date_start.format());
            console.log(disponibility.date_end.format());
            if (new Date(disponibility.date_start) > new Date(disponibility.date_end))
            {
                this.errorCreatePlanning = "Une des contrainte n'est pas conforme, la date de fin ne peut pas être avant la date de début."
                return true;
            }
            else if(disponibility.date_start == "" || disponibility.date_end == "")
            {
                this.errorCreatePlanning = "Une des contraintes n'est pas conforme, les dates de début et de fin doivent être renseigné."
                return true;
            }
        });
        return false;
    }
}
