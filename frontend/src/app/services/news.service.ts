import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  signedIn = false;
  constructor() {}

  setSignedIn(value: boolean) {
    this.signedIn = value;
  }
  getSignedIn(): boolean {
    return this.signedIn;
  }
}
