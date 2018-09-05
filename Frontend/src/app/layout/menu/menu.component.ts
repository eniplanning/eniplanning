import { Component, OnInit, Input  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { User } from '../../utils/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    currentUser: User;
    @Input() userRole: number; 

  	constructor() { }

  	ngOnInit() {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      this.userRole  = this.currentUser.role_id;
    }

}
