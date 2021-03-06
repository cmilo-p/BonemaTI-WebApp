import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/configuration/components/auth/auth.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { PageNotFoundComponent } from './shared/errors/page-not-found/page-not-found.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signIn', component: AuthComponent },
  { path: 'home', component: HomePagesComponent },
  { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'devices', loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesModule) },
  { path: 'config', loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
