import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getAppointments(): Observable<any> {
    return this._http.get(this.url + 'appointments/');
  }

  getApointment(appointmentId: any): Observable<any> {
    return this._http.get(this.url + 'appointment/' + appointmentId);
  }

  create(appointment: any): Observable<any> {
    let params = JSON.stringify(appointment);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.post(this.url + 'appointment/save', params, { headers: headers });
  }

  update(id: any, appointment: any): Observable<any> {
    let params = JSON.stringify(appointment);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'appointment/' + id, params, { headers: headers });
  }

  delete(id: any): Observable<any> {
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'appointment/' + id, { headers: headers });
  }

}
