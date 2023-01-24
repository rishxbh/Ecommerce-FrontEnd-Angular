import { Component, OnInit } from '@angular/core';
import { BaseHeaderComponent } from '../base-header/base-header.component';
import { DefaultPreviewComponent } from '../default-preview/default-preview.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
