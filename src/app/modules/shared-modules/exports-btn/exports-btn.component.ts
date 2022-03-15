import { Component, Output } from '@angular/core';
import { IFiles } from 'src/app/interfaces/IFiles';
import { AlertsComponent } from '../alerts/alerts.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exports-btn',
  templateUrl: './exports-btn.component.html',
  styleUrls: ['./exports-btn.component.scss']
})
export class ExportsBtnComponent {

  @Output() public expt: string;

  public title: string;
  public message: string;

  public files: Array<IFiles>;

  constructor(public dialog: MatDialog) {
    this.title = 'Exportar el archivo';
    this.message = 'Está seguro de exportar el archivo';
    this.expt = ''

    this.files = [
      { name: 'Excel', extension: 'xlsx' },
      { name: 'CSV', extension: 'csv' },
      { name: 'JSON', extension: 'json' },
    ]
  }

  openDialog(dataExportfile: any) {

    const refDialog = this.dialog.open(AlertsComponent, {
      data: {
        title: this.title,
        message: '¿' + this.message + ' ' + dataExportfile.name + '?',
        response: dataExportfile.extension
      }
    });

    refDialog.afterClosed().subscribe(result => {
      if (result) {
        this.expt = result;
        console.log(result);
      }
    });
  }

}
