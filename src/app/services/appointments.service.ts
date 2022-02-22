import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  public url = Global.url

  constructor(private _http: HttpClient) { }

  getAppointments(): Observable<any> {
    return this._http.get(this.url + 'appointments/');
  }


}
