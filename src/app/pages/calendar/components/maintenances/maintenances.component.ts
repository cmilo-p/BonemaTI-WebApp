import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-maintenances',
  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.scss'],
  providers: [
    DevicesService,
    AppointmentsService
  ]
})
export class MaintenancesComponent implements OnInit {

  public appoimentGroup: Array<any> = [];

  public hosts!: Device[];
  public appointment: Appointment;

  constructor(
    private hostSvc: DevicesService,
    private appointmentSvc: AppointmentsService
  ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.hostSvc.getHosts().subscribe(
      {
        next: (response) => {
          this.hosts = response.hosts;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  onSubmit() {
    this.appoimentGroup.forEach(element => {

      this.appointment.date_appointment = element.date_appointment;
      this.appointment.host = element.host;
      this.appointment.employee = element.employee;

      this.appointmentSvc.create(this.appointment).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });

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

}
