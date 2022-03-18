import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modulos */
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { HostComponent } from './components/host/host.component';
import { EditHostComponent } from './components/edit-host/edit-host.component';
import { NewHostComponent } from './components/new-host/new-host.component';

import { SharedModulesModule } from 'src/app/modules/shared-modules/shared-modules.module';

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
    MatTableExporterModule,
    SharedModulesModule 
  ]
})
export class DevicesModule { }
