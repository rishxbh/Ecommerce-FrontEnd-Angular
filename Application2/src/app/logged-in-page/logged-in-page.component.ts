import { Component, OnInit } from '@angular/core';
import { AdvanceHeaderComponent } from '../advance-header/advance-header.component';
import { ProductsPageComponent } from '../products-page/products-page.component';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
