import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { FullcalendarModule } from 'src/app/modules/fullcalendar/fullcalendar.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullcalendarModule
  ]
})
export class CalendarModule { }
