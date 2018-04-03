import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginData: any = {};

  constructor(private dataService: DataService, private router: Router) { }


  submitLogin() {
    this.dataService.login(this.loginData)
      .subscribe(
        resp => {
          this.router.navigateByUrl('/home');
          console.log(resp);
        },
        error => {
          console.log(error);
        }
    );
  }

  ngOnInit() {}


}
