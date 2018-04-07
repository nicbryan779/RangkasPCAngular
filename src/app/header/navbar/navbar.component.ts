import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // isLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // this.checkLogin();
  }

  // checkLogin() {
  //   if (localStorage.getItem('token')) {
  //     console.log(localStorage.getItem('token'));
  //     this.isLogin = true;
  //     console.log(this.isLogin);
  //   } else {
  //     this.isLogin = false;
  //   }
  // }

  submitLogout() {
    this.authService.logout();
    alert('You have successfully logged out!');
    this.router.navigateByUrl('/home');
    // this.isLogin = false;
  }

}
