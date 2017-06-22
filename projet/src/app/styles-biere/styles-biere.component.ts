import { Component, OnInit } from '@angular/core';
import { StyleBiereService } from '../style-biere/style-biere.service';
import { styleBiere } from '../style-biere/style-biere.component'

@Component({
  selector: 'app-styles-biere',
  templateUrl: './styles-biere.component.html',
  styleUrls: ['./styles-biere.component.css']
})
export class StylesBiereComponent implements OnInit {

  styles: any[];

  constructor(private StyleBiereService: StyleBiereService) { }

  ngOnInit() {
    this.getStyles();
  }

  getStyles() {
    //this.StyleBiereService.getStyles().then(styles => this.styles = styles)
    //this.StyleBiereService.getStyles().then(styles => this.styles2 = styles)
    //this.StyleBiereService.getStyles().then(styles => console.log(styles))

    this.StyleBiereService.getStyles()
                     .subscribe(
                       result => {
                         console.log(result);
                         this.styles = result;
                        }
                      )
                       //error =>  this.errorMessage = <any>error);
  }

}
