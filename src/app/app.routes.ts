import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RosterComponent } from './components/roster/roster.component';
import { AboutComponent } from './components/about/about.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ScheduleViewComponent } from './components/schedule-view/schedule-view.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'roster', component: RosterComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'season', component: ScheduleViewComponent}
];
