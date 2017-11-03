import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//do metronic
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";

//Componentes desenvolvidos
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
//import { FooterComponent } from './components/footer/footer.component';
import { ClubesdelacoComponent } from './components/clubesdelaco/clubesdelaco.component';
import { FederacaoComponent } from './components/federacao/federacao.component';
import { LacadoresComponent } from './components/lacadores/lacadores.component';
import { FederacaoViewComponent } from './components/federacao/federacaoView/federacaoView.component';
import { FederacaoAddComponent } from './components/federacao/federacao-add/federacao-add.component';
import { ClubesdelacoViewComponent } from './components/clubesdelaco/clubesdelacoView/clubesdelacoView.component';
//import { LacadoresViewComponent } from './components/lacadores/lacadoresView/lacadoresView.component';

//Servi�os desenvolvidos
//import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FederacaoService } from './services/federacao.service';
import { ClubesdelacoService } from './services/clubesdelaco.service';
import { LacadoresService } from './services/lacadores.service';

//Guardas desenvolvidas
import { AuthGuard } from './guards/auth.guard';

//third party stuff
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerConfigComponent } from './components/datepicker-config/datepicker-config.component';
import { MyNgbDateParserFormatter } from './classes/myNgbDateParserFormatter'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'federacao', component: FederacaoComponent, canActivate: [AuthGuard] },
  // { path: 'federacaoView', component: FederacaoViewComponent, canActivate: [AuthGuard] },
  // { path: 'clubesdelaco', component: ClubesdelacoComponent, canActivate: [AuthGuard] },
  // { path: 'clubesdelacoView', component: ClubesdelacoViewComponent, canActivate: [AuthGuard] },
  // { path: 'lacadores', component: LacadoresComponent, canActivate: [AuthGuard] },
  //{ path: 'lacadoresView', component: LacadoresViewComponent, canActivate: [AuthGuard] }
  //resto das routes aqui
];

@NgModule({
  declarations: [
    ThemeComponent,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidenavComponent,
    // FooterComponent,
    ClubesdelacoComponent,
    FederacaoComponent,
    LacadoresComponent,
    FederacaoViewComponent,
    FederacaoAddComponent,
    ClubesdelacoViewComponent,
    //LacadoresViewComponent,
    DatepickerConfigComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    NgbModule.forRoot()
  ],
  providers: [
    ScriptLoaderService,
    //ValidateService,
    AuthService,
    AuthGuard,
    FederacaoService,
    ClubesdelacoService,
    LacadoresService,
    { provide: NgbDateParserFormatter, useClass: MyNgbDateParserFormatter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
