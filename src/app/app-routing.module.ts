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

const routes: Routes =
[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'cart', component: CartComponent},
  { path: 'edit', component: ProfileComponent},
  { path: 'forgetpassword', component: SubmitemailComponent },
  { path: 'resetpassword/:id', component: ResetpasswordComponent },
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
