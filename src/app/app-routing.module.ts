import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { PageNotFoundComponent } from './shared/errors/page-not-found/page-not-found.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: PageNotFoundComponent },
  { path: 'initPage', component: LandingPageComponent },
  { path: 'home', component: HomePagesComponent },
  { path: 'config', loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule) },
  { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'devices', loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
