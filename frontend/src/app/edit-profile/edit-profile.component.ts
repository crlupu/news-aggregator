import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../sign-up/sign-up.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User, ConfigureService } from '../configure.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
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
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private apiService: ConfigureService
  ) {}

  ngOnInit(): void {}

  initializeAll() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
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

  saveChanges() {
    if (this.firstName !== '' && this.firstNameError) {
      this.snackBar.open(
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
    } else if (this.secondName !== '' && this.secondNameError) {
      this.snackBar.open(
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
      this.emailFormControl.value !== '' &&
      this.emailFormControl.hasError('email')
    ) {
      this.snackBar.open('Please enter a valid email address!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    } else if (this.origPass !== '' && this.matchPassError) {
      this.snackBar.open(
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
    } else if (this.origPass !== '' && this.origPassError) {
      this.snackBar.open(
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
    } else if (this.telephone !== '' && this.telephoneError) {
      this.snackBar.open('Please enter a valid telephone number!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    }
    let user = new User();
    user.firstName = this.firstName;
    user.secondName = this.secondName;
    user.email = this.emailFormControl.value;
    user.telephone = this.telephone;
    user.password = this.origPass;

    // const userId = localStorage.getItem('userId');
    // this.apiService.updateUserRequest(user, userId).subscribe(
    //   response => {
    //     console.log('response', response);
    //     this.dialogRef.close();
    //     this.snackBar.open('Changed succesfully saved! !', 'Ok', {
    //       horizontalPosition: 'center',
    //       verticalPosition: 'top',
    //       duration: 5000,
    //       panelClass: ['success-snackbar']
    //     });

    if (user.firstName) {
      localStorage.removeItem('firstName');
      localStorage.setItem('firstName', user.firstName);
    } else if (user.secondName) {
      localStorage.removeItem('secondName');
      localStorage.setItem('secondName', user.secondName);
    } else if (user.email) {
      localStorage.removeItem('email');
      localStorage.setItem('email', user.email);
    } else if (user.telephone) {
      localStorage.removeItem('telephone');
      localStorage.setItem('telephone', user.telephone);
    } else if (user.password) {
      localStorage.removeItem('password');
      localStorage.setItem('password', user.password);
    }
    //   },
    //   error => {
    //     this.snackBar.open(error, 'Close', {
    //       horizontalPosition: 'center',
    //       verticalPosition: 'top',
    //       duration: 5000,
    //       panelClass: ['error-snackbar']
    //     });
    //   }
    // );
  }

  cancel() {
    this.dialogRef.close();
  }
}
