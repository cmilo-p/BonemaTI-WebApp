import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modules */
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FullcalendarModule } from 'src/app/modules/fullcalendar/fullcalendar.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { MaintenancesComponent } from './components/maintenances/maintenances.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NewAppointmentComponent } from './components/appointment/new-appointment/new-appointment.component';


@NgModule({
  declarations: [
    CalendarComponent,
    AppointmentsComponent,
    MaintenancesComponent,
    AppointmentComponent,
    NewAppointmentComponent
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
