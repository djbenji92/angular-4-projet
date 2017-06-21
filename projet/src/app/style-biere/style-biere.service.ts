import { Injectable } from '@angular/core';
import { styleBiere } from './style-biere.component';
import { STYLES } from './mock-styles'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class StyleBiereService {
    //private beerUrl = 'http://api.brewerydb.com/v2/';  // URL to web api
    private beerUrl = 'http://api.brewerydb.com/v2/styles?key=378c1121eca87ac3751004d5ff0f104a&styleId=1&callback=JSON_CALLBACK';
    private key = "378c1121eca87ac3751004d5ff0f104a";

    constructor(private http: Http) {
     }

    getStyles(){

        let result = this.http.get(this.beerUrl)
                    .toPromise()
                    .then(response => response.json().data);

        
        console.log(result);
        return result;
    }

}
