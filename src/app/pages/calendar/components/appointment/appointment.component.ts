import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public appointment: Appointment;
  public isEdit: boolean;

  constructor(
    private appointmentSvc: AppointmentsService,
    private _rt: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
    this.isEdit = true;
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this.appointmentSvc.getApointment(id).subscribe(
          {
            next: (response) => {
              this.appointment = response.appointment;
            },
            error: (error) => {
              console.log(error);
            }
          }
        );
      }
    );
  }

  delete() {
    this.appointmentSvc.delete(this.appointment._id).subscribe(
      {
        next: (response) => {
          console.log(response);
          //this.openSnackBar('Usuario Creado!', 'Cerrar');
        },
        error: (error) => {
          console.log(error);
          //this.openSnackBar(response.message, 'Cerrar');
          console.warn(error);
          

        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
