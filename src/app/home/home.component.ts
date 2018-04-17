import { Component, OnInit } from '@angular/core';
import {Carousel} from '../model/Carousel';
import {Features} from '../model/Features';
import {Release} from '../model/Release';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';
import {FeaturedService} from '../services/featured.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myClasses = {};
  releases: Release[];
  // features: Features[];
  carousels: Carousel[];
  constructor() { }

  ngOnInit() {
    this.carousels = [{
      name: 'pubg',
      url: 'https://images.clarin.com/2017/05/03/HyrRjuPyb_930x525.jpg',
      isActive: true
    }];
    this.releases = [{
      name: 'Fornite',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSx0JJoD-m4UJSyQacdMty4Yx_0tdYXGgxQE-BETvjSnsBMfKG',
      platform: 'Steam',
      genre: 'FPS',
      price: 200000
    },
    ];
  }
  setMyClasses() {
    this.myClasses = {
      'carousel-item active': this.carousels
    };
  }
}
