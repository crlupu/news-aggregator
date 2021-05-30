import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class User {
  firstName: string = '';
  secondName: string = '';
  email: string = '';
  telephone: string = '';
  password: string = '';
}

export class News {
  id: string = '';
  topic: string = '';
  articleText: string = '';
  title: string = '';
  source: string = '';
  imageUrl: string = '';
}
@Injectable({
  providedIn: 'root'
})
export class ConfigureService {
  constructor(private http: HttpClient) {}

  loginUrl = 'http://localhost:8080/users/login';
  updateUserUrl = 'http://localhost:8080/users/';
  signUpUrl = 'http://localhost:8080/users/register';
  getNewsUrl = 'http://localhost:8080/news?';

  loginRequest(user: User) {
    return this.http.post<User>(this.loginUrl, user);
  }

  signUpRequest(user: User) {
    return this.http.post<User>(this.signUpUrl, user);
  }

  updateUserRequest(user: User, id: string) {
    const url = this.updateUserUrl + id;
    return this.http.patch<User>(url, user);
  }

  getNewsRequest(page: Number) {
    const url = this.getNewsUrl + 'page=' + page + '&size=12';
    return this.http.get<News[]>(url);
  }
}
