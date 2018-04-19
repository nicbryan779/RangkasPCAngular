import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (!this.authService.isLogin()) {
      return true;
    } else {
      alert('You have already login, logout to access this page!');
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
