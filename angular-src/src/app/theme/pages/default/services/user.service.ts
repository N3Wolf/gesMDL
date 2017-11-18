import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  user: any;
  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  getUsers() {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('user/list');
    //console.log('service - getuseres()');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .map(res => res['userList']) as Observable<any[]>;;
  }

  getUserById(idUser) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('user/view');
    //console.log('service - getuseres()');
    return this.http.get(ep, { headers: headers, params: { idUser: idUser } })
      .map(res => res.json())
      .map(res => res['user']) as Observable<any[]>;;;
  }

  getUserByUsername(idClube) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('user/viewByUsername');

    return this.http.get(ep, { headers: headers, params: { idClube: idClube } })
      .map(res => res.json())
      .map(res => res['userList']) as Observable<any[]>;
  }

  addUser(user) {
    //return new Promise(resolve => resolve(user));
    console.log('passou aqui');
    console.log(user);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('user/add');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  removeUser(idUser) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('user/remove');
    //console.log(3);
    return this.http.post(ep, { idUser: idUser }, { headers: headers })
      .map(res => res.json());
  }

  updateUser(user) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('user/update');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  // setUserIndependenteByClube(idClubedelaco) {
  //   //console.log(2);
  //   let headers = new Headers();
  //   //headers.append('Authorization', this.authService.authToken);
  //   headers.append('Content-Type', 'application/json');
  //   let ep = this.authService.prepEndpoint('user/setUserIndependenteByClube');
  //   return this.http.post(ep, { idClubedelaco: idClubedelaco }, { headers: headers })
  //     .map(res => res.json());
  // }


}
