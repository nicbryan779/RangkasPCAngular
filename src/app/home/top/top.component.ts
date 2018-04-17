import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  top: Product;
  constructor() { }
  // TUNGGU DIBIKININ TABLE DARI BACKEND
  ngOnInit() {
    this.top = {
      id: 5,
      type: 'Steam',
      name: 'Far Cry 5',
      brand: 'Ubisoft',
      description: 'Gud Game',
      price: 99,
      stock: 12,
      sold: 2,
      img: 'https://compass-ssl.xbox.com/assets/42/d4/42d4a443-d696-486c-bda5-111e72a56a03.jpg?n=FC5_GLP-Page-Hero-1084_1920x600_03.jpg'
    };
  }

}
