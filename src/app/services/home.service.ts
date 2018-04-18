import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';

@Injectable()
export class HomeService {
  BASE_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getCarousel()  {
    return this.http.get(this.BASE_URL + 'getcarousel');
  }

  getRelease(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + 'new_release');
  }

  getFeatured() {
    return this.http.get(this.BASE_URL + 'getfeatureds');
  }

}
