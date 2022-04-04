import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { Device, Hardware, Software } from 'src/app/models/Devices';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [DevicesService]
})
export class HostComponent implements OnInit {

  public host: Device;
  public hardware: Hardware;
  public software: Software;

  constructor(
    private deviceSvc: DevicesService,
    private _rt: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.hardware = new Hardware('', '', '', '', '', '');
    this.software = new Software(Object(),Object(),Object());
    this.host = new Device('', '', '', '', '', '', '', '', '', this.hardware, this.software, '', true, null);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.deviceSvc.getHost(id).subscribe(
        {
          next: (response) => {
            if (response.host) {
              console.log(response);
              this.host = response.host
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

  delete(id: any) {
    this.deviceSvc.delete(id).subscribe(
      {
        next: (response) => {
          this._rt.navigate(['/devices']);
          this.openSnackBar('Dispositivo Eliminado!', 'Cerrar');
        },
        error: (error) => {
          this._rt.navigate(['/devices/host', id]);
          this.openSnackBar('Error al eliminar el dispositivo', 'Cerrar');
          console.warn(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
