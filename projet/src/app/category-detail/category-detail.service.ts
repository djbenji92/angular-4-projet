import { Injectable } from '@angular/core';
import { CategoryDetail } from './category-detail.component';
import { CATEGORIES } from './mock-categories'
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryDetailService {

    private url = 'https://developers.zomato.com/api/v2.1/categories';
    private key = "378c1121eca87ac3751004d5ff0f104a";

    constructor(private http: Http, private RequestOptions: RequestOptions) {
     }

    getCategories(){
        let headers = new Headers();
        
        headers.append('user-key', '652f8085982c360f56e717c7b8bbe258')

        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.url, options)
                    .map((res) => res.json());

        
    }

}
