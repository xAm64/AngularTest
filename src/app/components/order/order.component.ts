import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dateOrder : Date = new Date();
  customer: Customer|undefined;
  constructor(public cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
  }
  onOrder(){
    if(confirm("Votre commande est terminé")){
      this.cartService.clearLocalStorage();
      this.router.navigateByUrl("");
    }
  }
}
