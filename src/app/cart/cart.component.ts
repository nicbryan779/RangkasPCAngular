import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Cart } from '../model/Cart';
import { Router } from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  proceed = false;
  constructor(private productService: ProductService, private router: Router) { }
  carts = [];
  token = localStorage.getItem('token').valueOf();
  totalPrice: number;

  ngOnInit() {
    this.getCart();
    this.validateTotal();
  }

  getCart() {
    this.productService.getCart().subscribe(resp => {
      this.carts = resp['data'];
      this.getInvoice();
    });
  }

  getInvoice() {
    this.productService.getInvoice(this.carts[0]['invoice_id']).subscribe(
      resp => {
        this.totalPrice = resp['invoice']['total_price'];
        }
      );
    }

  add1(id) {
    this.productService.add1(id).subscribe(
      resp => {
        this.router.navigateByUrl('/jojowashere', {skipLocationChange: true}).then( () =>
          this.router.navigateByUrl('/cart'));
        }
    );
  }

  remove1(id) {
    this.productService.remove1(id).subscribe(
      resp => {
        this.router.navigateByUrl('/jojowashere', {skipLocationChange: true}).then( () =>
          this.router.navigateByUrl('/cart'));
        }
    );
  }
  goToCheckout() {
    console.log(this.carts);
    if (this.carts.length === 0) {
      alert('You have no item to checkout!');
      this.totalPrice = 0;
      } else {
      window.location.href = 'http://localhost:8000/checkout?token=' + this.token;
      }
      // this.router.navigateByUrl('http://localhost:8000/checkout?token=' + localStorage.getItem('token'));
  }

  validateTotal() {
    console.log(this.carts.length);
    if (this.carts.length === 0) {
      console.log(this.totalPrice);
      this.totalPrice = 0;
    }
  }
}
