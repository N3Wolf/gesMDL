import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
import { UsersViewComponent } from './usersView.component';
import {  Validators, ReactiveFormsModule  } from '@angular/forms';

//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/user.service';

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
    LayoutModule
  ], providers: [
    //FederacaoService,
    AuthService,
    UsersService,
    ReactiveFormsModule,
    Validators
  ], exports: [
    RouterModule
  ], declarations: [
    UsersViewComponent
  ]
})
export class usersViewModule {

}
