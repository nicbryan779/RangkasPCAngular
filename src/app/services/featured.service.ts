import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/Product';

@Injectable()
export class FeaturedService {
  BASE_URL = 'http://localhost:8000/api/getfeatureds';
  constructor(private http: HttpClient) {}
  getFeatured() {
    return this.http.get(this.BASE_URL);
  }
}

// not yet given url params
