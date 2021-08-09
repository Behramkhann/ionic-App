/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = true;
  private _userId = '2';
  constructor() {}

  get userId() {
    return this._userId;
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  logIn() {
    this._userIsAuthenticated = true;
  }
  logOut() {
    this._userIsAuthenticated = false;
  }
}
