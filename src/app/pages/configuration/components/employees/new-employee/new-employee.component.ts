import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss'],
  providers: [EmployeesService]
})
export class NewEmployeeComponent implements OnInit {

  public page_title: string;
  public isEdit: boolean;

  public employee: Employee;

  constructor(
    private employeeSvc: EmployeesService,
    private _rt: Router,
    private _snackBar: MatSnackBar
  ) {
    this.page_title = 'CREAR EMPLEADO';
    this.isEdit = false;
    this.employee = new Employee('', '', '', '', '', '', true);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeSvc.create(this.employee).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this._rt.navigate(['/config/editEmployee/', response.employee._id]);
            this.openSnackBar('Empleado Creado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this._rt.navigate(['/config/employees/']);
          this.openSnackBar('Error al crear el empleado', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  delete(id: any) {
    /* Función polimórfica establecida en edit-employee */
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
