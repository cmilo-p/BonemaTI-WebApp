import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { AppointmentsService } from 'src/app/services/appointments.service';

var single = [
  {
    "name": "Enero",
    "value": 100
  },
  {
    "name": "Febrero",
    "value": 90
  },
  {
    "name": "Marzo",
    "value": 100
  },
  {
    "name": "Abril",
    "value": 0
  },
  {
    "name": "Mayo",
    "value": 0
  },
  {
    "name": "Junio",
    "value": 0
  },
  {
    "name": "Julio",
    "value": 0
  },
  {
    "name": "Agosto",
    "value": 0
  },
  {
    "name": "Septiembre",
    "value": 0
  },
  {
    "name": "Octubre",
    "value": 0
  },
  {
    "name": "Noviembre",
    "value": 0
  },
  {
    "name": "Diciembre",
    "value": 0
  }
];

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
})
export class HomePagesComponent implements OnInit {

  public userlogged: boolean;
  public totalHost: number;

  single = []
  view: [number, number] = [700, 260];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Mes de Mantenimiento';
  showYAxisLabel = true;
  yAxisLabel = '% de Satisfacción';

  constructor(
    private hostSvc: DevicesService,
    private appointmentSvc: AppointmentsService
  ) {
    this.userlogged = false;
    this.totalHost = 0;
    Object.assign(this, { single })
  }

  ngOnInit(): void {
    this.userCredential();

    this.hostSvc.getHosts().subscribe(
      {
        next: (response) => {
          this.totalHost = response.hosts.length;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );

    this.appointmentSvc.getAppointments().subscribe(
      {
        next:(response) => {

          
          console.log(response);
        },
        error:(error) => {
          console.log(error);  
        }
      }
    );

  }

  onSelect(event: any) {
    console.log(event);
  }


  userCredential() {
    if (localStorage.getItem('auth')) {
      this.userlogged = true;
    }
  }

}
