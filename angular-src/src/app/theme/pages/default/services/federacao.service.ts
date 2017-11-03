import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// let federacoes = [
//   { title: 'Federação 1', isActive: true },
//   { title: 'Federação 2', isActive: true },
//   { title: 'Federação 3', isActive: false },
//   { title: 'Federação 4', isActive: false },
// ];

@Injectable()
export class FederacaoService {
  federacao: any;
  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  getFederacoes() {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('federacao/list');
    //console.log('service - getFederacoes()');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .map(res => res['federacoesList']) as Observable<any[]>;;
  }

  getFederacaoById(idFederacao) {
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('federacao/view');
    //console.log('service - getFederacoes()');
    return this.http.get(ep, { headers: headers, params: { idFederacao: idFederacao } })
      .map(res => res.json());
  }

  addFederacao(federacao) {
    //return new Promise(resolve => resolve(federacoes));
    //console.log('passou aqui');
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('federacao/add');
    return this.http.post(ep, federacao, { headers: headers })
      .map(res => res.json());
  }

  removeFederacao(idFederacao) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('federacao/remove');
    //console.log(3);
    return this.http.post(ep, { idFederacao: idFederacao }, { headers: headers })
      .map(res => res.json());
  }

  updateFederacao(federacao) {
    //console.log(2);
    let headers = new Headers();
    //headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.authService.prepEndpoint('federacao/update');
    return this.http.post(ep, federacao, { headers: headers })
      .map(res => res.json());
  }
}
