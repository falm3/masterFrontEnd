import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent  implements OnInit{
  loginForm!:FormGroup;
  username!:FormControl;
  password!:FormControl;

  constructor( private fb: FormBuilder, private router:Router, private authService: AuthService){
    this.createLoginForm();
  }

  

  ngOnInit(): void {
    this.createLoginForm();

  }
  errorLogin():void{
    alert('Invalid Credentials');
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.username = this.loginForm.get('username') as FormControl;
    this.password = this.loginForm.get('password') as FormControl;
  }

  onLoginSuccess() {
    this.router.navigate(['/users']);
  }

  login(): void {
    if (
      this.authService.login(
        { username: this.username.value, password: this.password.value }        
      )      
    ) {
      this.router.navigate(["/dashboard"]);
    }else{
      this.errorLogin()
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);

  }

}
