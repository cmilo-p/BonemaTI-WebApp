import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modules */
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FullcalendarModule } from 'src/app/modules/fullcalendar/fullcalendar.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { GroupAppointmentComponent } from './components/group-appointment/group-appointment.component';
import { ListAppointmentsComponent } from './components/list-appointments/list-appointments.component';

import { SharedModulesModule } from 'src/app/modules/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    CalendarComponent,
    AppointmentsComponent,
    NewAppointmentComponent,
    EditAppointmentComponent,
    GroupAppointmentComponent,
    ListAppointmentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarRoutingModule,
    MaterialModule,
    FullcalendarModule,
    MatTableExporterModule,
    SharedModulesModule
  ]
})
export class CalendarModule { }
