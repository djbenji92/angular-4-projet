import { Injectable } from '@angular/core';
import { CategoryDetail } from '../category-detail/category-detail.component';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRestaurant {

    private baseUrl = 'http://localhost:3000/';

    constructor(private http: Http, private RequestOptions: RequestOptions) {
     }

    getCategories(){
        let endPoint = "categories"

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

}