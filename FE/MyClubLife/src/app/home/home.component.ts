import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public _dialog: MatDialog) { }

  openDialog() {
    this._dialog.open(LoginComponent, {width:'500px', height:'450px'});
  }
}
