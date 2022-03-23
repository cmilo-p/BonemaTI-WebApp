import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers: [AppointmentsService]
})
export class AppointmentComponent implements OnInit {

  public appointment: Appointment;
  public isEdit: boolean;

  constructor(
    private appointmentSvc: AppointmentsService,
    private _rt: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar
    ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
    this.isEdit = true;
  }

  ngOnInit(): void {
    this.getAppointment();
  }

  onSubmit() {
    /* Implementar Mensajes del Sistema */
    this.appointmentSvc.update(this.appointment._id, this.appointment).subscribe(
      {
        next: (response) => {
          if (response) {
            console.log(response);
          } else {
            console.log(response);
          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getAppointment() {
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.appointmentSvc.getApointment(id).subscribe(
        {
          next: (response) => {
            if (response.appointment) {
              this.appointment = response.appointment;
            } else {
              this.openSnackBar(response.message, 'Cerrar');
              console.warn(response);
            }
          },
          error: (error) => {
            this._rt.navigate(['/calendar']);
            this.openSnackBar('Error al obtener los mantenimientos', 'Cerrar');
            console.warn(error);
          }
        }
      );

    });
  }

  delete(id: any) {
    this.appointmentSvc.delete(id).subscribe(
      {
        next: (response) => {
          this._rt.navigate(['/calendar']);
          this.openSnackBar('¡Agendamiento Eliminado!', 'Cerrar');
        },
        error: (error) => {
          this._rt.navigate(['/calendar']);
          this.openSnackBar('Error al eliminar el agendamiento', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onNoClick() {
    /* Función polimórfica establecida en newa-ppointment.component */
  }

  public desq: boolean = true
  desbloquear() {
    if (this.desq == false) {
      this.desq = true
    } else {
      this.desq = false
    }
    console.log(this.desq);
  }

}
