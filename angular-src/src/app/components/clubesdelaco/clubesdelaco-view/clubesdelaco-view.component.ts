import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../../services/federacao.service';
import { ClubesdelacoService } from '../../../services/clubesdelaco.service';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
//import { MyNgbDateParserFormatter } from '../../../classes/myNgbDateParserFormatter'

@Component({
  selector: 'app-clubesdelaco-view',
  templateUrl: './clubesdelaco-view.component.html',
  styleUrls: ['./clubesdelaco-view.component.css']
})
export class ClubesdelacoViewComponent implements OnInit {
  Clubedelaco: any = {
    name: String,
    email: String,
    sede: String,
    status: Boolean,
    razaoSocial:  String,
    cnpj:  String,
    sigla:  String,
    dataFundacao:  String,
    registroSETEL:  String ,
    rua:  String ,
    numeroSala:  String ,
    bairro:  String ,
    cep:  String ,
    cidade:  String ,
    foneDDD:  String ,
    fone:  String ,
    faxDDD:  String ,
    fax:  String ,
    nomeRepresentante:  String ,
    cpfRepresentante:  String ,
    rgRepresentante:  String ,
    cargoRepresentante:  String ,
    foneDDDRepresentante:  String ,
    foneRepresentante:  String ,
    atuacao:  String
  };


  isView: boolean;
  isInsert: boolean;
  isEdit: boolean;
  idRecord: any;


  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private federacaoService: FederacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private clubesdelacoService: ClubesdelacoService,
    private ngbDateParserFormatter : NgbDateParserFormatter,
  ) { }

  ngOnInit() {

    this.Clubedelaco.name = '';
    this.Clubedelaco.sede = '';
    this.Clubedelaco.email= '';
    this.Clubedelaco.status= '';
    this.Clubedelaco.razaoSocial = '';
    this.Clubedelaco.cnpj = '';
    this.Clubedelaco.sigla = '';
    this.Clubedelaco.dataFundacao = '';
    this.Clubedelaco.registroSETEL = '';
    this.Clubedelaco.rua = '';
    this.Clubedelaco.numeroSala = '';
    this.Clubedelaco.bairro = '';
    this.Clubedelaco.cep = '';
    this.Clubedelaco.cidade = '';
    this.Clubedelaco.foneDDD = '';
    this.Clubedelaco.fone = '';
    this.Clubedelaco.faxDDD = '';
    this.Clubedelaco.fax = '';
    this.Clubedelaco.nomeRepresentante = '';
    this.Clubedelaco.cpfRepresentante = '';
    this.Clubedelaco.rgRepresentante = '';
    this.Clubedelaco.cargoRepresentante = '';
    this.Clubedelaco.foneDDDRepresentante = '';
    this.Clubedelaco.foneRepresentante = '';
    this.Clubedelaco.atuacao = '';

    this.route.params.subscribe((params) => {
      if (params.id) { this.idRecord = params.id; }
      this.isInsert = true ? params.isInsert : true;
      this.isEdit = true ? params.isEdit : true;
      this.isView = true ? params.isView : true;

    });

    if(!this.isInsert){
        this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe((result) => {
            this.Clubedelaco = result;
            //pega a data no formato do banco de dados e monta o array do componente Datepicker
            this.Clubedelaco.arrayDataFundacao = this.ngbDateParserFormatter.parse(this.Clubedelaco.dataFundacao);
          })
      }
    }

  onClubesdelacoSubmit() {
    //Monta a data de fundação no formato para o banco de dados.
    if (this.Clubedelaco.arrayDataFundacao){
      this.Clubedelaco.dataFundacao = new Date (this.Clubedelaco.arrayDataFundacao.year, this.Clubedelaco.arrayDataFundacao.month-1, this.Clubedelaco.arrayDataFundacao.day);
    } else {
      this.Clubedelaco.dataFundacao = null
    }
    const newClubedelaco = {
      name: this.Clubedelaco.name,
      sede: this.Clubedelaco.sede,
      email: this.Clubedelaco.email,
      status: true, //this.Federacao.status,
      razaoSocial: this.Clubedelaco.razaoSocial,
      cnpj: this.Clubedelaco.cnpj,
      sigla : this.Clubedelaco.sigla,
      dataFundacao : this.Clubedelaco.dataFundacao,
      registroSETEL: this.Clubedelaco.registroSETEL,
      rua : this.Clubedelaco.rua,
      numeroSala : this.Clubedelaco.numeroSala,
      bairro : this.Clubedelaco.bairro,
      cep : this.Clubedelaco.cep,
      cidade : this.Clubedelaco.cidade,
      foneDDD : this.Clubedelaco.foneDDD,
      fone : this.Clubedelaco.fone,
      faxDDD : this.Clubedelaco.faxDDD,
      fax : this.Clubedelaco.fax,
      nomeRepresentante : this.Clubedelaco.nomeRepresentante,
      cpfRepresentante : this.Clubedelaco.cpfRepresentante,
      rgRepresentante : this.Clubedelaco.rgRepresentante,
      cargoRepresentante : this.Clubedelaco.cargoRepresentante,
      foneDDDRepresentante : this.Clubedelaco.foneDDDRepresentante,
      foneRepresentante : this.Clubedelaco.foneRepresentante,
      atuacao : this.Clubedelaco.atuacao
    }
    console.log('this.Clubedelaco');
    console.log(this.Clubedelaco);

    // Required Fields
    //  if(!this.validateService.validateFederacao(federacao)){
    //    this.flashMessage.show('Para continuar é necessário preencher todos os campos', {cssClass:'alert-danger', timeout:3000});
    //    return false;
    //  }
    //
    //   // Validar o email
    //   if(!this.validateService.validateEmail(user.email)){
    //     this.flashMessage.show('Para continuar é necessário informar um e-mail válido', {cssClass:'alert-danger', timeout:3000});
    //     return false;
    //   }
    //

    // Register user

    if(this.isInsert){

      this.clubesdelacoService.addClubedelaco(newClubedelaco).subscribe(data => {
        if (data.success) {
          this.router.navigate(['clubesdelaco-view', { id: data.id, isView: true }]);
          this.flashMessage.show('Clube de Laço registrado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Ocorreu um erro ao tentar inserir este Clube de laço. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    } else {
      //isEdit
      this.clubesdelacoService.updateClubedelaco(this.Clubedelaco).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Clube de Laço atualizado com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
          window.scrollTo(0,0);
          //this.router.navigate(['clubesdelaco-view', { id: this.Clubedelaco._id, isEdit: true }]);

        } else {
          this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    }

  }
}
