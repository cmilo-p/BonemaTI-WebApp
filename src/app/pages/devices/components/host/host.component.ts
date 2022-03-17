import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/models/Devices';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [DevicesService]
})
export class HostComponent implements OnInit {

  public host!: Device;

  constructor(
    private deviceSvc: DevicesService,
    private _rt: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];

        this.deviceSvc.getHost(id).subscribe(
          {
            next: (response) => {
              this.host = response.host
            },
            error: (error) => {
              console.log(error);
            }
          }
        );
      }
    );
  }

  delete(id: any) {
    this.deviceSvc.delete(id).subscribe(
      {
        next: (response) => {
          console.log(response);
          this._rt.navigate(['/devices']);
        },
        error: (error) => {
          console.log(error);
          this._rt.navigate(['/devices/host', id]);
        }
      }
    )
  }

}
