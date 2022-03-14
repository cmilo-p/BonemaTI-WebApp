import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Employee } from 'src/app/models/Employee';

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

  public hostsName: Array<string> = [];
  public employeeName: Array<string> = [];

  public hosts!: Device[];
  public appointment: Appointment;

  constructor(
    private employeeSvc: DevicesService,
    private appointmentSvc: AppointmentsService
  ) {
    this.appointment = new Appointment('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.employeeSvc.getHosts().subscribe(
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

    for(let i = 0; i <= this.hostsName.length; i++){

      this.hostsName.forEach(host => {
        this.appointment.host = host;
      });

      this.employeeName.forEach(employee => {
        this.appointment.employee = employee;
      });

      console.log(this.appointment);
      
    }

    

   

/*     this.appointmentSvc.create(this.appointment).subscribe(
      {
        next:(response) => {

        },
        error:(error) => {
          console.log(error);
        }
      }
    ); */
  }

  dataCheck(event: any, host: any) {
    if (event.checked == true) {
      this.hostsName.push(host.name);
      this.employeeName.push(host.employee);
    } else {
      let host_pos = this.hostsName.indexOf(host.name);
      let employee_pos = this.employeeName.indexOf(host.employee);

      this.hostsName.splice(host_pos, 1);
      this.employeeName.splice(employee_pos, 1);
    }
  }

}
