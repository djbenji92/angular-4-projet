import { Component, OnInit } from '@angular/core';
import { BeerDetailService } from './beer-detail.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class BeerDetail{
  id: number;
  name: string;
  description: string;
}