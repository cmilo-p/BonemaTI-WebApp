import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { Device } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-maintenances',
  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.scss'],
  providers: [
    Host,
    DevicesService,
    AppointmentsService
  ]
})
export class MaintenancesComponent implements OnInit {

  public appoimentGroup: Array<any> = [];

  public users!: User[];
  public hosts!: Device[];
  public appointment: Appointment;

  constructor(
    private _rt: Router,
    private userSvc: UsersService,
    private hostSvc: DevicesService,
    private appointmentSvc: AppointmentsService,
    private _snackBar: MatSnackBar
  ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe(
      {
        next: (response) => {
          this.users = response.users;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );

    this.hostSvc.getHosts().subscribe(
      {
        next: (response) => {
          this.hosts = response.hosts;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );

  }

  onSubmit() {
    if(this.appoimentGroup.length <= 0){
      this.openSnackBar('Diligencia los campos', 'Cerrar');
    }

    this.appoimentGroup.forEach(element => {

      this.appointment.date_appointment = element.date_appointment;
      this.appointment.host = element.host;
      this.appointment.employee = element.employee;

      this.appointmentSvc.create(this.appointment).subscribe(
        {
          next: (response) => {

            if (response.status == "success") {
              this._rt.navigate(['/calendar']);
              this.openSnackBar('Mantenimientos agendados!', 'Cerrar');
            } else {
              this.openSnackBar(response.message, 'Cerrar');
              console.warn(response);
            }

          },
          error: (error) => {
            this._rt.navigate(['/calendar']);
            this.openSnackBar('Error al agendar las citas', 'Cerrar');
            console.error(error);
          }
        }
      );
    });
  }

  dataAppointmentGroup(event: any, id: any, host: any, date: any) {
    let findData = this.appoimentGroup.find(element => element.id == id);

    if (findData == undefined) {
      this.appoimentGroup.push(
        {
          id: id,
          date_appointment: date.value,
          host: host.name,
          employee: host.employee,
        }
      );
    } else {
      let positionHost = this.appoimentGroup.indexOf(findData);
      this.appoimentGroup.splice(positionHost, 1);

      if (date.value !== '') {
        this.appoimentGroup.push(
          {
            id: id,
            date_appointment: date.value,
            host: host.name,
            employee: host.employee,
          }
        );
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
