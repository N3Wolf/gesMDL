import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../services/federacao.service';
import { ClubesdelacoService } from '../../services/clubesdelaco.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubesdelaco',
  templateUrl: './clubesdelaco.component.html',
  styleUrls: ['./clubesdelaco.component.css']
})
export class ClubesdelacoComponent implements OnInit {
  public ClubesList :any;
  public keys: number;
  public registros: number;

constructor(

  private validateService: ValidateService,
  private flashMessage:FlashMessagesService,
  private federacaoService:FederacaoService,
  private router: Router,
  private clubesdelacoService: ClubesdelacoService
) { }

ngOnInit() {
  this.clubesdelacoService.getClubesdelaco().subscribe(clubesdelaco => {
    this.ClubesList = clubesdelaco;
    console.log('clubesdelaco');
    console.log(clubesdelaco);

    this.registros = clubesdelaco.length;
    // var clubesdelacoList = Object.keys(clubesdelaco).map(function(key) { return clubesdelaco[key]; });
    // this.ClubesList =   clubesdelacoList;
    // //conta os registros
    // for (var key in clubesdelaco) {
    //   if (!clubesdelaco.hasOwnProperty(key)) continue;
    //   var obj = clubesdelaco[key];
    //       for (var prop in obj) {
    //          // skip loop if the property is from prototype
    //          this.registros++;
    //           if(!obj.hasOwnProperty(prop)) continue;
    //         }
    // }

  })
    //this.federacoes.count = 1 ;// = this.federacoes.length;
}

onEditRequest(idClubedelaco){
     this.router.navigate(['/clubesdelaco-view', {id : idClubedelaco, isEdit: true }]);
    }

onDeleteRequest(idClubedelaco, nameClubedelaco){
  if(confirm("Confirma a exclusão do clube \'"+ nameClubedelaco + "\'?")) {
    this.clubesdelacoService.removeClubedelaco(idClubedelaco).subscribe(data => {
      if(data.success){
        location.reload();
        this.flashMessage.show('Registro removido com sucesso.', {cssClass:'alert-success', timeout:5000});
        //this.router.navigate(['/federacao']);
      }
    })
  }
}

//Ultimo bracket
}
