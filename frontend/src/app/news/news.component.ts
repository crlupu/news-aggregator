import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ConfigureService } from '../configure.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(private apiService: ConfigureService, public router: Router) {}
  news: any = [];
  page = 0;
  ngOnInit(): void {
    // if (!this.newsService.getSignedIn()) {
    //   this.router.navigate(['/sign-in']);
    // }
    // this.news = [
    //   'ss',
    //   'bbb',
    //   'skm',
    //   'ss',
    //   'bbb',
    //   'skm',
    //   'ss',
    //   'bbb',
    //   'skm',
    //   'ss',
    //   'bbb',
    //   'skm'
    // ];
    this.news = this.apiService.getNewsRequest(this.page);
  }

  openItem(item: any) {}
  loadMoreNews() {
    // request to backend
    this.page += 1;
    this.news = this.news.concat(this.apiService.getNewsRequest(this.page));
  }
}
