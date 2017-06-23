import { Injectable } from '@angular/core';
import { CategoryDetail } from '../category-detail/category-detail.component';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Categorie} from '../categories/categories.modele';
import { Restaurant } from '../restaurants/restaurants.model';

@Injectable()
export class ApiRestaurant {

    //url du serveur nodeJS
    private baseUrl = 'http://localhost:3000/';
    private headers = new Headers({'Content-Type': 'application/json'});

    //injecte la méthode HTTP pour pouvoir faire des requetes
    constructor(private http: Http) {
     }

    /*  url: localhost:3000/categories/:id 
        méthode: GET
        description: permet la récupération d'une catégorie */
    getCategorie(id: any){
      let endPoint = "categories/"+id

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

    /*  url: localhost:3000/categories 
        méthode: GET
        description: permet la récupération de l'ensemble des catégories */
    getCategories(){
        let endPoint = "categories";

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

<<<<<<< HEAD
    getRestaurant(id: any){
      let endPoint = "restaurants/"+id

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

=======
    /*  url: localhost:3000/restaurants 
        méthode: GET
        description: permet la récupération de l'ensemble des restaurants */
>>>>>>> add coments
    getRestaurants(){
        let endPoint = "restaurants";

        return this.http.get(this.baseUrl + endPoint)
             .map((res) => res.json()); 
    }

    /*  url: localhost:3000/categories 
        méthode: POST
        description: Ajout d'une nouvelle catégorie 
        paramétres: name: string                  */
    addCategorie(categorie: Categorie){
        let endPoint = "categories";
        
        console.log(categorie);

        return this.http
        .post(this.baseUrl + endPoint, JSON.stringify({'name': categorie.name}), {headers: this.headers})   
            .map((res) => res.json());
    }

    /*  url: localhost:3000/categories/:id
        méthode: DELETE
        description: permet la suppression d'une catégorie
        paramétres: id:string                          */
    deleteCategorie(id: string){
    
        let endPoint = "categories/" + id;
        
        return this.http
        .delete(this.baseUrl + endPoint)   
            .map((res) => res.json());
    }

    /*  url: localhost:3000/categories/:id
        méthode: UPDATE
        description: permet la modification d'une catégorie
        paramétres: id:string                          */
    updateCategorie(categorie: Categorie){
        let endPoint = "categories/"+categorie._id;
        console.log(categorie);

        return this.http
        .put(this.baseUrl + endPoint, JSON.stringify({'name': categorie.name}), {headers: this.headers})   
            .map((res) => {
                res.json();
                console.log("traitement fini");
                console.log(res);
            });
    }

    /*  url: localhost:3000/categories/:id
        méthode: POST
        description: permet l'ajout d'un restaurant
        paramétres: id:string                          */
    addRestaurant(restaurant: Restaurant, categorie: string){
        let endPoint = "restaurants";
        
        return this.http
        .post(this.baseUrl + endPoint, JSON.stringify(
            {'name': restaurant.name,
             'categorie':categorie, 
             'city':restaurant.city,
             'latitude':restaurant.latitude,
             'longitude':restaurant.longitude,
             'image':restaurant.image
            }), {headers: this.headers}
        )   
        .map((res) => res.json());
    }

    updateRestaurant(restaurant: Restaurant){
        let endPoint = "restaurants/"+restaurant._id;
        console.log(restaurant);

        return this.http
        .put(this.baseUrl + endPoint, JSON.stringify({'name': restaurant.name, 'city': restaurant.city, 'latitude': restaurant.latitude, 'longitude': restaurant.longitude, 'image': restaurant.image, 'categorie': restaurant.categorie}), {headers: this.headers})   
            .map((res) => {
                res.json();
                console.log("traitement fini");
                console.log(res);
            });
    }

    /*  url: localhost:3000/categories/:id
        méthode: DELETE
        description: permet la suppression d'un restaurant
        paramétres: id:string                          */
    deleteRestaurant(id: string){
    
        let endPoint = "restaurants/" + id;
        
        return this.http
        .delete(this.baseUrl + endPoint)   
            .map((res) => res.json());
    }

}
