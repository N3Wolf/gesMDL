import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
import { UsersViewComponent } from './usersView.component';

//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/user.service';
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
        "component": UsersViewComponent
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
    UsersService,
    { provide: NgbDateParserFormatter, useClass: MyNgbDateParserFormatter }
  ], exports: [
    RouterModule
  ], declarations: [
    UsersViewComponent,
    DatepickerConfigComponent
  ]
})
export class usersViewModule {

}
