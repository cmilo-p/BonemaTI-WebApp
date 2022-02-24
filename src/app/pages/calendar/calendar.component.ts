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

  public data!: Appointment[];
  public eventos: any = []

  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: this.eventos
    /* [
      { title: 'event 1', date: '2022-02-01' },
      { title: 'event 2', date: '2022-02-02' }
    ] */
  };

  constructor(private appointmentSvc: AppointmentsService) {
  }

  ngOnInit(): void {

    this.appointmentSvc.getAppointments().subscribe(
      {
        next: (response) => {
          this.data = response.appointment;
          console.log(this.data);
          this.evento();
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

  evento() {
    this.data.forEach(element => {

      this.eventos = [ 
        {title: element.tpMaintenance, date: element.date_appointment}
      ]

    
      /* console.warn(element.tpMaintenance);
      console.warn(element.date_appointment); */
    });
  }

}
