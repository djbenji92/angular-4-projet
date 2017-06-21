import { Component, OnInit } from '@angular/core';
import { BeerDetailService } from '../beer-detail/beer-detail.service';
import { BeerDetail } from '../beer-detail/beer-detail.component';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: BeerDetail[];
  
  constructor(private BeerDetailService: BeerDetailService) { }

  ngOnInit() {
  	this.getBeers();
  }

  getBeers(): void {
    this.BeerDetailService.getBeers().then(
    beers => this.beers = beers)
  }

}
