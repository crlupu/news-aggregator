import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  constructor(
    public router: Router,
    private newsService: NewsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // if (!this.newsService.getSignedIn()) {
    //   this.router.navigate(['/sign-in']);
    // }
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

  logout() {}
}
