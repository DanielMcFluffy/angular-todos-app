import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements DoCheck {
  constructor(private authService: AuthService){}

  hasToken?: boolean

  //check if token exists each time
  ngDoCheck(): void {
    this.hasToken = this.authService.isLoggedIn()
    
  }


  getRouterLink(): string {
    return this.hasToken ? '/login' : '/register';
  }

  getLinkText(): string {
    return this.hasToken ? 'Logout' : 'Register';
  }

  handleLogout(): void {
    if (this.hasToken) {
      this.authService.removeToken();
      this.hasToken = false;
    }
  }

  getDashboardOrLoginLink() {
    return this.hasToken ? '/dashboard' : '/login';
  }

}
