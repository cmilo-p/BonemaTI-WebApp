import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthComponent } from './pages/configuration/components/auth/auth.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  public userlogged: boolean

  constructor(
    public dialog: MatDialog
  ) {
    this.userlogged = false;
  }

  ngOnInit(): void {
    if (localStorage.getItem('auth')) {
      this.userlogged = false;
    }
  }

  ngDoCheck(): void {
    this.userCredential();
  }

  userCredential() {
    if (localStorage.getItem('auth')) {
      this.userlogged = true;
    } else { 
      this.userlogged = false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AuthComponent);
  }

}
