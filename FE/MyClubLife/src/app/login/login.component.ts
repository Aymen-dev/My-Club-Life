import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { LoginService } from 'services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})


export class LoginComponent {

  username = '';
  password = '';
  successMessage = '';
  errorMessage = '';

  constructor(public dialogRef: MatDialogRef<LoginComponent>, public router: Router, private LoginService: LoginService) { }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(loginForm: NgForm) {

    this.LoginService.login(this.username, this.password)
      .subscribe({
        next: (response) => {
          console.log(response);

          if (response.status_code == 200) {
            this.successMessage = response.data;
          }
          else
            loginForm.reset();
        },
        error: (error) => {
          console.log(error);
          this.errorMessage = error.error.error_message;
        }
      })

  }
}
