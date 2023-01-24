import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-advance-header',
  templateUrl: './advance-header.component.html',
  styleUrls: ['./advance-header.component.css']
})
export class AdvanceHeaderComponent implements OnInit {
  name!: string;
  constructor(private sharingService:SharedServiceService) { }

  ngOnInit(): void {
    this.name = this.sharingService.getName();
  }

}
