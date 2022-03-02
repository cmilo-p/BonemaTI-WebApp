import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: '../new-employee/new-employee.component.html',
  providers: [EmployeesService]
})
export class EditEmployeeComponent implements OnInit {

  public page_title: string;
  public status: string;

  public employee: Employee;

  constructor(
    private EmployeeSvc: EmployeesService,
    private _rt: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = 'Editar Empleado';
    this.status = '';

    this.employee = new Employee('', '', '', '', '', true);
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  onSubmit() {
    this.EmployeeSvc.update(this.employee._id, this.employee).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this.status = response.status;
            this.employee = response.employeeUpdate

            console.log(response);
            this._rt.navigate(['/config/employees/']);

          } else {
            this.employee = response.message;
            console.log(response);
          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getEmployee() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.EmployeeSvc.getEmployee(id).subscribe(
        {
          next: (response) => {
            if (response.employee) {
              this.employee = response.employee;
            } else {
              console.log(response);
              this._rt.navigate(['/config/employees']);
            }
          },
          error: (error) => {
            console.log(error);
            this._rt.navigate(['/config/employees']);
          },
        }
      );
    })
  }

}
