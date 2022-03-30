import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modules */
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FullcalendarModule } from 'src/app/modules/fullcalendar/fullcalendar.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { GroupAppointmentComponent } from './components/group-appointment/group-appointment.component';

@NgModule({
  declarations: [
    CalendarComponent,
    AppointmentsComponent,
    NewAppointmentComponent,
    EditAppointmentComponent,
    GroupAppointmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarRoutingModule,
    MaterialModule,
    FullcalendarModule
  ]
})
export class CalendarModule { }
