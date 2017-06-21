import { Component, OnInit } from '@angular/core';
import { StyleBiereService } from './style-biere.service';

@Component({
  selector: 'app-style-biere',
  templateUrl: './style-biere.component.html',
  styleUrls: ['./style-biere.component.css']
})
export class StyleBiereComponent implements OnInit {


  constructor(private StyleBiereService: StyleBiereService) { }

  ngOnInit() {

  }

}


export class styleBiere{
  id: number;
  name: string;
  description: string;
}