import { Injectable } from '@angular/core';
import { CategoryDetail } from '../category-detail/category-detail.component';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRestaurant {

    private url = 'http://localhost:3000/categories';

    constructor(private http: Http, private RequestOptions: RequestOptions) {
     }

    getCategories(){
        return this.http.get(this.url)
                    .map((res) => res.json()); 
    }

}
