import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  public userlogged: boolean;

  constructor(
    private _rt: Router
  ) {
    this.userlogged = false;
   }

  ngOnInit(): void {
    this.userCredential();
  }

  userCredential() {
    if (localStorage.getItem('auth')) {
      this.userlogged = true;
    }
  }

  logout() {
    localStorage.removeItem('auth');
    this._rt.navigate(['/']);
  }

}
