import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/Product';
import { Cart } from '../model/Cart';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`})
};

@Injectable()
export class ProductService {

  BASE_URL = 'https://api.rangkaspc.me/api/';

  constructor(private http: HttpClient) {}

  getProduct(id) {
    return this.http.get(this.BASE_URL + 'product/' + id, httpOptions).map(res => {
      console.log(res);
      return res;
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + 'all', httpOptions);
  }

  addToCart(id, amount) {
    let submitAmount = {'amount': amount};
    console.log(submitAmount);
    return this.http.post(this.BASE_URL + 'addtocart/' + id, submitAmount, httpOptions);
  }

  getSimilar(id): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + 'similar/' + id, httpOptions);
  }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.BASE_URL + 'viewcart', httpOptions);
  }

  getTransaction() {
    return this.http.get(this.BASE_URL + 'transactions', httpOptions);
  }

  getInvoice(id) {
    return this.http.get(this.BASE_URL + 'invoice/' + id, httpOptions);
  }

  add1(id) {
    return this.http.get(this.BASE_URL + 'add1/' + id, httpOptions);
  }

  remove1(id) {
    return this.http.delete(this.BASE_URL + 'removecart/' + id, httpOptions);
  }
}
