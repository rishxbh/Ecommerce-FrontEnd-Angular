import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: '',
      userPassword: ''
    })
  }
  url = "http://localhost:2000/login";
  invalid = '';
  constructor(private userService: UserServiceService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private sharingService: SharedServiceService) { }
  logIn() {
    this.userService.getUsers().subscribe(res => {
      console.log(this.loginForm.value);
      const user = res.find((a: any) => {
        return a.userName === this.loginForm.value.userName && a.userPassword === this.loginForm.value.userPassword
      })

      console.warn(user);
      if (user) {
        console.warn(user.firstName);
        this.sharingService.setName(user.firstName);
        console.warn('success');
        this.loginForm.reset();
        this.router.navigate(['products'])
      } else {
        this.invalid = "Invalid credentials";
      }
    })
    // let param = new HttpParams()
    // .set("userName",this.loginForm.value.userName)
    // .set("userPassword",this.loginForm.value.userPassword);
    // let data = `{
    //   "userName" : "${this.loginForm.value.userName}", "userPassword": "${this.loginForm.value.userPassword}"
    // }`;
    // var parameters = JSON.stringify({type:"login", userName : this.loginForm.value.userName, userPassword : this.loginForm.value.userPassword})
    // // let params = new HttpParams().set("requestData", JSON.stringify(data));
    // // let password = new HttpParams().set("userPassword",this.loginForm.value.userPassword) ;
    // // let password = this.loginForm.value.userPassword;
    // // console.warn(param.toString());
    // this.http.get<any>(this.url, this.loginForm.value).subscribe(res => {
    //   // console.log(this.loginForm.value);
    //   // const user =res.find((a:any)=> {
    //   //   return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
    //   // })
    //   console.warn(res);
    //   if(res) {
    //     this.loginForm.reset();
    //     this.router.navigate([''])
    //   } else {
    //     this.invalid = "Incorrect credentials";
    //   }
    // })
  }
}
