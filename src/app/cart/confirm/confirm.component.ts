import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  carts = [];
  token = localStorage.getItem('token').valueOf();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.productService.getCart().subscribe(resp => {
      this.carts = resp['data'];
      console.log(this.carts['amount']);
    });
  }

  goToCheckout() {
    console.log(this.carts);
    if (this.carts.length === 0) {
      alert('You have no item to checkout!');
    } else {
      window.location.href = 'http://localhost:8000/checkout?token=' + this.token;
    }
    // this.router.navigateByUrl('http://localhost:8000/checkout?token=' + localStorage.getItem('token'));
  }

}
