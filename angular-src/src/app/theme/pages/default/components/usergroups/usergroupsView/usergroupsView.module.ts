import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, Validators, ReactiveFormsModule   } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
import { UsergroupsViewComponent } from './usergroupsView.component';

//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../../services/auth.service';
//import { FederacaoService } from '../../../services/federacao.service';
import { UsergroupService } from '../../../services/usergroup.service';
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
        "component": UsergroupsViewComponent
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
    UsergroupService,
    { provide: NgbDateParserFormatter, useClass: MyNgbDateParserFormatter },
    Validators,
    ReactiveFormsModule
  ], exports: [
    RouterModule
  ], declarations: [
    UsergroupsViewComponent,
    DatepickerConfigComponent
  ]
})
export class lacadoresViewModule {

}
