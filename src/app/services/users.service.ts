import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  prueba() {
    return 'Servicio Device';
  }
  
}
