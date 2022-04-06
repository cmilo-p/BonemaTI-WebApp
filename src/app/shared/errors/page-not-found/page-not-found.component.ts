import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public userlogged: boolean;

  constructor(
    private _rt: Router 
  ) {
    this.userlogged = false;
   }

  ngOnInit(): void {
    this.userCredential();
  }

  backView() {
    if(this.userlogged) {
      this._rt.navigate(['/home']);
    } else {
      this._rt.navigate(['/']);
    }
  }

  userCredential() {
    if (localStorage.getItem('auth')) {
      this.userlogged = true;
    } else { 
      this.userlogged = false;
    }
  }

}
