import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeesService],
})
export class EmployeesComponent implements AfterViewInit, OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeSvc: EmployeesService,
    private _rt: Router
  ) {
    this.displayedColumns = ['NOMBRE FUNCIONARIO', 'CORREO ELECTRONICO', 'OCUPACIÓN', 'TELÉFONO/EXT', 'ESTADO'];
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.employeeSvc.getEmployees().subscribe(
      {
        next: (response) => {
          this.dataSource.data = response.employees;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
