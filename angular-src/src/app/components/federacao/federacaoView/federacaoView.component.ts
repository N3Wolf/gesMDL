import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../../services/federacao.service';
//Depeciado
//import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-federacaoView',
  templateUrl: './federacaoView.component.html',
  styleUrls: ['./federacaoView.component.css']
})
export class FederacaoViewComponent implements OnInit {
  Federacao = {
    _id: String,
    name: String,
    razaosocial: String,
    cnpj: String,
    status: Boolean,
    email: String
  };
  isView: boolean;
  isInsert: boolean;
  isEdit: boolean;
  idRecord: any;


  constructor(
    //Depeciado
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private federacaoService: FederacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      if (params.id) { this.idRecord = params.id; }
      this.isInsert = true ? params.isInsert : true;
      this.isEdit = true ? params.isEdit : true;
      this.isView = true ? params.isView : true;

    });

    if (!this.isInsert) {
      this.federacaoService.getFederacaoById(this.idRecord).subscribe((result) => {
        this.Federacao = result.federacao;
      })
    } else {
      this.Federacao.name = null;
      this.Federacao.razaosocial = null;
      this.Federacao.status = null;
      this.Federacao.cnpj = null;
      this.Federacao.email = null;
    }
  }

  onFederacaoSubmit() {
    const newFederacao = {
      name: this.Federacao.name,
      cnpj: this.Federacao.cnpj,
      razaosocial: this.Federacao.razaosocial,
      status: true,//this.Federacao.status,
      email: this.Federacao.email
    }

    // Required Fields
  
    // Register user

    if (this.isInsert) {
      this.federacaoService.addFederacao(newFederacao).subscribe(data => {
        if (data.success) {
          //console.log(data);
          this.router.navigate(['federacaoView', { id: data.id, isView: true }]);
          this.flashMessage.show('Federação registrada com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Ocorreu um erro ao tentar inserir este registro. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    } else {
      //isEdit
      this.federacaoService.updateFederacao(this.Federacao).subscribe(data => {
        if (data.success) {
          //console.log(data);
          this.router.navigate(['federacaoView', { id: this.Federacao._id, isEdit: true }]);
          this.flashMessage.show('Federação atualizada com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    }

  }
}
