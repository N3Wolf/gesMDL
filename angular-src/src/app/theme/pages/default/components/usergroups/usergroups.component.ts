import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { UsergroupService } from '../../services/usergroups.service';
import { UserService } from '../../services/user.service';
//Depreciado
//import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../../../helpers';


@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.css']
})
export class UsergroupsComponent implements OnInit {
  public objUsergroups: any;
  public keys: number;
  public registros: number;
   @Input() isDetail: Boolean;
   @Input() paramIdUsergroup: string;

  constructor(

    //Depreciado
    //private validateService: ValidateService,
    private router: Router,
    private userService: UserService,
    private usergroupsService: UsergroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.registros = 0;
     if (this.paramIdUsergroup) {
    //   this.usergroupsService.getUsergroupByClubeId(String(this.paramIdClube)).subscribe(usergroups => {
    //     this.registros = usergroups.length;
    //     this.objUsergroups = usergroups;
    //  })
    } else {
      //busca todos os usergroups
      this.usergroupsService.getUsergroups().subscribe(usergroups => {
        this.registros = usergroups.length;
        //let usergroupsList = Object.keys(usergroups).map(function(key) { return usergroups[key]; });
        //this.objUsergroups =   usergroupsList;
        this.objUsergroups = usergroups;
        //conta os registros
        // for (var key in usergroups) {
        //   if (!usergroups.hasOwnProperty(key)) continue;
        //   var obj = usergroups[key];
        //   for (var prop in obj) {
        //      // skip loop if the property is from prototype
        //      this.registros++;
        //       if(!obj.hasOwnProperty(prop)) continue;
        //   }
        // }
      });
    }
  }

  onEditRequest(idUsergroup) {
    this.router.navigate(['/usergroupsView', { id: idUsergroup, isEdit: true }]);
  }

  onDeleteRequest(idUsergroup, nameUsergroup) {
    if (confirm("Confirma a exclusão do laçador \'" + nameUsergroup + "\'?")) {
      this.usergroupsService.removeUsergroup(idUsergroup).subscribe(data => {
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
