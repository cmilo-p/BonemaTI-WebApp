import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/modules/material/material.module';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule
  ]
})
export class DevicesModule { }
