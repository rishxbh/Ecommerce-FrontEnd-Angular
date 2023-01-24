import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  name!:string
  constructor() { }
  setName(data:string) {
    this.name = data;
  }
  getName() : string {
    return this.name;
  }
}
