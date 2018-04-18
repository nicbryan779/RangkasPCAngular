import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myClasses = {};
  // features: Features[];
  carousels = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getCarousel()
      .subscribe(res => { this.carousels = res['carousel'];
      // console.log(res['carousel'][0]['url']);
      console.log(this.carousels);
      // console.log(this.carousels);
      });
  }

  setMyClasses() {
    this.myClasses = {
      'carousel-item active': this.carousels
    };
  }
}
