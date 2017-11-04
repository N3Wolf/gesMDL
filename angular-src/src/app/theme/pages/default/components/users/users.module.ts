import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/user.service';
import { UsersComponent } from './users.component';


const routes: Routes = [
  {
    "path": "",
    "component": DefaultComponent,
    "children": [
      {
        "path": "",
        "component": UsersComponent
      }
    ]
  }
];
@NgModule({
imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ], providers: [
    AuthService,
    UsersService,
  ], exports: [
    RouterModule,
  ], declarations: [
    UsersComponent
  ]
})
export class usersModule {



}
