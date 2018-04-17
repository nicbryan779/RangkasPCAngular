import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/Product';

@Injectable()
export class ProductService {
  BASE_URL = 'http://localhost:8000/api/product/1';
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get(this.BASE_URL).map(res => {
      console.log(res);
      return res;
    });
  }
}

// not yet given url params