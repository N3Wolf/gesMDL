import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { appOutputMessages } from '../../../../../../shared/appmessages';
import { UsersService } from '../../../services/user.service';
import { FormGroup,FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ClubesdelacoService } from '../../../services/clubesdelaco.service';
//Depreciado
//import { ValidateService } from '../../../services/validate.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const now = new Date();

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './usersView.component.html',
  styleUrls: ['./usersView.component.css']
})
export class UsersViewComponent implements OnInit {
  @ViewChild('pictureInput') fileInput;
  User: any = {
    _id: String,
    name: String,
    email: String,
    username: String,
    password: String,
    status: Boolean,
    picture: Blob,
    cpf: String,
    foneDDD1: String,
    fone1: String,
    dataCadastro: Date
  };
  isView: boolean;
  isInsert: boolean;
  isEdit: boolean;
  idRecord: any;
  //userForm: FormGroup;

  constructor(
    //Depreciado
    //private validateService: ValidateService,


    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,


  ) { }

  ngOnInit() {

    //pega todos os parametros passados pela url
    this.route.params.subscribe((params) => {
      if (params.id) { this.idRecord = params.id; }
      this.isInsert = true ? params.isInsert : true;
      this.isEdit = true ? params.isEdit : true;
      this.isView = true ? params.isView : true;

    });

    console.log('this.User');
    console.log(this.User);

    //Se for view ou edit, busca os dados do Usuário e de todos os Clubes
    if (!this.isInsert) {
      //Edit ou View
      this.usersService.getUserById(this.idRecord).subscribe((result) => {
        this.User = result;
        //pega a data no formato do banco de dados e monta o array do componente Datepicker
        // if (this.User.dataCadastro){
        //   this.User.arrayDataAssociacao = this.ngbDateParserFormatter.parse(this.User.dataAssociacao);
        // }
        console.log('this.User');
        console.log(this.User);
        // console.log('this.Lacador.idClube');
        // console.log(this.Lacador.idClube);
      })

    } else {
      //Insert
      this.User.name = null;
      this.User.email = null;
      this.User.username = null;
      this.User.password = null;
      this.User.status = null;
      this.User.picture = null;
      this.User.cpf = null;
      this.User.foneDDD1 = null;
      this.User.fone1 = null;
      //this.User.dataAssociacao = now.getDate();
    }
    console.log(this.User);
  }

  onEditRequest(idUser) {
    this.router.navigate(['/usersView', { id: idUser, isEdit: true }]);
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

  private markFormGroupTouched(formGroup: FormGroup) {
      (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();

        if (control.controls) {
          control.controls.forEach(c => this.markFormGroupTouched(c));
        }
      });
    }

  // validateAllFormFields(formGroup: any) {         //{1}
  //   Object.keys(formGroup.controls).forEach(field => {  //{2}
  //     const control = formGroup.get(field);             //{3}
  //     if (control instanceof FormControl) {             //{4}
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {        //{5}
  //       this.validateAllFormFields(control);            //{6}
  //     }
  //   });
  // }

  onUsersSubmit(userForm: FormGroup) {
    this.markFormGroupTouched(userForm);
    if (!userForm.valid) {
        console.log("Form com erros!");
    } else {
    //Monta a data de fundação no formato para o banco de dados.
    //this.User.dataCadastro = new Date(this.User.arrayDataAssociacao.year, this.User.arrayDataAssociacao.month - 1, this.User.arrayDataAssociacao.day);
      const newUser = {
        name: this.User.name,
        email: this.User.email,
        username: this.User.username,
        password: this.User.password,
        //TODO: Campo status em tela
        status: true,
        picture: this.User.picture,
        cpf: this.User.cpf,
        foneDDD1: this.User.foneDDD1,
        fone1: this.User.fone1,
        dataCadastro: this.User.dataCadastro

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

      console.log('newUser');
      console.log(newUser);

      if (this.isInsert) {
        this.usersService.addUser(newUser).subscribe(data => {
          if (data.success) {
            console.log(data);
            //TODO: Mensagem
            alert('Usuário registrado com sucesso.');
          } else {
            //TODO: Mensagem
            alert('Ocorreu um erro ao tentar inserir este Laçador. Favor entre em contato com o suporte técnico do sistema.' + data.msg);
          }
          this.router.navigate(['usersView', { id: data.id, isView: true }]);
        })
      } else {
        //isEdit
        this.usersService.updateUser(this.User).subscribe(data => {
          if (data.success) {
            console.log(data);
            //TODO: Mensagem
            alert('Usuário atualizado com sucesso.');
            window.scrollTo(0, 0);
          } else {
            //TODO: Mensagem
            alert('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.');
            window.scrollTo(0, 0);
          }
        })
      }
    }
  }
}
