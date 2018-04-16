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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
