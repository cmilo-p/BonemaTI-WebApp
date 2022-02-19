import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { HostComponent } from './components/host/host.component';
import { EditHostComponent } from './components/edit-host/edit-host.component';
import { NewHostComponent } from './components/new-host/new-host.component';


@NgModule({
  declarations: [
    DevicesComponent,
    HostComponent,
    EditHostComponent,
    NewHostComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class DevicesModule { }
