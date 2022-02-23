import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getEmployees(): Observable<any> {
    return this._http.get(this.url + 'Employees');
  }

  getEmployee(employeeId: any): Observable<any> {
    return this._http.get(this.url + 'Employee/' + employeeId);
  }

  create(employee: any): Observable<any> {
    let params = JSON.stringify(employee);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.post(this.url + 'Employee/save', params, { headers: headers });
  }

  update(id: any, employee: any): Observable<any> {
    let params = JSON.stringify(employee);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'Employee/' + id, params, { headers: headers });
  }

  delete(id: any): Observable<any> {
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'Employee/' + id, { headers: headers });
  }

}
