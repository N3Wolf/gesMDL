import { Component, OnInit } from '@angular/core';
import { FederacaoService } from '../../../services/federacao.service';
//Depeciado
//import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-federacao-add',
  templateUrl: './federacao-add.component.html',
  styleUrls: ['./federacao-add.component.css']
})
export class FederacaoAddComponent implements OnInit {


  constructor(
    //Depeciado
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private federacaoService: FederacaoService,
    private router: Router) { }

  ngOnInit() {
  }
};
