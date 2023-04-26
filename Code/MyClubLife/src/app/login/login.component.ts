import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>, public router:Router) { }
    createAccount(){
      this.dialogRef.close();
      this.router.navigate(['/create-account']);
    }  
}
