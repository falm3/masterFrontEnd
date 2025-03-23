import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged:boolean = false;
  username:string = "";

  constructor() { }

  login(authentication: { username: string; password: string; }):boolean{
    if(authentication.username == "master@lemoncode.net" && authentication.password == "12345678"){
      this.userLogged = true;
      this.username = authentication.username;
      return true;
    } else {
      this.userLogged = false;
      return false;
    }

  }

  logout():void{
    this.userLogged = false;
    this.username = '';
  }

  isLogged():boolean{
    return this.userLogged;
  }

  getUserName():string{
    return this.username;
  }

}
