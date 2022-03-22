import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: '../appointment.component.html'
})
export class NewAppointmentComponent implements OnInit {

  public appointment: Appointment;
  public isEdit: boolean;

  constructor(
    private appointmentSvc: AppointmentsService,
    private _rt: Router,
    private _route: ActivatedRoute) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
    this.isEdit = false;
  }

  ngOnInit(): void {
  }

  delete() {
    /* Función polimórfica establecida en appointment */
  }

}
