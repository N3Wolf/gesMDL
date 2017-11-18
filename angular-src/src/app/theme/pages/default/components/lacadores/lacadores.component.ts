import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FederacaoService } from '../../services/federacao.service';
import { ClubesdelacoService } from '../../services/clubesdelaco.service';
import { LacadoresService } from '../../services/lacadores.service';
//Depreciado
//import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../../../helpers';


@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './lacadores.component.html',
  styleUrls: ['./lacadores.component.css']
})
export class LacadoresComponent implements OnInit {
  public objLacadores: any;
  public keys: number;
  public registros: number;
  @Input() isDetail: Boolean;
  @Input() paramIdClube: string;

  constructor(

    //Depreciado
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private federacaoService: FederacaoService,
    private router: Router,
    private clubesdelacoService: ClubesdelacoService,
    private lacadoresService: LacadoresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //console.log('isDetail: ' + this.isDetail);
    //console.log('paramIdClube??: ' + this.paramIdClube['paramIdClube']);
    this.registros = 0;
    if (this.paramIdClube) {
      this.lacadoresService.getLacadorByClubeId(String(this.paramIdClube)).subscribe(lacadores => {
        this.registros = lacadores.length;
        this.objLacadores = lacadores;
        //let lacadoresList = Object.keys(lacadores).map(function(key) { return lacadores[key]; });
        //this.objLacadores = lacadoresList;

      })
    } else {
      //busca todos os lacadores
      this.lacadoresService.getLacadores().subscribe(lacadores => {
        this.registros = lacadores.length;
        //let lacadoresList = Object.keys(lacadores).map(function(key) { return lacadores[key]; });
        //this.objLacadores =   lacadoresList;
        this.objLacadores = lacadores;
        //conta os registros
        // for (var key in lacadores) {
        //   if (!lacadores.hasOwnProperty(key)) continue;
        //   var obj = lacadores[key];
        //   for (var prop in obj) {
        //      // skip loop if the property is from prototype
        //      this.registros++;
        //       if(!obj.hasOwnProperty(prop)) continue;
        //   }
        // }
      });
    }

    //this.federacoes.count = 1 ;// = this.federacoes.length;
  }

  onEditRequest(idLacador) {
    this.router.navigate(['/lacadoresView', { id: idLacador, isEdit: true }]);
  }

  onDeleteRequest(idLacador, nameLacador) {
    if (confirm("Confirma a exclusão do laçador \'" + nameLacador + "\'?")) {
      this.lacadoresService.removeLacador(idLacador).subscribe(data => {
        if (data.success) {
          //TODO: Mensagem
          alert('Registro removido com sucesso.');
          location.reload();
          //this.router.navigate(['/federacao']);
        }
      })
    }
  }
  //Ultimo bracket
}
