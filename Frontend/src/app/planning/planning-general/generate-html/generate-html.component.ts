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
  nb_heures_formations: string;
  cours_planning: CoursPlanning[];
  endOfBeginEntreprise: string;
  beginOfEndEntreprise: string;
  fridayBefore: string;
  mondayAfter: string;
  
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

  // Formatage des dates pour l'affichage
  getDisplayDate(date:Date) {
    return this.datePipe.transform(date,"dd/MM/yyyy", 'fr-Fr');
  }
  
  // Affichage de la première date en entreprise (vendredi)
  getFirstDateEntreprise() {
    var beforeDate = new Date(this.cours_planning[0].date_start);
    beforeDate.setDate(beforeDate.getDate() - 3);
    this.endOfBeginEntreprise = this.getDisplayDate(beforeDate);
  }
  
  // Affichage de la dernière date en entreprise (lundi)
  getLastDateEntreprise() {
    var nextDate = new Date(this.cours_planning[this.cours_planning.length-1].date_end);
    nextDate.setDate(nextDate.getDate() + 3);
    this.beginOfEndEntreprise = this.getDisplayDate(nextDate);
  }

  // Affichage du Lundi en entreprise (ligne précédant le cours) 
  getMondayBefore(cours: CoursPlanning) {
    if (this.cours_planning.indexOf(cours) != 0) {
      var beforeDate = new Date(this.cours_planning[this.cours_planning.indexOf(cours)-1].date_end);
      beforeDate.setDate(beforeDate.getDate() + 3);
      return this.getDisplayDate(beforeDate);
    }
  }

  // Affichage du Vendredi en entreprise (ligne précédant le cours) 
  getFridayBefore(cours: CoursPlanning) {
    if (this.cours_planning.indexOf(cours) != 0){
      var beforeDate = new Date(this.cours_planning[this.cours_planning.indexOf(cours)].date_start);
      beforeDate.setDate(beforeDate.getDate() - 3);
      return this.getDisplayDate(beforeDate);
    }
  }

  // Affichage du nombre de semaines en entreprise
  getNbSemainesEntreprise(cours: CoursPlanning) {
    var beforeMondayDate = new Date(this.cours_planning[this.cours_planning.indexOf(cours)-1].date_end);
    var mondayBefore = new Date(beforeMondayDate.setDate(beforeMondayDate.getDate() + 3));
    var beforeFridayDate = new Date(this.cours_planning[this.cours_planning.indexOf(cours)].date_start);
    var fridayBefore = new Date(beforeFridayDate.setDate(beforeFridayDate.getDate()));
    var diff = Math.abs(fridayBefore.getTime() - mondayBefore.getTime());
    diff = Math.round(diff / (1000 * 3600 * 24 * 7));
    return diff.toString();
  }
  

  // Vérifier si les cours se suivent
  isConsecutive(cours:CoursPlanning) {
    var indexCours = this.cours_planning.indexOf(cours);
    if (indexCours != 0) {
      var indexPreviouxCours = (this.cours_planning.indexOf(cours) -1);
      var previousCours = this.cours_planning[indexPreviouxCours];
      var date_start = new Date(cours.date_start);
      var date_start_convert = new Date(date_start.setDate(date_start.getDate()));
      var date_previous_end = new Date(previousCours.date_end);
      var date_previous_end_convert = new Date(date_previous_end.setDate(date_previous_end.getDate()));
      var diff = Math.abs(date_start_convert.getTime() - date_previous_end_convert.getTime());
      if (diff < 4) {
        return false;
      } else {
        return true;
      }
    } else { 
      return false;
    }
  }

  // Chargement du planning
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
        this.getCoursPlanning();
      }
    );
  }

	// Chargement du stagiaire
	async getCoursPlanning() {
    return await this.coursplanningService.getCours(this.planning.id).subscribe(
      (data: CoursPlanning[]) => {
        this.cours_planning = data;
      },
      error => {
        console.log("erreur de récupération des cours du planning:"+error);  
      },
      () => {
        this.getStagiaire();
        this.getFirstDateEntreprise();
        this.getLastDateEntreprise();
        var nb_heures = 0;
        for (let cours of this.cours_planning) {
          nb_heures+=cours.expected_time_hour;
        }
        this.nb_heures_formations = nb_heures.toString();
       }
    );
  }

	// Chargement du stagiaire
	async getStagiaire() {
    console.log('début de récupération du stagiaire, id:'+this.planning.stagiaire_id);
    return await this.stagiaireService.getStagiaireById(this.planning.stagiaire_id).subscribe(
      data => {
        this.stagiaire = data;
      },
      error => {
        console.log("erreur de récupération du stagiaire:"+error);  
      },
      () => {
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
      },
      error => {
        console.log("erreur de récupération de la formation:"+error);
      },
      ()=> {
        this.getStagiaireParEntreprise(); 
      }
    );
  }

  // Chargement du Stagiaire par entreprise 
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
        this.getEntreprise();
      }
    );
  }

  // Chargement de l'entreprise
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
      },
      error => {
        console.log("erreur de récupération du titre:"+error);
      },
      () => 
      { 
        this.ready=true;
      }
    );
  }


  // Téléchargement du planning
  downloadPdf() { 
    // doc = https://stackoverflow.com/questions/51624534/download-pdf-file-angular-6-and-web-api
    // https://www.c-sharpcorner.com/article/convert-html-to-pdf-using-angular-6/
    
    console.log('début chargement pdf');
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      
      // Few necessary setting options  
      var imgWidth = 210;   
      var pageHeight = 300;    
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