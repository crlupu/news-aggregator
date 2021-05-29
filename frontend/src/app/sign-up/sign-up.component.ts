import { Component, OnInit } from '@angular/core';
import {
  FormGroupDirective,
  NgForm,
  FormControl,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  hide = true;
  matcher = new MyErrorStateMatcher();
  firstName = '';
  firstNameError = false;
  secondNameError = false;
  secondName = '';
  telephone = '';
  telephoneError = false;

  origPass = '';
  origPassError = false;
  confirmPass = '';
  matchPassError = false;
  constructor(
    private signUpSnackBar: MatSnackBar,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.newsService.getSignedIn()) {
      this.router.navigate(['/news']);
    }
    this.initializeAll();
  }

  initializeAll() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.hide = true;
    this.matcher = new MyErrorStateMatcher();
    this.firstName = '';
    this.firstNameError = false;
    this.secondNameError = false;
    this.secondName = '';
    this.telephone = '';
    this.telephoneError = false;

    this.origPass = '';
    this.origPassError = false;
    this.confirmPass = '';
    this.matchPassError = false;
  }

  hasDigitsFirst(): boolean {
    let hasDigits = /\d/.test(this.firstName);
    this.firstNameError = hasDigits;
    return hasDigits;
  }

  hasDigitsSecond(): boolean {
    let hasDigits = /\d/.test(this.secondName);
    this.secondNameError = hasDigits;
    return hasDigits;
  }

  hasLettersTelephone(): boolean {
    let hasLetters = !/^\d+$/.test(this.telephone);
    this.telephoneError = hasLetters;
    return hasLetters;
  }

  isValidPassword(): boolean {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (
      (this.origPass !== '' && this.origPass.match(paswd)) ||
      this.origPass === ''
    ) {
      this.origPassError = false;
      return true;
    } else {
      this.origPassError = true;
      return false;
    }
  }

  isEqualToOrigPassword(): boolean {
    if (
      this.origPass !== '' &&
      this.confirmPass !== '' &&
      this.origPass === this.confirmPass
    ) {
      this.matchPassError = false;
      return true;
    }

    if (this.origPass === '' || this.confirmPass === '') {
      this.matchPassError = false;
      return true;
    }
    this.matchPassError = true;
    return false;
  }

  signUpRequest() {
    console.log('signup request');
    if (
      this.firstName === '' ||
      this.confirmPass === '' ||
      this.secondName === '' ||
      this.telephone === '' ||
      this.origPass === '' ||
      this.emailFormControl.hasError('required')
    ) {
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
    } else if (this.firstNameError) {
      this.signUpSnackBar.open(
        'First name field should contain only letters!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,

          panelClass: ['error-snackbar']
        }
      );
      return;
    } else if (this.secondNameError) {
      this.signUpSnackBar.open(
        'Second name field should contain only letters!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        }
      );
      return;
    } else if (
      this.emailFormControl.hasError('email') &&
      !this.emailFormControl.hasError('required')
    ) {
      this.signUpSnackBar.open('Please enter a valid email address!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    } else if (this.matchPassError) {
      this.signUpSnackBar.open(
        'Your password and confirmation password do not match!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        }
      );
      return;
    } else if (this.origPassError) {
      this.signUpSnackBar.open(
        'Password must be 7 to 15 characters long and must contain at least one numeric digit and a special character!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        }
      );
      return;
    } else if (this.telephoneError) {
      this.signUpSnackBar.open('Please enter a valid telephone number!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    }
    // request to make
    if (true) {
      this.signUpSnackBar.open('You are succesfully signed up!', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['success-snackbar']
      });

      //redirect to sign in or sign up
    } else {
      this.signUpSnackBar.open('Error! Try one more time please.', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['error-snackbar']
      });
    }
  }
}
