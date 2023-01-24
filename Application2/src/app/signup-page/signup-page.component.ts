import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  addForm!:FormGroup;

  constructor(private userService:UserServiceService, private builder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.builder.group({
      firstName:'',
      lastName:'',
      userName:'',
      userPassword:''
    })
  }

  addUser(){
    this.userService.saveRecord(this.addForm.value).subscribe(res => {
      console.warn('success', res);
      this.addForm.reset();
      this.router.navigate(['logIn'])
    })
  }

}
