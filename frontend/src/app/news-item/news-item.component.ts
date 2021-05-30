import { Component, OnInit, Inject } from '@angular/core';
import { News, ConfigureService } from '../configure.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewsItemComponent>,
    private configureService: ConfigureService,
    private router: Router
  ) {}

  item: News = new News();
  ngOnInit(): void {
    this.item = this.data.item;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  goToNewsTopic(topic: string) {
    const url = '/news/topic/' + topic;
    this.router.navigate([url]);
    this.closeDialog();
  }
  goToNewsSource(source: string) {
    const url = '/news/source/' + source;
    this.router.navigate([url]);
    this.closeDialog();
  }
}
