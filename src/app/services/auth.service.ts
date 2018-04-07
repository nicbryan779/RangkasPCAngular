import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/User';


const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:8000/api';
  token = localStorage.token;

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', data, httpOptions)
      .map(res => {
      console.log(res);
      localStorage.setItem('token', res['data']['token']);
      // Get Token
      // localstorage.getItem('token');
    });
  }

  signup(data) {
    return this.http.post<User>(this.baseUrl + '/register', data, httpOptions);
  }
}
