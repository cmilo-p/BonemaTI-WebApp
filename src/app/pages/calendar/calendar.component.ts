import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, CalendarApi } from '@fullcalendar/angular';

import { MatDialog } from '@angular/material/dialog';
import { NewAppointmentComponent } from './components/appointment/new-appointment/new-appointment.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [AppointmentsService]
})
export class CalendarComponent implements OnInit {

  public appointments!: Appointment[];
  //public appointment : Appointment;
  public eventos!: any[];

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];

  constructor(
    private appointmentSvc: AppointmentsService,
    public dialog: MatDialog
    ) {
    //this.appointment = new Appointment('','','','','','','','','');
    this.eventos = []
  }

  ngOnInit(): void {
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
  
  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleEventClick(clickInfo: EventClickArg) {

  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }


  /* Dialog */
  openDialog() {

    const refDialog = this.dialog.open(NewAppointmentComponent);

    refDialog.afterClosed().subscribe(result => {
      if (result) {
        
        /* Datas devuelto del Dialog */

      }
    });
  }



}
