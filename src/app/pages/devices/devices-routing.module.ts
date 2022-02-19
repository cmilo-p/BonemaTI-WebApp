import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './components/host/host.component';
import { NewHostComponent } from './components/new-host/new-host.component';
import { DevicesComponent } from './devices.component';

const routes: Routes = [
  { path: '', component: DevicesComponent },
  { path: 'host/:id', component: HostComponent },
  { path: 'create', component: NewHostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
