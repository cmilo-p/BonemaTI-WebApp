import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Modulos */
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { UsersComponent } from './components/users/users.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

import { SharedModulesModule } from 'src/app/modules/shared-modules/shared-modules.module';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
    UsersComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    NewUserComponent,
    EditUserComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    MaterialModule,
    MatTableExporterModule,
    SharedModulesModule
  ]
})
export class ConfigurationModule { }
