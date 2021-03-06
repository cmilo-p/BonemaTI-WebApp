import { Component, OnInit } from '@angular/core';
import { AuthComponent } from 'src/app/pages/configuration/components/auth/auth.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('no sirve');
  }

  openDialog() {
    const dialogRef = this.dialog.open(AuthComponent);
  }

}
