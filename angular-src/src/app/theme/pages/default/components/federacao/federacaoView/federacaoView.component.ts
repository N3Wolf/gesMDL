import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../../services/federacao.service';
//Depreciado
//import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
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
    //Depreciado
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

  onEditRequest(idFederacao) {
    this.router.navigate(['/federacaoView', { id: idFederacao, isEdit: true }]);
  }


  private markFormGroupTouched(formGroup: FormGroup) {
      (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();

        if (control.controls) {
          control.controls.forEach(c => this.markFormGroupTouched(c));
        }
      });
    }


  onFederacaoSubmit(federacaoForm: FormGroup) {
    this.markFormGroupTouched(federacaoForm);
    if (!federacaoForm.valid) {
        console.log("Form com erros!");
    } else {
      const newFederacao = {
        name: this.Federacao.name,
        cnpj: this.Federacao.cnpj,
        razaosocial: this.Federacao.razaosocial,
        status: true,//this.Federacao.status,
        email: this.Federacao.email
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
        this.federacaoService.addFederacao(newFederacao).subscribe(data => {
          if (data.success) {
            //console.log(data);
            this.router.navigate(['federacaoView', { id: data.id, isView: true }]);
            //TODO: Mensagem
            alert('Federação registrada com sucesso.');
          } else {
            //TODO: Mensagem
            alert('Ocorreu um erro ao tentar inserir este registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg);
          }
        })
      } else {
        //isEdit
        this.federacaoService.updateFederacao(this.Federacao).subscribe(data => {
          if (data.success) {
            console.log(data);
            alert("Registro alterado com sucesso");
            this.router.navigate(['federacaoView', { id: this.Federacao._id, isEdit: true }]);
            //TODO: Mensagem
            //this.flashMessage.show('Federação atualizada com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
          } else {
            //TODO: Mensagem
            alert('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema:  ' + data.msg);
          }
        })
      }
    }
  }
}
