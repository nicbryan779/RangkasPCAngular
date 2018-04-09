import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../models/User';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data: any;
  user: User = {
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

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.getName();
  }

  userReset() {
      this.user.name = null;
      this.user.email = null;
      this.user.password = null;
      this.user.birthdate = null;
      this.user.phone = null;
      this.user.address = null;
      this.user.city = null;
      this.user.state = null;
      this.user.zip = null;
  }

  submitLogout() {
    this.userReset();
    this.authService.logout();
    alert('You have successfully logged out!');
    this.router.navigateByUrl('/home');
  }

  getName() {
    if (this.authService.isLogin()) {
      this.authService.getUser().subscribe(data => {
        this.data = data;
        console.log(data);
        console.log(this.data['user']['name']);
        this.user.name = this.data['user']['name'];
        console.log(this.user.name);
      });
    }
  }
}
