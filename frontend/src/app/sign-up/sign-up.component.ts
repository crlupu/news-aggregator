import { Component, OnInit } from '@angular/core';
import {
  FormGroupDirective,
  NgForm,
  FormControl,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfigureService } from '../configure.service';
import { User } from '../configure.service';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from '../terms/terms.component';

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
  lastNameError = false;
  lastName = '';
  phoneNumber = '';
  phoneNumberError = false;
  checked = false;

  origPass = '';
  origPassError = false;
  confirmPass = '';
  matchPassError = false;
  constructor(
    private signUpSnackBar: MatSnackBar,
    private router: Router,
    private apiService: ConfigureService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('firstName')) {
      this.router.navigate(['']);
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
    this.lastNameError = false;
    this.lastName = '';
    this.phoneNumber = '';
    this.phoneNumberError = false;

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
    let hasDigits = /\d/.test(this.lastName);
    this.lastNameError = hasDigits;
    return hasDigits;
  }

  hasLettersphoneNumber(): boolean {
    let hasLetters = !/^\d+$/.test(this.phoneNumber);
    this.phoneNumberError = hasLetters;
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
      this.lastName === '' ||
      this.phoneNumber === '' ||
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
    } else if (this.lastNameError) {
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
    } else if (this.phoneNumberError) {
      this.signUpSnackBar.open(
        'Please enter a valid phoneNumber number!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        }
      );
      return;
    } else if (!this.checked) {
      this.signUpSnackBar.open(
        'Accept the terms and conditions please !',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        }
      );
      return;
    }
    let user = new User();
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.email = this.emailFormControl.value;
    user.phoneNumber = this.phoneNumber;
    user.password = this.origPass;

    this.apiService.signUpRequest(user).subscribe(
      response => {
        console.log('response', response);
        this.signUpSnackBar.open('You are succesfully signed up!', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['success-snackbar']
        });
      },
      error => {
        console.log(error);
        this.signUpSnackBar.open(error, 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  openTerms() {
    const dialogRef = this.dialog.open(TermsComponent, {
      width: '30vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      //request to api
      // reload the page
      console.log('The dialog was closed');
    });
  }
}
