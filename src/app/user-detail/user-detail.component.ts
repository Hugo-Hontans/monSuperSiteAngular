import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Modeles/User';
import { UserService } from '../Services/user.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  formUpdate = new FormGroup({
    nom: new FormControl(null),
    prenom: new FormControl(null),
    eMail: new FormControl(null),
    motDePasseActuel: new FormControl(null, [Validators.required]),
    motDePasse: new FormControl(null)
  });

  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UsersListComponent) { }

  onSubmit(){
    const user: User = Object.assign({}, this.formUpdate.value);
    this.userService.updateUser(this.user.id, user)
      .subscribe(data =>{ console.log(data); this.listComponent.reloadData()}, error => console.log(error));
    this.formUpdate.reset();
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

  ngOnInit() {
  }

}
