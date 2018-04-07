import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginData: any = {};

  constructor(private authService: AuthService, private router: Router) { }


  // Function is called when button is clicked
  submitLogin() {
    this.authService.login(this.loginData)
      .subscribe(
        // States that login is correct
        () => {
          alert('Login Completed');
          this.router.navigateByUrl('/home');
        },
        // States that login information is wrong
        err => {
          alert('Email or Password is wrong');
        }
      );
  }

  ngOnInit() {}


}
