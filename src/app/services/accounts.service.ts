import { Injectable } from '@angular/core';
import { UserData } from '../model/user-data';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private route: Router) { }

  // accounts: UserData[] = [
  //   {id: Date.now(), email: 'daniel@email.com', password:'123'}
  // ];

  accounts: UserData[] = JSON.parse(localStorage.getItem('accounts') || '[]')

  //registration logic
  addAccount(user: UserData) {
    this.accounts.push({
      id: user.id,
      email: user.email,
      password: user.password,
    })
    localStorage.setItem('accounts', JSON.stringify(this.accounts));
    this.logAccountAdded(user.email);
    console.log(this.accounts)
  }

  logAccountAdded(userEmail: string) {
    console.log(`Account with email ${userEmail} is added!`)
  }

  //login logic
  loginAccount(emailInput: string, passwordInput: string) {
    const accountExists = this.accounts.filter((account) => account.email === emailInput)

    if (accountExists.length>0 && accountExists[0].password === passwordInput) {
      this.route.navigate(['/dashboard'])
    } else {
      console.log('Wrong password')
    }
  }
}
