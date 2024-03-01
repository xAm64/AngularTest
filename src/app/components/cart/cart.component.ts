import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/models/training.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  trainings: Training[] | undefined;
  constructor(private cartService: CartService) {
  }
  
  ngOnInit(): void {
    this.trainings = this.cartService.getCart();
  }

  //cout total
  totalCost(){
    let total = 0;
    this.trainings?.forEach((art) => {
      total += art.price * art.quantity
    });
    return total;
  }
  //ajouter ici la méthode delete pour enlever les articles.
}