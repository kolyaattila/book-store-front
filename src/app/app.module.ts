import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http'
import { HttpClient } from 'selenium-webdriver/http';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandler } from './global-error-handler';
import { AdminComponent } from './admin/admin.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { RegistreComponent } from './registre/registre.component';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: tokenGetter,
      whitelistedDomains: ['localhost:4200']
  }
};

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    StoreComponent,
    LoginComponent,
    ErrorComponent,
    AdminComponent,
    ShoppingCartComponent,
    RegistreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
    //{provide:ErrorHandler, useClass:GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
