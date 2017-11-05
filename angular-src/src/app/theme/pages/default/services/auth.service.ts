import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: boolean;

  constructor(private http: Http) {
    this.isDev = true; // Change to false before deployment
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('user/register');

    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }


  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('user/authenticate');
    console.log('enviou para autenticar');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('user/view');
    let user = localStorage.getItem('user');
    return this.http.get(ep, { headers: headers, params: { user: user } })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

  prepEndpoint(ep) {
    if (!this.isDev) {
      return ep;
    } else {
      return 'http://localhost:3000/' + ep;
    }
  }
}
