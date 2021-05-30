import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../sign-up/sign-up.component';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User, ConfigureService } from '../configure.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  origPass = '';
  constructor(
    private signUpSnackBar: MatSnackBar,
    public router: Router,
    private apiService: ConfigureService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('firstName')) {
      this.router.navigate(['']);
    }
    this.origPass = '';
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  signInRequest() {
    if (this.origPass === '' || this.emailFormControl.value === '') {
      this.signUpSnackBar.open(
        'Complete all the required fields please!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        }
      );
      return;
    } else if (this.emailFormControl.hasError('email')) {
      this.signUpSnackBar.open('Please enter a valid email address!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    } else {
      let user = new User();
      user.email = this.emailFormControl.value;
      user.password = this.origPass;
      this.apiService.loginRequest(user).subscribe(
        response => {
          console.log('response', response);
          this.signUpSnackBar.open('You are succesfully signed in!', 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          // change this to save in localstorage
          if (response) {
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('lastName', response.lastName);
            localStorage.setItem('email', response.email);
            localStorage.setItem('password', response.password);
            localStorage.setItem('phoneNumber', response.phoneNumber);
            localStorage.setItem('id', response.id);
            localStorage.setItem('role', response.role);
            //redirect to home page
            this.router.navigate(['']);
          }
        },
        error => {
          console.log(error);
          this.signUpSnackBar.open(error.error, 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  }
}
