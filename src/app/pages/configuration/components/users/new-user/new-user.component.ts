import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers: [UsersService]
})
export class NewUserComponent implements OnInit {

  public page_title: string;
  public user: User;

  constructor(
    private userSvc: UsersService,
    private _rt: Router
  ) {
    this.page_title = "Nuevo Usuario"
    this.user = new User('', '', '', '', '', '', true);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userSvc.create(this.user).subscribe(
      {
        next: (response) => {
          console.log(response);
          this._rt.navigate(['/config/users']);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
    console.log('vacio');
  }

}
