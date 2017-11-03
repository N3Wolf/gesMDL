import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../services/federacao.service';
//Depreciado
//import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './federacao.component.html',
  styleUrls: ['./federacao.component.css']
})
export class FederacaoComponent implements OnInit {
  public objFederacoes: any;
  public keys: number;
  public registros: number;

  constructor(

    //Depreciado
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private federacaoService: FederacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.federacaoService.getFederacoes().subscribe(federacoes => {
      this.registros = 0;
      this.objFederacoes = federacoes;
      this.registros = this.objFederacoes.length;
    })
    //this.federacoes.count = 1 ;// = this.federacoes.length;
  }

  onEditRequest(idFederacao) {
    this.router.navigate(['/federacaoView', { id: idFederacao, isEdit: true }]);
  }

  onDeleteRequest(idFederacao, nameFederecao) {
    if (confirm("Confirma a exclusão da Federação \'" + nameFederecao + "\'?")) {
      this.federacaoService.removeFederacao(idFederacao).subscribe(data => {
        if (data.success) {
          //TODO: Mensagem
          //this.flashMessage.show('Registro removido com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
          location.reload();
        }
      })
    }
  }
}
