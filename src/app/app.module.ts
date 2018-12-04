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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    //{provide:ErrorHandler, useClass:GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
