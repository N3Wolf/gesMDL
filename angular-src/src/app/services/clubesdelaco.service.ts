import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClubesdelacoService {
  clubedelaco: any;
  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  getClubesdelaco() {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('clubedelaco/list');
    //console.log('service - getClubedelaco()');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .map(res => res['clubedelacoList']) as Observable<any[]>;
  }

  getClubedelacoById(idClubedelaco) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('clubedelaco/view');
    console.log('service - getClubedelaco()');
    console.log(idClubedelaco);
    return this.http.get(ep, { headers: headers, params: { id: idClubedelaco } })
      .map(res => res.json())
      .map(res => res['clubedelaco']) as Observable<any[]>;
  }

  addClubedelaco(clubedelaco) {
    //return new Promise(resolve => resolve(clubedelaco));
    //console.log('passou aqui');
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('clubedelaco/add');
    return this.http.post(ep, clubedelaco, { headers: headers })
      .map(res => res.json());
  }

  removeClubedelaco(idClubedelaco) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');

    let ep = this.authService.prepEndpoint('clubedelaco/remove');
    //console.log(3);
    return this.http.post(ep, { idClubedelaco: idClubedelaco }, { headers: headers })
      .map(res => res.json());
  }

  updateClubedelaco(clubedelaco) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('clubedelaco/update');
    return this.http.post(ep, clubedelaco, { headers: headers })
      .map(res => res.json());
  }
}
