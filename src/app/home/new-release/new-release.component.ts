import { Component, OnInit } from '@angular/core';
import {FeaturedService} from '../../services/featured.service';
import {NewReleaseService} from '../../services/newRelease.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  releases = [];
  constructor(private _newRelease: NewReleaseService) { }

  ngOnInit() {
    this._newRelease.getRelease()
      .subscribe(res => { this.releases = res['data'];
        console.log(this.releases);
      });
  }

}
