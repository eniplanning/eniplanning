import { Component, OnInit } from '@angular/core';
import { UserService } from '../utils/services/user.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  username: string;
  constructor(
    private userService : UserService,
  ) { }

  ngOnInit() {
    this.username = this.userService.getUserName();
  }

}
