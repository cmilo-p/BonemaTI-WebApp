import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  @Input() appointments!: Appointment[];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
