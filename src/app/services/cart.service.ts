import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  listArticles:Training[];
  constructor() {
    this.listArticles = [];
  }

  //ajoute un élément au panier
  addToCart(training:Training){
    this.listArticles.push(training);

    //l'ancienne méthode pour voir que j'ajoutais bien X article en Y quantité.
    /*console.log(training.name);
    console.log(training.quantity);*/
  }

  //consulter le panier
  getCart(){
    return this.listArticles;
  }

}


