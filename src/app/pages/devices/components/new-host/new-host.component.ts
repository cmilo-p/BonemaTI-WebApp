import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { Device, Hardware, Software } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-host',
  templateUrl: './new-host.component.html',
  styleUrls: ['./new-host.component.scss'],
  providers: [
    EmployeesService,
    DevicesService
  ]
})
export class NewHostComponent implements OnInit {

  public title_form: string;
  public isEdit: boolean;

  public employees!: Employee[];
  public host: Device;
  public hardware: Hardware;
  public software: any;

  constructor(
    private employeeSvc: EmployeesService,
    private deviceSvc: DevicesService,
    private _rt: Router ,
    private _snackBar: MatSnackBar
  ) {
    this.title_form = 'INGRESAR HOST';
    this.isEdit = false;

    this.hardware = new Hardware('', '', '', '', '', '');
    this.software = new Software(Object(),Object(),Object());
    this.host = new Device('', '', '', '', '', '', '', '', '', this.hardware, this.software, '', true, null);
  }

  ngOnInit(): void {
    this.employeeSvc.getEmployees().subscribe(
      {
        next:(response) => {
          this.employees = response.employees;
        },
        error:(error) => {
          console.error(error);
          
        }
      }
    )
  }

  onSubmit() {
    this.deviceSvc.create(this.host).subscribe(
      {
        next: (response) => {
          console.log (response);
          if (response.status == 'success') {
            this._rt.navigate(['/devices/host', response.user._id]);
            this.openSnackBar('Dispositivo Creado!', 'Cerrar');
          } else {
            this.openSnackBar(response.message, 'Cerrar');
            console.warn(response);
          }
        },
        error: (error) => {
          this._rt.navigate(['/devices']);
          this.openSnackBar('Error al crear el dispositivo', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
