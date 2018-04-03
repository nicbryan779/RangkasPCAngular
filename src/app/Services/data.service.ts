import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class DataService {

  private url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.url + '/login', data);
  }

  signup(data) {
    return this.http.post(this.url + '/register', data);
  }
}
