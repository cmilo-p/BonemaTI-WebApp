import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: '../new-user/new-user.component.html',
  providers: [UsersService]
})
export class EditUserComponent implements OnInit {

  public page_title: string;
  public isEdit: boolean;

  public user: User;

  constructor(
    private userSvc: UsersService,
    private _rt: Router,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute
  ) {
    this.page_title = "MODIFICAR USUARIO";
    this.isEdit = true;

    this.user = new User('', '', '', '', '', '', true);
  }

  ngOnInit(): void {
    this.getUser();
  }

  onSubmit() {
    this.userSvc.update(this.user._id, this.user).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this.user = response.userUpdate;
            this.openSnackBar('Usuario Actualizado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this._rt.navigate(['/config/users']);
          this.openSnackBar('Error al crear el Usuario', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  getUser() {
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.userSvc.getUser(id).subscribe(
        {
          next: (response) => {
            if(response.user){
              this.user = response.user;
            }else {
              this.openSnackBar(response.message, 'Cerrar');
              console.warn(response);
            }
          },
          error: (error) => {
            this._rt.navigate(['/config/users']);
            this.openSnackBar('Error al obtener el usuario', 'Cerrar');
            console.warn(error);
          }
        }
      );
    });
  }

  delete(id: any) {
    this.userSvc.delete(id).subscribe(
      {
        next: (response) => {
          this._rt.navigate(['/config/users']);
          this.openSnackBar('¡Usuario Eliminado!', 'Cerrar');
        },
        error: (error) => {
          this._rt.navigate(['/config/employees']);
          this.openSnackBar('Error al eliminar el usuario', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
