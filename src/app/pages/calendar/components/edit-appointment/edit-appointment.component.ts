import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { Employee } from 'src/app/models/Employee';
import { Device } from 'src/app/models/Devices';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: '../new-appointment/new-appointment.component.html',
  providers: [
    AppointmentsService
  ]
})
export class EditAppointmentComponent implements OnInit {

  public users!: User[];
  public employees!: Employee[];
  public hosts!: Device[];
  public appointment: Appointment;
  public isEdit: boolean;

  constructor(
    private appointmentSvc: AppointmentsService,
    private _rt: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
  ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
    this.isEdit = true;
  }

  ngOnInit(): void {
    this.getAppointment();
  }

  onSubmit() {
    this.appointmentSvc.update(this.appointment._id, this.appointment).subscribe(
      {
        next: (response) => {
          if (response) {
            this.openSnackBar('Mantenimiento actualizado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this.openSnackBar('Error al actualizar el mantenimiento', 'Cerrar');
          console.error(error);
        }
      }
    );
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

}
