import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training.models';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;
  error: string | undefined | null;
  constructor(private cartService: CartService, private router : Router, private apiService : ApiService) { }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  onAddToCart(training:Training){
    if(training.quantity > 0){
      this.cartService.addTraining(training);
      this.router.navigateByUrl("cart");
    }
  }

  getAllTrainings() {
    this.apiService.getTrainings().subscribe({
      next : (data) => this.listTrainings = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })
  }

}