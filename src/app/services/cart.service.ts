import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addTraining(training:Training){
    console.log(training.name);
    console.log(training.quantity);
  }

}


