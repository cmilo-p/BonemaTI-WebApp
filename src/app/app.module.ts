import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Modules */
import { MaterialModule } from './modules/material/material.module';
import { NgxChartModuleModule } from './modules/ngx-chart-module/ngx-chart-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { PageNotFoundComponent } from './shared/errors/page-not-found/page-not-found.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    HomePagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NgxChartModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
