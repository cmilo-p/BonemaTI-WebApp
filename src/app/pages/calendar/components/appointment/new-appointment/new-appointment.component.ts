import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-appointment',
  templateUrl: '../appointment.component.html',
  providers: [AppointmentsService]
})
export class NewAppointmentComponent implements OnInit {

  public appointment: Appointment;
  public isEdit: boolean;

  constructor(
    private appointmentSvc: AppointmentsService,
    private _rt: Router,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<NewAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
    this.isEdit = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.appointmentSvc.create(this.appointment).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this.onNoClick();
            this._rt.navigate(['/calendar/appointment/', response.appointment._id]);
            this.openSnackBar('Mantenimiento Registrado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this.onNoClick();
          this.openSnackBar('Error al registrar el mantenimiento', 'Cerrar');
        }
      }
    );
  }

  delete(id: any) {
    /* Función polimórfica establecida en appointment.component */
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  public desq: boolean = false
  desbloquear() {
    if (this.desq == false) {
      this.desq = true
    } else {
      this.desq = false
    }
    console.log(this.desq);
  }

}
