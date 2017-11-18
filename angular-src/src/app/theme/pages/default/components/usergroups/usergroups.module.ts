import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
//import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';
import { UsergroupService } from '../../services/usergroups.service';
import { UserService } from '../../services/user.service';
import { UsergroupsComponent } from './usergroups.component';

//import { SharedModule, SharedLacadoresComponent } from '../../components/sharedModule.module';

const routes: Routes = [
  {
    "path": "",
    "component": DefaultComponent,
    "children": [
      {
        "path": "",
        "component": UsergroupsComponent
      }
    ]
  }
];
@NgModule({
imports: [
    CommonModule, RouterModule.forChild(routes), LayoutModule
  ], providers: [
    AuthService,
    UsergroupService,
    UserService
  ], exports: [
    //RouterModule,
    UsergroupsComponent
  ], declarations: [
    UsergroupsComponent
  ]
})
export class UsergroupsModule {



}
