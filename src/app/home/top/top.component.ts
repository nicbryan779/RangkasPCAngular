import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  top = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getTop();
  }

  getTop() {
    this.homeService.getTop().subscribe(
      data => {
        this.top = data['data'][0];
      }
    );
  }

}
