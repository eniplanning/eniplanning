import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cookieValue = 'ENIPLANNING';
 
  constructor( 
    private cookieService: CookieService,
  ) { }
 
  ngOnInit(): void {
    this.cookieService.set( 'application', this.cookieValue);
  }
}