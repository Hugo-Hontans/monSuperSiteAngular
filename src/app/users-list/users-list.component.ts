import { Component, OnInit } from '@angular/core';
import { User } from '../Modeles/User';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) { }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  ngOnInit() {
    this.reloadData();
  }

}
