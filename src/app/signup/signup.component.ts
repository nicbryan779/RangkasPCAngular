import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupData: any = {};

  constructor(private dataService: DataService) { }

  submitLogin() {
    this.dataService.login(this.signupData).subscribe();
  }

  ngOnInit() {
  }

}
