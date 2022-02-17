import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Device } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  providers: [DevicesService]
})
export class DevicesComponent implements AfterViewInit, OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Device>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private deviceSvc: DevicesService
  ) {
    this.displayedColumns = ['CÓDIGO','TIPO DISPOSITIVO', 'NOMBRE EQUIPO', 'ASIGNADO A', 'UBICACIÓN', 'ESTADO'];
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.deviceSvc.getHost().subscribe(
      {
        next: (response) => {
          //this.hosts = response.hosts;
          this.dataSource.data = response.hosts;
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

}