import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
  authToken: any;
  user: any;
  isDev: boolean;

  constructor(private http: Http) {
      this.isDev = false; // Change to false before deployment
  }

  login(email: string, password: string) {
    const user = {
      username: email,
      password: password
    }
    console.log('enviou para autenticar1');
     this.authenticateUser(user).subscribe(data => {
       let returnUser = data;
       console.log('returnUser');
       console.log(returnUser);
       return returnUser;
     });


    //
    // this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
    //   .map((response: Response) => {
    //     // login successful if there's a jwt token in the response
    //     let user = response.json();
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //   });
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
      console.log('enviou para autenticar2');
      return this.http.post(ep, user, { headers: headers })
        .map(res => res.json());
    }

    getProfile() {
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type', 'application/json');
      let ep = this.prepEndpoint('user/profile');
      let user = localStorage.getItem('user');
      return this.http.get(ep, { headers: headers, params: { user: user } })
        .map(res => res.json());
    }

    storeUserData(token, user) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('currentUser', JSON.stringify(user));
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
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
    }

    prepEndpoint(ep) {
      if (!this.isDev) {
        return ep;
      } else {
        return 'http://localhost:3000/' + ep;
      }
    }
}
