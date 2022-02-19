import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/Devices';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-new-host',
  templateUrl: './new-host.component.html',
  styleUrls: ['./new-host.component.scss'],
  providers: [DevicesService]
})
export class NewHostComponent implements OnInit {

  public host: Device;

  constructor(
    private deviceSvc: DevicesService,
    private _rt: Router,
    private _route: ActivatedRoute
  ) {
    this.host = new Device('', '', '', '', '', '', '', '', '', '', '', true, null);
  }

  ngOnInit(): void {
    this.deviceSvc.prueba();
  }

  onSubmit() {
    console.log('datos');
  }

}
