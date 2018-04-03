import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupData: any = {};

  constructor(private dataService: DataService, private router: Router) { }

  submitSignup() {
    this.dataService.signup(this.signupData).subscribe(resp => {
      console.log(this.signupData);
      this.router.navigateByUrl('/login');
    });
  }

  ngOnInit() {
  }

}
