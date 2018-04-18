import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  releases = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getRelease()
      .subscribe(res => { this.releases = res['data'];
        console.log(this.releases);
      });
  }

}
