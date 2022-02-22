import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Device, Hardware } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-new-host',
  templateUrl: './new-host.component.html',
  styleUrls: ['./new-host.component.scss'],
  providers: [DevicesService]
})
export class NewHostComponent implements OnInit {

  public host: Device;
  public hardware: Hardware;
  public software: any;

  constructor(
    private deviceSvc: DevicesService,
    private _rt: Router,
    private _route: ActivatedRoute
  ) {

    this.software = {
      system: { name: '', functionality : '', license: '' },
      office: { name: '', functionality : '', license: '' },
      antivirus: { name: '', functionality : '', license: '' },
    }

    this.hardware = new Hardware('', '', '', '', '', '');
    this.host = new Device('', '', '', '', '', '', '', '', this.hardware, this.software, '', true, null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.deviceSvc.create(this.host).subscribe(
      {
        next: (response) => {
          this._rt.navigate(['/devices/']);
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

}
