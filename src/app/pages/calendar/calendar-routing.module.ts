import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { GroupAppointmentComponent } from './components/group-appointment/group-appointment.component';
import { ListAppointmentsComponent } from './components/list-appointments/list-appointments.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'appointment', component: NewAppointmentComponent },
  { path: 'appointment/:id', component: EditAppointmentComponent },
  { path: 'appointment-group', component: GroupAppointmentComponent },
  { path: 'appointment-historic', component: ListAppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
