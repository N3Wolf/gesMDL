import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsergroupService {
  usergroup: any;
  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  getUsergroups() {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('usergroup/list');
    //console.log('service - getUsergroups()');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .map(res => res['usergroupList']) as Observable<any[]>;;
  }

  getUsergroupById(idUsergroup) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('usergroup/view');
    //console.log('service - getUsergroups()');
    return this.http.get(ep, { headers: headers, params: { idUsergroup: idUsergroup } })
      .map(res => res.json())
      .map(res => res['usergroup']) as Observable<any[]>;;;
  }


  addUsergroup(usergroup) {
    //return new Promise(resolve => resolve(usergroup));
    //console.log('passou aqui');
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('usergroup/add');
    return this.http.post(ep, usergroup, { headers: headers })
      .map(res => res.json());
  }

  removeUsergroup(idUsergroup) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('usergroup/remove');
    //console.log(3);
    return this.http.post(ep, { idUsergroup: idUsergroup }, { headers: headers })
      .map(res => res.json());
  }

  updateUsergroup(usergroup) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('usergroup/update');
    return this.http.post(ep, usergroup, { headers: headers })
      .map(res => res.json());
  }

}
