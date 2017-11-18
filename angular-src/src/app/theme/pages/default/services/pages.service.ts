import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagesService {
  page: any;
  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  getPages() {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('page/list');
    //console.log('service - getPages()');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .map(res => res['pageList']) as Observable<any[]>;;
  }

  getPageById(idPage) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('page/view');
    //console.log('service - getPages()');
    return this.http.get(ep, { headers: headers, params: { idPage: idPage } })
      .map(res => res.json())
      .map(res => res['page']) as Observable<any[]>;;;
  }

  getPageByUserGroupId(idUserGroup) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('page/listByUserGroupId');

    return this.http.get(ep, { headers: headers, params: { idUserGroup: idUserGroup } })
      .map(res => res.json())
      .map(res => res['pageList']) as Observable<any[]>;
  }

  addPage(page) {
    //return new Promise(resolve => resolve(page));
    //console.log('passou aqui');
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('page/add');
    return this.http.post(ep, page, { headers: headers })
      .map(res => res.json());
  }

  removePage(idPage) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('page/remove');
    //console.log(3);
    return this.http.post(ep, { idPage: idPage }, { headers: headers })
      .map(res => res.json());
  }

  updatePage(page) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('page/update');
    return this.http.post(ep, page, { headers: headers })
      .map(res => res.json());
  }

}
