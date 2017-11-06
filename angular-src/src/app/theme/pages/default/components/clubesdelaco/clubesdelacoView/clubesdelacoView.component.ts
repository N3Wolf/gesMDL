import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FederacaoService } from '../../../services/federacao.service';
import { LacadoresService } from '../../../services/lacadores.service';
import { ClubesdelacoService } from '../../../services/clubesdelaco.service';
import { LacadoresModule } from '../../lacadores/lacadores.module';
// Depreciado
// import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
//import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
//import { MyNgbDateParserFormatter } from '../../../classes/myNgbDateParserFormatter'
import { FormGroup,FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',  //'app-clubesdelacoView',
  templateUrl: './clubesdelacoView.component.html',
   encapsulation: ViewEncapsulation.None,
  //styleUrls: ['./clubesdelacoView.component.css']
})
export class ClubesdelacoViewComponent implements OnInit {
  Clubedelaco: any = {
    name: String,
    email: String,
    sede: String,
    status: Boolean,
    razaoSocial: String,
    cnpj: String,
    sigla: String,
    dataFundacao: String,
    registroSETEL: String,
    rua: String,
    numeroSala: String,
    bairro: String,
    cep: String,
    cidade: String,
    foneDDD: String,
    fone: String,
    faxDDD: String,
    fax: String,
    nomeRepresentante: String,
    cpfRepresentante: String,
    rgRepresentante: String,
    cargoRepresentante: String,
    foneDDDRepresentante: String,
    foneRepresentante: String,
    atuacao: String
  };

  qtdLacadores: number;
  public listLacadores : any[] ;


  isView: boolean;
  isInsert: boolean;
  isEdit: boolean;
  idRecord: any;


  constructor(
    //Depreciado
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private lacadoresService: LacadoresService,
    private federacaoService: FederacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private clubesdelacoService: ClubesdelacoService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    //private _script: ScriptLoaderService
  ) { }

  ngOnInit() {

    this.Clubedelaco.name = '';
    this.Clubedelaco.sede = '';
    this.Clubedelaco.email = '';
    this.Clubedelaco.status = '';
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

    if (!this.isInsert) {
      //BUSCA INFOS DO CLUBE
      this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe((result) => {
        this.Clubedelaco = result;
        //pega a data no formato do banco de dados e monta o array do componente Datepicker
        this.Clubedelaco.arrayDataFundacao = this.ngbDateParserFormatter.parse(this.Clubedelaco.dataFundacao);
      })
      //BUSCA OS LACADORES DO clube
      this.lacadoresService.getLacadorByClubeId(this.idRecord).subscribe(result => {
          //this.qtdLacadoresRegistrados = result.length;
          this.listLacadores = result;
          console.log('this.listLacadores');
          console.log(this.listLacadores);
          this.qtdLacadores = result.length;
      })

    }
  }

  onEditRequest(idClubedelaco) {
    console.log('idClubedelaco');
    console.log(idClubedelaco);
    this.router.navigate(['/clubesdelacoView', { id: idClubedelaco, isEdit: true }]);
  }


  private markFormGroupTouched(formGroup: FormGroup) {
      (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();

        if (control.controls) {
          control.controls.forEach(c => this.markFormGroupTouched(c));
        }
      });
    }

  onClubesdelacoSubmit(clubesdelacoForm: FormGroup) {
    this.markFormGroupTouched(clubesdelacoForm);
    if (!clubesdelacoForm.valid) {
        console.log("Form com erros!");
    } else {
      //Monta a data de fundação no formato para o banco de dados.
      if (this.Clubedelaco.arrayDataFundacao) {
        this.Clubedelaco.dataFundacao = new Date(this.Clubedelaco.arrayDataFundacao.year, this.Clubedelaco.arrayDataFundacao.month - 1, this.Clubedelaco.arrayDataFundacao.day);
      } else {
        this.Clubedelaco.dataFundacao = null
      }

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

      if (this.isInsert) {
        const newClubedelaco = {
          name: this.Clubedelaco.name,
          sede: this.Clubedelaco.sede,
          email: this.Clubedelaco.email,
          status: true, //this.Federacao.status,
          razaoSocial: this.Clubedelaco.razaoSocial,
          cnpj: this.Clubedelaco.cnpj,
          sigla: this.Clubedelaco.sigla,
          dataFundacao: this.Clubedelaco.dataFundacao,
          registroSETEL: this.Clubedelaco.registroSETEL,
          rua: this.Clubedelaco.rua,
          numeroSala: this.Clubedelaco.numeroSala,
          bairro: this.Clubedelaco.bairro,
          cep: this.Clubedelaco.cep,
          cidade: this.Clubedelaco.cidade,
          foneDDD: this.Clubedelaco.foneDDD,
          fone: this.Clubedelaco.fone,
          faxDDD: this.Clubedelaco.faxDDD,
          fax: this.Clubedelaco.fax,
          nomeRepresentante: this.Clubedelaco.nomeRepresentante,
          cpfRepresentante: this.Clubedelaco.cpfRepresentante,
          rgRepresentante: this.Clubedelaco.rgRepresentante,
          cargoRepresentante: this.Clubedelaco.cargoRepresentante,
          foneDDDRepresentante: this.Clubedelaco.foneDDDRepresentante,
          foneRepresentante: this.Clubedelaco.foneRepresentante,
          atuacao: this.Clubedelaco.atuacao
        }
        console.log('this.Clubedelaco');
        console.log(this.Clubedelaco);

        this.clubesdelacoService.addClubedelaco(newClubedelaco).subscribe(data => {
          if (data.success) {
            this.router.navigate(['clubesdelacoView', { id: data.id, isView: true }]);
            //TODO: Mensagem
            alert('Clube de Laço registrado com sucesso.');
          } else {
            //TODO: Mensagem
            alert('Ocorreu um erro ao tentar inserir este Clube de laço. Favor entre em contato com o suporte técnico do sistema.');
          }
        })
      } else {
        //isEdit
        this.clubesdelacoService.updateClubedelaco(this.Clubedelaco).subscribe(data => {
          if (data.success) {
            //TODO: Mensagem
            alert('Clube de Laço atualizado com sucesso.');
            window.scrollTo(0, 0);
            //this.router.navigate(['clubesdelacoView', { id: this.Clubedelaco._id, isEdit: true }]);

          } else {
            window.scrollTo(0, 0);
            //TODO: Mensagem
            alert('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema: ' + data.msg);
          }
        })
      }
    }
  }


}
