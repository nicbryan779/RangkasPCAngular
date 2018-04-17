import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { LoginFormComponent } from './header/login-form/login-form.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SubmitemailComponent } from './resetpassword/submitemail/submitemail.component';
import { VerificationsuccessComponent } from './verification/verificationsuccess/verificationsuccess.component';
import { VerificationfalseComponent } from './verification/verificationfalse/verificationfalse.component';
import {ProductService} from './services/product.service';
import {FeaturedService} from './services/featured.service';
import {NewReleaseService} from './services/newRelease.service';
import { FeaturedComponent } from './home/featured/featured.component';
import { TopComponent } from './home/top/top.component';
import { NewReleaseComponent } from './home/new-release/new-release.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    HomeComponent,
    AdminPageComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    LoginFormComponent,
    ProductComponent,
    CartComponent,
    ProfileComponent,
    ResetpasswordComponent,
    SubmitemailComponent,
    VerificationsuccessComponent,
    VerificationfalseComponent,
    FeaturedComponent,
    TopComponent,
    NewReleaseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, ProductService, FeaturedService, NewReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
