import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';
import { FederacaoService } from '../../services/federacao.service';
import { ClubesdelacoService } from '../../services/clubesdelaco.service';
import { LacadoresService } from '../../services/lacadores.service';

import { ClubesdelacoComponent } from './clubesdelaco.component';


const routes: Routes = [
  {
    "path": "",
    "component": DefaultComponent,
    "children": [
      {
        "path": "",
        "component": ClubesdelacoComponent
      }
    ]
  }
];
@NgModule({
imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
    //SharedModule
  ], providers: [
    FederacaoService,
    AuthService,
    ClubesdelacoService,
    LacadoresService,
  ], exports: [
    RouterModule,
    ClubesdelacoComponent
  ], declarations: [
    ClubesdelacoComponent
  ]
})
export class clubesdelacoModule {



}
