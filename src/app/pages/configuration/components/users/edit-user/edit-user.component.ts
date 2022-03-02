import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: '../new-user/new-user.component.html',
  providers: [UsersService]
})
export class EditUserComponent implements OnInit {

  public page_title: string;
  public user: User;

  constructor(
    private userSvc: UsersService,
    private _rt: Router
  ) {
    this.page_title = "Modificar Usuario"
    this.user = new User('', '', '', '', '', '', true);
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log('vacio');
  }

}
