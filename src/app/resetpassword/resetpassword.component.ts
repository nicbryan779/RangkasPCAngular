import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetData: any = {
    password: ''
  };

  confirmPassword: any = {
    password: ''
  };

  validator: String = this.route.snapshot.params['id'];

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  submitResetPassword() {
    if (this.resetData.password === this.confirmPassword.password) {
      this.authService.resetPassword(this.resetData, this.validator).subscribe(
        () => {
          alert('Reset Password Successfully');
          this.router.navigateByUrl('/home');
        }
      );
    } else {
      alert('Mismatch! Review the retype password please');
    }
  }

}
