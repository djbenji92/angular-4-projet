import { Component, OnInit } from '@angular/core';
import { StyleBiereService } from '../style-biere/style-biere.service';
import { styleBiere } from '../style-biere/style-biere.component'

@Component({
  selector: 'app-styles-biere',
  templateUrl: './styles-biere.component.html',
  styleUrls: ['./styles-biere.component.css']
})
export class StylesBiereComponent implements OnInit {

  styles: styleBiere[];
  styles2: any[];

  constructor(private StyleBiereService: StyleBiereService) { }

  ngOnInit() {
    this.getStyles();
  }

  getStyles(): void {
    //this.StyleBiereService.getStyles().then(styles => this.styles = styles)
    //this.StyleBiereService.getStyles().then(styles => this.styles2 = styles)
    this.StyleBiereService.getStyles().then(styles => console.log(styles))
  }

}
