import { Component, OnInit } from '@angular/core';
import {Carousel} from '../model/Carousel';
import {Features} from '../model/Features';
import {Release} from '../model/Release';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myClasses = {};
  releases: Release[];
  features: Features[];
  carousels: Carousel[];
  constructor() { }

  ngOnInit() {
    this.carousels = [{
      name: 'pubg',
      url: 'https://images.clarin.com/2017/05/03/HyrRjuPyb_930x525.jpg',
      isActive: true
    }];
    this.features = [{
      name: 'CS:GO',
      url: 'http://www.papik.net/wp-content/uploads/2015/09/counter-strike-global-offensive-548x300.jpg',
      platform: 'Steam',
      genre: 'FPS',
      price: 150000
    },
      {
        name: 'CS:GO',
        url: 'http://www.papik.net/wp-content/uploads/2015/09/counter-strike-global-offensive-548x300.jpg',
        platform: 'Steam',
        genre: 'FPS',
        price: 150000
      },
      {
        name: 'CS:GO',
        url: 'http://www.papik.net/wp-content/uploads/2015/09/counter-strike-global-offensive-548x300.jpg',
        platform: 'Steam',
        genre: 'FPS',
        price: 150000
      },
      {
        name: 'CS:GO',
        url: 'http://www.papik.net/wp-content/uploads/2015/09/counter-strike-global-offensive-548x300.jpg',
        platform: 'Steam',
        genre: 'FPS',
        price: 150000
      }];

    this.releases = [{
      name: 'Fornite',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSx0JJoD-m4UJSyQacdMty4Yx_0tdYXGgxQE-BETvjSnsBMfKG',
      platform: 'Steam',
      genre: 'FPS',
      price: 200000
    },
    ];
    // this.setMyClasses()
      // {
      //   name: 'fornite',
      //   url: 'https://media.playstation.com/is/image/SCEA/fortnite-listing-thumb-01-ps4-us-24may17?$Icon$'
      // }];
  }

  setMyClasses() {
    this.myClasses = {
      'carousel-item active': this.carousels
    };
  }

}
