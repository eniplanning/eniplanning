import { Component, OnInit, OnDestroy } from '@angular/core';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
import { Planning } from '../../../utils/models/planning';
import { Formation } from '../../../utils/models/formation';
import { Titre } from '../../../utils/models/titre';
import { Stagiaire } from '../../../utils/models/stagiaire';
import { TitreService } from '../../../utils/services/titre.service'
import { StagiaireService } from '../../../utils/services/stagiaire.service'
import { FormationService } from '../../../utils/services/formation.service'
import { PlanningService } from '../../../utils/services/planning.service'  
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from '../../../utils/models/entreprise';
import { EntrepriseService } from '../../../utils/services/entreprise.service';
import { StagiaireparentrepriseService } from '../../../utils/services/stagiaireparentreprise.service';
import { StagiaireParEntreprise } from '../../../utils/models/stagiaireparentreprise';
import { DatePipe } from '@angular/common';
import { CoursPlanning } from '../../../utils/models/cours-planning';
import { CoursPlanningService } from '../../../utils/services/cours-planning.service';

@Component({
  selector: 'generate-html',
  templateUrl: './generate-html.component.html',
  styleUrls: ['./generate-html.component.scss']
})
export class GenerateHtmlComponent implements OnInit, OnDestroy {

  param: number;
  ready: boolean;
  private sub: any;
  planning: Planning;
  stagiaire: Stagiaire;
  formation: Formation;
  titre: Titre;
  entreprise: Entreprise;
  stagiaireparentreprise: StagiaireParEntreprise;
  nb_heures_formations: number;
  cours_planning: CoursPlanning;
  
  constructor(
    private route: ActivatedRoute,
    private titreService: TitreService,
    private stagiaireService: StagiaireService,
    private formationService: FormationService,
    private planningService: PlanningService,
    private entrepriseService: EntrepriseService,
    private stagiaireParEntrepriseService: StagiaireparentrepriseService,
    private datePipe: DatePipe,
    private coursplanningService: CoursPlanningService,
  ) { 
    this.sub = this.route.params.subscribe(params => {
       this.param = +params['id']; 
    });
    this.getPlanning(this.param);
  }

  ngOnInit() {
  }

  async getPlanning(param) {
    console.log('début de récupération du planning, id:'+param);
    return await this.planningService.getPlanningsById(param).subscribe(
      data=> {
        this.planning = data;
      },
      error=>{
        console.log("erreur de récupération du planning:"+error);  
      },
      ()=> {
        console.log('fin de récupération du planning');
        console.log("this.planning.planning_courses:"+this.planning.planning_courses);
        this.getCoursPlanning();
      }
    );
  }

	// Chargement du stagiaire
	async getCoursPlanning() {
    console.log('début de récupération des cours du planning, id:'+this.planning.id);
    return await this.coursplanningService.getCours(this.planning.id).subscribe(
      data => {
        //this.cours_planning = data;
        console.log('this.cours_planning returndata:'+data);
      },
      error => {
        console.log("erreur de récupération des cours du planning:"+error);  
      },
      () => {
        console.log('fin de récupération des cours du planning');
        this.getStagiaire();
      }
    );
  }

	// Chargement du stagiaire
	async getStagiaire() {
    console.log('début de récupération du stagiaire, id:'+this.planning.stagiaire_id);
    return await this.stagiaireService.getStagiaireById(this.planning.stagiaire_id).subscribe(
      data => {
        this.stagiaire = data;
        console.log('this.stagiaire:'+this.stagiaire);
      },
      error => {
        console.log("erreur de récupération du stagiaire:"+error);  
      },
      () => {
        console.log('fin de récupération du stagiaire');
        this.getFormation();
      }
    );
  }

  // Chargement de la formation 
  async getFormation() {
    console.log('début de récupération de la formation, id:'+this.planning.formation_id);
    return await this.formationService.getFormationById(this.planning.formation_id).subscribe(
      data=>{
        this.formation = data;
        console.log('this.formation:'+this.formation);
      },
      error => {
        console.log("erreur de récupération de la formation:"+error);
      },
      ()=> {
        console.log('fin de récupération de la formation');
        this.getStagiaireParEntreprise(); 
      }
    );
  }

  // Chargement de l'entreprise 
  async getStagiaireParEntreprise() {
    console.log("début de récupération du stagiaire par entreprise:"+this.stagiaire.CodeStagiaire);
    return await this.stagiaireParEntrepriseService.getStagiaireParEntrepriseByIdStagiaire(this.stagiaire.CodeStagiaire).subscribe(
      data => {
        this.stagiaireparentreprise = data;
      },
      error=>{
        console.log("erreur de récupération du stagiaire par entreprise:"+error);
      },
      () => {
        console.log("fin de récupération du stagiaire par entreprise");
        this.getEntreprise();
      }
    );
  }

  async getEntreprise(){
    console.log("début de l'entreprise:"+this.stagiaire.CodeStagiaire);
    return await this.entrepriseService.getEntrepriseById(this.stagiaireparentreprise.CodeEntreprise).subscribe(
      data => {
        this.entreprise = data;
      },
      error => {
        console.log("erreur de récupération de l'entreprise:"+error);
      },
      () => {
        console.log("fin de récupération de l'entreprise");
        this.getTitre();
      }
    );
  }

  // Chargement du titre 
  async getTitre() {
    console.log('début de récupération du titre, id:'+this.formation.CodeTitre);
    return await this.titreService.getTitre(this.formation.CodeTitre).subscribe(
      data=>{
        this.titre = data;
        console.log('this.titre:'+this.titre);
      },
      error => {
        console.log("erreur de récupération du titre:"+error);
      },
      () => 
      { 
        console.log('fin de récupération du titre');
        this.ready=true;
      }
    );
  }


  // Téléchargement du planning
  downloadPdf() { 
    // doc = https://stackoverflow.com/questions/51624534/download-pdf-file-angular-6-and-web-api
    // https://www.c-sharpcorner.com/article/convert-html-to-pdf-using-angular-6/
    var data = document.getElementById('contentToConvert');  
    
    console.log('début chargement pdf');
    html2canvas(data).then(canvas => {  
      
      // Few necessary setting options  
      var imgWidth = 210;   
      var pageHeight = 350;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.planning.label+'.pdf'); // Generated PDF   
      
			var url = window.URL.createObjectURL(new Blob([pdf.text()], { type: "application/octet-stream" }));
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display: none');
			a.href = url;
			a.download = 'MYPdf.pdf';
			a.click();
			window.URL.revokeObjectURL(url);
			a.remove(); // remove the element
    });  
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}