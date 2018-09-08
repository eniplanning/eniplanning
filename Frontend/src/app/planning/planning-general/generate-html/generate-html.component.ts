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

@Component({
  selector: 'generate-html',
  templateUrl: './generate-html.component.html',
  styleUrls: ['./generate-html.component.scss']
})
export class GenerateHtmlComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  planning: Planning;
  stagiaire: Stagiaire;
  formation: Formation;
  titre: Titre;

  
  constructor(
    private route: ActivatedRoute,
    private titreService: TitreService,
    private stagiaireService: StagiaireService,
    private formationService: FormationService,
    private planningService: PlanningService
  ) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
    this.getPlanning(this.id);
  }

  getPlanning(id) {
    this.planningService.getPlanningsById(id).subscribe(
      data=> {
        this.planning = data;
      },
      error=>{
        console.log(error);
      },
      ()=> {
        this.getStagiaire();
      }
    );
  }

	// Chargement du stagiaire
	getStagiaire(): void {
    console.log('début de récupération du stagiaire, id:'+this.planning.stagiaire_id);
    this.stagiaireService.getStagiaireById(this.planning.stagiaire_id).subscribe(
      data => {
        this.stagiaire = data;
        console.log('this.stagiaire:'+this.stagiaire);
      },
      error => console.log(error),
      () => {
        this.getFormation();
      }
    );
    console.log('fin de récupération du stagiaire');
  }

  // Chargement de la formation 
  getFormation() {
    console.log('début de récupération de la formation, id:'+this.planning.formation_id);
    this.formationService.getFormation(this.planning.formation_id).subscribe(
      data=>{
        this.formation = data;
        console.log('this.formation:'+this.formation);
      },
      error => {
        console.log(error);
      },
      ()=> {
        this.getTitre()
      }
    );
    console.log('fin de récupération de la formation');
  }

  // Chargement du titre 
  getTitre() {
    console.log('début de récupération du titre, id:'+this.formation.CodeTitre);
    console.log(this.formation);
    this.titreService.getTitre(this.formation.CodeTitre).subscribe(
      data=>{
        this.titre = data;
        console.log('this.titre:'+this.titre);
      },
      error => {
        console.log(error);
      },
      () => 
        { 
          
        }
    );
    console.log('fin de récupération du titre');
  }


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