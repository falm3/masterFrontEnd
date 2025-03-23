import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-private',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, MatButtonModule, NgIf ],
  templateUrl: './menu-private.component.html',
  styleUrl: './menu-private.component.css'
})
export class MenuPrivateComponent {
  name!:string;

  constructor(private authService: AuthService){
    this.name=authService.getUserName();
  }
  logout():void{
    if(this.authService.isLogged()){
      this.authService.userLogged = false;
      this.authService.username = "";
    }
  }
  isLogged():boolean{
    return this.authService.isLogged();
  }
}