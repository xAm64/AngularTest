import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public cartService: CartService, private router:Router) { }

  ngOnInit(): void {
  }
  onSaveCustomer(customer:Customer){
    this.cartService.saveCustomer(customer);
    this.router.navigateByUrl("order");
  }

}
