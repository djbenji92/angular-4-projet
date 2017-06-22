import { Injectable } from '@angular/core';
import { CategoryDetail } from '../category-detail/category-detail.component';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Categorie} from '../categories/categories.modele';

@Injectable()
export class ApiRestaurant {

    private baseUrl = 'http://localhost:3000/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
     }

    getCategorie(id: any){
      let endPoint = "categories/"+id

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

    getCategories(){
        let endPoint = "categories";

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

    getRestaurants(){
        let endPoint = "restaurants";

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

    addCategorie(categorie: Categorie){
        let endPoint = "categories";
        
        console.log(categorie);

        return this.http
        .post(this.baseUrl + endPoint, JSON.stringify({'name': categorie.name}), {headers: this.headers})   
            .map((res) => res.json());
    }

    updateCategorie(categorie: Categorie){
        let endPoint = "categories";
        console.log(categorie);

        return this.http
        .post(this.baseUrl + endPoint, JSON.stringify({'name': categorie.name}), {headers: this.headers})   
            .map((res) => res.json());
    }

}
