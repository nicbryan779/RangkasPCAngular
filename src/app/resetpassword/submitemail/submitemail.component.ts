import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitemail',
  templateUrl: './submitemail.component.html',
  styleUrls: ['./submitemail.component.css']
})
export class SubmitemailComponent implements OnInit {

  public resetLink: any = {
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  sendResetLink() {
    this.authService.forgetPassword(this.resetLink).subscribe(
      () => {
        alert('Please check your email');
        this.router.navigateByUrl('/home');
      },
      err => {
        alert('Email is wrong');
      }
    );
  }
}
