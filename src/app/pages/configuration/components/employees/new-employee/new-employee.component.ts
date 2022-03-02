import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss'],
  providers: [EmployeesService]
})
export class NewEmployeeComponent implements OnInit {

  public page_title: string;
  public employee: Employee;

  constructor(
    private EmployeeSvc: EmployeesService,
    private _rt: Router) {
    this.page_title = 'Crear Empleado';
    this.employee = new Employee('','', '', '', '', true);
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.employee);
    this.EmployeeSvc.create(this.employee).subscribe(
      {
        next: (response) => {
          this._rt.navigate(['/config/employees/']);
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

}
