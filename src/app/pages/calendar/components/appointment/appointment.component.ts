import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public appointment: Appointment;

  public selected!: Date | null;

  constructor(
    private appointmentSvc: AppointmentsService,
    private _route: ActivatedRoute) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
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
      });
  }

  initDate(date: Date) {
    date.getMonth()
  }

}
