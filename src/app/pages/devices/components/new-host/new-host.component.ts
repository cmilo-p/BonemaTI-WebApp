import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device, Hardware, Software } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesComponent } from 'src/app/pages/configuration/components/employees/employees.component';

@Component({
  selector: 'app-new-host',
  templateUrl: './new-host.component.html',
  styleUrls: ['./new-host.component.scss'],
  providers: [DevicesService]
})
export class NewHostComponent implements OnInit {

  public title_form: string;
  public isEdit: boolean;

  public host: Device;
  public hardware: Hardware;
  public software: any;

  constructor(
    private deviceSvc: DevicesService,
    private _rt: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.title_form = 'INGRESAR HOST';
    this.isEdit = false;

 /*    this.software = {
      system: { name: '', functionality: '', license: '' },
      office: { name: '', functionality: '', license: '' },
      antivirus: { name: '', functionality: '', license: '' },
    } */

    this.hardware = new Hardware('', '', '', '', '', '');
    this.software = new Software(Object(),Object(),Object());
    this.host = new Device('', '', '', '', '', '', '', '', '', this.hardware, this.software, '', true, null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.deviceSvc.create(this.host).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this._rt.navigate(['/devices/host', response.hostStored._id]);
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

  /* Implementar Dialogo */
  openDialog() {
    const dialogRef = this.dialog.open(EmployeesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
