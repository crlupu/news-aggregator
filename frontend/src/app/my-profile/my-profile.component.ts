import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    if (!localStorage.getItem('firstName')) {
      this.router.navigate(['/sign-in']);
    }
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '55vw',
      height: '70vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      //request to api
      // reload the page
      console.log('The dialog was closed');
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  getFirstName() {
    return localStorage.getItem('firstName');
  }

  getSecondName() {
    return localStorage.getItem('secondName');
  }

  getMail() {
    return localStorage.getItem('email');
  }

  getTelephone() {
    return localStorage.getItem('telephone');
  }
}
