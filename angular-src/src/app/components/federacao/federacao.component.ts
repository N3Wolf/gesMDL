import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../services/federacao.service';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-federacao',
  templateUrl: './federacao.component.html',
  styleUrls: ['./federacao.component.css']
})
export class FederacaoComponent implements OnInit {
    public objfed :any;
    public keys: number;
    public registros: number;

  constructor(

    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private federacaoService:FederacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.federacaoService.getFederacoes().subscribe(federacoes => {
      this.registros = 0;
      var federacaoList = Object.keys(federacoes).map(function(key) { return federacoes[key]; });
      this.objfed =   federacaoList;
      //conta os registros
      for (var key in federacoes) {
        if (!federacoes.hasOwnProperty(key)) continue;
        var obj = federacoes[key];
            for (var prop in obj) {
               // skip loop if the property is from prototype
               this.registros++;
                if(!obj.hasOwnProperty(prop)) continue;
              }
      }

    })
      //this.federacoes.count = 1 ;// = this.federacoes.length;
  }

  onEditRequest(idFederacao){
       this.router.navigate(['/federacao-view', {id : idFederacao, isEdit: true }]);
      }

  onDeleteRequest(idFederacao, nameFederecao){
    if(confirm("Confirma a exclusão da Federação \'"+ nameFederecao + "\'?")) {
      this.federacaoService.removeFederacao(idFederacao).subscribe(data => {
        if(data.success){
          location.reload();
          this.flashMessage.show('Registro removido com sucesso.', {cssClass:'alert-success', timeout:5000});
          //this.router.navigate(['/federacao']);
        }
      })
    }
  }
}
