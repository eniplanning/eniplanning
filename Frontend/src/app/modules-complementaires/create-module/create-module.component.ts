import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar, NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryModule } from '../../utils/models/complementary-module';
import { ComplementaryModuleService} from '../../utils/services/complementary-module.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DataService } from '../../utils/services/data.service';


@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit  {

  // Evénement à la fermeture de la modal 
  message:string;  
  sendMessage() {
    this.data.changeMessage('closed');
  }
  
  label: string;
  description: string;
  duration: number;
  complementaryModule: ComplementaryModule = new ComplementaryModule();

  public error = [] ;
  confirmMsg :string = null;
  errorMsg : string = null; 

  constructor(
    private complementaryModuleService: ComplementaryModuleService,
    private modalService: NgbModal,
    private data: DataService,
  ) {  }

  ngOnInit() {
    registerLocaleData(localeFr);
    this.data.currentMessage.subscribe(message => this.message = message)
  }


  // Enregistrer cours
  enregistrerModule() {
    this.sendMessage();
    this.complementaryModule.label = this.label;
    this.complementaryModule.description = this.description;
    this.complementaryModule.duration = this.duration;
    this.complementaryModuleService.saveModule(this.complementaryModule).subscribe(
      data => this.handleData(data),
      error => this.handleError(error),
    );
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
    this.label = null;
    this.description = null;
    this.duration = null;
    this.error = [];
    this.confirmMsg = null;
    this.modalService.open(content, {ariaLabelledBy: 'app-create-module'}).result.then((result) => {
      console.log('result:', result);
    }, (reason) => {
      console.log('reason:', reason);
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
    this.confirmMsg = "Module complémentaire enregistré !";
  }
}
