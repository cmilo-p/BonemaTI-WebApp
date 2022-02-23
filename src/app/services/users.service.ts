import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getUsers(): Observable<any> {
    return this._http.get(this.url + 'users');
  }

  getUser(userId: any): Observable<any> {
    return this._http.get(this.url + 'user/' +userId);
  }

  create(user: any): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.post(this.url + 'user/save', params, { headers: headers });
  }

  update(id: any, user: any): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'user/' + id, params, { headers: headers });
  }

  delete(id: any): Observable<any> {
    let headers = new HttpHeaders().set('content-Type', 'application/json');

    return this._http.put(this.url + 'user/' + id, { headers: headers });
  }
  
}
