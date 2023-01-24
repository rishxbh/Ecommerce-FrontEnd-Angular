import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { AdvanceHeaderComponent } from './advance-header/advance-header.component';
import { DefaultPreviewComponent } from './default-preview/default-preview.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductAndReviewComponent } from './product-and-review/product-and-review.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseHeaderComponent,
    AdvanceHeaderComponent,
    DefaultPreviewComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProductsPageComponent,
    ProductAndReviewComponent,
    HomePageComponent,
    LoggedInPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
