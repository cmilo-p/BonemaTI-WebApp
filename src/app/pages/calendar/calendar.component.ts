import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, CalendarApi } from '@fullcalendar/angular';

import { MatDialog } from '@angular/material/dialog';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [AppointmentsService]
})
export class CalendarComponent implements OnInit {

  public userlogged: boolean;

  public appointments!: Appointment[];
  public eventos!: any[];

  public calendarVisible = true;
  public calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    locale: 'es',
    initialView: 'dayGridMonth',
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(
    private appointmentSvc: AppointmentsService,
    public dialog: MatDialog
  ) {
    this.userlogged = false;
    this.eventos = []
  }

  ngOnInit(): void {
    this.userCredential();
    this.appointmentSvc.getAppointments().subscribe(
      {
        next: (response) => {
          if (response) {
            this.appointments = response.appointments;

            this.appointments.forEach(dataCall => {
              let date = new Date(dataCall.date_appointment).toISOString().replace(/T.*$/, '');
              this.eventos.push(
                {
                  title: dataCall.employee,
                  start: date,
                  end: date,
                }
              );
            });

            this.calendarOptions.events = this.eventos;
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

  handleDateSelect(selectInfo: DateSelectArg) {
    this.openDialog();
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  openDialog(reference?: any) {
    const refDialog = this.dialog.open(NewAppointmentComponent, reference);
  }

  userCredential() {
    if (localStorage.getItem('auth')) {
      this.userlogged = true;
    }
  }

}
