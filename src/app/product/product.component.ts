import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product = {
    id: null,
    type: null,
    name: null,
    brand: null,
    description: null,
    price: null,
    stock: null,
    sold: null,
    img: null,
    video: null,
    created: null,
    updated: null,
  };
  isAvailable = true;
  stock: string;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getStock();
    this.getProduct();
  }

  getProduct() {
    this._productService.getProduct().subscribe(resp => {
      // this.products = data;
      // this.name = resp['data']['name']; OK
      this.products = resp['data'];
      console.log(this.products.name);
      // console.log(data);
      // console.log(this.products.brand);
    });
  }
  getStock() {
    if (this.products.stock > 0) {
      this.isAvailable = true;
      this.stock = 'Stock Available!';
    } else {
      this.isAvailable = false;
      this.stock = 'Out of Stock';
    }
  }
}
