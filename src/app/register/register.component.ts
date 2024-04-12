import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private accountsService: AccountsService, private router: Router) {}

  email: string ='';
  password: string ='';

  accountRegistered = false;

  registerAccount() {
    this.accountsService.addAccount({
      id: Date.now(),
      email: this.email,
      password: this.password
    })

    //clear the forms after registration
    this.email='';
    this.password='';
    this.accountRegistered = true;
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 1000)
  }

}
