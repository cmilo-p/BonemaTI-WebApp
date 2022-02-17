import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { HostComponent } from './components/host/host.component';


@NgModule({
  declarations: [
    DevicesComponent,
    HostComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule
  ]
})
export class DevicesModule { }
