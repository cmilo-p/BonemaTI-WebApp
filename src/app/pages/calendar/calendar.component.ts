import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public maintenance: Appointment[];

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
    private _rt: Router,
    private appointmentSvc: AppointmentsService,
    public dialog: MatDialog
  ) {
    this.maintenance = [];
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
                  id: dataCall._id,
                  title: dataCall.employee,
                  start: date,
                  end: date,
                }
              );
            });

            this.mantenimientos(this.appointments);

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
    let id = clickInfo.event._def.publicId;
    this.openDialog(id);
  }

  openDialog(reference?: any) {
    if(reference){
      this._rt.navigate(['/calendar/appointment/', reference]);
    } else {
      const refDialog = this.dialog.open(NewAppointmentComponent);
    }
  }

  mantenimientos(appointments: Appointment[]) {
    appointments.forEach(element => {
      if(element.status == 'Agendado') {
        this.maintenance.push(element);
      } 
    });
  }

  userCredential() {
    if (localStorage.getItem('auth')) {
      this.userlogged = true;
    }
  }

}
