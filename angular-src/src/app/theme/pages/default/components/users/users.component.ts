import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
//Depreciado
//import { ValidateService } from '../../services/validate.service';
import { UsersService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../../../helpers';


@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public objUsers: any;
  public registros: number;
  // @Input() isDetail: Boolean;
  // @Input() paramIdClube: string;

  constructor(

    //Depreciado
    //private validateService: ValidateService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.registros = 0;
    this.usersService.getUsers().subscribe(users => {
      this.registros = users.length;
      this.objUsers = users;
    });
  }

  onEditRequest(idUser) {
    this.router.navigate(['/usersView', { id: idUser, isEdit: true }]);
  }

  onDeleteRequest(idUser, nameUser) {
    if (confirm("Confirma a exclusão do Usuário \'" + nameUser + "\'?")) {
      this.usersService.removeUser(idUser).subscribe(data => {
        if (data.success) {
          //TODO: Mensagem 
          alert('Registro removido com sucesso.');
          location.reload();

        }
      })
    }
  }
  //Ultimo bracket
}
