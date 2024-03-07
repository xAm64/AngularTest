import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cart: Map<number,Training>;
  constructor() {
    let cart = localStorage.getItem("cart");
    if(cart){
      this.cart = new Map(JSON.parse(cart));
    } else {
      this.cart = new Map<number,Training>();
    }
  }

  addTraining(training:Training){
    this.cart.set(training.id,training);
    this.saveCart();
  }
  saveCustomer(customer:Customer){
    localStorage.setItem("cursomer",JSON.stringify(customer));
  }
  saveCart(){
    localStorage.setItem("cart",JSON.stringify([...this.cart]));
  }
  removeTraining(training:Training){
    this.cart.delete(training.id);
    this.saveCart();
  }
  getCart() : Training[] | undefined {
    if (this.cart.size > 0){
      return Array.from(this.cart.values());
    } else {
      return undefined;
    }
  }
  getAmount() : number {
    let amount: number = 0;
    this.cart.forEach(Training => {
      amount += Training.price * Training.quantity;
    });
    return amount;
  }
  getCustomer(): Customer {
    let customer = localStorage.getItem("customer");
    if(customer){
      return JSON.parse(customer);
    } 
    return new Customer("unknow", "", "", "", "");
  }
  clearLocalStorage(){
    this.cart.clear();
    localStorage.setItem("Cart", "");
  }

}


