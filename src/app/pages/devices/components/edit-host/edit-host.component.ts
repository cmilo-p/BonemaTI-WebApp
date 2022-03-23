import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Device, Hardware } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesComponent } from 'src/app/pages/configuration/components/employees/employees.component';

@Component({
  selector: 'app-edit-host',
  templateUrl: '../new-host/new-host.component.html',
  styleUrls: ['../new-host/new-host.component.scss'],
  providers: [DevicesService]
})
export class EditHostComponent implements OnInit {

  public title_form: string;
  public status: string;
  public isEdit: boolean;

  public host: Device;
  public hardware: Hardware;
  public software: any;

  constructor(
    private deviceSvc: DevicesService,
    private _rt: Router,
    private _route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.title_form = 'Editado';
    this.status = '';
    this.isEdit = true;

    this.software = {
      system: { name: '', functionality: '', license: '' },
      office: { name: '', functionality: '', license: '' },
      antivirus: { name: '', functionality: '', license: '' },
    }
    this.hardware = new Hardware('', '', '', '', '', '');
    this.host = new Device('', '', '', '', '', '', '', '', '', this.hardware, this.software, '', true, null);
  }

  ngOnInit(): void {
    this.getHost();
  }

  onSubmit() {
    this.deviceSvc.update(this.host._id, this.host).subscribe(
      {
        next: (response) => {
          if (response.status == 'success') {
            this.status = response.status;
            this.host = response.hostUpdate;

            console.log(response);
            this._rt.navigate(['/devices/host/', this.host._id]);

          } else {
            this.host = response.message;
            console.log(response);
          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  /* Implemenar */
  openDialog() {
    const dialogRef = this.dialog.open(EmployeesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getHost() {
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.deviceSvc.getHost(id).subscribe(
        {
          next: (response) => {
            if (response.host) {
              this.host = response.host;
            } else {
              this.openSnackBar(response.message, 'Cerrar');
              console.warn(response);
            }
          },
          error: (error) => {
            this._rt.navigate(['/devices']);
            this.openSnackBar('Error al obtener los dispositivos', 'Cerrar');
            console.warn(error);
          }
        }
      );

    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
