import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../Modeles/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formCreate = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    prenom: new FormControl(null, [Validators.required]),
    eMail: new FormControl(null, [Validators.required]),
    motDePasse: new FormControl(null, [Validators.required])
  });

  constructor(private userService : UserService) { }

  onSubmit(){
    const user: User = Object.assign({}, this.formCreate.value);
    this.userService.createUser(user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formCreate.reset();
  }

  ngOnInit() {
  }

}
