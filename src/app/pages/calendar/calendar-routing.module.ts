import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MaintenancesComponent } from './components/maintenances/maintenances.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'maintenances', component: MaintenancesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
