import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss'],
  providers: [AppointmentsService]
})
export class ListAppointmentsComponent implements AfterViewInit, OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Appointment>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private appointmentSvc: AppointmentsService
  ) {
    this.displayedColumns = ['AGENDAMIENTO', 'TIPO MANTENIMIENTO', 'EQUIPO', 'FUNCIONARIO', 'ESTADO'];
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.appointmentSvc.getAppointments().subscribe(
      {
        next: (response) => {
          this.dataSource.data = response.appointments;
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
