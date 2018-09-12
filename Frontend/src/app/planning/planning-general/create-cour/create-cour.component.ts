import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar, NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryModule } from '../../../utils/models/complementary-module';
import { ComplementaryModuleService} from '../../../utils/services/complementary-module.service';
import { ComplementaryCours } from '../../../utils/models/complementary-cours';
import { ComplementaryCoursService } from '../../../utils/services/complementary-cours.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DataService } from '../../../utils/services/data.service';


@Component({
  selector: 'app-create-cour',
  templateUrl: './create-cour.component.html',
  styleUrls: ['./create-cour.component.scss']
})
export class CreateCourComponent implements OnInit  {
  // https://github.com/ng-bootstrap/ng-bootstrap/tree/master/demo/src/app/components
  // https://ng-bootstrap.github.io/#/components/datepicker/overview

  disabled : boolean = false;
  knownDate: boolean = false;
  closeResult: string = null; 
  model: NgbDateStruct;
  value:any = {};

  complementaryModules:   ComplementaryModule[];
  complementaryModule:    ComplementaryModule;
  complementaryCours:     ComplementaryCours;
  date_start:             Date;
  date_end:               Date;
  label:                  string;
  message:                string;

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    private complementaryModuleService: ComplementaryModuleService,
    private complementaryCoursService: ComplementaryCoursService,
    private data: DataService,
  ) {
    this.getComplementaryModules();
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      this.refreshList();
    });
    registerLocaleData(localeFr);
  }

  // Recherche des modules existants  
  getComplementaryModules() {
    this.complementaryModuleService.getComplementaryModules().subscribe(
      (data :ComplementaryModule[]) => this.complementaryModules = data,
      (error) => console.log('erreur de communication avec le serveur', error),
    );
  }

  // Enregistrer cours
  enregistrerCours() {
    this.complementaryCours = new ComplementaryCours(this.date_start, this.date_end, 3, this.knownDate, this.complementaryCours.id);
    console.log('this.complementaryCours:', this.complementaryCours)
    this.complementaryCoursService.enregistrerComplementaryCourses(this.complementaryCours).subscribe(
      (data)=> { console.log('cours enregistré') },
      (error)=> { console.log('erreur de communication avec le serveur:', error)}
    );
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  
  refreshList() {
    this.getComplementaryModules(); 
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
  
  
  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.complementaryModule = value;
  }
 
  
  // Ouverture de la modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'app-create-cour'}).result.then((result) => {
      console.log('result:', result);
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      console.log('reason:', reason);
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }
}