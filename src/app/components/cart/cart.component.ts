import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/models/training.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Training[] | undefined;
  amount: number = 0;
  constructor(private cartService: CartService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.amount = this.cartService.getAmount();
  }
  onRemoveFromCart(training:Training){
    this.cartService.removeTraining(training);
    this.cart = this.cartService.getCart();
  }
  onNewOrder(){
    this.router.navigateByUrl("customer");
  }
}