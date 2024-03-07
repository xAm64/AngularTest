import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getTrainings(){
    return this.http.get<Training[]>(environment.host+"/trainings");
  }
  public getTraining(id: number){
    return this.http.get<Training>(environment.host+"/trainings/"+id);
  }
}
