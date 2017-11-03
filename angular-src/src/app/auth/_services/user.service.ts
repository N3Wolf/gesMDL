import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { AuthenticationService } from "./authentication.service";

import { User } from "../_models/index";

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  verify() {
    return this.http.get('/user/verify', this.jwt()).map((response: Response) => response.json());
  }

  forgotPassword(email: string) {
    return this.http.post('/api/forgot-password', JSON.stringify({ email }), this.jwt()).map((response: Response) => response.json());
  }

  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
