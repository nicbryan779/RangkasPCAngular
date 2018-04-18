import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/Product';

@Injectable()
export class ProductService {
  BASE_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  getProduct(id) {
    return this.http.get(this.BASE_URL + 'product/' + id).map(res => {
      console.log(res);
      return res;
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + 'all');
  }
}

// not yet given url params
