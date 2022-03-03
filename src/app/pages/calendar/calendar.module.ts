import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FullcalendarModule } from 'src/app/modules/fullcalendar/fullcalendar.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { MaintenancesComponent } from './components/maintenances/maintenances.component';
import { AppointmentComponent } from './components/appointment/appointment.component';


@NgModule({
  declarations: [
    CalendarComponent,
    AppointmentsComponent,
    MaintenancesComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MaterialModule,
    FullcalendarModule
  ]
})
export class CalendarModule { }
