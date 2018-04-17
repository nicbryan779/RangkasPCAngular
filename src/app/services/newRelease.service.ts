import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/Product';

@Injectable()
export class NewReleaseService {
  BASE_URL = 'http://localhost:8000/api/new_release';
  constructor(private http: HttpClient) {}
  getRelease(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }
}

// not yet given url params
