import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private accountsService: AccountsService, private authService: AuthService) {}

  loginEmail: string = '';
  loginPassword: string = '';
  
  errorMessage: boolean = false;

  loginAccount() {

    const accountExists = this.accountsService.accounts.filter((account) => account.email === this.loginEmail)


    if (accountExists.length > 0 && accountExists[0].password === this.loginPassword) {
      this.accountsService.loginAccount(this.loginEmail, this.loginPassword);
      this.authService.setToken('1234');
    } else {
      this.errorMessage = true;
    }
  }

}
