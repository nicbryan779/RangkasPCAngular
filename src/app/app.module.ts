import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
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
import { FeaturedComponent } from './home/featured/featured.component';
import { TopComponent } from './home/top/top.component';
import { NewReleaseComponent } from './home/new-release/new-release.component';
import { AllProductComponent } from './product/all-product/all-product.component';

import { AuthService } from './services/auth.service';
import { HomeService } from './services/home.service';
import { ProductService } from './services/product.service';


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
    NewReleaseComponent,
    AllProductComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
  ],
  providers: [AuthService, ProductService, HomeService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
