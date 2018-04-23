import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`})
};

@Injectable()
export class HomeService {
  BASE_URL = 'https://api.rangkaspc.me/api/';

  constructor(private http: HttpClient) { }

  getCarousel()  {
    return this.http.get(this.BASE_URL + 'getcarousel', httpOptions);
  }

  getRelease(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + 'new_release', httpOptions);
  }

  getFeatured() {
    return this.http.get(this.BASE_URL + 'getfeatureds', httpOptions);
  }

  getTop() {
    return this.http.get(this.BASE_URL + 'popular', httpOptions);
  }

}
