import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [UsersService]
})
export class AuthComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public user: User;

  constructor(
    private userSvc: UsersService,
    private _rt: Router,
    private _snackBar: MatSnackBar
  ) {
    this.user = new User('', '', '', '', '', '', false);
  }

  ngOnInit(): void {
  }

  signIn() {
    this.userSvc.signIn(this.user).subscribe(
      {
        next: (response) => {
          if (response.status = 'success') {

            let userLoged = response.userdata;

            this._rt.navigate(['/home']);

            this._snackBar.open('Bienvenido al Sistema ' + userLoged.name, 'Cerrar', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });

            //localStorage.setItem('auth', JSON.stringify(userLoged.name));

          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this.openSnackBar('Error al ingresar al sistema', 'Cerrar');
          console.error(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
