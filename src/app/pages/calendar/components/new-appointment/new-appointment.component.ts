import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { Device } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
  providers: [
    UsersService,
    EmployeesService,
    DevicesService,
    AppointmentsService
  ]
})
export class NewAppointmentComponent implements OnInit {

  public users!: User[];
  public employees!: Employee[];
  public hosts!: Device[];
  public appointment: Appointment;
  public isEdit: boolean;

  constructor(
    private userSvc: UsersService,
    private employeeSvc: EmployeesService,
    private hostSvc: DevicesService, 
    private appointmentSvc: AppointmentsService,
    private _rt: Router,
    private _snackBar: MatSnackBar,
  ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
    this.isEdit = false;
  }

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe({
      next: (response) => {
        this.users = response.users;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.employeeSvc.getEmployees().subscribe({
      next: (response) => {
        this.employees = response.employees;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.hostSvc.getHosts().subscribe(
      {
        next:(response) => {
          this.hosts = response.hosts;
        },
        error:(error) => {
          console.error(error);
        }
      }
    );
  }

  onSubmit() {
    this.appointmentSvc.create(this.appointment).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this._rt.navigate(['/calendar/appointment/', response.appointment._id]);
            this.openSnackBar('Mantenimiento Registrado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this.openSnackBar('Error al registrar el mantenimiento', 'Cerrar');
          console.error(error);
        }
      }
    );
  }

  delete(id: any) {
    /* Función polimórfica establecida en appointment.component */
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
