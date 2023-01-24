import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductAndReviewComponent } from './product-and-review/product-and-review.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    component:HomePageComponent,
    path:''
  },
  {
    component:ProductAndReviewComponent,
    path:'products/reviews/:id'
  },
  {
    component:LoggedInPageComponent,
    path:'products'
  },
  {
    component:SignupPageComponent,
    path:'signUp'
  },
  {
    component:LoginPageComponent,
    path:'logIn'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
