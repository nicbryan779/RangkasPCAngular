import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any;
  user: User = {
    id: null,
    name: null,
    email: null,
    password: null,
    birthdate: null,
    phone: null,
    address: null,
    city: null,
    state: null,
    zip: null
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    if (this.authService.isLogin()) {
      this.authService.getUser().subscribe(data => {
        this.data = data;
        this.user.id = this.data['user']['id'];
        this.user.name = this.data['user']['name'];
        this.user.email = this.data['user']['email'];
        this.user.password = this.data['user']['password'];
        this.user.birthdate = this.data['user']['birthdate'];
        this.user.phone = this.data['user']['phone'];
        this.user.address = this.data['user']['address'];
        this.user.city = this.data['user']['city'];
        this.user.state = this.data['user']['state'];
        this.user.zip = this.data['user']['zip'];
      });
    }
  }

  submitEdit() {
    this.authService.edit(this.user).subscribe(
      () => {
        alert('Edit Successful');
        this.router.navigateByUrl('/home');
      },
      err => {
        alert('Edit is wrongly done');
      });
  }
}
