import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuPrivateComponent } from './layout/menu-private/menu-private.component';
import { SearchComponent } from './utils/search/search.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent,
    SearchComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    MenuPrivateComponent,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){}

  isLogged():boolean{
    return this.authService.isLogged();
  }

  getUserName():string{
    return this.authService.getUserName();
  }
  
  logout():void{
    this.authService.logout();
  }
  
}
