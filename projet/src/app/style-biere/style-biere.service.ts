import { Injectable } from '@angular/core';
import { styleBiere } from './style-biere.component';
import { STYLES } from './mock-styles'
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class StyleBiereService {

    private beerUrl = 'https://developers.zomato.com/api/v2.1/categories';
    private key = "378c1121eca87ac3751004d5ff0f104a";

    constructor(private http: Http, private RequestOptions: RequestOptions) {
     }

    getStyles(){
        let headers = new Headers();
        
        /*headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        headers.append('Content-Type', 'application/json');*/
        headers.append('user-key', '652f8085982c360f56e717c7b8bbe258')

        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.beerUrl, options)
                    .map((res) => res.json());

        
    }

}
