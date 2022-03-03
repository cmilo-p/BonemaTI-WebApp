import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers: [UsersService]
})
export class NewUserComponent implements OnInit {

  public page_title: string;
  public isEdit: boolean;

  public user: User;

  constructor(
    private userSvc: UsersService,
    private _rt: Router,
    private _snackBar: MatSnackBar
  ) {
    this.page_title = "USUARIO NUEVO";
    this.isEdit = false;

    this.user = new User('', '', '', '', '', '', true);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userSvc.create(this.user).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this._rt.navigate(['/config/editUser/', response.user._id]);
            this.openSnackBar('Usuario Creado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this._rt.navigate(['/config/users']);
          this.openSnackBar('Error al crear el usuario', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  delete(id: any) {
    /* Función polimórfica establecida en edit-user */
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
