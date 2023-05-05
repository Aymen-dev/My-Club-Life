import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { EventsComponent } from './events/events.component';
import { ClubsPageComponent } from './clubs-page/clubs-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'clubs-page', component: ClubsPageComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'member-list', component: MemberListComponent },
  { path: 'requests', component: RequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
