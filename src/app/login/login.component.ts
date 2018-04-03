import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../Services/data.service';
import { SignIn } from '../class/SignIn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginData: any = {};

  constructor(private dataService: DataService) { }

  // @Input() signing: SignIn;

  submitLogin() {
    this.dataService.login(this.loginData).subscribe();
  }

  ngOnInit() {}


}
