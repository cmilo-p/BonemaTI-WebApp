import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  prueba() {
    return 'Servicio Device';
  }

  getHosts(): Observable<any> {
    return this._http.get(this.url + 'hosts');
  }

  getHost(hostId: any): Observable<any> {
    return this._http.get(this.url + 'host/' + hostId);
  }

}
