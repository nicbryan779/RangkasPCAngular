import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  features = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getFeatured()
      .subscribe(res => { this.features = res['featured'];
        console.log(this.features);
      });
  }

}
