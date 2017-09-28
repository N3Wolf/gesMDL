import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FederacaoService} from './services/federacao.service';
import {ClubesdelacoService} from './services/clubesdelaco.service';
import { LacadoresService} from './services/lacadores.service';

import {AuthGuard} from './guards/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { ClubesdelacoComponent } from './components/clubesdelaco/clubesdelaco.component';
import { FederacaoComponent } from './components/federacao/federacao.component';
import { LacadoresComponent } from './components/lacadores/lacadores.component';
import { FederacaoViewComponent } from './components/federacao/federacao-view/federacao-view.component';
import { FederacaoAddComponent } from './components/federacao/federacao-add/federacao-add.component';
import { ClubesdelacoViewComponent } from './components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component';
import { LacadoresViewComponent } from './components/lacadores/lacadores-view/lacadores-view.component';

//third party stuff
import {FlashMessagesModule} from 'angular2-flash-messages';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'federacao', component: FederacaoComponent, canActivate:[AuthGuard]},
  {path:'federacao-view', component: FederacaoViewComponent, canActivate:[AuthGuard]},
  {path:'clubesdelaco', component: ClubesdelacoComponent, canActivate:[AuthGuard]},
  {path:'clubesdelaco-view', component: ClubesdelacoViewComponent, canActivate:[AuthGuard]},
  {path:'lacadores', component: LacadoresComponent, canActivate:[AuthGuard]},
  {path:'lacadores-view', component: LacadoresViewComponent, canActivate:[AuthGuard]}
  //resto das routes aqui
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidenavComponent,
    FooterComponent,
    ClubesdelacoComponent,
    FederacaoComponent,
    LacadoresComponent,
    FederacaoViewComponent,
    FederacaoAddComponent,
    ClubesdelacoViewComponent,
    LacadoresViewComponent
//    BrowserAnimationsModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, FederacaoService, ClubesdelacoService, LacadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
