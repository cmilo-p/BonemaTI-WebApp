import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modulos */
import { MaterialModule } from 'src/app/modules/material/material.module';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { UsersComponent } from './components/users/users.component';
import { EmployeesComponent } from './components/employees/employees.component';


@NgModule({
  declarations: [
    ConfigurationComponent,
    UsersComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    MaterialModule
  ]
})
export class ConfigurationModule { }
