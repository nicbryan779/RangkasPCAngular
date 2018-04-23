import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Cart } from '../model/Cart';
import { Router } from '@angular/router';

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

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.productService.getCart().subscribe(resp => {
      this.carts = resp['data'];
      console.log(this.carts['amount']);
    });
  }

  add1(id) {
    this.productService.add1(id).subscribe(
      resp =>
        this.getCart()
    );
  }

  remove1(id) {
    this.productService.remove1(id).subscribe(
      resp =>
        this.getCart()
    );
  }
  goToConfirm() {
    if (this.carts.length !== 0) {
      window.location.href = 'http://localhost:8000/checkout?token=' + this.token;
    } else {
      alert('You have no item to checkout!');
    }
  }
}
