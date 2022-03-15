import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ExportsBtnComponent } from './exports-btn/exports-btn.component';
import { AlertsComponent } from './alerts/alerts.component';



@NgModule({
  declarations: [
    ExportsBtnComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ExportsBtnComponent]
})
export class SharedModulesModule { }
