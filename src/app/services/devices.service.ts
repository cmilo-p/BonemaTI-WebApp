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

  create(host: any): Observable<any> {
    let params = JSON.stringify(host);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.post(this.url + 'host/save', params, { headers: headers });
  }

  update(id: any, host: any): Observable<any> {

    let params = JSON.stringify(host);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'host/' + id, params, { headers: headers });
  }

  delete(id: any): Observable<any> {

    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'host/' + id, { headers: headers });
  }

}
