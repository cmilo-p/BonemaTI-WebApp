import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UsersComponent } from './components/users/users.component';
import { ConfigurationComponent } from './configuration.component';

const routes: Routes = [
  { path: '', component: ConfigurationComponent },
  { path: 'users', component: UsersComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'editUser/:id', component: EditUserComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'newEmployee', component: NewEmployeeComponent },
  { path: 'editEmployee/:id', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
