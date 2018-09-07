import { Component, OnInit, Input } from '@angular/core';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
import { Planning } from '../../../utils/models/planning';
import { Formation } from '../../../utils/models/formation';
import { Titre } from '../../../utils/models/titre';

@Component({
  selector: 'generate-html',
  templateUrl: './generate-html.component.html',
  styleUrls: ['./generate-html.component.scss']
})
export class GenerateHtmlComponent implements OnInit {

  @Input() planning: Planning;
  @Input() formation: Formation;
  titre: Titre; 

  constructor() { }

  ngOnInit() {
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

}
