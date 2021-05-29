import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {}

  getIsSignedIn(): boolean {
    return this.newsService.getSignedIn();
  }
}
