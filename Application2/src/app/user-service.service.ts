import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  saveRecord(data: any) {
    return this.http.post("http://localhost:2000/signup", data);
  }

  getUsers() {
    return this.http.get<any>("http://localhost:2000/login");
  }

}
