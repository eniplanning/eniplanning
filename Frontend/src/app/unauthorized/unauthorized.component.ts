import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

}
