import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigureService, News } from '../configure.service';
import { MatDialog } from '@angular/material/dialog';
import { NewsItemComponent } from '../news-item/news-item.component';
import { DeleteNewsComponent } from '../delete-news/delete-news.component';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(
    private apiService: ConfigureService,
    public router: Router,
    public dialog: MatDialog
  ) {}
  news: any = [];
  page = 0;
  ngOnInit(): void {
    // if (!localStorage.getItem('firstName')) {
    //   this.router.navigate(['/sign-in']);
    // }
    this.apiService.getNewsRequest(this.page).subscribe(response => {
      this.news = response;
      console.log(this.news);
    });
  }

  openItem(item: News) {
    const dialogRef = this.dialog.open(NewsItemComponent, {
      width: '60vw',
      height: '90vh',
      data: {
        item: item
      }
    });

    dialogRef.afterClosed().subscribe();
  }
  loadMoreNews() {
    this.page += 1;
    this.apiService.getNewsRequest(this.page).subscribe(response => {
      this.news = this.news.concat(response);
    });
  }

  goToNewsTopic(topic: string) {
    const url = '/news/topic/' + topic;
    this.router.navigate([url]);
  }
  goToNewsSource(source: string) {
    const url = '/news/source/' + source;
    this.router.navigate([url]);
  }

  getRole() {
    return localStorage.getItem('role');
  }

  deleteItem(item: News) {
    const dialogRef = this.dialog.open(DeleteNewsComponent, {
      width: '20vw',
      height: '17vh',
      data: {
        item: item
      }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const index = this.news.indexOf(item);
        this.news.splice(index, 1);
      }
    });
  }
}
