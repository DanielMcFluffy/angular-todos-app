import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  // Call this method to set the token when the user logs in
  public setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Call this method to remove the token when the user logs out
  public removeToken(): void {
    localStorage.removeItem('authToken');
  }

  // Call this method to check if the user is logged in
  public isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }
}