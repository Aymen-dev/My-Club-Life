import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OldCompetitionComponent } from './old-competition/old-competition.component';
import { OnGoingCompComponent } from './on-going-comp/on-going-comp.component';
import { UpcomingCompComponent } from './upcoming-comp/upcoming-comp.component';
import { EventsComponent } from './events/events.component';
import { ClubsPageComponent } from './clubs-page/clubs-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { JoinClubComponent } from './join-club/join-club.component';
import { ManageCompComponent } from './manage-comp/manage-comp.component';
import { MemberListComponent } from './member-list/member-list.component';





@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    ClubsComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    OldCompetitionComponent,
    OnGoingCompComponent,
    UpcomingCompComponent,
    EventsComponent,
    ClubsPageComponent,
    CreateAccountComponent,
    JoinClubComponent,
    ManageCompComponent,
    MemberListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
