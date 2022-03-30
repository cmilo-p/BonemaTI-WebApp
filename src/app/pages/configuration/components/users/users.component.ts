import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements AfterViewInit, OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userSvc: UsersService
  ) {
    this.displayedColumns = ['NOMBRE USUARIO', 'CORREO ELECTRONICO', 'USUARIO', 'ROL', 'ESTADO'];
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe(
      {
        next: (response) => {
          this.dataSource.data = response.users;
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

  delete(id: any) {
    this.userSvc.delete(id).subscribe(
      {
        next: (response) => {
          console.log(response)
          alert('eliminado');
        },
        error: (error) => {
          console.log(error)
          alert('error');
        },
      }
    )
  }
}
