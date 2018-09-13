import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() closed = new EventEmitter<string>();  
  sendMessageToLeftComponent() {
    this.closed.emit('enregistrement');
  }

  receiveMessage($event) {
    this.sendMessageToLeftComponent();
  }
  
  disabled : boolean = false;
  dateToBeDefined: boolean = false;
  closeResult: string = null; 
  model: NgbDateStruct;
  value:any = {};

  complementaryModules:   ComplementaryModule[];
  complementaryModule:    ComplementaryModule ;
  complementaryCours:     ComplementaryCours;
  date_start:             NgbDateStruct;
  date_end:               NgbDateStruct;
  message:                string;
  exist:                  false;

  public error = [] ;
  confirmMsg :string = null;
  errorMsg : string = null; 

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    private complementaryModuleService: ComplementaryModuleService,
    private complementaryCoursService: ComplementaryCoursService,
    private data: DataService,
  ) {
    registerLocaleData(localeFr);
  }

  ngOnInit() {
    this.getComplementaryModules();
    this.complementaryCours = new ComplementaryCours();
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      this.refreshList();
    });
  }

  // Recherche des modules existants  
  getComplementaryModules() {
    this.complementaryModuleService.getComplementaryModules().subscribe(
      (data :ComplementaryModule[]) => this.complementaryModules = data,
      (error) => console.log('erreur de communication avec le serveur', error),
    );
  }

  // Enregistrer le cours complémentaire
  enregistrerCours() {
    this.createComplementaryCours();
    this.sendMessageToLeftComponent();
    this.complementaryCoursService.enregistrerComplementaryCourses(this.complementaryCours).subscribe(
      (data)=> { this.handleData(data); },
      (error)=> { this.handleError(error); }
    );
  }

  // Raffraichir la liste des modules
  refreshList() {
    this.getComplementaryModules(); 
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  // Construction de l'objet cours complémentaire 
  createComplementaryCours() {
    var convertStartDate;
    var convertEndDate;
    convertStartDate= new Date(this.date_start.year +'-' + this.date_start.month +'-' + this.date_start.day + ' 06:06');
    this.complementaryCours.date_start = convertStartDate;
    convertEndDate= new Date(this.date_end.year +'-' + this.date_end.month +'-' + this.date_end.day + ' 06:06');
    this.complementaryCours.date_end = convertEndDate;
    this.complementaryCours.complementary_module_id = this.complementaryModule.id;
    this.complementaryCours.expected_time_hour = this.complementaryModule.duration;
    // this.existComplementaryCourses(this.complementaryCours.complementary_module_id, this.complementaryCours.date_start, this.complementaryCours.date_end);
    if (!this.dateToBeDefined) {
        var diff = Math.abs(convertEndDate.getTime() - convertStartDate.getTime());
        var diffHours = (Math.round((diff) / (1000 * 3600 * 24)) *7)+7;
        this.complementaryCours.real_time_hour = diffHours;
        this.complementaryCours.expected_time_hour = this.complementaryModule.duration;
    } else {
        this.complementaryCours.real_time_hour = this.complementaryModule.duration;
        this.complementaryCours.date_to_be_defined = this.dateToBeDefined;
        this.complementaryCours.expected_time_hour = this.complementaryModule.duration;
    }
  }

  // existComplementaryCourses(idmodule: number, start: Date, end: Date) {
  //   this.complementaryCoursService.existComplementaryCourse(idmodule, start, end).subscribe(
  //     (data) => this.exist=data,
  //     (error) => console.log('error:', error),
  //   );
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
  
  // Changement des dates à redéfinir
  change(dateToBeDefined: boolean) {
    this.dateToBeDefined = !this.dateToBeDefined;
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
  

  // Traitement des erreurs
  handleError(error) {
    this.confirmMsg = null;
    if (error.status == '500') {
      this.errorMsg = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
    } else {
      this.error=error.error.errors;
      console.log('error:', this.error); 
    }
  }
  
  // Traitement des données
  handleData(data) {
    this.errorMsg = null;
    this.error = [];
    this.confirmMsg = "Cours complémentaire enregistré !";
  }
}