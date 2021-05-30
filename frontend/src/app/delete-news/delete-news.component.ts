import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News } from '../configure.service';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.scss']
})
export class DeleteNewsComponent implements OnInit {
  item: News;
  constructor(
    public dialogRef: MatDialogRef<DeleteNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.item = this.data.item;
  }

  ngOnInit(): void {}

  delete() {
    // request to api
    // reload the page
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
