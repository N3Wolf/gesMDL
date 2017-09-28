import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../../services/federacao.service';
import { ClubesdelacoService } from '../../../services/clubesdelaco.service';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    status: Boolean
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
    private clubesdelacoService: ClubesdelacoService
  ) { }

  ngOnInit() {
    this.Clubedelaco.name = '';
    this.Clubedelaco.sede = '';
    this.Clubedelaco.email= '';
    this.Clubedelaco.status= '';

    this.route.params.subscribe((params) => {
      if (params.id) { this.idRecord = params.id; }
      this.isInsert = true ? params.isInsert : true;
      this.isEdit = true ? params.isEdit : true;
      this.isView = true ? params.isView : true;

    });

    if(!this.isInsert){
        this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe((result) => {
            this.Clubedelaco = result;
          })
      }
    }

  onClubesdelacoSubmit() {
    const newClubedelaco = {
      name: this.Clubedelaco.name,
      sede: this.Clubedelaco.sede,
      email: this.Clubedelaco.email,
      status: true //this.Federacao.status,
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

    if(this.isInsert){

      this.clubesdelacoService.addClubedelaco(newClubedelaco).subscribe(data => {
        if (data.success) {
          //console.log(data);
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
          //console.log(data);
          this.router.navigate(['clubesdelaco-view', { id: this.Clubedelaco._id, isEdit: true }]);
          this.flashMessage.show('Clube de Laço atualizado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    }

  }
}
