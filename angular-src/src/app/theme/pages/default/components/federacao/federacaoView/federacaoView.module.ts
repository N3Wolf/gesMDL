import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
import { FederacaoViewComponent } from './federacaoView.component';
import {  Validators, ReactiveFormsModule  } from '@angular/forms';
//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../../services/auth.service';
//import { FederacaoService } from '../../../services/federacao.service';
import { ClubesdelacoService } from '../../../services/clubesdelaco.service';
import { LacadoresService } from '../../../services/lacadores.service';
import { FederacaoService } from '../../../services/federacao.service';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MyNgbDateParserFormatter } from '../../../../../../classes/myNgbDateParserFormatter';
import { DatepickerConfigComponent } from '../../datepicker-config/datepicker-config.component';

//import { SharedModule } from '../../../components/sharedModule.module';

const routes: Routes = [
  {
    "path": "",
    "component": DefaultComponent,
    "children": [
      {
        "path": "",
        "component": FederacaoViewComponent
      }
    ]
  }
];
@NgModule({
imports: [
  //  BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    NgbModule.forRoot()
  ], providers: [
    //FederacaoService,
    AuthService,
    ClubesdelacoService,
    LacadoresService,
    FederacaoService,
    { provide: NgbDateParserFormatter, useClass: MyNgbDateParserFormatter },
    ReactiveFormsModule,
    Validators
  ], exports: [
    RouterModule
  ], declarations: [
    FederacaoViewComponent,
    DatepickerConfigComponent
  ]
})
export class federacaoViewModule {

}
