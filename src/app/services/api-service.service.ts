import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //formations
  public getTrainings(){
    return this.http.get<Training[]>(environment.host+"/trainings");
  }
  public getTraining(id: number){
    return this.http.get<Training>(environment.host+"/trainings/"+id);
  }

  //utilisateur
  public registerUser(email:string, passowrd:string){
    //j'enregistrerais un nouvel utilisateur
  }
  public loginUser(email:string, password:string){
    
    return this.http.get<User>(environment.host+"users?email="+email+"&password="+password);
  }
}
