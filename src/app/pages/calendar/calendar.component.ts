import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [AppointmentsService]
})
export class CalendarComponent implements OnInit {

  public appointments!: Appointment[];

  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events:
      [
        { title: 'event 1', date: '2022-03-01' },
        { title: 'event 2', date: '2022-03-02' }
      ]
  };

  constructor(private appointmentSvc: AppointmentsService) { }

  ngOnInit(): void {

    this.appointmentSvc.getAppointments().subscribe(
      {
        next: (response) => {
          if (response) {
            this.appointments = response.appointments;
          } else {

          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    );

  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  /*   evento() {
      this.data.forEach(element => {
        let ISOfecha = new Date(element.date_appointment);
        let fecha = ISOfecha.getFullYear() + '-' + '0' +ISOfecha.getMonth() + '-' + '0' + ISOfecha.getDay()
  
        this.eventos.push({ title: element.tpMaintenance, date: fecha })
      });
    } */

}
