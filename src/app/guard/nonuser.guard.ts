import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class NonuserGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLogin()) {
      return true;
    } else {
      alert('You do not have permission to view this page!');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
