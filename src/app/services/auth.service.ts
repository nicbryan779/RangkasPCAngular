import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../model/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`})
};

@Injectable()
export class AuthService {

  token = localStorage.token;
  baseUrl = 'localhost:8000/api/';

  constructor(private http: HttpClient) {
  }

  login(data): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', data, httpOptions)
      .map(res => {
        localStorage.setItem('token', res['data']['token']);
        console.log(httpOptions);
      });
  }

  signup(data) {
    return this.http.post<User>(this.baseUrl + '/register', data, httpOptions);
  }

  edit(data) {
    return this.http.put<User>(this.baseUrl + '/editprofile', data, httpOptions);
  }

  logout() {
    localStorage.removeItem('token');
    return this.http.get(this.baseUrl + '/logout', httpOptions);
  }

  isLogin() {
    return localStorage.getItem('token') != null;
  }

  getUser() {
    console.log(httpOptions);
    return this.http.get(this.baseUrl + '/getuser', httpOptions);
  }

  // For forget Password
  forgetPassword(data) {
    return this.http.post(this.baseUrl + '/recover', data, httpOptions);
  }

  resetPassword(data, validator) {
    return this.http.post(this.baseUrl + '/forgetpassword/' + validator, data, httpOptions);
  }

  // validateToken() {
  //   if (localStorage.token) {
  //     this.httpOptions = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.token}`
  //       })
  //     };
  //   }
  // }
}
