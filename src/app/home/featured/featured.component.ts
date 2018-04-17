import { Component, OnInit } from '@angular/core';
import {FeaturedService} from '../../services/featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  features = [];
  constructor(private _featuredService: FeaturedService) { }

  ngOnInit() {
    this._featuredService.getFeatured()
      .subscribe(res => { this.features = res['featured'];
        console.log(this.features);
      });
  }

}
