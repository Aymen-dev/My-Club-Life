import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAccService } from 'services/createAcc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [CreateAccService]
})
export class CreateAccountComponent {

  fullName = '';
  studyField = '';
  username = '';
  password = '';
  email = '';
  selectedRole = '';

  successMessage!: string;
  errorMessage!: string;





  constructor(private CreateAccService: CreateAccService, private router: Router) { }


  onSubmit(createAccountForm: NgForm) {
    if (createAccountForm.value['confirmpass'] !== createAccountForm.value['password'])
      alert("Passwords don't match");
    else {
      this.CreateAccService.createAccount(this.fullName, this.studyField, this.username, this.password, this.email)
        .subscribe({
          next: (response) => {
            console.log(response);
            alert(response.data);
            this.successMessage = response.data;
            if (response.status_code == 200)
              createAccountForm.resetForm();
          },
          error: (error) => {
            console.log(error);
            this.errorMessage = error.error.error_message;
          }
        })
    };
  }


}
