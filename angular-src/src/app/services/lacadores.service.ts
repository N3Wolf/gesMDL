import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LacadoresService {
  lacador: any;
  constructor(
    private authService: AuthService,
    private http:Http
  ) { }

  getLacadores(){
     let headers = new Headers();
     //headers.append('Authorization', this.authService.authToken);
     headers.append('Content-Type','application/json');
     let ep = this.authService.prepEndpoint('lacador/list');
     //console.log('service - getlacadores()');
     return this.http.get(ep,{headers: headers})
       .map(res => res.json())
       .map(res => res['lacadorList']) as Observable <any[]>;;
   }

   getLacadorById(idLacador){
     let headers = new Headers();
     //headers.append('Authorization', this.authService.authToken);
     headers.append('Content-Type','application/json');
     let ep = this.authService.prepEndpoint('lacador/view');
     //console.log('service - getlacadores()');
     return this.http.get(ep,{headers: headers, params: {idLacador: idLacador}})
       .map(res => res.json())
       .map(res => res['lacador']) as Observable <any[]>;;;
   }

   getLacadorByClubeId(idClube){
     let headers = new Headers();
     //headers.append('Authorization', this.authService.authToken);
     headers.append('Content-Type','application/json');
     let ep = this.authService.prepEndpoint('lacador/listByClubeId');

     return this.http.get(ep,{headers: headers, params: {idClube: idClube}})
       .map(res => res.json())
       .map(res => res['lacadorList']) as Observable <any[]>;
   }

  addLacador(lacador){
      //return new Promise(resolve => resolve(lacador));
      //console.log('passou aqui');
      let headers = new Headers();
      //headers.append('Authorization', this.authService.authToken);
      headers.append('Content-Type','application/json');
      let ep = this.authService.prepEndpoint('lacador/add');
      return this.http.post(ep,lacador,{headers: headers})
        .map(res => res.json());
  }

  removeLacador(idLacador){
      //console.log(2);
      let headers = new Headers();
      //headers.append('Authorization', this.authService.authToken);
      headers.append('Content-Type','application/json');
      let ep = this.authService.prepEndpoint('lacador/remove');
      //console.log(3);
      return this.http.post(ep,{idLacador:idLacador},{headers: headers})
        .map(res => res.json());
  }

  updateLacador(lacador){
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('lacador/update');
    return this.http.post(ep,lacador,{headers: headers})
      .map(res => res.json());
  }

  setLacadorIndependenteByClube(idClubedelaco){
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('lacador/setLacadorIndependenteByClube');
    return this.http.post(ep,{idClubedelaco:idClubedelaco},{headers: headers})
      .map(res => res.json());
  }

  setLacadorIndependenteById(idLacador){
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('lacador/setLacadorIndependenteById');
    return this.http.post(ep,{idLacador:idLacador},{headers: headers})
      .map(res => res.json());
  }
}
