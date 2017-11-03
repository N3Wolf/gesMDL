import { Component, OnInit, Input, ViewChild } from '@angular/core';
//import { FederacaoService } from '../../../services/federacao.service';
import { ClubesdelacoService } from '../../../services/clubesdelaco.service';
import { LacadoresService } from '../../../services/lacadores.service';
//Depreciado
//import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
//import { uiSelect } from 'ui-select';
//import { ngSanitize } from 'angular-sanitize';

import { ActivatedRoute } from '@angular/router';


const now = new Date();

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './lacadoresView.component.html',
  styleUrls: ['./lacadoresView.component.css']
})
export class LacadoresViewComponent implements OnInit {
  @ViewChild('pictureInput') fileInput;
  Lacador: any = {
    _id: String,
    name: String,
    cpf: String,
    endereco: String,
    email: String,
    picture: Blob,
    status: Boolean,
    idClube: String,
    nameClube: String, // não salvar no DB
    flgIndepentente: Boolean,
    apelido: String,
    foneDDD1: String,
    fone1: String,
    foneDDD2: String,
    fone2: String,
    dataAssociacao: Date
  };
  isView: boolean;
  isInsert: boolean;
  isEdit: boolean;
  idRecord: any;
  @Input() requestIdClube
  Clubedelaco = [];

  constructor(
    //Depreciado
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    //private federacaoService: FederacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private clubesdelacoService: ClubesdelacoService,
    private lacadoresService: LacadoresService,
    private ngbDateParserFormatter: NgbDateParserFormatter

  ) { }

  ngOnInit() {
    //pega todos os parametros passados pela url
    this.route.params.subscribe((params) => {
      if (params.id) { this.idRecord = params.id; }
      this.isInsert = true ? params.isInsert : true;
      this.isEdit = true ? params.isEdit : true;
      this.isView = true ? params.isView : true;

    });

    //Se for view ou edit, busca os dados do Lacador e de todos os Clubes
    if (!this.isInsert) {
      //Edit ou View
      this.lacadoresService.getLacadorById(this.idRecord).subscribe((result) => {
        this.Lacador = result;
        //pega a data no formato do banco de dados e monta o array do componente Datepicker
        if (this.Lacador.dataAssociacao){
          this.Lacador.arrayDataAssociacao = this.ngbDateParserFormatter.parse(this.Lacador.dataAssociacao);
        }
        console.log('this.Lacador');
        console.log(this.Lacador);
        // console.log('this.Lacador.idClube');
        // console.log(this.Lacador.idClube);
        if (this.isEdit) {
          this.clubesdelacoService.getClubesdelaco().subscribe((clubesdelaco) => {
            this.Clubedelaco = clubesdelaco;
            console.log('Edit: clubesdelaco');
            console.log(clubesdelaco);
          });
        } else {
          this.clubesdelacoService.getClubedelacoById(this.Lacador.idClube).subscribe((clubeDoLacador) => {
            this.Clubedelaco = clubeDoLacador;
            //Se não encontrou um clube, significa que ele foi removido do sistema. Então se torna um Laçador Independente
            this.Lacador.nameClube = clubeDoLacador ? clubeDoLacador['name'] : "Laçador Independente (Clube removido do sistema)";
            console.log('View: clubeDoLacador');
            console.log(clubeDoLacador);
            //console.log(this.Lacador.nameClube);
          })
        }
      })

    } else {
      //Insert
      this.Lacador.name = null;
      this.Lacador.cpf = null;
      this.Lacador.endereco = null;
      this.Lacador.email = null;
      this.Lacador.picture = null;
      this.Lacador.status = null;
      this.Lacador.apelido = null;
      this.Lacador.foneDDD1 = null;
      this.Lacador.fone1 = null;
      this.Lacador.foneDDD2 = null;
      this.Lacador.fone2 = null;
      this.Lacador.dataAssociacao = null;

      if (!this.requestIdClube) {
        // permite selecionar um clube
        this.Lacador.idClube = null;
        this.Lacador.flgIndepentente = null;
        this.clubesdelacoService.getClubesdelaco().subscribe((clubesdelaco) => {
          this.Clubedelaco = clubesdelaco;
          console.log('this.Clubedelaco');
          console.log(this.Clubedelaco);
        })
      } else {
        //aqui a tela foi chamada para inserção em um clube específico
        this.Lacador.idClube = this.requestIdClube;
        this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe((result) => {
          this.Clubedelaco = result;
        })
      }
    }
    console.log(this.Lacador);
  }

  onEditRequest(idLacador) {
    this.router.navigate(['/lacadoresView', { id: idLacador, isEdit: true }]);
  }

  onUploadPicture() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      // this.projectService.upload(formData, this.project.id).subscribe(res => {
      //   // do stuff w/my uploaded file
      // });
    }
  }


  onLacadoresSubmit() {
    //Monta a data de fundação no formato para o banco de dados.
    this.Lacador.dataAssociacao = new Date(this.Lacador.arrayDataAssociacao.year, this.Lacador.arrayDataAssociacao.month - 1, this.Lacador.arrayDataAssociacao.day);
    const newLacador = {
      name: this.Lacador.name,
      cpf: this.Lacador.cpf,
      endereco: this.Lacador.endereco,
      email: this.Lacador.email,
      picture: this.Lacador.picture,
      idClube: this.Lacador.idClube,
      status: true, //this.Federacao.status,
      apelido: this.Lacador.apelido,
      foneDDD1: this.Lacador.foneDDD1,
      fone1: this.Lacador.fone1,
      foneDDD2: this.Lacador.foneDDD2,
      fone2: this.Lacador.fone2,
      dataAssociacao: this.Lacador.dataAssociacao

    }
    //console.log(newLacador);
    //console.log('newLacador');

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

    console.log('newLacador');
    console.log(newLacador);

    if (this.isInsert) {
      this.lacadoresService.addLacador(newLacador).subscribe(data => {
        if (data.success) {
          //console.log(data);
          this.router.navigate(['lacadoresView', { id: data.id, isView: true }]);
          //TODO: Mensagem
          //this.flashMessage.show('Laçador registrado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          //TODO: Mensagem
          //this.flashMessage.show('Ocorreu um erro ao tentar inserir este Laçador. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    } else {
      //isEdit
      this.lacadoresService.updateLacador(this.Lacador).subscribe(data => {
        if (data.success) {
          console.log(data);
          //this.router.navigate(['lacadoresView', { id: this.Lacador._id, isEdit: true }]);
          //TODO: Mensagem
          //this.flashMessage.show('Laçador atualizado com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
          window.scrollTo(0, 0);
        } else {
          //TODO: Mensagem
          //this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 5000 });
          window.scrollTo(0, 0);
        }
      })
    }

  }
}
