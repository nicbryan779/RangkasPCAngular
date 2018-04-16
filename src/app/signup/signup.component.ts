import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { User } from '../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupData: User = {
    name: '',
    email: '',
    password: '',
    birthdate: '',
    phone: 0,
    address: '',
    city: '',
    state: '',
    zip: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  submitSignup() {
    this.authService.signup(this.signupData)
      .subscribe(
        () => {
          alert('Signup Successful, Verify Your Email Before You Login');
          this.router.navigateByUrl('/login');
        },
        err => {
          alert('Signup gone wrong (Email is taken)');
        }
    );
  }

  ngOnInit() {
  }

}
