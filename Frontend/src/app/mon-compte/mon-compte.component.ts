import { Component, OnInit } from '@angular/core';
import { UserService } from '../utils/services/user.service';
import { User } from '../utils/models/user';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  user: User;
  constructor(
    private userService : UserService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

}
