import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements AfterViewInit, OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Employee>;
  selection = new SelectionModel<Employee>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeSvc: EmployeesService,
    private _rt: Router
  ) {
    this.displayedColumns = ['select', 'NOMBRE USUARIO', 'CORREO ELECTRONICO', 'OCUPACIÓN', 'TELÉFONO', 'ESTADO','ELIMINAR'];
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
          console.log(error);
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  delete(id: any) {
    this.employeeSvc.delete(id).subscribe(
      {
        next:(response) => {
          this._rt.navigate(['/config/employees']);
          console.log(response);
        },
        error:(error) => {
          this._rt.navigate(['/config/edit-employees', id]);
          console.log(error);
        }
      }
    );
  }


}
