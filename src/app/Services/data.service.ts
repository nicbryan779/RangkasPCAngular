import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignIn } from '../class/SignIn';

@Injectable()
export class DataService {

  private url = 'https://api.rangkaspc.me/';

  constructor(private http: HttpClient) { }

  // postSignIn(data) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   const url = 'http://localhost:8000/api/login';
  //   return this.http.post(url, data);
  // }

  login(data) {
    return this.http.post(this.url + '/login', data);
  }

  signup(data){
    return this.http.post(this.url + '/user', data);
  }
}
