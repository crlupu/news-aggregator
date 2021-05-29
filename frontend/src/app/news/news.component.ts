import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService, public router: Router) {}

  ngOnInit(): void {
    // if (!this.newsService.getSignedIn()) {
    //   this.router.navigate(['/sign-in']);
    // }
  }

  myTypeScriptFunction() {}
}
