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
import { EntrepriseService } from '../../../utils/services/entreprise.service';
import { StagiaireparentrepriseService } from '../../../utils/services/stagiaireparentreprise.service';
import { StagiaireParEntreprise } from '../../../utils/models/stagiaireparentreprise';
import { DatePipe } from '@angular/common';
import { CoursPlanning } from '../../../utils/models/cours-planning';

@Component({
  selector: 'generate-html',
  templateUrl: './generate-html.component.html',
  styleUrls: ['./generate-html.component.scss']
})
export class GenerateHtmlComponent implements OnInit, OnDestroy {

  
  param:                  number;
  ready:                  boolean;
  private sub:            any;
  planning:               Planning;
  stagiaire:              Stagiaire;
  formation:              Formation;
  titre:                  Titre;
  entreprise:             string;
  stagiaireparentreprise: StagiaireParEntreprise;
  nb_heures_formations:   string;
  cours_planning:         CoursPlanning[];
  endOfBeginEntreprise:   string;
  beginOfEndEntreprise:   string;
  fridayBefore:           string;
  mondayAfter:            string;
  nbcours:                number;
  rowcount:               number;
  run:                    boolean;

  
  constructor(
    private route: ActivatedRoute,
    private titreService: TitreService,
    private formationService: FormationService,
    private planningService: PlanningService,
    private entrepriseService: EntrepriseService,
    private datePipe: DatePipe,
  ) { 
    this.getPlanning();
    this.getStagiaire();
    this.rowcount=0;
    this.run=true;
  }

  ngOnInit() {
  } 

  // Formatage des dates pour l'affichage
  getDisplayDate(date:Date) {
    return this.datePipe.transform(date,"dd/MM/yyyy", 'fr-Fr');
  }
  
  // Affichage de la première date en entreprise (vendredi)
  getFirstDateEntreprise() {
    var beforeDate = new Date(this.planning.planning_courses[0].date_start);
     beforeDate.setDate(beforeDate.getDate() - 3);
    this.endOfBeginEntreprise = this.getDisplayDate(beforeDate);
  }
  
  // Affichage de la dernière date en entreprise (lundi)
  getLastDateEntreprise() {
    var nextDate = new Date(this.planning.planning_courses[this.planning.planning_courses.length-1].date_end);
    nextDate.setDate(nextDate.getDate() + 3);
    this.beginOfEndEntreprise = this.getDisplayDate(nextDate);
  }

  // Affichage du Lundi en entreprise (ligne précédant le cours) 
  getMondayBefore(cours: CoursPlanning) {
    if (this.planning.planning_courses.indexOf(cours) != 0) {
      var beforeDate = new Date(this.planning.planning_courses[this.planning.planning_courses.indexOf(cours)-1].date_end);
      beforeDate.setDate(beforeDate.getDate() + 3);
      return this.getDisplayDate(beforeDate);
    }
  }

  // Affichage du Vendredi en entreprise (ligne précédant le cours) 
  getFridayBefore(cours: CoursPlanning) {
    if (this.planning.planning_courses.indexOf(cours) != 0){
      var beforeDate = new Date(this.planning.planning_courses[this.planning.planning_courses.indexOf(cours)].date_start);
      beforeDate.setDate(beforeDate.getDate() - 3);
      return this.getDisplayDate(beforeDate);
    }
  }

  // Affichage du nombre de semaines en entreprise
  getNbSemainesEntreprise(cours: CoursPlanning) {
    var beforeMondayDate = new Date(this.planning.planning_courses[this.planning.planning_courses.indexOf(cours)-1].date_end);
    var mondayBefore = new Date(beforeMondayDate.setDate(beforeMondayDate.getDate() + 3));
    var beforeFridayDate = new Date(this.planning.planning_courses[this.planning.planning_courses.indexOf(cours)].date_start);
    var fridayBefore = new Date(beforeFridayDate.setDate(beforeFridayDate.getDate()));
    var diff = Math.abs(fridayBefore.getTime() - mondayBefore.getTime());
    diff = Math.round(diff / (1000 * 3600 * 24 * 7));
    return diff.toString();
  }
  
  // Vérifier si les cours se suivent
  isConsecutive(cours:CoursPlanning) {
    var indexCours = this.planning.planning_courses.indexOf(cours);
    if (indexCours != 0) {
      var indexPreviouxCours = (this.planning.planning_courses.indexOf(cours) -1);
      var previousCours = this.planning.planning_courses[indexPreviouxCours];
      var date_start = new Date(cours.date_start);
      var date_start_convert = new Date(date_start.setDate(date_start.getDate()));
      var date_previous_end = new Date(previousCours.date_end);
      var date_previous_end_convert = new Date(date_previous_end.setDate(date_previous_end.getDate()));
      var diff = Math.abs(date_start_convert.getTime() - date_previous_end_convert.getTime());
      var diffDays = Math.round(diff / (1000 * 3600 * 24));
      if (diffDays < 4) {
        return false;
      } else {
        return true;
      }
    } else { 
      return false;
    }
  }

  // Chargement du planning
  async getPlanning() {
    var idPlanning = JSON.parse(sessionStorage.getItem('selectedPlanning')).id;
    return await this.planningService.getPlanningById(idPlanning).subscribe(
      (data:Planning) => {
        this.planning = data;
        this.planning.label = JSON.parse(sessionStorage.getItem('selectedPlanning')).label;
        this.planning.date_start_formation = JSON.parse(sessionStorage.getItem('selectedPlanning')).date_start_formation;
        },
      error=>{
        console.log("erreur de récupération du planning:", error);  
      },
      ()=>{
        this.getEntreprise(); 
        this.getFirstDateEntreprise();
        this.getLastDateEntreprise();
        this.getFormation();
        var nb_heures = 0;
        for (let cours of this.planning.planning_courses) {
          nb_heures+=cours.expected_time_hour;
          this.nbcours+=1;
        }
        this.nb_heures_formations = nb_heures.toString();
      }
    );
  }


	// Chargement du stagiaire
	getStagiaire() {
    this.stagiaire = JSON.parse(sessionStorage.getItem('selectedStagiaire'));
  }

  // Chargement de la formation 
  async getFormation() {
    return await this.formationService.getFormationById(this.planning.formation_id).subscribe(
      data=>{
        this.formation = data;
      },
      error => {
        console.log("erreur de récupération de la formation:",error);
      },
      ()=> {
        this.getTitre();
      }
    );
  }

  // Chargement du Stagiaire par entreprise 
  getEntreprise() {
    if (sessionStorage.getItem('stagiaireParEntreprise') != null) {
      var SpE = JSON.parse(sessionStorage.getItem('stagiaireParEntreprise'));
      if (SpE.CodeEntreprise != null) { 
        return this.entrepriseService.getEntrepriseById(SpE.CodeEntreprise).subscribe(
          data => {
            this.entreprise = data.RaisonSociale;
          },
          error => {
            console.log("erreur de récupération de l'entreprise:"+error);
          }
        );
      } 
    } else {
      this.entreprise = "à définir";
    }
  }

  // Chargement du titre 
  async getTitre() {
    return await this.titreService.getTitre(this.formation.CodeTitre).subscribe(
      data=>{
        this.titre = data;
      },
      error => {
        console.log("erreur de récupération du titre:"+error);
      },
      ()=> {
        this.ready = true;
      }
    );
  }


  // Téléchargement du planning
  downloadPdf() {
    // Ajout d'un saut de ligne avant la 7ème ligne de cours
    var divCible = document.querySelectorAll("[data-index='6']")[0];
    if (divCible != null) {
      divCible.classList.add("print_marge");
      var data1 = document.getElementsByClassName('contentToConvert')[0];
    } else {
      var data1 = document.getElementsByClassName('contentToConvert')[0];
    } 
    
    html2canvas(data1).then(canvas => {  
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jspdf('p', 'mm', 'A4');
      var position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save(this.planning.label+'.pdf');
            
			var url = window.URL.createObjectURL(new Blob([doc], { type: "application/pdf" }));
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display: none');
      a.href = url;
			a.download = this.planning.label+'.pdf';
			window.URL.revokeObjectURL(url);
      a.remove(); // remove the element
      if (divCible != null) {
        divCible.classList.remove("print_marge");
      }
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}