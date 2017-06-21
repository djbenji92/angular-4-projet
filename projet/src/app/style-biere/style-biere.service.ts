import { Injectable } from '@angular/core';
import { styleBiere } from './style-biere.component';
import { STYLES } from './mock-styles'
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class StyleBiereService {
    //private beerUrl = 'http://api.brewerydb.com/v2/';  // URL to web api
    private beerUrl = 'http://api.brewerydb.com/v2/styles?key=378c1121eca87ac3751004d5ff0f104a&styleId=1&callback=JSON_CALLBACK';
    private key = "378c1121eca87ac3751004d5ff0f104a";

    constructor(private http: Http, private RequestOptions: RequestOptions) {
     }

    getStyles(){
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });

        let result = this.http.get(this.beerUrl, options)
                    .toPromise()
                    .then(
                        response => {
                            console.log(result);
                            response.json().data;
                        }
                    );

        
        
        return result;
    }

}
