import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SubmitemailComponent } from './resetpassword/submitemail/submitemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerificationsuccessComponent } from './verification/verificationsuccess/verificationsuccess.component';
import { VerificationfalseComponent } from './verification/verificationfalse/verificationfalse.component';
import { ProductComponent } from './product/product.component';
import { AllProductComponent } from './product/all-product/all-product.component';

import { NonuserGuard } from './guard/nonuser.guard';
import { UserGuard } from './guard/user.guard';

const routes: Routes =
[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [UserGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [UserGuard] },
  { path: 'cart', component: CartComponent, canActivate: [NonuserGuard] },
  { path: 'edit', component: ProfileComponent, canActivate: [NonuserGuard] },
  { path: 'forgetpassword', component: SubmitemailComponent, canActivate: [UserGuard] },
  { path: 'resetpassword/:id', component: ResetpasswordComponent, canActivate: [UserGuard] },
  { path: 'verificationsuccessful', component: VerificationsuccessComponent, canActivate: [UserGuard]},
  { path: 'verificationfalse', component: VerificationfalseComponent, canActivate: [UserGuard] },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'all-product', component: AllProductComponent },
  { path: '**', component: HomeComponent } // Change to does not exit component
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
