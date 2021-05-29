import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../sign-up/sign-up.component';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

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
    private newsService: NewsService,
    public router: Router
  ) {}

  ngOnInit() {
    if (this.newsService.getSignedIn()) {
      this.router.navigate(['/news']);
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
      // sign in request
      this.signUpSnackBar.open('You are succesfully signed in!', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['success-snackbar']
      });

      this.newsService.setSignedIn(true);
      //redirect to home page
    }
  }
}
