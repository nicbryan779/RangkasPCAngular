import { Component, OnInit } from '@angular/core';
import {Carousel} from '../model/Carousel';
import {Features} from '../model/Features';
import {Release} from '../model/Release';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';
import {FeaturedService} from '../services/featured.service';
import {CarouselService} from '../services/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myClasses = {};
  // features: Features[];
  carousels = [];
  constructor(private _carouselService: CarouselService) { }

  ngOnInit() {
    this._carouselService.getCarousel()
      .subscribe(res => { this.carousels = res['carousel'];
      });
  }
  setMyClasses() {
    this.myClasses = {
      'carousel-item active': this.carousels
    };
  }
}
