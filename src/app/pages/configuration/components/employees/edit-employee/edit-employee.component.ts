import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee',
  templateUrl: '../new-employee/new-employee.component.html',
  providers: [EmployeesService]
})
export class EditEmployeeComponent implements OnInit {

  public page_title: string;
  public isEdit: boolean;

  public employee: Employee;

  constructor(
    private employeeSvc: EmployeesService,
    private _rt: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.page_title = 'DATOS EMPLEADO';
    this.isEdit = true;

    this.employee = new Employee('', '', '', '', '', '', true);
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  onSubmit() {
    this.employeeSvc.update(this.employee._id, this.employee).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this.employee = response.employeeUpdate
            this.openSnackBar('¡Empleado Actualizado!', 'Cerrar');
          } else {
            this.employee = response.message;
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this._rt.navigate(['/config/employees']);
          this.openSnackBar('Error al actualizar el usuario', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  getEmployee() {
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.employeeSvc.getEmployee(id).subscribe(
        {
          next: (response) => {
            if (response.employee) {
              this.employee = response.employee;
            } else {
              this.openSnackBar(response.message, 'Cerrar');
              console.warn(response);
            }
          },
          error: (error) => {
            this._rt.navigate(['/config/employees']);
            this.openSnackBar('Error al obtener el empleado', 'Cerrar');
            console.warn(error);
          },
        }
      );

    });
  }

  delete(id: any) {
    this.employeeSvc.delete(id).subscribe(
      {
        next: (response) => {
          this._rt.navigate(['/config/employees']);
          this.openSnackBar('¡Empleado Eliminado!', 'Cerrar');
        },
        error: (error) => {
          this._rt.navigate(['/config/employees']);
          this.openSnackBar('Error al eliminar el empleado', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
