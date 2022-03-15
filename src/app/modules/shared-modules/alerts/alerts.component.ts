import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<AlertsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = '¡Aviso del Sistema!';
    this.message = 'Confirmar Acción';
  }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }

  onClick() {
    return this.data.response;
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
