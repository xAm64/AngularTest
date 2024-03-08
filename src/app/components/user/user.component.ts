import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm : FormGroup;
  user:User | undefined;
  error: string | undefined | null;
  constructor(private formBuilder:FormBuilder, private apiService:ApiService) {
    this.user = new User("", "", "");
    this.myForm = this.formBuilder.group({
      email: [this.user.email],
      password: [this.user.password]
    });
  }


  ngOnInit(): void {}


  login(form:FormGroup) : void {
    this.apiService.loginUser(form.value.email, form.value.passowrd).subscribe({
      next: (data) => console.log(data), //this.user = data,
      error : (err) => this.error = err.message,
      complete: () => this.error = null
    });
  }

}
