import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-default-preview',
  templateUrl: './default-preview.component.html',
  styleUrls: ['./default-preview.component.css']
})
export class DefaultPreviewComponent implements OnInit {
  userCount=0;
  productCount=0;
  constructor(private userService:UserServiceService, private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getList().subscribe(res => {
      this.productCount = res.length;
    })
    this.userService.getUsers().subscribe(res => {
      this.userCount = res.length;
    })
  }

}
