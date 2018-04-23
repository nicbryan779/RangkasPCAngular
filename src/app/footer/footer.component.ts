import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedin = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLogin()) {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  }

}
