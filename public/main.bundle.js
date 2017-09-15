webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        //template: '<router-outlet></router-outlet>',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_lacadores_service__ = __webpack_require__("../../../../../src/app/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_clubesdelaco_clubesdelaco_component__ = __webpack_require__("../../../../../src/app/components/clubesdelaco/clubesdelaco.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_federacao_federacao_component__ = __webpack_require__("../../../../../src/app/components/federacao/federacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_lacadores_lacadores_component__ = __webpack_require__("../../../../../src/app/components/lacadores/lacadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_federacao_federacao_view_federacao_view_component__ = __webpack_require__("../../../../../src/app/components/federacao/federacao-view/federacao-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_federacao_federacao_add_federacao_add_component__ = __webpack_require__("../../../../../src/app/components/federacao/federacao-add/federacao-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_clubesdelaco_clubesdelaco_view_clubesdelaco_view_component__ = __webpack_require__("../../../../../src/app/components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_lacadores_lacadores_view_lacadores_view_component__ = __webpack_require__("../../../../../src/app/components/lacadores/lacadores-view/lacadores-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//third party stuff

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'federacao', component: __WEBPACK_IMPORTED_MODULE_21__components_federacao_federacao_component__["a" /* FederacaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'federacao-view', component: __WEBPACK_IMPORTED_MODULE_23__components_federacao_federacao_view_federacao_view_component__["a" /* FederacaoViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clubesdelaco', component: __WEBPACK_IMPORTED_MODULE_20__components_clubesdelaco_clubesdelaco_component__["a" /* ClubesdelacoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clubesdelaco-view', component: __WEBPACK_IMPORTED_MODULE_25__components_clubesdelaco_clubesdelaco_view_clubesdelaco_view_component__["a" /* ClubesdelacoViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'lacadores', component: __WEBPACK_IMPORTED_MODULE_22__components_lacadores_lacadores_component__["a" /* LacadoresComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'lacadores-view', component: __WEBPACK_IMPORTED_MODULE_26__components_lacadores_lacadores_view_lacadores_view_component__["a" /* LacadoresViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] }
    //resto das routes aqui
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_clubesdelaco_clubesdelaco_component__["a" /* ClubesdelacoComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_federacao_federacao_component__["a" /* FederacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_lacadores_lacadores_component__["a" /* LacadoresComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_federacao_federacao_view_federacao_view_component__["a" /* FederacaoViewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_federacao_federacao_add_federacao_add_component__["a" /* FederacaoAddComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_clubesdelaco_clubesdelaco_view_clubesdelaco_view_component__["a" /* ClubesdelacoViewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_lacadores_lacadores_view_lacadores_view_component__["a" /* LacadoresViewComponent */]
            //    BrowserAnimationsModule
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_27_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_federacao_service__["a" /* FederacaoService */], __WEBPACK_IMPORTED_MODULE_16__services_clubesdelaco_service__["a" /* ClubesdelacoService */], __WEBPACK_IMPORTED_MODULE_17__services_lacadores_service__["a" /* LacadoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"col-md-9\">\r\n  <div id=\"addboxClubeLaco\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Cadastro do Clube de Laço</div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n\r\n          <form form id=\"clubedelacoForm\" class=\"form-horizontal\" role=\"form\" (submit)=\"onClubesdelacoSubmit()\">\r\n            <!-- Nome do clube -->\r\n            <div id=\"div_id_As\" class=\"form-group required\">\r\n              <div id=\"div_nomeclube\" class=\"form-group required\">\r\n                <label for=\"nomeclube\" class=\"control-label col-md-4  requiredField\"> Nome do clube: <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.name}} </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_name\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.name\" name=\"name\" placeholder=\"Escolha um nome para o Clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div id=\"div_sede_localização\" class=\"form-group required\">\r\n                <label for=\"sede_localizacao\" class=\"control-label col-md-4  requiredField\"> Sede / Localizacao <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.sede}} </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.sede\" name=\"sede\" placeholder=\"Sede ou localização do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"div_email\" class=\"form-group required\">\r\n                <label for=\"email\" class=\"control-label col-md-4  requiredField\"> E-mail <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.email}} </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_email\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.email\" name=\"email\" placeholder=\"Sede ou localização do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <!-- <label for=\"id_As\" class=\"control-label col-md-4  requiredField\">Status<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\r\n                <label class=\"radio-inline\"> <input type=\"radio\"  checked name=\"As\" id=\"id_As_1\" value=\"I\"  style=\"margin-bottom: 10px\">Ativo </label>\r\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"As\" id=\"id_As_2\" value=\"CI\"  style=\"margin-bottom: 10px\">Inativo </label>\r\n              </div>\r\n            </div> -->\r\n\r\n<!--\r\n            <div id=\"div_id_password1\" class=\"form-group required\">\r\n              <label for=\"id_password1\" class=\"control-label col-md-4  requiredField\">Password<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password1\" name=\"password1\" placeholder=\"Create a password\" style=\"margin-bottom: 10px\" type=\"password\" />\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_password2\" class=\"form-group required\">\r\n              <label for=\"id_password2\" class=\"control-label col-md-4  requiredField\"> Re:password<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password2\" name=\"password2\" placeholder=\"Confirm your password\" style=\"margin-bottom: 10px\" type=\"password\" />\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_name\" class=\"form-group required\">\r\n              <label for=\"id_name\" class=\"control-label col-md-4  requiredField\"> full name<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_name\" name=\"name\" placeholder=\"Your Frist name and Last name\" style=\"margin-bottom: 10px\" type=\"text\" />\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_gender\" class=\"form-group required\">\r\n              <label for=\"id_gender\" class=\"control-label col-md-4  requiredField\"> Gender<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\r\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_1\" value=\"M\"  style=\"margin-bottom: 10px\">Male</label>\r\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_2\" value=\"F\"  style=\"margin-bottom: 10px\">Female </label>\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_company\" class=\"form-group required\">\r\n              <label for=\"id_company\" class=\"control-label col-md-4  requiredField\"> company name<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_company\" name=\"company\" placeholder=\"your company name\" style=\"margin-bottom: 10px\" type=\"text\" />\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_catagory\" class=\"form-group required\">\r\n              <label for=\"id_catagory\" class=\"control-label col-md-4  requiredField\"> catagory<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_catagory\" name=\"catagory\" placeholder=\"skills catagory\" style=\"margin-bottom: 10px\" type=\"text\" />\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_number\" class=\"form-group required\">\r\n              <label for=\"id_number\" class=\"control-label col-md-4  requiredField\"> contact number<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_number\" name=\"number\" placeholder=\"provide your number\" style=\"margin-bottom: 10px\" type=\"text\" />\r\n              </div>\r\n            </div>\r\n            <div id=\"div_id_location\" class=\"form-group required\">\r\n              <label for=\"id_location\" class=\"control-label col-md-4  requiredField\"> Your Location<span class=\"asteriskField\">*</span> </label>\r\n              <div class=\"controls col-md-8 \">\r\n                <input class=\"input-md textinput textInput form-control\" id=\"id_location\" name=\"location\" placeholder=\"Your Pincode and City\" style=\"margin-bottom: 10px\" type=\"text\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"controls col-md-offset-4 col-md-8 \">\r\n                <div id=\"div_id_terms\" class=\"checkbox required\">\r\n                  <label for=\"id_terms\" class=\" requiredField\">\r\n                                         <input class=\"input-ms checkboxinput\" id=\"id_terms\" name=\"terms\" style=\"margin-bottom: 10px\" type=\"checkbox\" />\r\n                                         Agree with the terms and conditions\r\n                                    </label>\r\n                </div>\r\n\r\n              </div>\r\n            </div>  -->\r\n\r\n            <div class=\"form-group\">\r\n              <div *ngIf=\"!isInsert\">\r\n                <app-lacadores [paramIdClube]=\"idRecord\" [isDetail]= \"true\"></app-lacadores>\r\n              </div>\r\n              <div class=\"aab controls col-md-4 \"></div>\r\n              <div class=\"controls col-md-8 \">\r\n\r\n                <button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary btn btn-confirm\"><i class=\"icon-hand-right\">Salvar</i></button>\r\n                <input type=\"button\" [routerLink]=\"['/clubesdelaco']\"  name=\"BtnCancel\" value=\"Voltar\" class=\"btn btn btn-cancel\" id=\"button-id-cancelar\" >\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubesdelacoViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClubesdelacoViewComponent = (function () {
    function ClubesdelacoViewComponent(validateService, flashMessage, federacaoService, router, route, clubesdelacoService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.federacaoService = federacaoService;
        this.router = router;
        this.route = route;
        this.clubesdelacoService = clubesdelacoService;
        this.Clubedelaco = {
            name: String,
            email: String,
            sede: String,
            status: Boolean
        };
    }
    ClubesdelacoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Clubedelaco.name = '';
        this.Clubedelaco.sede = '';
        this.Clubedelaco.email = '';
        this.Clubedelaco.status = '';
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.idRecord = params.id;
            }
            _this.isInsert = true ? params.isInsert : true;
            _this.isEdit = true ? params.isEdit : true;
            _this.isView = true ? params.isView : true;
        });
        if (!this.isInsert) {
            this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe(function (result) {
                _this.Clubedelaco = result;
            });
        }
    };
    ClubesdelacoViewComponent.prototype.onClubesdelacoSubmit = function () {
        var _this = this;
        var newClubedelaco = {
            name: this.Clubedelaco.name,
            sede: this.Clubedelaco.sede,
            email: this.Clubedelaco.email,
            status: true //this.Federacao.status,
        };
        // Required Fields
        //  if(!this.validateService.validateFederacao(federacao)){
        //    this.flashMessage.show('Para continuar é necessário preencher todos os campos', {cssClass:'alert-danger', timeout:3000});
        //    return false;
        //  }
        //
        //   // Validar o email
        //   if(!this.validateService.validateEmail(user.email)){
        //     this.flashMessage.show('Para continuar é necessário informar um e-mail válido', {cssClass:'alert-danger', timeout:3000});
        //     return false;
        //   }
        //
        // Register user
        if (this.isInsert) {
            this.clubesdelacoService.addClubedelaco(newClubedelaco).subscribe(function (data) {
                if (data.success) {
                    //console.log(data);
                    _this.router.navigate(['clubedelaco-view', { id: data.id, isView: true }]);
                    _this.flashMessage.show('Clube de Laço registrado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro ao tentar inserir este Clube de laço. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            //isEdit
            this.clubesdelacoService.updateClubedelaco(this.Clubedelaco).subscribe(function (data) {
                if (data.success) {
                    //console.log(data);
                    _this.router.navigate(['clubedelaco-view', { id: _this.Clubedelaco._id, isEdit: true }]);
                    _this.flashMessage.show('Clube de Laço atualizado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    return ClubesdelacoViewComponent;
}());
ClubesdelacoViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clubesdelaco-view',
        template: __webpack_require__("../../../../../src/app/components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/clubesdelaco/clubesdelaco-view/clubesdelaco-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _f || Object])
], ClubesdelacoViewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=clubesdelaco-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/clubesdelaco/clubesdelaco.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clubesdelaco/clubesdelaco.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav *ngIf=\"!isDetail\"></app-sidenav>\r\n\r\n<div class=\"col-md-9\">\r\n  <div id=\"addboxFederacao\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Clubes de laço cadastrados                         <a [routerLink]=\"['/clubesdelaco-view', {isInsert: true}]\" style=\"float: right; font-size: 16px; border-style='solid'\"><span class=\"fa fa-plus\" > Adicionar </span></a></div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n  <!-- <div class=\"panel-body col-md-12 col-md-offset-0 col-sm-0\" style=\"margin-top:30px\">\r\n\r\n  <div id=\"DataTables_Table_0_wrapper\" class=\"dataTables_wrapper no-footer\">\r\n    <div class=\"dataTables_length\" id=\"DataTables_Table_0_length\">\r\n      <label>Show <select name=\"DataTables_Table_0_length\" aria-controls=\"DataTables_Table_0\" class=\"form-control\">\r\n        <option value=\"10\">10</option><option value=\"25\">25</option>\r\n        <option value=\"50\">50</option><option value=\"100\">100</option>\r\n      </select> entries</label></div>\r\n    <div id=\"DataTables_Table_0_filter\" class=\"dataTables_filter\">\r\n      <label>Search:<input type=\"search\" class=\"form-control \" placeholder=\"\" aria-controls=\"DataTables_Table_0\"></label></div> -->\r\n\r\n  <!-- <table *ngFor=\"let obj of objclube\" class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\"> -->\r\n  <table class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"\" style=\"width: 307px;\">Nome</th>\r\n        <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 476px;\">Razão Social</th> -->\r\n        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 115px;\">E-mail</th>\r\n        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 233px;\">Sede/Localização</th>\r\n        <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Status</th> -->\r\n        <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Ações</th> -->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr role=\"row\" >\r\n          <tr role=\"row\" *ngFor=\"let registro of ClubesList\">\r\n            <td class=\"sorting_1\"><a [routerLink]=\"['/clubesdelaco-view', { id : registro._id , isView: true}]\" >{{registro.name}}</a></td>\r\n            <!-- <td>{{registro.razaosocial}}</td> -->\r\n            <td>{{registro.email}}</td>\r\n            <td>{{registro.sede}}</td>\r\n            <!-- <td>{{registro.status ? 'Ativo': 'Inativo'}}</td> -->\r\n            <td><span (click)=\"onEditRequest(registro._id)\" class=\"fa fa-edit\"></span></td>\r\n            <td><span  (click)=\"onDeleteRequest(registro._id)\" class=\"glyphicon glyphicon-remove\"></span></td>\r\n\r\n          </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"panel-footer\" id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n    <label style=\"float:right\" > {{this.registros}} <small>registros encontrados</small> </label>\r\n  </div>\r\n  <!-- <div class=\"dataTables_paginate paging_simple_numbers\" id=\"DataTables_Table_0_paginate\"><a class=\"paginate_button previous disabled\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"0\" tabindex=\"0\" id=\"DataTables_Table_0_previous\">Previous</a><span><a class=\"paginate_button current\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"1\" tabindex=\"0\">1</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"2\" tabindex=\"0\">2</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"3\" tabindex=\"0\">3</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"4\" tabindex=\"0\">4</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"5\" tabindex=\"0\">5</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"6\" tabindex=\"0\">6</a></span> -->\r\n    <!-- <a class=\"paginate_button next\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"7\" tabindex=\"0\" id=\"DataTables_Table_0_next\">Next</a> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/clubesdelaco/clubesdelaco.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubesdelacoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClubesdelacoComponent = (function () {
    function ClubesdelacoComponent(validateService, flashMessage, federacaoService, router, clubesdelacoService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.federacaoService = federacaoService;
        this.router = router;
        this.clubesdelacoService = clubesdelacoService;
    }
    ClubesdelacoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clubesdelacoService.getClubesdelaco().subscribe(function (clubesdelaco) {
            _this.ClubesList = clubesdelaco;
            console.log('clubesdelaco');
            console.log(clubesdelaco);
            _this.registros = clubesdelaco.length;
            // var clubesdelacoList = Object.keys(clubesdelaco).map(function(key) { return clubesdelaco[key]; });
            // this.ClubesList =   clubesdelacoList;
            // //conta os registros
            // for (var key in clubesdelaco) {
            //   if (!clubesdelaco.hasOwnProperty(key)) continue;
            //   var obj = clubesdelaco[key];
            //       for (var prop in obj) {
            //          // skip loop if the property is from prototype
            //          this.registros++;
            //           if(!obj.hasOwnProperty(prop)) continue;
            //         }
            // }
        });
        //this.federacoes.count = 1 ;// = this.federacoes.length;
    };
    ClubesdelacoComponent.prototype.onEditRequest = function (idClubesdelaco) {
        this.router.navigate(['/clubesdelaco-view', { id: idClubesdelaco, isEdit: true }]);
    };
    ClubesdelacoComponent.prototype.onDeleteRequest = function (idClubesdelaco) {
        var _this = this;
        this.clubesdelacoService.removeClubedelaco(idClubesdelaco).subscribe(function (data) {
            if (data.success) {
                location.reload();
                _this.flashMessage.show('Registro removido com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
                //this.router.navigate(['/federacao']);
            }
        });
    };
    return ClubesdelacoComponent;
}());
ClubesdelacoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clubesdelaco',
        template: __webpack_require__("../../../../../src/app/components/clubesdelaco/clubesdelaco.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/clubesdelaco/clubesdelaco.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _e || Object])
], ClubesdelacoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=clubesdelaco.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n<div class=\"col-md-8\">\n  <h2 class=\"page-header\">Dashboard</h2>\n  <p>Aqui será um possivel painel inicial, com informações rápidas</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao-add/federacao-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao-add/federacao-add.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n<div class=\"col-md-9\">\n  <div id=\"addboxFederacao\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">Cadastro de nova Federação</div>\n      </div>\n      <div class=\"panel-body\">\n\n\n\n          <form id=\"federacaoForm\" class=\"form-horizontal\" role=\"form\" (submit)=\"onFederacaoSubmit()\">\n            <!-- Nome do clube -->\n            <div id=\"div_id_As\" class=\"form-group required\">\n              <div id=\"div_nomeclube\" class=\"form-group required\">\n                <label for=\"nomeclube\" class=\"control-label col-md-4  requiredField\"> Nome da Federação: <span class=\"asteriskField\">*</span> </label>\n                <div class=\"controls col-md-8 \">\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_nome\" maxlength=\"30\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Digite o nome da Federação\" style=\"margin-bottom: 10px\" type=\"text\" />\n                </div>\n              </div>\n              <!-- Razão Social -->\n              <div id=\"div_razaosocial\" class=\"form-group required\">\n                <label for=\"razaosocial\" class=\"control-label col-md-4  requiredField\"> Razão social <span class=\"asteriskField\">*</span> </label>\n                <div class=\"controls col-md-8 \">\n                  <input class=\"input-md textinput form-control\" id=\"id_razaosocial\" [(ngModel)]=\"razaosocial\" name=\"razaosocial\" placeholder=\"Digite a razão social\" style=\"margin-bottom: 10px\" type=\"text\" />\n                </div>\n              </div>\n              <!-- CNPJ -->\n              <div id=\"div_razaosocial\" class=\"form-group required\">\n                <label for=\"razaosocial\" class=\"control-label col-md-4  requiredField\"> CNPJ <span class=\"asteriskField\">*</span> </label>\n                <div class=\"controls col-md-8 \">\n                  <input class=\"input-md textinput form-control\" id=\"id_CNPJ\" [(ngModel)]=\"cnpj\" name=\"cnpj\" placeholder=\"Digite o CNPJ\" style=\"margin-bottom: 10px\" type=\"text\" />\n                </div>\n              </div>\n              <!-- email -->\n              <div id=\"div_email\" class=\"form-group required\">\n                <label for=\"email\" class=\"control-label col-md-4  requiredField\"> E-mail <span class=\"asteriskField\">*</span> </label>\n                <div class=\"controls col-md-8 \">\n                  <input class=\"input-md textinput form-control\" id=\"id_email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Digite um e-mail de contato\" style=\"margin-bottom: 10px\" type=\"email\" />\n                </div>\n              </div>\n              <!-- STATUS -->\n              <label for=\"id_As\" class=\"control-label col-md-4  requiredField\">Status<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"status\" id=\"id_status_1\" [(ngModel)]=\"status\" value=\"true\"  style=\"margin-bottom: 10px\">Ativa </label>\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"status2\" id=\"id_status_2\" [(ngModel)]=\"status\" value=\"false\" style=\"margin-bottom: 10px\">Inativa</label>\n              </div>\n            </div>\n\n<!--\n            <div id=\"div_id_password1\" class=\"form-group required\">\n              <label for=\"id_password1\" class=\"control-label col-md-4  requiredField\">Password<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password1\" name=\"password1\" placeholder=\"Create a password\" style=\"margin-bottom: 10px\" type=\"password\" />\n              </div>\n            </div>\n            <div id=\"div_id_password2\" class=\"form-group required\">\n              <label for=\"id_password2\" class=\"control-label col-md-4  requiredField\"> Re:password<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password2\" name=\"password2\" placeholder=\"Confirm your password\" style=\"margin-bottom: 10px\" type=\"password\" />\n              </div>\n            </div>\n            <div id=\"div_id_name\" class=\"form-group required\">\n              <label for=\"id_name\" class=\"control-label col-md-4  requiredField\"> full name<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_name\" name=\"name\" placeholder=\"Your Frist name and Last name\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_gender\" class=\"form-group required\">\n              <label for=\"id_gender\" class=\"control-label col-md-4  requiredField\"> Gender<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_1\" value=\"M\"  style=\"margin-bottom: 10px\">Male</label>\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_2\" value=\"F\"  style=\"margin-bottom: 10px\">Female </label>\n              </div>\n            </div>\n            <div id=\"div_id_company\" class=\"form-group required\">\n              <label for=\"id_company\" class=\"control-label col-md-4  requiredField\"> company name<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_company\" name=\"company\" placeholder=\"your company name\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_catagory\" class=\"form-group required\">\n              <label for=\"id_catagory\" class=\"control-label col-md-4  requiredField\"> catagory<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_catagory\" name=\"catagory\" placeholder=\"skills catagory\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_number\" class=\"form-group required\">\n              <label for=\"id_number\" class=\"control-label col-md-4  requiredField\"> contact number<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_number\" name=\"number\" placeholder=\"provide your number\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_location\" class=\"form-group required\">\n              <label for=\"id_location\" class=\"control-label col-md-4  requiredField\"> Your Location<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_location\" name=\"location\" placeholder=\"Your Pincode and City\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"controls col-md-offset-4 col-md-8 \">\n                <div id=\"div_id_terms\" class=\"checkbox required\">\n                  <label for=\"id_terms\" class=\" requiredField\">\n                                         <input class=\"input-ms checkboxinput\" id=\"id_terms\" name=\"terms\" style=\"margin-bottom: 10px\" type=\"checkbox\" />\n                                         Agree with the terms and conditions\n                                    </label>\n                </div>\n\n              </div>\n            </div>  -->\n            <div class=\"form-group\">\n              <div class=\"aab controls col-md-4 \"></div>\n              <div class=\"controls col-md-8 \">\n                <button id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary btn btn-confirm\"><i class=\"icon-hand-right\">Salvar</i></button>\n\n                <input type=\"button\" name=\"BtnCancel\" value=\"Cancelar\" class=\"btn btn btn-cancel\" id=\"button-id-cancelar\" />\n              </div>\n            </div>\n\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao-add/federacao-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederacaoAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FederacaoAddComponent = (function () {
    function FederacaoAddComponent(validateService, flashMessage, federacaoService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.federacaoService = federacaoService;
        this.router = router;
    }
    FederacaoAddComponent.prototype.ngOnInit = function () {
    };
    return FederacaoAddComponent;
}());
FederacaoAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-federacao-add',
        template: __webpack_require__("../../../../../src/app/components/federacao/federacao-add/federacao-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/federacao/federacao-add/federacao-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], FederacaoAddComponent);

;
var _a, _b, _c, _d;
//# sourceMappingURL=federacao-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao-view/federacao-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao-view/federacao-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n<div class=\"col-md-9\">\n  <div id=\"addboxFederacao\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">Cadastro de Federação</div>\n      </div>\n      <div class=\"panel-body\">\n\n\n\n          <form id=\"federacaoForm\" class=\"form-horizontal\" role=\"form\" (submit)=\"onFederacaoSubmit()\">\n            <!-- Nome do clube -->\n            <div id=\"div_id_As\" class=\"form-group required\">\n              <div id=\"div_nomeclube\" class=\"form-group required\">\n                <label for=\"nomefederacao\" class=\"control-label col-md-4  requiredField\"> Nome da Federação: <span class=\"asteriskField\">*</span> </label>\n                <!-- exibe label se for isView.\n                    exibe input se for isEdit ou isInsert-->\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Federacao.name}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_nome\" maxlength=\"30\" [(ngModel)]=\"Federacao.name\" name=\"name\" placeholder=\"Digite o nome da Federação\" style=\"margin-bottom: 10px\" type=\"text\">\n                </div>\n              </div>\n              <!-- Razão Social -->\n              <div id=\"div_razaosocial\" class=\"form-group required\">\n                <label for=\"razaosocial\" class=\"control-label col-md-4  requiredField\"> Razão social <span class=\"asteriskField\">*</span> </label>\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Federacao.razaosocial}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md textinput form-control\" id=\"id_razaosocial\" [(ngModel)]=\"Federacao.razaosocial\" name=\"razaosocial\" placeholder=\"Digite a razão social\" style=\"margin-bottom: 10px\" type=\"text\" >\n                </div>\n              </div>\n              <!-- CNPJ -->\n              <div id=\"div_razaosocial\" class=\"form-group required\">\n                <label for=\"razaosocial\" class=\"control-label col-md-4  requiredField\"> CNPJ <span class=\"asteriskField\">*</span> </label>\n                <!-- exibe label se for isView.\n                    exibe input se for isEdit ou isInsert-->\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Federacao.cnpj}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md textinput form-control\" id=\"id_CNPJ\" [(ngModel)]=\"Federacao.cnpj\" name=\"cnpj\" placeholder=\"Digite o CNPJ\" style=\"margin-bottom: 10px\" type=\"text\" >\n                </div>\n              </div>\n              <!-- email -->\n              <div id=\"div_email\" class=\"form-group required\">\n                <label for=\"email\" class=\"control-label col-md-4  requiredField\"> E-mail <span class=\"asteriskField\">*</span> </label>\n                <!-- exibe label se for isView.\n                    exibe input se for isEdit ou isInsert-->\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Federacao.email}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md textinput form-control\" id=\"id_email\" [(ngModel)]=\"Federacao.email\" name=\"email\" placeholder=\"Digite um e-mail de contato\" style=\"margin-bottom: 10px\" type=\"email\">\n                </div>\n              </div>\n              <!-- STATUS -->\n              <!-- <label for=\"id_As\" class=\"control-label col-md-4  requiredField\">Status<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\" id=\"\" name=\"\" ng-value=\"true\"  ng-Model=\"Federacao.status\"  style=\"margin-bottom: 10px\">Ativa </label>\n                <label class=\"radio-inline\"> <input type=\"radio\" id=\"\" name=\"\" ng-value=\"false\" ng-Model=\"Federecao.status\" style=\"margin-bottom: 10px\">Inativa</label>\n              </div> -->\n            </div>\n\n<!--\n            <div id=\"div_id_password1\" class=\"form-group required\">\n              <label for=\"id_password1\" class=\"control-label col-md-4  requiredField\">Password<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password1\" name=\"password1\" placeholder=\"Create a password\" style=\"margin-bottom: 10px\" type=\"password\" />\n              </div>\n            </div>\n            <div id=\"div_id_password2\" class=\"form-group required\">\n              <label for=\"id_password2\" class=\"control-label col-md-4  requiredField\"> Re:password<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password2\" name=\"password2\" placeholder=\"Confirm your password\" style=\"margin-bottom: 10px\" type=\"password\" />\n              </div>\n            </div>\n            <div id=\"div_id_name\" class=\"form-group required\">\n              <label for=\"id_name\" class=\"control-label col-md-4  requiredField\"> full name<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_name\" name=\"name\" placeholder=\"Your Frist name and Last name\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_gender\" class=\"form-group required\">\n              <label for=\"id_gender\" class=\"control-label col-md-4  requiredField\"> Gender<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_1\" value=\"M\"  style=\"margin-bottom: 10px\">Male</label>\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_2\" value=\"F\"  style=\"margin-bottom: 10px\">Female </label>\n              </div>\n            </div>\n            <div id=\"div_id_company\" class=\"form-group required\">\n              <label for=\"id_company\" class=\"control-label col-md-4  requiredField\"> company name<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_company\" name=\"company\" placeholder=\"your company name\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_catagory\" class=\"form-group required\">\n              <label for=\"id_catagory\" class=\"control-label col-md-4  requiredField\"> catagory<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_catagory\" name=\"catagory\" placeholder=\"skills catagory\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_number\" class=\"form-group required\">\n              <label for=\"id_number\" class=\"control-label col-md-4  requiredField\"> contact number<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_number\" name=\"number\" placeholder=\"provide your number\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_location\" class=\"form-group required\">\n              <label for=\"id_location\" class=\"control-label col-md-4  requiredField\"> Your Location<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_location\" name=\"location\" placeholder=\"Your Pincode and City\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"controls col-md-offset-4 col-md-8 \">\n                <div id=\"div_id_terms\" class=\"checkbox required\">\n                  <label for=\"id_terms\" class=\" requiredField\">\n                                         <input class=\"input-ms checkboxinput\" id=\"id_terms\" name=\"terms\" style=\"margin-bottom: 10px\" type=\"checkbox\" />\n                                         Agree with the terms and conditions\n                                    </label>\n                </div>\n\n              </div>\n            </div>  -->\n            <div class=\"form-group\">\n              <div class=\"aab controls col-md-4 \"></div>\n              <div class=\"controls col-md-8 \">\n                <button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary btn btn-confirm\"><i class=\"icon-hand-right\">Salvar</i></button>\n                <input type=\"button\" [routerLink]=\"['/federacao']\"  name=\"BtnCancel\" value=\"Voltar\" class=\"btn btn btn-cancel\" id=\"button-id-cancelar\" >\n              </div>\n            </div>\n\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao-view/federacao-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederacaoViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FederacaoViewComponent = (function () {
    function FederacaoViewComponent(validateService, flashMessage, federacaoService, router, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.federacaoService = federacaoService;
        this.router = router;
        this.route = route;
        this.Federacao = {
            _id: String,
            name: String,
            razaosocial: String,
            cnpj: String,
            status: Boolean,
            email: String
        };
    }
    FederacaoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.idRecord = params.id;
            }
            _this.isInsert = true ? params.isInsert : true;
            _this.isEdit = true ? params.isEdit : true;
            _this.isView = true ? params.isView : true;
        });
        if (!this.isInsert) {
            this.federacaoService.getFederacaoById(this.idRecord).subscribe(function (result) {
                _this.Federacao = result.federacao;
            });
        }
        else {
            this.Federacao.name = null;
            this.Federacao.razaosocial = null;
            this.Federacao.status = null;
            this.Federacao.cnpj = null;
            this.Federacao.email = null;
        }
    };
    FederacaoViewComponent.prototype.onFederacaoSubmit = function () {
        var _this = this;
        var newFederacao = {
            name: this.Federacao.name,
            cnpj: this.Federacao.cnpj,
            razaosocial: this.Federacao.razaosocial,
            status: true,
            email: this.Federacao.email
        };
        // Required Fields
        //  if(!this.validateService.validateFederacao(federacao)){
        //    this.flashMessage.show('Para continuar é necessário preencher todos os campos', {cssClass:'alert-danger', timeout:3000});
        //    return false;
        //  }
        //
        //   // Validar o email
        //   if(!this.validateService.validateEmail(user.email)){
        //     this.flashMessage.show('Para continuar é necessário informar um e-mail válido', {cssClass:'alert-danger', timeout:3000});
        //     return false;
        //   }
        //
        // Register user
        if (this.isInsert) {
            this.federacaoService.addFederacao(newFederacao).subscribe(function (data) {
                if (data.success) {
                    //console.log(data);
                    _this.router.navigate(['federacao-view', { id: data.id, isView: true }]);
                    _this.flashMessage.show('Federação registrada com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro ao tentar inserir este registro. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            //isEdit
            this.federacaoService.updateFederacao(this.Federacao).subscribe(function (data) {
                if (data.success) {
                    //console.log(data);
                    _this.router.navigate(['federacao-view', { id: _this.Federacao._id, isEdit: true }]);
                    _this.flashMessage.show('Federação atualizada com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    return FederacaoViewComponent;
}());
FederacaoViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-federacao-view',
        template: __webpack_require__("../../../../../src/app/components/federacao/federacao-view/federacao-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/federacao/federacao-view/federacao-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], FederacaoViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=federacao-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n\r\n<div class=\"col-md-9\">\r\n  <div id=\"addboxFederacao\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Federações Cadastradas                         <a [routerLink]=\"['/federacao-view', {isInsert: true}]\" style=\"float: right; font-size: 16px; border-style='solid'\"><span class=\"fa fa-plus\" > Adicionar </span></a></div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n  <!-- <div class=\"panel-body col-md-12 col-md-offset-0 col-sm-0\" style=\"margin-top:30px\">\r\n\r\n  <div id=\"DataTables_Table_0_wrapper\" class=\"dataTables_wrapper no-footer\">\r\n    <div class=\"dataTables_length\" id=\"DataTables_Table_0_length\">\r\n      <label>Show <select name=\"DataTables_Table_0_length\" aria-controls=\"DataTables_Table_0\" class=\"form-control\">\r\n        <option value=\"10\">10</option><option value=\"25\">25</option>\r\n        <option value=\"50\">50</option><option value=\"100\">100</option>\r\n      </select> entries</label></div>\r\n    <div id=\"DataTables_Table_0_filter\" class=\"dataTables_filter\">\r\n      <label>Search:<input type=\"search\" class=\"form-control \" placeholder=\"\" aria-controls=\"DataTables_Table_0\"></label></div> -->\r\n\r\n  <table *ngFor=\"let obj of objfed\" class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"\" style=\"width: 307px;\">Nome</th>\r\n        <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 476px;\">Razão Social</th> -->\r\n         <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 233px;\">CNPJ</th>\r\n        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 115px;\">E-mail</th>\r\n        <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Status</th> -->\r\n        <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Ações</th> -->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr role=\"row\" >\r\n          <tr role=\"row\" *ngFor=\"let registro of obj\">\r\n            <td class=\"sorting_1\"><a [routerLink]=\"['/federacao-view', { id : registro._id , isView: true}]\" >{{registro.name}}</a></td>\r\n            <!-- <td>{{registro.razaosocial}}</td> -->\r\n            <td>{{registro.cnpj}}</td>\r\n            <td>{{registro.email}}</td>\r\n            <!-- <td>{{registro.status ? 'Ativo': 'Inativo'}}</td> -->\r\n            <td><span (click)=\"onEditRequest(registro._id)\" class=\"fa fa-edit\"></span></td>\r\n            <td><span  (click)=\"onDeleteRequest(registro._id)\" class=\"glyphicon glyphicon-remove\"></span></td>\r\n\r\n          </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"panel-footer\" id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n    <label style=\"float:right\" > {{this.registros}} <small>registros encontrados</small> </label>\r\n  </div>\r\n  <!-- <div class=\"dataTables_paginate paging_simple_numbers\" id=\"DataTables_Table_0_paginate\"><a class=\"paginate_button previous disabled\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"0\" tabindex=\"0\" id=\"DataTables_Table_0_previous\">Previous</a><span><a class=\"paginate_button current\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"1\" tabindex=\"0\">1</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"2\" tabindex=\"0\">2</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"3\" tabindex=\"0\">3</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"4\" tabindex=\"0\">4</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"5\" tabindex=\"0\">5</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"6\" tabindex=\"0\">6</a></span> -->\r\n    <!-- <a class=\"paginate_button next\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"7\" tabindex=\"0\" id=\"DataTables_Table_0_next\">Next</a> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/federacao/federacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FederacaoComponent = (function () {
    function FederacaoComponent(validateService, flashMessage, federacaoService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.federacaoService = federacaoService;
        this.router = router;
    }
    FederacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.federacaoService.getFederacoes().subscribe(function (federacoes) {
            _this.registros = 0;
            var federacaoList = Object.keys(federacoes).map(function (key) { return federacoes[key]; });
            _this.objfed = federacaoList;
            //conta os registros
            for (var key in federacoes) {
                if (!federacoes.hasOwnProperty(key))
                    continue;
                var obj = federacoes[key];
                for (var prop in obj) {
                    // skip loop if the property is from prototype
                    _this.registros++;
                    if (!obj.hasOwnProperty(prop))
                        continue;
                }
            }
        });
        //this.federacoes.count = 1 ;// = this.federacoes.length;
    };
    FederacaoComponent.prototype.onEditRequest = function (idFederacao) {
        this.router.navigate(['/federacao-view', { id: idFederacao, isEdit: true }]);
    };
    FederacaoComponent.prototype.onDeleteRequest = function (idFederacao) {
        var _this = this;
        this.federacaoService.removeFederacao(idFederacao).subscribe(function (data) {
            if (data.success) {
                location.reload();
                _this.flashMessage.show('Registro removido com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
                //this.router.navigate(['/federacao']);
            }
        });
    };
    return FederacaoComponent;
}());
FederacaoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-federacao',
        template: __webpack_require__("../../../../../src/app/components/federacao/federacao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/federacao/federacao.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], FederacaoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=federacao.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  background-color: #f5f5f5;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">\n      <i class=\"fa\"></i>️ gesMDL - Gestão do Mundo do Laço\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Gestão MDL</h1>\n  <p class=\"lead\">Bem vindo ao sistema de Gestão Mundo do Laço</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Criar conta</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lacadores/lacadores-view/lacadores-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lacadores/lacadores-view/lacadores-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n<div class=\"col-md-9\">\n  <div id=\"addboxLacador\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">Cadastro do Laçador</div>\n      </div>\n      <div class=\"panel-body\">\n\n          <form form id=\"lacadorForm\" class=\"form-horizontal\" role=\"form\" (submit)=\"onLacadoresSubmit()\">\n\n            <!-- Clube -->\n            <div id=\"div_id_As\" class=\"form-group required\">\n                <label for=\"clube\" class=\"control-label col-md-4  requiredField\"> Clube <span class=\"asteriskField\">*</span> </label>\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                    <p style=\"margin-top: 10px\" type=\"text\" [(ngModel)]=\"Lacador\"> {{Lacador.nameClube}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                    <select name=\"clube\" id=\"repeatSelect\" class=\"input-md form-control\" style=\"margin-bottom: 10px;\" [(ngModel)]=\"Lacador.idClube\">\n                        <option> </option>\n                        <option *ngFor=\"let clube of Clubedelaco\" [ngValue]=\"clube._id\">{{clube.name}}\n                        </option>\n                        <!-- <option *ngFor=\"let clube of Clubedelaco.clubesdelacolist\" [ngValue]=\"clube._id\">{{clube.name}}</option> -->\n                    </select>\n                </div>\n            <!-- Nome do laçador -->\n\n\n                <label for=\"nomeLacador\" class=\"control-label col-md-4  requiredField\"> Nome do Laçador <span class=\"asteriskField\">*</span> </label>\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Lacador.name}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_name\" maxlength=\"30\" [(ngModel)]=\"Lacador.name\" name=\"name\" placeholder=\"Digite o nome do laçador\" style=\"margin-bottom: 10px\" type=\"text\">\n                </div>\n\n\n                <label for=\"cpf\" class=\"control-label col-md-4  requiredField\"> CPF <span class=\"asteriskField\">*</span> </label>\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Lacador.cpf}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Lacador.cpf\" name=\"cpf\" placeholder=\"Digite o CPF do laçador\" style=\"margin-bottom: 10px\" type=\"text\">\n                </div>\n\n\n\n                <label for=\"cpf\" class=\"control-label col-md-4  requiredField\"> Endereço <span class=\"asteriskField\">*</span> </label>\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Lacador.endereco}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Lacador.endereco\" name=\"endereco\" placeholder=\"Digite um endereço de referência\" style=\"margin-bottom: 10px\" type=\"text\">\n                </div>\n\n\n\n                <label for=\"email\" class=\"control-label col-md-4  requiredField\"> E-mail <span class=\"asteriskField\">*</span> </label>\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Lacador.email}} </p>\n                </div>\n                <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_email\" maxlength=\"30\" [(ngModel)]=\"Lacador.email\" name=\"email\" placeholder=\"Digite um e-mail de contato\" style=\"margin-bottom: 10px\" type=\"text\">\n                </div>\n\n            </div>\n\n            <!-- <div id=\"div_picture\" class=\"form-group required\">\n              <label for=\"picture\" class=\"control-label col-md-4  requiredField\"> Foto <span class=\"asteriskField\">*</span> </label>\n              <div *ngIf=\"isView\" class=\"controls col-md-8 \">\n                <p style=\"margin-top: 10px\" type=\"text\">{{this.Lacador.email}} </p>\n              </div>\n              <div *ngIf=\"!isView\" class=\"controls col-md-8 \">\n                <input class=\"input-md  textinput textInput form-control\" id=\"id_email\" maxlength=\"30\" [(ngModel)]=\"Lacador.picture\" name=\"picture\" placeholder=\"Selecione uma foto de seu computador\" style=\"margin-bottom: 10px\" type=\"image\">\n              </div>\n            </div> -->\n              <!-- <label for=\"id_As\" class=\"control-label col-md-4  requiredField\">Status<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\"  checked name=\"As\" id=\"id_As_1\" value=\"I\"  style=\"margin-bottom: 10px\">Ativo </label>\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"As\" id=\"id_As_2\" value=\"CI\"  style=\"margin-bottom: 10px\">Inativo </label>\n              </div>\n            </div> -->\n\n<!--\n            <div id=\"div_id_password1\" class=\"form-group required\">\n              <label for=\"id_password1\" class=\"control-label col-md-4  requiredField\">Password<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password1\" name=\"password1\" placeholder=\"Create a password\" style=\"margin-bottom: 10px\" type=\"password\" />\n              </div>\n            </div>\n            <div id=\"div_id_password2\" class=\"form-group required\">\n              <label for=\"id_password2\" class=\"control-label col-md-4  requiredField\"> Re:password<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_password2\" name=\"password2\" placeholder=\"Confirm your password\" style=\"margin-bottom: 10px\" type=\"password\" />\n              </div>\n            </div>\n            <div id=\"div_id_name\" class=\"form-group required\">\n              <label for=\"id_name\" class=\"control-label col-md-4  requiredField\"> full name<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_name\" name=\"name\" placeholder=\"Your Frist name and Last name\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_gender\" class=\"form-group required\">\n              <label for=\"id_gender\" class=\"control-label col-md-4  requiredField\"> Gender<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \" style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_1\" value=\"M\"  style=\"margin-bottom: 10px\">Male</label>\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_2\" value=\"F\"  style=\"margin-bottom: 10px\">Female </label>\n              </div>\n            </div>\n            <div id=\"div_id_company\" class=\"form-group required\">\n              <label for=\"id_company\" class=\"control-label col-md-4  requiredField\"> company name<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_company\" name=\"company\" placeholder=\"your company name\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_catagory\" class=\"form-group required\">\n              <label for=\"id_catagory\" class=\"control-label col-md-4  requiredField\"> catagory<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_catagory\" name=\"catagory\" placeholder=\"skills catagory\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_number\" class=\"form-group required\">\n              <label for=\"id_number\" class=\"control-label col-md-4  requiredField\"> contact number<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_number\" name=\"number\" placeholder=\"provide your number\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div id=\"div_id_location\" class=\"form-group required\">\n              <label for=\"id_location\" class=\"control-label col-md-4  requiredField\"> Your Location<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textinput textInput form-control\" id=\"id_location\" name=\"location\" placeholder=\"Your Pincode and City\" style=\"margin-bottom: 10px\" type=\"text\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"controls col-md-offset-4 col-md-8 \">\n                <div id=\"div_id_terms\" class=\"checkbox required\">\n                  <label for=\"id_terms\" class=\" requiredField\">\n                                         <input class=\"input-ms checkboxinput\" id=\"id_terms\" name=\"terms\" style=\"margin-bottom: 10px\" type=\"checkbox\" />\n                                         Agree with the terms and conditions\n                                    </label>\n                </div>\n\n              </div>\n            </div>  -->\n            <div class=\"form-group\">\n              <div class=\"aab controls col-md-4 \"></div>\n              <div class=\"controls col-md-8 \">\n                <button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary btn btn-confirm\"><i class=\"icon-hand-right\">Salvar</i></button>\n                <input type=\"button\" [routerLink]=\"['/lacadores']\"  name=\"BtnCancel\" value=\"Voltar\" class=\"btn btn btn-cancel\" id=\"button-id-cancelar\" >\n\n\n              </div>\n            </div>\n\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/lacadores/lacadores-view/lacadores-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LacadoresViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__ = __webpack_require__("../../../../../src/app/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FederacaoService } from '../../../services/federacao.service';





//import { uiSelect } from 'ui-select';
//import { ngSanitize } from 'angular-sanitize';

var LacadoresViewComponent = (function () {
    function LacadoresViewComponent(validateService, flashMessage, 
        //private federacaoService: FederacaoService,
        router, route, clubesdelacoService, lacadoresService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
        this.clubesdelacoService = clubesdelacoService;
        this.lacadoresService = lacadoresService;
        this.Lacador = {
            _id: String,
            name: String,
            cpf: String,
            endereco: String,
            email: String,
            picture: Blob,
            status: Boolean,
            idClube: String,
            nameClube: String // não salvar no DB
        };
        this.Clubedelaco = [];
    }
    LacadoresViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //pega todos os parametros passados pela url
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.idRecord = params.id;
            }
            _this.isInsert = true ? params.isInsert : true;
            _this.isEdit = true ? params.isEdit : true;
            _this.isView = true ? params.isView : true;
        });
        //Se for view ou edit, busca os dados do Lacador e de todos os Clubes
        if (!this.isInsert) {
            //Edit ou View
            this.lacadoresService.getLacadorById(this.idRecord).subscribe(function (result) {
                _this.Lacador = result;
                console.log('this.Lacador');
                console.log(_this.Lacador);
                console.log('this.Lacador.idClube');
                console.log(_this.Lacador.idClube);
                if (_this.isEdit) {
                    _this.clubesdelacoService.getClubesdelaco().subscribe(function (clubesdelaco) {
                        _this.Clubedelaco = clubesdelaco;
                        console.log('Edit: clubesdelaco');
                        console.log(clubesdelaco);
                    });
                }
                else {
                    _this.clubesdelacoService.getClubedelacoById(_this.Lacador.idClube).subscribe(function (clubeDoLacador) {
                        _this.Clubedelaco = clubeDoLacador;
                        _this.Lacador.nameClube = clubeDoLacador['name'];
                        console.log('View: clubeDoLacador');
                        console.log(clubeDoLacador);
                    });
                }
            });
        }
        else {
            //Insert
            this.Lacador.name = null;
            this.Lacador.cpf = null;
            this.Lacador.endereco = null;
            this.Lacador.email = null;
            this.Lacador.picture = null;
            this.Lacador.status = null;
            if (!this.requestIdClube) {
                // permite selecionar um clube
                this.Lacador.idClube = null;
                this.clubesdelacoService.getClubesdelaco().subscribe(function (clubesdelaco) {
                    _this.Clubedelaco = clubesdelaco;
                    console.log('this.Clubedelaco');
                    console.log(_this.Clubedelaco);
                });
            }
            else {
                //aqui a tela foi chamada para inserção em um clube específico
                this.Lacador.idClube = this.requestIdClube;
                this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe(function (result) {
                    _this.Clubedelaco = result;
                });
            }
        }
    };
    LacadoresViewComponent.prototype.onLacadoresSubmit = function () {
        var _this = this;
        var newLacador = {
            name: this.Lacador.name,
            cpf: this.Lacador.cpf,
            endereco: this.Lacador.endereco,
            email: this.Lacador.email,
            picture: this.Lacador.picture,
            idClube: this.Lacador.idClube,
            status: true,
        };
        //console.log(newLacador);
        //console.log('newLacador');
        // Required Fields
        //  if(!this.validateService.validateFederacao(federacao)){
        //    this.flashMessage.show('Para continuar é necessário preencher todos os campos', {cssClass:'alert-danger', timeout:3000});
        //    return false;
        //  }
        //
        //   // Validar o email
        //   if(!this.validateService.validateEmail(user.email)){
        //     this.flashMessage.show('Para continuar é necessário informar um e-mail válido', {cssClass:'alert-danger', timeout:3000});
        //     return false;
        //   }
        //
        console.log('newLacador');
        console.log(newLacador.idClube);
        if (this.isInsert) {
            this.lacadoresService.addLacador(newLacador).subscribe(function (data) {
                if (data.success) {
                    //console.log(data);
                    _this.router.navigate(['lacadores-view', { id: data.id, isView: true }]);
                    _this.flashMessage.show('Laçador registrado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro ao tentar inserir este Laçador. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            //isEdit
            this.lacadoresService.updateLacador(this.Lacador).subscribe(function (data) {
                if (data.success) {
                    //console.log(data);
                    _this.router.navigate(['lacadores-view', { id: _this.Lacador._id, isEdit: true }]);
                    _this.flashMessage.show('Laçador atualizado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    return LacadoresViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LacadoresViewComponent.prototype, "requestIdClube", void 0);
LacadoresViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lacadores-view',
        template: __webpack_require__("../../../../../src/app/components/lacadores/lacadores-view/lacadores-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lacadores/lacadores-view/lacadores-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__["a" /* LacadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__["a" /* LacadoresService */]) === "function" && _f || Object])
], LacadoresViewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=lacadores-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/lacadores/lacadores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lacadores/lacadores.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!isDetail'>\r\n  <app-sidenav></app-sidenav>\r\n</div>\r\n\r\n<div *ngIf=\"!isDetail; else blocoDetail\" class=\"col-md-9\">\r\n  <div id=\"addboxLacadores\" style=\"margin-top:30px\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Laçadores cadastrados {{isDetail}} <a [routerLink]=\"['/lacadores-view', {isInsert: true}]\" style=\"float: right; font-size: 16px; border-style='solid'\"><span class=\"fa fa-plus\" > Adicionar </span></a></div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <!-- <table *ngFor=\"let obj of objLacadores\" class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\"> -->\r\n        <table class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\">\r\n          <thead>\r\n            <tr role=\"row\">\r\n              <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"\" style=\"width: 307px;\">Nome</th>\r\n              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 150px;\">CPF</th>\r\n              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 230;\">E-mail</th>\r\n              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 350px;\">Endereco</th>\r\n              <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 233px;\">Sede/Localização</th> -->\r\n              <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Status</th> -->\r\n              <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Ações</th> -->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr role=\"row\">\r\n              <tr role=\"row\" *ngFor=\"let registro of objLacadores\">\r\n                <td class=\"sorting_1\"><a [routerLink]=\"['/lacadores-view', { id : registro._id , isView: true}]\">{{registro.name}}</a></td>\r\n                <!-- <td>{{registro.razaosocial}}</td> -->\r\n                <td>{{registro.cpf}}</td>\r\n                <td>{{registro.email}}</td>\r\n                <td>{{registro.endereco}}</td>\r\n                <!-- <td>{{registro.status ? 'Ativo': 'Inativo'}}</td> -->\r\n                <td><span (click)=\"onEditRequest(registro._id)\" class=\"fa fa-edit\"></span></td>\r\n                <td><span (click)=\"onDeleteRequest(registro._id)\" class=\"glyphicon glyphicon-remove\"></span></td>\r\n\r\n              </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"panel-footer\" id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n          <label style=\"float:right\"> {{this.registros}} <small>registros encontrados</small> </label>\r\n        </div>\r\n        <!-- <div class=\"dataTables_paginate paging_simple_numbers\" id=\"DataTables_Table_0_paginate\"><a class=\"paginate_button previous disabled\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"0\" tabindex=\"0\" id=\"DataTables_Table_0_previous\">Previous</a><span><a class=\"paginate_button current\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"1\" tabindex=\"0\">1</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"2\" tabindex=\"0\">2</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"3\" tabindex=\"0\">3</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"4\" tabindex=\"0\">4</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"5\" tabindex=\"0\">5</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"6\" tabindex=\"0\">6</a></span> -->\r\n        <!-- <a class=\"paginate_button next\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"7\" tabindex=\"0\" id=\"DataTables_Table_0_next\">Next</a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n  <!-- Caso o compomente tenha sido chamado para ser exibido como membro de um master-DETAIL  -->\r\n  <ng-template #blocoDetail>\r\n    <div id=\"addboxFederacao\" style=\"\" class=\"mainbox col-md-12 col-md-offset-0 col-sm-0 \">\r\n      <div class=\"panel panel-default\" style=\"margin-bottom: 5px\">\r\n        <div class=\"panel-heading\">\r\n          <div class=\"panel-title\" >Laçadores cadastrados </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n\r\n          <!-- <table *ngFor=\"let obj of objLacadores\" class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\"> -->\r\n          <table  class=\"table datatable dataTable no-footer\" id=\"DataTables_Table_0\" role=\"grid\" aria-describedby=\"DataTables_Table_0_info\">\r\n            <thead>\r\n              <tr role=\"row\">\r\n                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"\" style=\"width: 307px;\">Nome</th>\r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 150px;\">CPF</th>\r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 230px;\">E-mail</th>\r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 350px;\">Endereco</th>\r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 233px;\">Sede/Localização</th> -->\r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Status</th> -->\r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\" style=\"width: 215px;\">Ações</th> -->\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr role=\"row\">\r\n                <tr role=\"row\" *ngFor=\"let registro of objLacadores\">\r\n                  <td class=\"sorting_1\"><a [routerLink]=\"['/lacadores-view', { id : registro._id , isView: true}]\">{{registro.name}}</a></td>\r\n                  <!-- <td>{{registro.razaosocial}}</td> -->\r\n                  <td>{{registro.cpf}}</td>\r\n                  <td>{{registro.email}}</td>\r\n                  <td>{{registro.endereco}}</td>\r\n                  <!-- <td>{{registro.status ? 'Ativo': 'Inativo'}}</td> -->\r\n\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"panel-footer\" id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n            <label style=\"float:right\"> {{this.registros}} <small>laçador(es) registrado(s)</small> </label>\r\n          </div>\r\n          <!-- <div class=\"dataTables_paginate paging_simple_numbers\" id=\"DataTables_Table_0_paginate\"><a class=\"paginate_button previous disabled\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"0\" tabindex=\"0\" id=\"DataTables_Table_0_previous\">Previous</a><span><a class=\"paginate_button current\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"1\" tabindex=\"0\">1</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"2\" tabindex=\"0\">2</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"3\" tabindex=\"0\">3</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"4\" tabindex=\"0\">4</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"5\" tabindex=\"0\">5</a><a class=\"paginate_button \" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"6\" tabindex=\"0\">6</a></span> -->\r\n          <!-- <a class=\"paginate_button next\" aria-controls=\"DataTables_Table_0\" data-dt-idx=\"7\" tabindex=\"0\" id=\"DataTables_Table_0_next\">Next</a> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/lacadores/lacadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LacadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lacadores_service__ = __webpack_require__("../../../../../src/app/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LacadoresComponent = (function () {
    function LacadoresComponent(validateService, flashMessage, federacaoService, router, clubesdelacoService, lacadoresService, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.federacaoService = federacaoService;
        this.router = router;
        this.clubesdelacoService = clubesdelacoService;
        this.lacadoresService = lacadoresService;
        this.route = route;
    }
    LacadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('isDetail: ' + this.isDetail);
        //console.log('paramIdClube??: ' + this.paramIdClube['paramIdClube']);
        this.registros = 0;
        if (this.paramIdClube) {
            this.lacadoresService.getLacadorByClubeId(String(this.paramIdClube)).subscribe(function (lacadores) {
                _this.registros = lacadores.length;
                _this.objLacadores = lacadores;
                //let lacadoresList = Object.keys(lacadores).map(function(key) { return lacadores[key]; });
                //this.objLacadores = lacadoresList;
            });
        }
        else {
            //busca todos os lacadores
            this.lacadoresService.getLacadores().subscribe(function (lacadores) {
                _this.registros = lacadores.length;
                //let lacadoresList = Object.keys(lacadores).map(function(key) { return lacadores[key]; });
                //this.objLacadores =   lacadoresList;
                _this.objLacadores = lacadores;
                //conta os registros
                // for (var key in lacadores) {
                //   if (!lacadores.hasOwnProperty(key)) continue;
                //   var obj = lacadores[key];
                //   for (var prop in obj) {
                //      // skip loop if the property is from prototype
                //      this.registros++;
                //       if(!obj.hasOwnProperty(prop)) continue;
                //   }
                // }
            });
        }
        //this.federacoes.count = 1 ;// = this.federacoes.length;
    };
    LacadoresComponent.prototype.onEditRequest = function (idLacador) {
        this.router.navigate(['/lacadores-view', { id: idLacador, isEdit: true }]);
    };
    LacadoresComponent.prototype.onDeleteRequest = function (idLacador) {
        var _this = this;
        this.lacadoresService.removeLacador(idLacador).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Registro removido com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
                location.reload();
                //this.router.navigate(['/federacao']);
            }
        });
    };
    return LacadoresComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LacadoresComponent.prototype, "isDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LacadoresComponent.prototype, "paramIdClube", void 0);
LacadoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lacadores',
        template: __webpack_require__("../../../../../src/app/components/lacadores/lacadores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/lacadores/lacadores.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_lacadores_service__["a" /* LacadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lacadores_service__["a" /* LacadoresService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], LacadoresComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=lacadores.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <div class=\"panel-title\">Fazer login</div>\n      <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#\">Esqueceu sua senha?</a></div>\n    </div>\n\n    <div style=\"padding-top:30px\" class=\"panel-body\">\n\n      <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n\n      <form (submit)=\"onLoginSubmit()\" id=\"loginform\" class=\"form-horizontal\">\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n          <input id=\"login-username\" type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" value=\"\" placeholder=\"usuário ou e-mail\">\n        </div>\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n          <input id=\"login-password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"senha\">\n        </div>\n\n\n        <div style=\"margin-top:10px\" class=\"form-group\">\n          <!-- Button -->\n\n          <div class=\"col-sm-12 controls\">\n            <input id=\"btn-login\" type=\"submit\" class=\"btn btn-success\" value=\"Login\">\n\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <div class=\"col-md-12 control\">\n            <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\n            Não possui uma conta?\n              <a [routerLink]=\"['/register']\">Registre-se aqui</a>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        //console.log(user);
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Você agora está logado', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,700);", ""]);

// module
exports.push([module.i, "/*!\r\n * bootswatch v3.3.7\r\n * Homepage: http://bootswatch.com\r\n * Copyright 2012-2017 Thomas Park\r\n * Licensed under MIT\r\n * Based on Bootstrap\r\n*/\r\n/*!\r\n * Bootstrap v3.3.7 (http://getbootstrap.com)\r\n * Copyright 2011-2016 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\r\nhtml {\r\n  font-family: sans-serif;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block;\r\n  vertical-align: baseline;\r\n}\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\na {\r\n  background-color: transparent;\r\n}\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\ndfn {\r\n  font-style: italic;\r\n}\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\nsmall {\r\n  font-size: 80%;\r\n}\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\nsup {\r\n  top: -0.5em;\r\n}\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\nimg {\r\n  border: 0;\r\n}\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\nhr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\npre {\r\n  overflow: auto;\r\n}\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit;\r\n  font: inherit;\r\n  margin: 0;\r\n}\r\nbutton {\r\n  overflow: visible;\r\n}\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\nbutton,\r\nhtml input[type=\"button\"],\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n  cursor: pointer;\r\n}\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\ninput {\r\n  line-height: normal;\r\n}\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield;\r\n  box-sizing: content-box;\r\n}\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\nlegend {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\ntextarea {\r\n  overflow: auto;\r\n}\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\r\n@media print {\r\n  *,\r\n  *:before,\r\n  *:after {\r\n    background: transparent !important;\r\n    color: #000 !important;\r\n    box-shadow: none !important;\r\n    text-shadow: none !important;\r\n  }\r\n  a,\r\n  a:visited {\r\n    text-decoration: underline;\r\n  }\r\n  a[href]:after {\r\n    content: \" (\" attr(href) \")\";\r\n  }\r\n  abbr[title]:after {\r\n    content: \" (\" attr(title) \")\";\r\n  }\r\n  a[href^=\"#\"]:after,\r\n  a[href^=\"javascript:\"]:after {\r\n    content: \"\";\r\n  }\r\n  pre,\r\n  blockquote {\r\n    border: 1px solid #999;\r\n    page-break-inside: avoid;\r\n  }\r\n  thead {\r\n    display: table-header-group;\r\n  }\r\n  tr,\r\n  img {\r\n    page-break-inside: avoid;\r\n  }\r\n  img {\r\n    max-width: 100% !important;\r\n  }\r\n  p,\r\n  h2,\r\n  h3 {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  h2,\r\n  h3 {\r\n    page-break-after: avoid;\r\n  }\r\n  .navbar {\r\n    display: none;\r\n  }\r\n  .btn > .caret,\r\n  .dropup > .btn > .caret {\r\n    border-top-color: #000 !important;\r\n  }\r\n  .label {\r\n    border: 1px solid #000;\r\n  }\r\n  .table {\r\n    border-collapse: collapse !important;\r\n  }\r\n  .table td,\r\n  .table th {\r\n    background-color: #fff !important;\r\n  }\r\n  .table-bordered th,\r\n  .table-bordered td {\r\n    border: 1px solid #ddd !important;\r\n  }\r\n}\r\n@font-face {\r\n  font-family: 'Glyphicons Halflings';\r\n  src: url('https://bootswatch.com/readable/fonts/glyphicons-halflings-regular.eot');\r\n  src: url('https://bootswatch.com/readable/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('https://bootswatch.com/readable//glyphicons-halflings-regular.woff2') format('woff2'), url('https://bootswatch.com/readable//glyphicons-halflings-regular.woff') format('woff'), url('https://bootswatch.com/readable//glyphicons-halflings-regular.ttf') format('truetype'), url('https://bootswatch.com/readable//glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');\r\n}\r\n.glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.glyphicon-asterisk:before {\r\n  content: \"*\";\r\n}\r\n.glyphicon-plus:before {\r\n  content: \"+\";\r\n}\r\n.glyphicon-euro:before,\r\n.glyphicon-eur:before {\r\n  content: \"\\20AC\";\r\n}\r\n.glyphicon-minus:before {\r\n  content: \"\\2212\";\r\n}\r\n.glyphicon-cloud:before {\r\n  content: \"\\2601\";\r\n}\r\n.glyphicon-envelope:before {\r\n  content: \"\\2709\";\r\n}\r\n.glyphicon-pencil:before {\r\n  content: \"\\270F\";\r\n}\r\n.glyphicon-glass:before {\r\n  content: \"\\E001\";\r\n}\r\n.glyphicon-music:before {\r\n  content: \"\\E002\";\r\n}\r\n.glyphicon-search:before {\r\n  content: \"\\E003\";\r\n}\r\n.glyphicon-heart:before {\r\n  content: \"\\E005\";\r\n}\r\n.glyphicon-star:before {\r\n  content: \"\\E006\";\r\n}\r\n.glyphicon-star-empty:before {\r\n  content: \"\\E007\";\r\n}\r\n.glyphicon-user:before {\r\n  content: \"\\E008\";\r\n}\r\n.glyphicon-film:before {\r\n  content: \"\\E009\";\r\n}\r\n.glyphicon-th-large:before {\r\n  content: \"\\E010\";\r\n}\r\n.glyphicon-th:before {\r\n  content: \"\\E011\";\r\n}\r\n.glyphicon-th-list:before {\r\n  content: \"\\E012\";\r\n}\r\n.glyphicon-ok:before {\r\n  content: \"\\E013\";\r\n}\r\n.glyphicon-remove:before {\r\n  content: \"\\E014\";\r\n}\r\n.glyphicon-zoom-in:before {\r\n  content: \"\\E015\";\r\n}\r\n.glyphicon-zoom-out:before {\r\n  content: \"\\E016\";\r\n}\r\n.glyphicon-off:before {\r\n  content: \"\\E017\";\r\n}\r\n.glyphicon-signal:before {\r\n  content: \"\\E018\";\r\n}\r\n.glyphicon-cog:before {\r\n  content: \"\\E019\";\r\n}\r\n.glyphicon-trash:before {\r\n  content: \"\\E020\";\r\n}\r\n.glyphicon-home:before {\r\n  content: \"\\E021\";\r\n}\r\n.glyphicon-file:before {\r\n  content: \"\\E022\";\r\n}\r\n.glyphicon-time:before {\r\n  content: \"\\E023\";\r\n}\r\n.glyphicon-road:before {\r\n  content: \"\\E024\";\r\n}\r\n.glyphicon-download-alt:before {\r\n  content: \"\\E025\";\r\n}\r\n.glyphicon-download:before {\r\n  content: \"\\E026\";\r\n}\r\n.glyphicon-upload:before {\r\n  content: \"\\E027\";\r\n}\r\n.glyphicon-inbox:before {\r\n  content: \"\\E028\";\r\n}\r\n.glyphicon-play-circle:before {\r\n  content: \"\\E029\";\r\n}\r\n.glyphicon-repeat:before {\r\n  content: \"\\E030\";\r\n}\r\n.glyphicon-refresh:before {\r\n  content: \"\\E031\";\r\n}\r\n.glyphicon-list-alt:before {\r\n  content: \"\\E032\";\r\n}\r\n.glyphicon-lock:before {\r\n  content: \"\\E033\";\r\n}\r\n.glyphicon-flag:before {\r\n  content: \"\\E034\";\r\n}\r\n.glyphicon-headphones:before {\r\n  content: \"\\E035\";\r\n}\r\n.glyphicon-volume-off:before {\r\n  content: \"\\E036\";\r\n}\r\n.glyphicon-volume-down:before {\r\n  content: \"\\E037\";\r\n}\r\n.glyphicon-volume-up:before {\r\n  content: \"\\E038\";\r\n}\r\n.glyphicon-qrcode:before {\r\n  content: \"\\E039\";\r\n}\r\n.glyphicon-barcode:before {\r\n  content: \"\\E040\";\r\n}\r\n.glyphicon-tag:before {\r\n  content: \"\\E041\";\r\n}\r\n.glyphicon-tags:before {\r\n  content: \"\\E042\";\r\n}\r\n.glyphicon-book:before {\r\n  content: \"\\E043\";\r\n}\r\n.glyphicon-bookmark:before {\r\n  content: \"\\E044\";\r\n}\r\n.glyphicon-print:before {\r\n  content: \"\\E045\";\r\n}\r\n.glyphicon-camera:before {\r\n  content: \"\\E046\";\r\n}\r\n.glyphicon-font:before {\r\n  content: \"\\E047\";\r\n}\r\n.glyphicon-bold:before {\r\n  content: \"\\E048\";\r\n}\r\n.glyphicon-italic:before {\r\n  content: \"\\E049\";\r\n}\r\n.glyphicon-text-height:before {\r\n  content: \"\\E050\";\r\n}\r\n.glyphicon-text-width:before {\r\n  content: \"\\E051\";\r\n}\r\n.glyphicon-align-left:before {\r\n  content: \"\\E052\";\r\n}\r\n.glyphicon-align-center:before {\r\n  content: \"\\E053\";\r\n}\r\n.glyphicon-align-right:before {\r\n  content: \"\\E054\";\r\n}\r\n.glyphicon-align-justify:before {\r\n  content: \"\\E055\";\r\n}\r\n.glyphicon-list:before {\r\n  content: \"\\E056\";\r\n}\r\n.glyphicon-indent-left:before {\r\n  content: \"\\E057\";\r\n}\r\n.glyphicon-indent-right:before {\r\n  content: \"\\E058\";\r\n}\r\n.glyphicon-facetime-video:before {\r\n  content: \"\\E059\";\r\n}\r\n.glyphicon-picture:before {\r\n  content: \"\\E060\";\r\n}\r\n.glyphicon-map-marker:before {\r\n  content: \"\\E062\";\r\n}\r\n.glyphicon-adjust:before {\r\n  content: \"\\E063\";\r\n}\r\n.glyphicon-tint:before {\r\n  content: \"\\E064\";\r\n}\r\n.glyphicon-edit:before {\r\n  content: \"\\E065\";\r\n}\r\n.glyphicon-share:before {\r\n  content: \"\\E066\";\r\n}\r\n.glyphicon-check:before {\r\n  content: \"\\E067\";\r\n}\r\n.glyphicon-move:before {\r\n  content: \"\\E068\";\r\n}\r\n.glyphicon-step-backward:before {\r\n  content: \"\\E069\";\r\n}\r\n.glyphicon-fast-backward:before {\r\n  content: \"\\E070\";\r\n}\r\n.glyphicon-backward:before {\r\n  content: \"\\E071\";\r\n}\r\n.glyphicon-play:before {\r\n  content: \"\\E072\";\r\n}\r\n.glyphicon-pause:before {\r\n  content: \"\\E073\";\r\n}\r\n.glyphicon-stop:before {\r\n  content: \"\\E074\";\r\n}\r\n.glyphicon-forward:before {\r\n  content: \"\\E075\";\r\n}\r\n.glyphicon-fast-forward:before {\r\n  content: \"\\E076\";\r\n}\r\n.glyphicon-step-forward:before {\r\n  content: \"\\E077\";\r\n}\r\n.glyphicon-eject:before {\r\n  content: \"\\E078\";\r\n}\r\n.glyphicon-chevron-left:before {\r\n  content: \"\\E079\";\r\n}\r\n.glyphicon-chevron-right:before {\r\n  content: \"\\E080\";\r\n}\r\n.glyphicon-plus-sign:before {\r\n  content: \"\\E081\";\r\n}\r\n.glyphicon-minus-sign:before {\r\n  content: \"\\E082\";\r\n}\r\n.glyphicon-remove-sign:before {\r\n  content: \"\\E083\";\r\n}\r\n.glyphicon-ok-sign:before {\r\n  content: \"\\E084\";\r\n}\r\n.glyphicon-question-sign:before {\r\n  content: \"\\E085\";\r\n}\r\n.glyphicon-info-sign:before {\r\n  content: \"\\E086\";\r\n}\r\n.glyphicon-screenshot:before {\r\n  content: \"\\E087\";\r\n}\r\n.glyphicon-remove-circle:before {\r\n  content: \"\\E088\";\r\n}\r\n.glyphicon-ok-circle:before {\r\n  content: \"\\E089\";\r\n}\r\n.glyphicon-ban-circle:before {\r\n  content: \"\\E090\";\r\n}\r\n.glyphicon-arrow-left:before {\r\n  content: \"\\E091\";\r\n}\r\n.glyphicon-arrow-right:before {\r\n  content: \"\\E092\";\r\n}\r\n.glyphicon-arrow-up:before {\r\n  content: \"\\E093\";\r\n}\r\n.glyphicon-arrow-down:before {\r\n  content: \"\\E094\";\r\n}\r\n.glyphicon-share-alt:before {\r\n  content: \"\\E095\";\r\n}\r\n.glyphicon-resize-full:before {\r\n  content: \"\\E096\";\r\n}\r\n.glyphicon-resize-small:before {\r\n  content: \"\\E097\";\r\n}\r\n.glyphicon-exclamation-sign:before {\r\n  content: \"\\E101\";\r\n}\r\n.glyphicon-gift:before {\r\n  content: \"\\E102\";\r\n}\r\n.glyphicon-leaf:before {\r\n  content: \"\\E103\";\r\n}\r\n.glyphicon-fire:before {\r\n  content: \"\\E104\";\r\n}\r\n.glyphicon-eye-open:before {\r\n  content: \"\\E105\";\r\n}\r\n.glyphicon-eye-close:before {\r\n  content: \"\\E106\";\r\n}\r\n.glyphicon-warning-sign:before {\r\n  content: \"\\E107\";\r\n}\r\n.glyphicon-plane:before {\r\n  content: \"\\E108\";\r\n}\r\n.glyphicon-calendar:before {\r\n  content: \"\\E109\";\r\n}\r\n.glyphicon-random:before {\r\n  content: \"\\E110\";\r\n}\r\n.glyphicon-comment:before {\r\n  content: \"\\E111\";\r\n}\r\n.glyphicon-magnet:before {\r\n  content: \"\\E112\";\r\n}\r\n.glyphicon-chevron-up:before {\r\n  content: \"\\E113\";\r\n}\r\n.glyphicon-chevron-down:before {\r\n  content: \"\\E114\";\r\n}\r\n.glyphicon-retweet:before {\r\n  content: \"\\E115\";\r\n}\r\n.glyphicon-shopping-cart:before {\r\n  content: \"\\E116\";\r\n}\r\n.glyphicon-folder-close:before {\r\n  content: \"\\E117\";\r\n}\r\n.glyphicon-folder-open:before {\r\n  content: \"\\E118\";\r\n}\r\n.glyphicon-resize-vertical:before {\r\n  content: \"\\E119\";\r\n}\r\n.glyphicon-resize-horizontal:before {\r\n  content: \"\\E120\";\r\n}\r\n.glyphicon-hdd:before {\r\n  content: \"\\E121\";\r\n}\r\n.glyphicon-bullhorn:before {\r\n  content: \"\\E122\";\r\n}\r\n.glyphicon-bell:before {\r\n  content: \"\\E123\";\r\n}\r\n.glyphicon-certificate:before {\r\n  content: \"\\E124\";\r\n}\r\n.glyphicon-thumbs-up:before {\r\n  content: \"\\E125\";\r\n}\r\n.glyphicon-thumbs-down:before {\r\n  content: \"\\E126\";\r\n}\r\n.glyphicon-hand-right:before {\r\n  content: \"\\E127\";\r\n}\r\n.glyphicon-hand-left:before {\r\n  content: \"\\E128\";\r\n}\r\n.glyphicon-hand-up:before {\r\n  content: \"\\E129\";\r\n}\r\n.glyphicon-hand-down:before {\r\n  content: \"\\E130\";\r\n}\r\n.glyphicon-circle-arrow-right:before {\r\n  content: \"\\E131\";\r\n}\r\n.glyphicon-circle-arrow-left:before {\r\n  content: \"\\E132\";\r\n}\r\n.glyphicon-circle-arrow-up:before {\r\n  content: \"\\E133\";\r\n}\r\n.glyphicon-circle-arrow-down:before {\r\n  content: \"\\E134\";\r\n}\r\n.glyphicon-globe:before {\r\n  content: \"\\E135\";\r\n}\r\n.glyphicon-wrench:before {\r\n  content: \"\\E136\";\r\n}\r\n.glyphicon-tasks:before {\r\n  content: \"\\E137\";\r\n}\r\n.glyphicon-filter:before {\r\n  content: \"\\E138\";\r\n}\r\n.glyphicon-briefcase:before {\r\n  content: \"\\E139\";\r\n}\r\n.glyphicon-fullscreen:before {\r\n  content: \"\\E140\";\r\n}\r\n.glyphicon-dashboard:before {\r\n  content: \"\\E141\";\r\n}\r\n.glyphicon-paperclip:before {\r\n  content: \"\\E142\";\r\n}\r\n.glyphicon-heart-empty:before {\r\n  content: \"\\E143\";\r\n}\r\n.glyphicon-link:before {\r\n  content: \"\\E144\";\r\n}\r\n.glyphicon-phone:before {\r\n  content: \"\\E145\";\r\n}\r\n.glyphicon-pushpin:before {\r\n  content: \"\\E146\";\r\n}\r\n.glyphicon-usd:before {\r\n  content: \"\\E148\";\r\n}\r\n.glyphicon-gbp:before {\r\n  content: \"\\E149\";\r\n}\r\n.glyphicon-sort:before {\r\n  content: \"\\E150\";\r\n}\r\n.glyphicon-sort-by-alphabet:before {\r\n  content: \"\\E151\";\r\n}\r\n.glyphicon-sort-by-alphabet-alt:before {\r\n  content: \"\\E152\";\r\n}\r\n.glyphicon-sort-by-order:before {\r\n  content: \"\\E153\";\r\n}\r\n.glyphicon-sort-by-order-alt:before {\r\n  content: \"\\E154\";\r\n}\r\n.glyphicon-sort-by-attributes:before {\r\n  content: \"\\E155\";\r\n}\r\n.glyphicon-sort-by-attributes-alt:before {\r\n  content: \"\\E156\";\r\n}\r\n.glyphicon-unchecked:before {\r\n  content: \"\\E157\";\r\n}\r\n.glyphicon-expand:before {\r\n  content: \"\\E158\";\r\n}\r\n.glyphicon-collapse-down:before {\r\n  content: \"\\E159\";\r\n}\r\n.glyphicon-collapse-up:before {\r\n  content: \"\\E160\";\r\n}\r\n.glyphicon-log-in:before {\r\n  content: \"\\E161\";\r\n}\r\n.glyphicon-flash:before {\r\n  content: \"\\E162\";\r\n}\r\n.glyphicon-log-out:before {\r\n  content: \"\\E163\";\r\n}\r\n.glyphicon-new-window:before {\r\n  content: \"\\E164\";\r\n}\r\n.glyphicon-record:before {\r\n  content: \"\\E165\";\r\n}\r\n.glyphicon-save:before {\r\n  content: \"\\E166\";\r\n}\r\n.glyphicon-open:before {\r\n  content: \"\\E167\";\r\n}\r\n.glyphicon-saved:before {\r\n  content: \"\\E168\";\r\n}\r\n.glyphicon-import:before {\r\n  content: \"\\E169\";\r\n}\r\n.glyphicon-export:before {\r\n  content: \"\\E170\";\r\n}\r\n.glyphicon-send:before {\r\n  content: \"\\E171\";\r\n}\r\n.glyphicon-floppy-disk:before {\r\n  content: \"\\E172\";\r\n}\r\n.glyphicon-floppy-saved:before {\r\n  content: \"\\E173\";\r\n}\r\n.glyphicon-floppy-remove:before {\r\n  content: \"\\E174\";\r\n}\r\n.glyphicon-floppy-save:before {\r\n  content: \"\\E175\";\r\n}\r\n.glyphicon-floppy-open:before {\r\n  content: \"\\E176\";\r\n}\r\n.glyphicon-credit-card:before {\r\n  content: \"\\E177\";\r\n}\r\n.glyphicon-transfer:before {\r\n  content: \"\\E178\";\r\n}\r\n.glyphicon-cutlery:before {\r\n  content: \"\\E179\";\r\n}\r\n.glyphicon-header:before {\r\n  content: \"\\E180\";\r\n}\r\n.glyphicon-compressed:before {\r\n  content: \"\\E181\";\r\n}\r\n.glyphicon-earphone:before {\r\n  content: \"\\E182\";\r\n}\r\n.glyphicon-phone-alt:before {\r\n  content: \"\\E183\";\r\n}\r\n.glyphicon-tower:before {\r\n  content: \"\\E184\";\r\n}\r\n.glyphicon-stats:before {\r\n  content: \"\\E185\";\r\n}\r\n.glyphicon-sd-video:before {\r\n  content: \"\\E186\";\r\n}\r\n.glyphicon-hd-video:before {\r\n  content: \"\\E187\";\r\n}\r\n.glyphicon-subtitles:before {\r\n  content: \"\\E188\";\r\n}\r\n.glyphicon-sound-stereo:before {\r\n  content: \"\\E189\";\r\n}\r\n.glyphicon-sound-dolby:before {\r\n  content: \"\\E190\";\r\n}\r\n.glyphicon-sound-5-1:before {\r\n  content: \"\\E191\";\r\n}\r\n.glyphicon-sound-6-1:before {\r\n  content: \"\\E192\";\r\n}\r\n.glyphicon-sound-7-1:before {\r\n  content: \"\\E193\";\r\n}\r\n.glyphicon-copyright-mark:before {\r\n  content: \"\\E194\";\r\n}\r\n.glyphicon-registration-mark:before {\r\n  content: \"\\E195\";\r\n}\r\n.glyphicon-cloud-download:before {\r\n  content: \"\\E197\";\r\n}\r\n.glyphicon-cloud-upload:before {\r\n  content: \"\\E198\";\r\n}\r\n.glyphicon-tree-conifer:before {\r\n  content: \"\\E199\";\r\n}\r\n.glyphicon-tree-deciduous:before {\r\n  content: \"\\E200\";\r\n}\r\n.glyphicon-cd:before {\r\n  content: \"\\E201\";\r\n}\r\n.glyphicon-save-file:before {\r\n  content: \"\\E202\";\r\n}\r\n.glyphicon-open-file:before {\r\n  content: \"\\E203\";\r\n}\r\n.glyphicon-level-up:before {\r\n  content: \"\\E204\";\r\n}\r\n.glyphicon-copy:before {\r\n  content: \"\\E205\";\r\n}\r\n.glyphicon-paste:before {\r\n  content: \"\\E206\";\r\n}\r\n.glyphicon-alert:before {\r\n  content: \"\\E209\";\r\n}\r\n.glyphicon-equalizer:before {\r\n  content: \"\\E210\";\r\n}\r\n.glyphicon-king:before {\r\n  content: \"\\E211\";\r\n}\r\n.glyphicon-queen:before {\r\n  content: \"\\E212\";\r\n}\r\n.glyphicon-pawn:before {\r\n  content: \"\\E213\";\r\n}\r\n.glyphicon-bishop:before {\r\n  content: \"\\E214\";\r\n}\r\n.glyphicon-knight:before {\r\n  content: \"\\E215\";\r\n}\r\n.glyphicon-baby-formula:before {\r\n  content: \"\\E216\";\r\n}\r\n.glyphicon-tent:before {\r\n  content: \"\\26FA\";\r\n}\r\n.glyphicon-blackboard:before {\r\n  content: \"\\E218\";\r\n}\r\n.glyphicon-bed:before {\r\n  content: \"\\E219\";\r\n}\r\n.glyphicon-apple:before {\r\n  content: \"\\F8FF\";\r\n}\r\n.glyphicon-erase:before {\r\n  content: \"\\E221\";\r\n}\r\n.glyphicon-hourglass:before {\r\n  content: \"\\231B\";\r\n}\r\n.glyphicon-lamp:before {\r\n  content: \"\\E223\";\r\n}\r\n.glyphicon-duplicate:before {\r\n  content: \"\\E224\";\r\n}\r\n.glyphicon-piggy-bank:before {\r\n  content: \"\\E225\";\r\n}\r\n.glyphicon-scissors:before {\r\n  content: \"\\E226\";\r\n}\r\n.glyphicon-bitcoin:before {\r\n  content: \"\\E227\";\r\n}\r\n.glyphicon-btc:before {\r\n  content: \"\\E227\";\r\n}\r\n.glyphicon-xbt:before {\r\n  content: \"\\E227\";\r\n}\r\n.glyphicon-yen:before {\r\n  content: \"\\A5\";\r\n}\r\n.glyphicon-jpy:before {\r\n  content: \"\\A5\";\r\n}\r\n.glyphicon-ruble:before {\r\n  content: \"\\20BD\";\r\n}\r\n.glyphicon-rub:before {\r\n  content: \"\\20BD\";\r\n}\r\n.glyphicon-scale:before {\r\n  content: \"\\E230\";\r\n}\r\n.glyphicon-ice-lolly:before {\r\n  content: \"\\E231\";\r\n}\r\n.glyphicon-ice-lolly-tasted:before {\r\n  content: \"\\E232\";\r\n}\r\n.glyphicon-education:before {\r\n  content: \"\\E233\";\r\n}\r\n.glyphicon-option-horizontal:before {\r\n  content: \"\\E234\";\r\n}\r\n.glyphicon-option-vertical:before {\r\n  content: \"\\E235\";\r\n}\r\n.glyphicon-menu-hamburger:before {\r\n  content: \"\\E236\";\r\n}\r\n.glyphicon-modal-window:before {\r\n  content: \"\\E237\";\r\n}\r\n.glyphicon-oil:before {\r\n  content: \"\\E238\";\r\n}\r\n.glyphicon-grain:before {\r\n  content: \"\\E239\";\r\n}\r\n.glyphicon-sunglasses:before {\r\n  content: \"\\E240\";\r\n}\r\n.glyphicon-text-size:before {\r\n  content: \"\\E241\";\r\n}\r\n.glyphicon-text-color:before {\r\n  content: \"\\E242\";\r\n}\r\n.glyphicon-text-background:before {\r\n  content: \"\\E243\";\r\n}\r\n.glyphicon-object-align-top:before {\r\n  content: \"\\E244\";\r\n}\r\n.glyphicon-object-align-bottom:before {\r\n  content: \"\\E245\";\r\n}\r\n.glyphicon-object-align-horizontal:before {\r\n  content: \"\\E246\";\r\n}\r\n.glyphicon-object-align-left:before {\r\n  content: \"\\E247\";\r\n}\r\n.glyphicon-object-align-vertical:before {\r\n  content: \"\\E248\";\r\n}\r\n.glyphicon-object-align-right:before {\r\n  content: \"\\E249\";\r\n}\r\n.glyphicon-triangle-right:before {\r\n  content: \"\\E250\";\r\n}\r\n.glyphicon-triangle-left:before {\r\n  content: \"\\E251\";\r\n}\r\n.glyphicon-triangle-bottom:before {\r\n  content: \"\\E252\";\r\n}\r\n.glyphicon-triangle-top:before {\r\n  content: \"\\E253\";\r\n}\r\n.glyphicon-console:before {\r\n  content: \"\\E254\";\r\n}\r\n.glyphicon-superscript:before {\r\n  content: \"\\E255\";\r\n}\r\n.glyphicon-subscript:before {\r\n  content: \"\\E256\";\r\n}\r\n.glyphicon-menu-left:before {\r\n  content: \"\\E257\";\r\n}\r\n.glyphicon-menu-right:before {\r\n  content: \"\\E258\";\r\n}\r\n.glyphicon-menu-down:before {\r\n  content: \"\\E259\";\r\n}\r\n.glyphicon-menu-up:before {\r\n  content: \"\\E260\";\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  font-size: 10px;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\nbody {\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #333333;\r\n  background-color: #ffffff;\r\n}\r\ninput,\r\nbutton,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\na {\r\n  color: #4582ec;\r\n  text-decoration: none;\r\n}\r\na:hover,\r\na:focus {\r\n  color: #134fb8;\r\n  text-decoration: underline;\r\n}\r\na:focus {\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\nfigure {\r\n  margin: 0;\r\n}\r\nimg {\r\n  vertical-align: middle;\r\n}\r\n.img-responsive,\r\n.thumbnail > img,\r\n.thumbnail a > img,\r\n.carousel-inner > .item > img,\r\n.carousel-inner > .item > a > img {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.img-rounded {\r\n  border-radius: 6px;\r\n}\r\n.img-thumbnail {\r\n  padding: 4px;\r\n  line-height: 1.42857143;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n  border-radius: 4px;\r\n  transition: all 0.2s ease-in-out;\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.img-circle {\r\n  border-radius: 50%;\r\n}\r\nhr {\r\n  margin-top: 22px;\r\n  margin-bottom: 22px;\r\n  border: 0;\r\n  border-top: 1px solid #eeeeee;\r\n}\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\n.h1,\r\n.h2,\r\n.h3,\r\n.h4,\r\n.h5,\r\n.h6 {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-weight: bold;\r\n  line-height: 1.1;\r\n  color: inherit;\r\n}\r\nh1 small,\r\nh2 small,\r\nh3 small,\r\nh4 small,\r\nh5 small,\r\nh6 small,\r\n.h1 small,\r\n.h2 small,\r\n.h3 small,\r\n.h4 small,\r\n.h5 small,\r\n.h6 small,\r\nh1 .small,\r\nh2 .small,\r\nh3 .small,\r\nh4 .small,\r\nh5 .small,\r\nh6 .small,\r\n.h1 .small,\r\n.h2 .small,\r\n.h3 .small,\r\n.h4 .small,\r\n.h5 .small,\r\n.h6 .small {\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #b3b3b3;\r\n}\r\nh1,\r\n.h1,\r\nh2,\r\n.h2,\r\nh3,\r\n.h3 {\r\n  margin-top: 22px;\r\n  margin-bottom: 11px;\r\n}\r\nh1 small,\r\n.h1 small,\r\nh2 small,\r\n.h2 small,\r\nh3 small,\r\n.h3 small,\r\nh1 .small,\r\n.h1 .small,\r\nh2 .small,\r\n.h2 .small,\r\nh3 .small,\r\n.h3 .small {\r\n  font-size: 65%;\r\n}\r\nh4,\r\n.h4,\r\nh5,\r\n.h5,\r\nh6,\r\n.h6 {\r\n  margin-top: 11px;\r\n  margin-bottom: 11px;\r\n}\r\nh4 small,\r\n.h4 small,\r\nh5 small,\r\n.h5 small,\r\nh6 small,\r\n.h6 small,\r\nh4 .small,\r\n.h4 .small,\r\nh5 .small,\r\n.h5 .small,\r\nh6 .small,\r\n.h6 .small {\r\n  font-size: 75%;\r\n}\r\nh1,\r\n.h1 {\r\n  font-size: 41px;\r\n}\r\nh2,\r\n.h2 {\r\n  font-size: 34px;\r\n}\r\nh3,\r\n.h3 {\r\n  font-size: 28px;\r\n}\r\nh4,\r\n.h4 {\r\n  font-size: 20px;\r\n}\r\nh5,\r\n.h5 {\r\n  font-size: 16px;\r\n}\r\nh6,\r\n.h6 {\r\n  font-size: 14px;\r\n}\r\np {\r\n  margin: 0 0 11px;\r\n}\r\n.lead {\r\n  margin-bottom: 22px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 1.4;\r\n}\r\n@media (min-width: 768px) {\r\n  .lead {\r\n    font-size: 24px;\r\n  }\r\n}\r\nsmall,\r\n.small {\r\n  font-size: 87%;\r\n}\r\nmark,\r\n.mark {\r\n  background-color: #fcf8e3;\r\n  padding: .2em;\r\n}\r\n.text-left {\r\n  text-align: left;\r\n}\r\n.text-right {\r\n  text-align: right;\r\n}\r\n.text-center {\r\n  text-align: center;\r\n}\r\n.text-justify {\r\n  text-align: justify;\r\n}\r\n.text-nowrap {\r\n  white-space: nowrap;\r\n}\r\n.text-lowercase {\r\n  text-transform: lowercase;\r\n}\r\n.text-uppercase {\r\n  text-transform: uppercase;\r\n}\r\n.text-capitalize {\r\n  text-transform: capitalize;\r\n}\r\n.text-muted {\r\n  color: #b3b3b3;\r\n}\r\n.text-primary {\r\n  color: #4582ec;\r\n}\r\na.text-primary:hover,\r\na.text-primary:focus {\r\n  color: #1863e6;\r\n}\r\n.text-success {\r\n  color: #3fad46;\r\n}\r\na.text-success:hover,\r\na.text-success:focus {\r\n  color: #318837;\r\n}\r\n.text-info {\r\n  color: #5bc0de;\r\n}\r\na.text-info:hover,\r\na.text-info:focus {\r\n  color: #31b0d5;\r\n}\r\n.text-warning {\r\n  color: #f0ad4e;\r\n}\r\na.text-warning:hover,\r\na.text-warning:focus {\r\n  color: #ec971f;\r\n}\r\n.text-danger {\r\n  color: #d9534f;\r\n}\r\na.text-danger:hover,\r\na.text-danger:focus {\r\n  color: #c9302c;\r\n}\r\n.bg-primary {\r\n  color: #fff;\r\n  background-color: #4582ec;\r\n}\r\na.bg-primary:hover,\r\na.bg-primary:focus {\r\n  background-color: #1863e6;\r\n}\r\n.bg-success {\r\n  background-color: #dff0d8;\r\n}\r\na.bg-success:hover,\r\na.bg-success:focus {\r\n  background-color: #c1e2b3;\r\n}\r\n.bg-info {\r\n  background-color: #d9edf7;\r\n}\r\na.bg-info:hover,\r\na.bg-info:focus {\r\n  background-color: #afd9ee;\r\n}\r\n.bg-warning {\r\n  background-color: #fcf8e3;\r\n}\r\na.bg-warning:hover,\r\na.bg-warning:focus {\r\n  background-color: #f7ecb5;\r\n}\r\n.bg-danger {\r\n  background-color: #f2dede;\r\n}\r\na.bg-danger:hover,\r\na.bg-danger:focus {\r\n  background-color: #e4b9b9;\r\n}\r\n.page-header {\r\n  padding-bottom: 10px;\r\n  margin: 44px 0 22px;\r\n  border-bottom: 1px solid #dddddd;\r\n}\r\nul,\r\nol {\r\n  margin-top: 0;\r\n  margin-bottom: 11px;\r\n}\r\nul ul,\r\nol ul,\r\nul ol,\r\nol ol {\r\n  margin-bottom: 0;\r\n}\r\n.list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.list-inline {\r\n  padding-left: 0;\r\n  list-style: none;\r\n  margin-left: -5px;\r\n}\r\n.list-inline > li {\r\n  display: inline-block;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\ndl {\r\n  margin-top: 0;\r\n  margin-bottom: 22px;\r\n}\r\ndt,\r\ndd {\r\n  line-height: 1.42857143;\r\n}\r\ndt {\r\n  font-weight: bold;\r\n}\r\ndd {\r\n  margin-left: 0;\r\n}\r\n@media (min-width: 768px) {\r\n  .dl-horizontal dt {\r\n    float: left;\r\n    width: 160px;\r\n    clear: left;\r\n    text-align: right;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n  }\r\n  .dl-horizontal dd {\r\n    margin-left: 180px;\r\n  }\r\n}\r\nabbr[title],\r\nabbr[data-original-title] {\r\n  cursor: help;\r\n  border-bottom: 1px dotted #b3b3b3;\r\n}\r\n.initialism {\r\n  font-size: 90%;\r\n  text-transform: uppercase;\r\n}\r\nblockquote {\r\n  padding: 11px 22px;\r\n  margin: 0 0 22px;\r\n  font-size: 20px;\r\n  border-left: 5px solid #4582ec;\r\n}\r\nblockquote p:last-child,\r\nblockquote ul:last-child,\r\nblockquote ol:last-child {\r\n  margin-bottom: 0;\r\n}\r\nblockquote footer,\r\nblockquote small,\r\nblockquote .small {\r\n  display: block;\r\n  font-size: 80%;\r\n  line-height: 1.42857143;\r\n  color: #333333;\r\n}\r\nblockquote footer:before,\r\nblockquote small:before,\r\nblockquote .small:before {\r\n  content: '\\2014   \\A0';\r\n}\r\n.blockquote-reverse,\r\nblockquote.pull-right {\r\n  padding-right: 15px;\r\n  padding-left: 0;\r\n  border-right: 5px solid #4582ec;\r\n  border-left: 0;\r\n  text-align: right;\r\n}\r\n.blockquote-reverse footer:before,\r\nblockquote.pull-right footer:before,\r\n.blockquote-reverse small:before,\r\nblockquote.pull-right small:before,\r\n.blockquote-reverse .small:before,\r\nblockquote.pull-right .small:before {\r\n  content: '';\r\n}\r\n.blockquote-reverse footer:after,\r\nblockquote.pull-right footer:after,\r\n.blockquote-reverse small:after,\r\nblockquote.pull-right small:after,\r\n.blockquote-reverse .small:after,\r\nblockquote.pull-right .small:after {\r\n  content: '\\A0   \\2014';\r\n}\r\naddress {\r\n  margin-bottom: 22px;\r\n  font-style: normal;\r\n  line-height: 1.42857143;\r\n}\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n}\r\ncode {\r\n  padding: 2px 4px;\r\n  font-size: 90%;\r\n  color: #c7254e;\r\n  background-color: #f9f2f4;\r\n  border-radius: 4px;\r\n}\r\nkbd {\r\n  padding: 2px 4px;\r\n  font-size: 90%;\r\n  color: #ffffff;\r\n  background-color: #333333;\r\n  border-radius: 3px;\r\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\nkbd kbd {\r\n  padding: 0;\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n  box-shadow: none;\r\n}\r\npre {\r\n  display: block;\r\n  padding: 10.5px;\r\n  margin: 0 0 11px;\r\n  font-size: 15px;\r\n  line-height: 1.42857143;\r\n  word-break: break-all;\r\n  word-wrap: break-word;\r\n  color: #333333;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 4px;\r\n}\r\npre code {\r\n  padding: 0;\r\n  font-size: inherit;\r\n  color: inherit;\r\n  white-space: pre-wrap;\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\n.pre-scrollable {\r\n  max-height: 340px;\r\n  overflow-y: scroll;\r\n}\r\n.container {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .container {\r\n    width: 750px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .container {\r\n    width: 970px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    width: 1170px;\r\n  }\r\n}\r\n.container-fluid {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.row {\r\n  margin-left: -15px;\r\n  margin-right: -15px;\r\n}\r\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\r\n  position: relative;\r\n  min-height: 1px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\r\n  float: left;\r\n}\r\n.col-xs-12 {\r\n  width: 100%;\r\n}\r\n.col-xs-11 {\r\n  width: 91.66666667%;\r\n}\r\n.col-xs-10 {\r\n  width: 83.33333333%;\r\n}\r\n.col-xs-9 {\r\n  width: 75%;\r\n}\r\n.col-xs-8 {\r\n  width: 66.66666667%;\r\n}\r\n.col-xs-7 {\r\n  width: 58.33333333%;\r\n}\r\n.col-xs-6 {\r\n  width: 50%;\r\n}\r\n.col-xs-5 {\r\n  width: 41.66666667%;\r\n}\r\n.col-xs-4 {\r\n  width: 33.33333333%;\r\n}\r\n.col-xs-3 {\r\n  width: 25%;\r\n}\r\n.col-xs-2 {\r\n  width: 16.66666667%;\r\n}\r\n.col-xs-1 {\r\n  width: 8.33333333%;\r\n}\r\n.col-xs-pull-12 {\r\n  right: 100%;\r\n}\r\n.col-xs-pull-11 {\r\n  right: 91.66666667%;\r\n}\r\n.col-xs-pull-10 {\r\n  right: 83.33333333%;\r\n}\r\n.col-xs-pull-9 {\r\n  right: 75%;\r\n}\r\n.col-xs-pull-8 {\r\n  right: 66.66666667%;\r\n}\r\n.col-xs-pull-7 {\r\n  right: 58.33333333%;\r\n}\r\n.col-xs-pull-6 {\r\n  right: 50%;\r\n}\r\n.col-xs-pull-5 {\r\n  right: 41.66666667%;\r\n}\r\n.col-xs-pull-4 {\r\n  right: 33.33333333%;\r\n}\r\n.col-xs-pull-3 {\r\n  right: 25%;\r\n}\r\n.col-xs-pull-2 {\r\n  right: 16.66666667%;\r\n}\r\n.col-xs-pull-1 {\r\n  right: 8.33333333%;\r\n}\r\n.col-xs-pull-0 {\r\n  right: auto;\r\n}\r\n.col-xs-push-12 {\r\n  left: 100%;\r\n}\r\n.col-xs-push-11 {\r\n  left: 91.66666667%;\r\n}\r\n.col-xs-push-10 {\r\n  left: 83.33333333%;\r\n}\r\n.col-xs-push-9 {\r\n  left: 75%;\r\n}\r\n.col-xs-push-8 {\r\n  left: 66.66666667%;\r\n}\r\n.col-xs-push-7 {\r\n  left: 58.33333333%;\r\n}\r\n.col-xs-push-6 {\r\n  left: 50%;\r\n}\r\n.col-xs-push-5 {\r\n  left: 41.66666667%;\r\n}\r\n.col-xs-push-4 {\r\n  left: 33.33333333%;\r\n}\r\n.col-xs-push-3 {\r\n  left: 25%;\r\n}\r\n.col-xs-push-2 {\r\n  left: 16.66666667%;\r\n}\r\n.col-xs-push-1 {\r\n  left: 8.33333333%;\r\n}\r\n.col-xs-push-0 {\r\n  left: auto;\r\n}\r\n.col-xs-offset-12 {\r\n  margin-left: 100%;\r\n}\r\n.col-xs-offset-11 {\r\n  margin-left: 91.66666667%;\r\n}\r\n.col-xs-offset-10 {\r\n  margin-left: 83.33333333%;\r\n}\r\n.col-xs-offset-9 {\r\n  margin-left: 75%;\r\n}\r\n.col-xs-offset-8 {\r\n  margin-left: 66.66666667%;\r\n}\r\n.col-xs-offset-7 {\r\n  margin-left: 58.33333333%;\r\n}\r\n.col-xs-offset-6 {\r\n  margin-left: 50%;\r\n}\r\n.col-xs-offset-5 {\r\n  margin-left: 41.66666667%;\r\n}\r\n.col-xs-offset-4 {\r\n  margin-left: 33.33333333%;\r\n}\r\n.col-xs-offset-3 {\r\n  margin-left: 25%;\r\n}\r\n.col-xs-offset-2 {\r\n  margin-left: 16.66666667%;\r\n}\r\n.col-xs-offset-1 {\r\n  margin-left: 8.33333333%;\r\n}\r\n.col-xs-offset-0 {\r\n  margin-left: 0%;\r\n}\r\n@media (min-width: 768px) {\r\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\r\n    float: left;\r\n  }\r\n  .col-sm-12 {\r\n    width: 100%;\r\n  }\r\n  .col-sm-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-sm-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-sm-9 {\r\n    width: 75%;\r\n  }\r\n  .col-sm-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-sm-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-sm-6 {\r\n    width: 50%;\r\n  }\r\n  .col-sm-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-sm-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-sm-3 {\r\n    width: 25%;\r\n  }\r\n  .col-sm-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-sm-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .col-sm-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .col-sm-pull-11 {\r\n    right: 91.66666667%;\r\n  }\r\n  .col-sm-pull-10 {\r\n    right: 83.33333333%;\r\n  }\r\n  .col-sm-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .col-sm-pull-8 {\r\n    right: 66.66666667%;\r\n  }\r\n  .col-sm-pull-7 {\r\n    right: 58.33333333%;\r\n  }\r\n  .col-sm-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .col-sm-pull-5 {\r\n    right: 41.66666667%;\r\n  }\r\n  .col-sm-pull-4 {\r\n    right: 33.33333333%;\r\n  }\r\n  .col-sm-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .col-sm-pull-2 {\r\n    right: 16.66666667%;\r\n  }\r\n  .col-sm-pull-1 {\r\n    right: 8.33333333%;\r\n  }\r\n  .col-sm-pull-0 {\r\n    right: auto;\r\n  }\r\n  .col-sm-push-12 {\r\n    left: 100%;\r\n  }\r\n  .col-sm-push-11 {\r\n    left: 91.66666667%;\r\n  }\r\n  .col-sm-push-10 {\r\n    left: 83.33333333%;\r\n  }\r\n  .col-sm-push-9 {\r\n    left: 75%;\r\n  }\r\n  .col-sm-push-8 {\r\n    left: 66.66666667%;\r\n  }\r\n  .col-sm-push-7 {\r\n    left: 58.33333333%;\r\n  }\r\n  .col-sm-push-6 {\r\n    left: 50%;\r\n  }\r\n  .col-sm-push-5 {\r\n    left: 41.66666667%;\r\n  }\r\n  .col-sm-push-4 {\r\n    left: 33.33333333%;\r\n  }\r\n  .col-sm-push-3 {\r\n    left: 25%;\r\n  }\r\n  .col-sm-push-2 {\r\n    left: 16.66666667%;\r\n  }\r\n  .col-sm-push-1 {\r\n    left: 8.33333333%;\r\n  }\r\n  .col-sm-push-0 {\r\n    left: auto;\r\n  }\r\n  .col-sm-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .col-sm-offset-11 {\r\n    margin-left: 91.66666667%;\r\n  }\r\n  .col-sm-offset-10 {\r\n    margin-left: 83.33333333%;\r\n  }\r\n  .col-sm-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .col-sm-offset-8 {\r\n    margin-left: 66.66666667%;\r\n  }\r\n  .col-sm-offset-7 {\r\n    margin-left: 58.33333333%;\r\n  }\r\n  .col-sm-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .col-sm-offset-5 {\r\n    margin-left: 41.66666667%;\r\n  }\r\n  .col-sm-offset-4 {\r\n    margin-left: 33.33333333%;\r\n  }\r\n  .col-sm-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .col-sm-offset-2 {\r\n    margin-left: 16.66666667%;\r\n  }\r\n  .col-sm-offset-1 {\r\n    margin-left: 8.33333333%;\r\n  }\r\n  .col-sm-offset-0 {\r\n    margin-left: 0%;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\r\n    float: left;\r\n  }\r\n  .col-md-12 {\r\n    width: 100%;\r\n  }\r\n  .col-md-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-md-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-md-9 {\r\n    width: 75%;\r\n  }\r\n  .col-md-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-md-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-md-6 {\r\n    width: 50%;\r\n  }\r\n  .col-md-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-md-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-md-3 {\r\n    width: 25%;\r\n  }\r\n  .col-md-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-md-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .col-md-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .col-md-pull-11 {\r\n    right: 91.66666667%;\r\n  }\r\n  .col-md-pull-10 {\r\n    right: 83.33333333%;\r\n  }\r\n  .col-md-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .col-md-pull-8 {\r\n    right: 66.66666667%;\r\n  }\r\n  .col-md-pull-7 {\r\n    right: 58.33333333%;\r\n  }\r\n  .col-md-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .col-md-pull-5 {\r\n    right: 41.66666667%;\r\n  }\r\n  .col-md-pull-4 {\r\n    right: 33.33333333%;\r\n  }\r\n  .col-md-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .col-md-pull-2 {\r\n    right: 16.66666667%;\r\n  }\r\n  .col-md-pull-1 {\r\n    right: 8.33333333%;\r\n  }\r\n  .col-md-pull-0 {\r\n    right: auto;\r\n  }\r\n  .col-md-push-12 {\r\n    left: 100%;\r\n  }\r\n  .col-md-push-11 {\r\n    left: 91.66666667%;\r\n  }\r\n  .col-md-push-10 {\r\n    left: 83.33333333%;\r\n  }\r\n  .col-md-push-9 {\r\n    left: 75%;\r\n  }\r\n  .col-md-push-8 {\r\n    left: 66.66666667%;\r\n  }\r\n  .col-md-push-7 {\r\n    left: 58.33333333%;\r\n  }\r\n  .col-md-push-6 {\r\n    left: 50%;\r\n  }\r\n  .col-md-push-5 {\r\n    left: 41.66666667%;\r\n  }\r\n  .col-md-push-4 {\r\n    left: 33.33333333%;\r\n  }\r\n  .col-md-push-3 {\r\n    left: 25%;\r\n  }\r\n  .col-md-push-2 {\r\n    left: 16.66666667%;\r\n  }\r\n  .col-md-push-1 {\r\n    left: 8.33333333%;\r\n  }\r\n  .col-md-push-0 {\r\n    left: auto;\r\n  }\r\n  .col-md-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .col-md-offset-11 {\r\n    margin-left: 91.66666667%;\r\n  }\r\n  .col-md-offset-10 {\r\n    margin-left: 83.33333333%;\r\n  }\r\n  .col-md-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .col-md-offset-8 {\r\n    margin-left: 66.66666667%;\r\n  }\r\n  .col-md-offset-7 {\r\n    margin-left: 58.33333333%;\r\n  }\r\n  .col-md-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .col-md-offset-5 {\r\n    margin-left: 41.66666667%;\r\n  }\r\n  .col-md-offset-4 {\r\n    margin-left: 33.33333333%;\r\n  }\r\n  .col-md-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .col-md-offset-2 {\r\n    margin-left: 16.66666667%;\r\n  }\r\n  .col-md-offset-1 {\r\n    margin-left: 8.33333333%;\r\n  }\r\n  .col-md-offset-0 {\r\n    margin-left: 0%;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\r\n    float: left;\r\n  }\r\n  .col-lg-12 {\r\n    width: 100%;\r\n  }\r\n  .col-lg-11 {\r\n    width: 91.66666667%;\r\n  }\r\n  .col-lg-10 {\r\n    width: 83.33333333%;\r\n  }\r\n  .col-lg-9 {\r\n    width: 75%;\r\n  }\r\n  .col-lg-8 {\r\n    width: 66.66666667%;\r\n  }\r\n  .col-lg-7 {\r\n    width: 58.33333333%;\r\n  }\r\n  .col-lg-6 {\r\n    width: 50%;\r\n  }\r\n  .col-lg-5 {\r\n    width: 41.66666667%;\r\n  }\r\n  .col-lg-4 {\r\n    width: 33.33333333%;\r\n  }\r\n  .col-lg-3 {\r\n    width: 25%;\r\n  }\r\n  .col-lg-2 {\r\n    width: 16.66666667%;\r\n  }\r\n  .col-lg-1 {\r\n    width: 8.33333333%;\r\n  }\r\n  .col-lg-pull-12 {\r\n    right: 100%;\r\n  }\r\n  .col-lg-pull-11 {\r\n    right: 91.66666667%;\r\n  }\r\n  .col-lg-pull-10 {\r\n    right: 83.33333333%;\r\n  }\r\n  .col-lg-pull-9 {\r\n    right: 75%;\r\n  }\r\n  .col-lg-pull-8 {\r\n    right: 66.66666667%;\r\n  }\r\n  .col-lg-pull-7 {\r\n    right: 58.33333333%;\r\n  }\r\n  .col-lg-pull-6 {\r\n    right: 50%;\r\n  }\r\n  .col-lg-pull-5 {\r\n    right: 41.66666667%;\r\n  }\r\n  .col-lg-pull-4 {\r\n    right: 33.33333333%;\r\n  }\r\n  .col-lg-pull-3 {\r\n    right: 25%;\r\n  }\r\n  .col-lg-pull-2 {\r\n    right: 16.66666667%;\r\n  }\r\n  .col-lg-pull-1 {\r\n    right: 8.33333333%;\r\n  }\r\n  .col-lg-pull-0 {\r\n    right: auto;\r\n  }\r\n  .col-lg-push-12 {\r\n    left: 100%;\r\n  }\r\n  .col-lg-push-11 {\r\n    left: 91.66666667%;\r\n  }\r\n  .col-lg-push-10 {\r\n    left: 83.33333333%;\r\n  }\r\n  .col-lg-push-9 {\r\n    left: 75%;\r\n  }\r\n  .col-lg-push-8 {\r\n    left: 66.66666667%;\r\n  }\r\n  .col-lg-push-7 {\r\n    left: 58.33333333%;\r\n  }\r\n  .col-lg-push-6 {\r\n    left: 50%;\r\n  }\r\n  .col-lg-push-5 {\r\n    left: 41.66666667%;\r\n  }\r\n  .col-lg-push-4 {\r\n    left: 33.33333333%;\r\n  }\r\n  .col-lg-push-3 {\r\n    left: 25%;\r\n  }\r\n  .col-lg-push-2 {\r\n    left: 16.66666667%;\r\n  }\r\n  .col-lg-push-1 {\r\n    left: 8.33333333%;\r\n  }\r\n  .col-lg-push-0 {\r\n    left: auto;\r\n  }\r\n  .col-lg-offset-12 {\r\n    margin-left: 100%;\r\n  }\r\n  .col-lg-offset-11 {\r\n    margin-left: 91.66666667%;\r\n  }\r\n  .col-lg-offset-10 {\r\n    margin-left: 83.33333333%;\r\n  }\r\n  .col-lg-offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .col-lg-offset-8 {\r\n    margin-left: 66.66666667%;\r\n  }\r\n  .col-lg-offset-7 {\r\n    margin-left: 58.33333333%;\r\n  }\r\n  .col-lg-offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .col-lg-offset-5 {\r\n    margin-left: 41.66666667%;\r\n  }\r\n  .col-lg-offset-4 {\r\n    margin-left: 33.33333333%;\r\n  }\r\n  .col-lg-offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .col-lg-offset-2 {\r\n    margin-left: 16.66666667%;\r\n  }\r\n  .col-lg-offset-1 {\r\n    margin-left: 8.33333333%;\r\n  }\r\n  .col-lg-offset-0 {\r\n    margin-left: 0%;\r\n  }\r\n}\r\ntable {\r\n  background-color: transparent;\r\n}\r\ncaption {\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  color: #b3b3b3;\r\n  text-align: left;\r\n}\r\nth {\r\n  text-align: left;\r\n}\r\n.table {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 22px;\r\n}\r\n.table > thead > tr > th,\r\n.table > tbody > tr > th,\r\n.table > tfoot > tr > th,\r\n.table > thead > tr > td,\r\n.table > tbody > tr > td,\r\n.table > tfoot > tr > td {\r\n  padding: 8px;\r\n  line-height: 1.42857143;\r\n  vertical-align: top;\r\n  border-top: 1px solid #dddddd;\r\n}\r\n.table > thead > tr > th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid #dddddd;\r\n}\r\n.table > caption + thead > tr:first-child > th,\r\n.table > colgroup + thead > tr:first-child > th,\r\n.table > thead:first-child > tr:first-child > th,\r\n.table > caption + thead > tr:first-child > td,\r\n.table > colgroup + thead > tr:first-child > td,\r\n.table > thead:first-child > tr:first-child > td {\r\n  border-top: 0;\r\n}\r\n.table > tbody + tbody {\r\n  border-top: 2px solid #dddddd;\r\n}\r\n.table .table {\r\n  background-color: #ffffff;\r\n}\r\n.table-condensed > thead > tr > th,\r\n.table-condensed > tbody > tr > th,\r\n.table-condensed > tfoot > tr > th,\r\n.table-condensed > thead > tr > td,\r\n.table-condensed > tbody > tr > td,\r\n.table-condensed > tfoot > tr > td {\r\n  padding: 5px;\r\n}\r\n.table-bordered {\r\n  border: 1px solid #dddddd;\r\n}\r\n.table-bordered > thead > tr > th,\r\n.table-bordered > tbody > tr > th,\r\n.table-bordered > tfoot > tr > th,\r\n.table-bordered > thead > tr > td,\r\n.table-bordered > tbody > tr > td,\r\n.table-bordered > tfoot > tr > td {\r\n  border: 1px solid #dddddd;\r\n}\r\n.table-bordered > thead > tr > th,\r\n.table-bordered > thead > tr > td {\r\n  border-bottom-width: 2px;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(odd) {\r\n  background-color: #f9f9f9;\r\n}\r\n.table-hover > tbody > tr:hover {\r\n  background-color: #f5f5f5;\r\n}\r\ntable col[class*=\"col-\"] {\r\n  position: static;\r\n  float: none;\r\n  display: table-column;\r\n}\r\ntable td[class*=\"col-\"],\r\ntable th[class*=\"col-\"] {\r\n  position: static;\r\n  float: none;\r\n  display: table-cell;\r\n}\r\n.table > thead > tr > td.active,\r\n.table > tbody > tr > td.active,\r\n.table > tfoot > tr > td.active,\r\n.table > thead > tr > th.active,\r\n.table > tbody > tr > th.active,\r\n.table > tfoot > tr > th.active,\r\n.table > thead > tr.active > td,\r\n.table > tbody > tr.active > td,\r\n.table > tfoot > tr.active > td,\r\n.table > thead > tr.active > th,\r\n.table > tbody > tr.active > th,\r\n.table > tfoot > tr.active > th {\r\n  background-color: #f5f5f5;\r\n}\r\n.table-hover > tbody > tr > td.active:hover,\r\n.table-hover > tbody > tr > th.active:hover,\r\n.table-hover > tbody > tr.active:hover > td,\r\n.table-hover > tbody > tr:hover > .active,\r\n.table-hover > tbody > tr.active:hover > th {\r\n  background-color: #e8e8e8;\r\n}\r\n.table > thead > tr > td.success,\r\n.table > tbody > tr > td.success,\r\n.table > tfoot > tr > td.success,\r\n.table > thead > tr > th.success,\r\n.table > tbody > tr > th.success,\r\n.table > tfoot > tr > th.success,\r\n.table > thead > tr.success > td,\r\n.table > tbody > tr.success > td,\r\n.table > tfoot > tr.success > td,\r\n.table > thead > tr.success > th,\r\n.table > tbody > tr.success > th,\r\n.table > tfoot > tr.success > th {\r\n  background-color: #dff0d8;\r\n}\r\n.table-hover > tbody > tr > td.success:hover,\r\n.table-hover > tbody > tr > th.success:hover,\r\n.table-hover > tbody > tr.success:hover > td,\r\n.table-hover > tbody > tr:hover > .success,\r\n.table-hover > tbody > tr.success:hover > th {\r\n  background-color: #d0e9c6;\r\n}\r\n.table > thead > tr > td.info,\r\n.table > tbody > tr > td.info,\r\n.table > tfoot > tr > td.info,\r\n.table > thead > tr > th.info,\r\n.table > tbody > tr > th.info,\r\n.table > tfoot > tr > th.info,\r\n.table > thead > tr.info > td,\r\n.table > tbody > tr.info > td,\r\n.table > tfoot > tr.info > td,\r\n.table > thead > tr.info > th,\r\n.table > tbody > tr.info > th,\r\n.table > tfoot > tr.info > th {\r\n  background-color: #d9edf7;\r\n}\r\n.table-hover > tbody > tr > td.info:hover,\r\n.table-hover > tbody > tr > th.info:hover,\r\n.table-hover > tbody > tr.info:hover > td,\r\n.table-hover > tbody > tr:hover > .info,\r\n.table-hover > tbody > tr.info:hover > th {\r\n  background-color: #c4e3f3;\r\n}\r\n.table > thead > tr > td.warning,\r\n.table > tbody > tr > td.warning,\r\n.table > tfoot > tr > td.warning,\r\n.table > thead > tr > th.warning,\r\n.table > tbody > tr > th.warning,\r\n.table > tfoot > tr > th.warning,\r\n.table > thead > tr.warning > td,\r\n.table > tbody > tr.warning > td,\r\n.table > tfoot > tr.warning > td,\r\n.table > thead > tr.warning > th,\r\n.table > tbody > tr.warning > th,\r\n.table > tfoot > tr.warning > th {\r\n  background-color: #fcf8e3;\r\n}\r\n.table-hover > tbody > tr > td.warning:hover,\r\n.table-hover > tbody > tr > th.warning:hover,\r\n.table-hover > tbody > tr.warning:hover > td,\r\n.table-hover > tbody > tr:hover > .warning,\r\n.table-hover > tbody > tr.warning:hover > th {\r\n  background-color: #faf2cc;\r\n}\r\n.table > thead > tr > td.danger,\r\n.table > tbody > tr > td.danger,\r\n.table > tfoot > tr > td.danger,\r\n.table > thead > tr > th.danger,\r\n.table > tbody > tr > th.danger,\r\n.table > tfoot > tr > th.danger,\r\n.table > thead > tr.danger > td,\r\n.table > tbody > tr.danger > td,\r\n.table > tfoot > tr.danger > td,\r\n.table > thead > tr.danger > th,\r\n.table > tbody > tr.danger > th,\r\n.table > tfoot > tr.danger > th {\r\n  background-color: #f2dede;\r\n}\r\n.table-hover > tbody > tr > td.danger:hover,\r\n.table-hover > tbody > tr > th.danger:hover,\r\n.table-hover > tbody > tr.danger:hover > td,\r\n.table-hover > tbody > tr:hover > .danger,\r\n.table-hover > tbody > tr.danger:hover > th {\r\n  background-color: #ebcccc;\r\n}\r\n.table-responsive {\r\n  overflow-x: auto;\r\n  min-height: 0.01%;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .table-responsive {\r\n    width: 100%;\r\n    margin-bottom: 16.5px;\r\n    overflow-y: hidden;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    border: 1px solid #dddddd;\r\n  }\r\n  .table-responsive > .table {\r\n    margin-bottom: 0;\r\n  }\r\n  .table-responsive > .table > thead > tr > th,\r\n  .table-responsive > .table > tbody > tr > th,\r\n  .table-responsive > .table > tfoot > tr > th,\r\n  .table-responsive > .table > thead > tr > td,\r\n  .table-responsive > .table > tbody > tr > td,\r\n  .table-responsive > .table > tfoot > tr > td {\r\n    white-space: nowrap;\r\n  }\r\n  .table-responsive > .table-bordered {\r\n    border: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n    border-left: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n    border-right: 0;\r\n  }\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n    border-bottom: 0;\r\n  }\r\n}\r\nfieldset {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n  min-width: 0;\r\n}\r\nlegend {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin-bottom: 22px;\r\n  font-size: 24px;\r\n  line-height: inherit;\r\n  color: #333333;\r\n  border: 0;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}\r\ninput[type=\"search\"] {\r\n  box-sizing: border-box;\r\n}\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n  margin: 4px 0 0;\r\n  margin-top: 1px \\9;\r\n  line-height: normal;\r\n}\r\ninput[type=\"file\"] {\r\n  display: block;\r\n}\r\ninput[type=\"range\"] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\nselect[multiple],\r\nselect[size] {\r\n  height: auto;\r\n}\r\ninput[type=\"file\"]:focus,\r\ninput[type=\"radio\"]:focus,\r\ninput[type=\"checkbox\"]:focus {\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\noutput {\r\n  display: block;\r\n  padding-top: 9px;\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #333333;\r\n}\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 8px 12px;\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #333333;\r\n  background-color: #ffffff;\r\n  background-image: none;\r\n  border: 1px solid #dddddd;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-control:focus {\r\n  border-color: #66afe9;\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n.form-control::-moz-placeholder {\r\n  color: #b3b3b3;\r\n  opacity: 1;\r\n}\r\n.form-control:-ms-input-placeholder {\r\n  color: #b3b3b3;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n  color: #b3b3b3;\r\n}\r\n.form-control::-ms-expand {\r\n  border: 0;\r\n  background-color: transparent;\r\n}\r\n.form-control[disabled],\r\n.form-control[readonly],\r\nfieldset[disabled] .form-control {\r\n  background-color: #eeeeee;\r\n  opacity: 1;\r\n}\r\n.form-control[disabled],\r\nfieldset[disabled] .form-control {\r\n  cursor: not-allowed;\r\n}\r\ntextarea.form-control {\r\n  height: auto;\r\n}\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: none;\r\n}\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  input[type=\"date\"].form-control,\r\n  input[type=\"time\"].form-control,\r\n  input[type=\"datetime-local\"].form-control,\r\n  input[type=\"month\"].form-control {\r\n    line-height: 40px;\r\n  }\r\n  input[type=\"date\"].input-sm,\r\n  input[type=\"time\"].input-sm,\r\n  input[type=\"datetime-local\"].input-sm,\r\n  input[type=\"month\"].input-sm,\r\n  .input-group-sm input[type=\"date\"],\r\n  .input-group-sm input[type=\"time\"],\r\n  .input-group-sm input[type=\"datetime-local\"],\r\n  .input-group-sm input[type=\"month\"] {\r\n    line-height: 33px;\r\n  }\r\n  input[type=\"date\"].input-lg,\r\n  input[type=\"time\"].input-lg,\r\n  input[type=\"datetime-local\"].input-lg,\r\n  input[type=\"month\"].input-lg,\r\n  .input-group-lg input[type=\"date\"],\r\n  .input-group-lg input[type=\"time\"],\r\n  .input-group-lg input[type=\"datetime-local\"],\r\n  .input-group-lg input[type=\"month\"] {\r\n    line-height: 57px;\r\n  }\r\n}\r\n.form-group {\r\n  margin-bottom: 15px;\r\n}\r\n.radio,\r\n.checkbox {\r\n  position: relative;\r\n  display: block;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.radio label,\r\n.checkbox label {\r\n  min-height: 22px;\r\n  padding-left: 20px;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  cursor: pointer;\r\n}\r\n.radio input[type=\"radio\"],\r\n.radio-inline input[type=\"radio\"],\r\n.checkbox input[type=\"checkbox\"],\r\n.checkbox-inline input[type=\"checkbox\"] {\r\n  position: absolute;\r\n  margin-left: -20px;\r\n  margin-top: 4px \\9;\r\n}\r\n.radio + .radio,\r\n.checkbox + .checkbox {\r\n  margin-top: -5px;\r\n}\r\n.radio-inline,\r\n.checkbox-inline {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding-left: 20px;\r\n  margin-bottom: 0;\r\n  vertical-align: middle;\r\n  font-weight: normal;\r\n  cursor: pointer;\r\n}\r\n.radio-inline + .radio-inline,\r\n.checkbox-inline + .checkbox-inline {\r\n  margin-top: 0;\r\n  margin-left: 10px;\r\n}\r\ninput[type=\"radio\"][disabled],\r\ninput[type=\"checkbox\"][disabled],\r\ninput[type=\"radio\"].disabled,\r\ninput[type=\"checkbox\"].disabled,\r\nfieldset[disabled] input[type=\"radio\"],\r\nfieldset[disabled] input[type=\"checkbox\"] {\r\n  cursor: not-allowed;\r\n}\r\n.radio-inline.disabled,\r\n.checkbox-inline.disabled,\r\nfieldset[disabled] .radio-inline,\r\nfieldset[disabled] .checkbox-inline {\r\n  cursor: not-allowed;\r\n}\r\n.radio.disabled label,\r\n.checkbox.disabled label,\r\nfieldset[disabled] .radio label,\r\nfieldset[disabled] .checkbox label {\r\n  cursor: not-allowed;\r\n}\r\n.form-control-static {\r\n  padding-top: 9px;\r\n  padding-bottom: 9px;\r\n  margin-bottom: 0;\r\n  min-height: 38px;\r\n}\r\n.form-control-static.input-lg,\r\n.form-control-static.input-sm {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n.input-sm {\r\n  height: 33px;\r\n  padding: 5px 10px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\nselect.input-sm {\r\n  height: 33px;\r\n  line-height: 33px;\r\n}\r\ntextarea.input-sm,\r\nselect[multiple].input-sm {\r\n  height: auto;\r\n}\r\n.form-group-sm .form-control {\r\n  height: 33px;\r\n  padding: 5px 10px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.form-group-sm select.form-control {\r\n  height: 33px;\r\n  line-height: 33px;\r\n}\r\n.form-group-sm textarea.form-control,\r\n.form-group-sm select[multiple].form-control {\r\n  height: auto;\r\n}\r\n.form-group-sm .form-control-static {\r\n  height: 33px;\r\n  min-height: 36px;\r\n  padding: 6px 10px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n}\r\n.input-lg {\r\n  height: 57px;\r\n  padding: 14px 16px;\r\n  font-size: 20px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\nselect.input-lg {\r\n  height: 57px;\r\n  line-height: 57px;\r\n}\r\ntextarea.input-lg,\r\nselect[multiple].input-lg {\r\n  height: auto;\r\n}\r\n.form-group-lg .form-control {\r\n  height: 57px;\r\n  padding: 14px 16px;\r\n  font-size: 20px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\n.form-group-lg select.form-control {\r\n  height: 57px;\r\n  line-height: 57px;\r\n}\r\n.form-group-lg textarea.form-control,\r\n.form-group-lg select[multiple].form-control {\r\n  height: auto;\r\n}\r\n.form-group-lg .form-control-static {\r\n  height: 57px;\r\n  min-height: 42px;\r\n  padding: 15px 16px;\r\n  font-size: 20px;\r\n  line-height: 1.3333333;\r\n}\r\n.has-feedback {\r\n  position: relative;\r\n}\r\n.has-feedback .form-control {\r\n  padding-right: 50px;\r\n}\r\n.form-control-feedback {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n  pointer-events: none;\r\n}\r\n.input-lg + .form-control-feedback,\r\n.input-group-lg + .form-control-feedback,\r\n.form-group-lg .form-control + .form-control-feedback {\r\n  width: 57px;\r\n  height: 57px;\r\n  line-height: 57px;\r\n}\r\n.input-sm + .form-control-feedback,\r\n.input-group-sm + .form-control-feedback,\r\n.form-group-sm .form-control + .form-control-feedback {\r\n  width: 33px;\r\n  height: 33px;\r\n  line-height: 33px;\r\n}\r\n.has-success .help-block,\r\n.has-success .control-label,\r\n.has-success .radio,\r\n.has-success .checkbox,\r\n.has-success .radio-inline,\r\n.has-success .checkbox-inline,\r\n.has-success.radio label,\r\n.has-success.checkbox label,\r\n.has-success.radio-inline label,\r\n.has-success.checkbox-inline label {\r\n  color: #3fad46;\r\n}\r\n.has-success .form-control {\r\n  border-color: #3fad46;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.has-success .form-control:focus {\r\n  border-color: #318837;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #81d186;\r\n}\r\n.has-success .input-group-addon {\r\n  color: #3fad46;\r\n  border-color: #3fad46;\r\n  background-color: #dff0d8;\r\n}\r\n.has-success .form-control-feedback {\r\n  color: #3fad46;\r\n}\r\n.has-warning .help-block,\r\n.has-warning .control-label,\r\n.has-warning .radio,\r\n.has-warning .checkbox,\r\n.has-warning .radio-inline,\r\n.has-warning .checkbox-inline,\r\n.has-warning.radio label,\r\n.has-warning.checkbox label,\r\n.has-warning.radio-inline label,\r\n.has-warning.checkbox-inline label {\r\n  color: #f0ad4e;\r\n}\r\n.has-warning .form-control {\r\n  border-color: #f0ad4e;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.has-warning .form-control:focus {\r\n  border-color: #ec971f;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #f8d9ac;\r\n}\r\n.has-warning .input-group-addon {\r\n  color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n  background-color: #fcf8e3;\r\n}\r\n.has-warning .form-control-feedback {\r\n  color: #f0ad4e;\r\n}\r\n.has-error .help-block,\r\n.has-error .control-label,\r\n.has-error .radio,\r\n.has-error .checkbox,\r\n.has-error .radio-inline,\r\n.has-error .checkbox-inline,\r\n.has-error.radio label,\r\n.has-error.checkbox label,\r\n.has-error.radio-inline label,\r\n.has-error.checkbox-inline label {\r\n  color: #d9534f;\r\n}\r\n.has-error .form-control {\r\n  border-color: #d9534f;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n.has-error .form-control:focus {\r\n  border-color: #c9302c;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #eba5a3;\r\n}\r\n.has-error .input-group-addon {\r\n  color: #d9534f;\r\n  border-color: #d9534f;\r\n  background-color: #f2dede;\r\n}\r\n.has-error .form-control-feedback {\r\n  color: #d9534f;\r\n}\r\n.has-feedback label ~ .form-control-feedback {\r\n  top: 27px;\r\n}\r\n.has-feedback label.sr-only ~ .form-control-feedback {\r\n  top: 0;\r\n}\r\n.help-block {\r\n  display: block;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  color: #737373;\r\n}\r\n@media (min-width: 768px) {\r\n  .form-inline .form-group {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .form-control-static {\r\n    display: inline-block;\r\n  }\r\n  .form-inline .input-group {\r\n    display: inline-table;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .input-group .input-group-addon,\r\n  .form-inline .input-group .input-group-btn,\r\n  .form-inline .input-group .form-control {\r\n    width: auto;\r\n  }\r\n  .form-inline .input-group > .form-control {\r\n    width: 100%;\r\n  }\r\n  .form-inline .control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .radio,\r\n  .form-inline .checkbox {\r\n    display: inline-block;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .radio label,\r\n  .form-inline .checkbox label {\r\n    padding-left: 0;\r\n  }\r\n  .form-inline .radio input[type=\"radio\"],\r\n  .form-inline .checkbox input[type=\"checkbox\"] {\r\n    position: relative;\r\n    margin-left: 0;\r\n  }\r\n  .form-inline .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox,\r\n.form-horizontal .radio-inline,\r\n.form-horizontal .checkbox-inline {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-top: 9px;\r\n}\r\n.form-horizontal .radio,\r\n.form-horizontal .checkbox {\r\n  min-height: 31px;\r\n}\r\n.form-horizontal .form-group {\r\n  margin-left: -15px;\r\n  margin-right: -15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .control-label {\r\n    text-align: right;\r\n    margin-bottom: 0;\r\n    padding-top: 9px;\r\n  }\r\n}\r\n.form-horizontal .has-feedback .form-control-feedback {\r\n  right: 15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .form-group-lg .control-label {\r\n    padding-top: 15px;\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .form-horizontal .form-group-sm .control-label {\r\n    padding-top: 6px;\r\n    font-size: 14px;\r\n  }\r\n}\r\n.btn {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation;\r\n  cursor: pointer;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  white-space: nowrap;\r\n  padding: 8px 12px;\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.btn:focus,\r\n.btn:active:focus,\r\n.btn.active:focus,\r\n.btn.focus,\r\n.btn:active.focus,\r\n.btn.active.focus {\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.btn:hover,\r\n.btn:focus,\r\n.btn.focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n.btn:active,\r\n.btn.active {\r\n  outline: 0;\r\n  background-image: none;\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n.btn.disabled,\r\n.btn[disabled],\r\nfieldset[disabled] .btn {\r\n  cursor: not-allowed;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n}\r\na.btn.disabled,\r\nfieldset[disabled] a.btn {\r\n  pointer-events: none;\r\n}\r\n.btn-default {\r\n  color: #333333;\r\n  background-color: #ffffff;\r\n  border-color: #dddddd;\r\n}\r\n.btn-default:focus,\r\n.btn-default.focus {\r\n  color: #333333;\r\n  background-color: #e6e6e6;\r\n  border-color: #9d9d9d;\r\n}\r\n.btn-default:hover {\r\n  color: #333333;\r\n  background-color: #e6e6e6;\r\n  border-color: #bebebe;\r\n}\r\n.btn-default:active,\r\n.btn-default.active,\r\n.open > .dropdown-toggle.btn-default {\r\n  color: #333333;\r\n  background-color: #e6e6e6;\r\n  border-color: #bebebe;\r\n}\r\n.btn-default:active:hover,\r\n.btn-default.active:hover,\r\n.open > .dropdown-toggle.btn-default:hover,\r\n.btn-default:active:focus,\r\n.btn-default.active:focus,\r\n.open > .dropdown-toggle.btn-default:focus,\r\n.btn-default:active.focus,\r\n.btn-default.active.focus,\r\n.open > .dropdown-toggle.btn-default.focus {\r\n  color: #333333;\r\n  background-color: #d4d4d4;\r\n  border-color: #9d9d9d;\r\n}\r\n.btn-default:active,\r\n.btn-default.active,\r\n.open > .dropdown-toggle.btn-default {\r\n  background-image: none;\r\n}\r\n.btn-default.disabled:hover,\r\n.btn-default[disabled]:hover,\r\nfieldset[disabled] .btn-default:hover,\r\n.btn-default.disabled:focus,\r\n.btn-default[disabled]:focus,\r\nfieldset[disabled] .btn-default:focus,\r\n.btn-default.disabled.focus,\r\n.btn-default[disabled].focus,\r\nfieldset[disabled] .btn-default.focus {\r\n  background-color: #ffffff;\r\n  border-color: #dddddd;\r\n}\r\n.btn-default .badge {\r\n  color: #ffffff;\r\n  background-color: #333333;\r\n}\r\n.btn-primary {\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n  border-color: #4582ec;\r\n}\r\n.btn-primary:focus,\r\n.btn-primary.focus {\r\n  color: #ffffff;\r\n  background-color: #1863e6;\r\n  border-color: #1045a1;\r\n}\r\n.btn-primary:hover {\r\n  color: #ffffff;\r\n  background-color: #1863e6;\r\n  border-color: #175fdd;\r\n}\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open > .dropdown-toggle.btn-primary {\r\n  color: #ffffff;\r\n  background-color: #1863e6;\r\n  border-color: #175fdd;\r\n}\r\n.btn-primary:active:hover,\r\n.btn-primary.active:hover,\r\n.open > .dropdown-toggle.btn-primary:hover,\r\n.btn-primary:active:focus,\r\n.btn-primary.active:focus,\r\n.open > .dropdown-toggle.btn-primary:focus,\r\n.btn-primary:active.focus,\r\n.btn-primary.active.focus,\r\n.open > .dropdown-toggle.btn-primary.focus {\r\n  color: #ffffff;\r\n  background-color: #1455c6;\r\n  border-color: #1045a1;\r\n}\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open > .dropdown-toggle.btn-primary {\r\n  background-image: none;\r\n}\r\n.btn-primary.disabled:hover,\r\n.btn-primary[disabled]:hover,\r\nfieldset[disabled] .btn-primary:hover,\r\n.btn-primary.disabled:focus,\r\n.btn-primary[disabled]:focus,\r\nfieldset[disabled] .btn-primary:focus,\r\n.btn-primary.disabled.focus,\r\n.btn-primary[disabled].focus,\r\nfieldset[disabled] .btn-primary.focus {\r\n  background-color: #4582ec;\r\n  border-color: #4582ec;\r\n}\r\n.btn-primary .badge {\r\n  color: #4582ec;\r\n  background-color: #ffffff;\r\n}\r\n.btn-success {\r\n  color: #ffffff;\r\n  background-color: #3fad46;\r\n  border-color: #3fad46;\r\n}\r\n.btn-success:focus,\r\n.btn-success.focus {\r\n  color: #ffffff;\r\n  background-color: #318837;\r\n  border-color: #1d5020;\r\n}\r\n.btn-success:hover {\r\n  color: #ffffff;\r\n  background-color: #318837;\r\n  border-color: #2f8034;\r\n}\r\n.btn-success:active,\r\n.btn-success.active,\r\n.open > .dropdown-toggle.btn-success {\r\n  color: #ffffff;\r\n  background-color: #318837;\r\n  border-color: #2f8034;\r\n}\r\n.btn-success:active:hover,\r\n.btn-success.active:hover,\r\n.open > .dropdown-toggle.btn-success:hover,\r\n.btn-success:active:focus,\r\n.btn-success.active:focus,\r\n.open > .dropdown-toggle.btn-success:focus,\r\n.btn-success:active.focus,\r\n.btn-success.active.focus,\r\n.open > .dropdown-toggle.btn-success.focus {\r\n  color: #ffffff;\r\n  background-color: #286d2c;\r\n  border-color: #1d5020;\r\n}\r\n.btn-success:active,\r\n.btn-success.active,\r\n.open > .dropdown-toggle.btn-success {\r\n  background-image: none;\r\n}\r\n.btn-success.disabled:hover,\r\n.btn-success[disabled]:hover,\r\nfieldset[disabled] .btn-success:hover,\r\n.btn-success.disabled:focus,\r\n.btn-success[disabled]:focus,\r\nfieldset[disabled] .btn-success:focus,\r\n.btn-success.disabled.focus,\r\n.btn-success[disabled].focus,\r\nfieldset[disabled] .btn-success.focus {\r\n  background-color: #3fad46;\r\n  border-color: #3fad46;\r\n}\r\n.btn-success .badge {\r\n  color: #3fad46;\r\n  background-color: #ffffff;\r\n}\r\n.btn-info {\r\n  color: #ffffff;\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n.btn-info:focus,\r\n.btn-info.focus {\r\n  color: #ffffff;\r\n  background-color: #31b0d5;\r\n  border-color: #1f7e9a;\r\n}\r\n.btn-info:hover {\r\n  color: #ffffff;\r\n  background-color: #31b0d5;\r\n  border-color: #2aabd2;\r\n}\r\n.btn-info:active,\r\n.btn-info.active,\r\n.open > .dropdown-toggle.btn-info {\r\n  color: #ffffff;\r\n  background-color: #31b0d5;\r\n  border-color: #2aabd2;\r\n}\r\n.btn-info:active:hover,\r\n.btn-info.active:hover,\r\n.open > .dropdown-toggle.btn-info:hover,\r\n.btn-info:active:focus,\r\n.btn-info.active:focus,\r\n.open > .dropdown-toggle.btn-info:focus,\r\n.btn-info:active.focus,\r\n.btn-info.active.focus,\r\n.open > .dropdown-toggle.btn-info.focus {\r\n  color: #ffffff;\r\n  background-color: #269abc;\r\n  border-color: #1f7e9a;\r\n}\r\n.btn-info:active,\r\n.btn-info.active,\r\n.open > .dropdown-toggle.btn-info {\r\n  background-image: none;\r\n}\r\n.btn-info.disabled:hover,\r\n.btn-info[disabled]:hover,\r\nfieldset[disabled] .btn-info:hover,\r\n.btn-info.disabled:focus,\r\n.btn-info[disabled]:focus,\r\nfieldset[disabled] .btn-info:focus,\r\n.btn-info.disabled.focus,\r\n.btn-info[disabled].focus,\r\nfieldset[disabled] .btn-info.focus {\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n.btn-info .badge {\r\n  color: #5bc0de;\r\n  background-color: #ffffff;\r\n}\r\n.btn-warning {\r\n  color: #ffffff;\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n.btn-warning:focus,\r\n.btn-warning.focus {\r\n  color: #ffffff;\r\n  background-color: #ec971f;\r\n  border-color: #b06d0f;\r\n}\r\n.btn-warning:hover {\r\n  color: #ffffff;\r\n  background-color: #ec971f;\r\n  border-color: #eb9316;\r\n}\r\n.btn-warning:active,\r\n.btn-warning.active,\r\n.open > .dropdown-toggle.btn-warning {\r\n  color: #ffffff;\r\n  background-color: #ec971f;\r\n  border-color: #eb9316;\r\n}\r\n.btn-warning:active:hover,\r\n.btn-warning.active:hover,\r\n.open > .dropdown-toggle.btn-warning:hover,\r\n.btn-warning:active:focus,\r\n.btn-warning.active:focus,\r\n.open > .dropdown-toggle.btn-warning:focus,\r\n.btn-warning:active.focus,\r\n.btn-warning.active.focus,\r\n.open > .dropdown-toggle.btn-warning.focus {\r\n  color: #ffffff;\r\n  background-color: #d58512;\r\n  border-color: #b06d0f;\r\n}\r\n.btn-warning:active,\r\n.btn-warning.active,\r\n.open > .dropdown-toggle.btn-warning {\r\n  background-image: none;\r\n}\r\n.btn-warning.disabled:hover,\r\n.btn-warning[disabled]:hover,\r\nfieldset[disabled] .btn-warning:hover,\r\n.btn-warning.disabled:focus,\r\n.btn-warning[disabled]:focus,\r\nfieldset[disabled] .btn-warning:focus,\r\n.btn-warning.disabled.focus,\r\n.btn-warning[disabled].focus,\r\nfieldset[disabled] .btn-warning.focus {\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n.btn-warning .badge {\r\n  color: #f0ad4e;\r\n  background-color: #ffffff;\r\n}\r\n.btn-danger {\r\n  color: #ffffff;\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n.btn-danger:focus,\r\n.btn-danger.focus {\r\n  color: #ffffff;\r\n  background-color: #c9302c;\r\n  border-color: #8b211e;\r\n}\r\n.btn-danger:hover {\r\n  color: #ffffff;\r\n  background-color: #c9302c;\r\n  border-color: #c12e2a;\r\n}\r\n.btn-danger:active,\r\n.btn-danger.active,\r\n.open > .dropdown-toggle.btn-danger {\r\n  color: #ffffff;\r\n  background-color: #c9302c;\r\n  border-color: #c12e2a;\r\n}\r\n.btn-danger:active:hover,\r\n.btn-danger.active:hover,\r\n.open > .dropdown-toggle.btn-danger:hover,\r\n.btn-danger:active:focus,\r\n.btn-danger.active:focus,\r\n.open > .dropdown-toggle.btn-danger:focus,\r\n.btn-danger:active.focus,\r\n.btn-danger.active.focus,\r\n.open > .dropdown-toggle.btn-danger.focus {\r\n  color: #ffffff;\r\n  background-color: #ac2925;\r\n  border-color: #8b211e;\r\n}\r\n.btn-danger:active,\r\n.btn-danger.active,\r\n.open > .dropdown-toggle.btn-danger {\r\n  background-image: none;\r\n}\r\n.btn-danger.disabled:hover,\r\n.btn-danger[disabled]:hover,\r\nfieldset[disabled] .btn-danger:hover,\r\n.btn-danger.disabled:focus,\r\n.btn-danger[disabled]:focus,\r\nfieldset[disabled] .btn-danger:focus,\r\n.btn-danger.disabled.focus,\r\n.btn-danger[disabled].focus,\r\nfieldset[disabled] .btn-danger.focus {\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n.btn-danger .badge {\r\n  color: #d9534f;\r\n  background-color: #ffffff;\r\n}\r\n.btn-link {\r\n  color: #4582ec;\r\n  font-weight: normal;\r\n  border-radius: 0;\r\n}\r\n.btn-link,\r\n.btn-link:active,\r\n.btn-link.active,\r\n.btn-link[disabled],\r\nfieldset[disabled] .btn-link {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n.btn-link,\r\n.btn-link:hover,\r\n.btn-link:focus,\r\n.btn-link:active {\r\n  border-color: transparent;\r\n}\r\n.btn-link:hover,\r\n.btn-link:focus {\r\n  color: #134fb8;\r\n  text-decoration: underline;\r\n  background-color: transparent;\r\n}\r\n.btn-link[disabled]:hover,\r\nfieldset[disabled] .btn-link:hover,\r\n.btn-link[disabled]:focus,\r\nfieldset[disabled] .btn-link:focus {\r\n  color: #b3b3b3;\r\n  text-decoration: none;\r\n}\r\n.btn-lg,\r\n.btn-group-lg > .btn {\r\n  padding: 14px 16px;\r\n  font-size: 20px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\n.btn-sm,\r\n.btn-group-sm > .btn {\r\n  padding: 5px 10px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.btn-xs,\r\n.btn-group-xs > .btn {\r\n  padding: 1px 5px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n.btn-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.btn-block + .btn-block {\r\n  margin-top: 5px;\r\n}\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n.fade {\r\n  opacity: 0;\r\n  transition: opacity 0.15s linear;\r\n}\r\n.fade.in {\r\n  opacity: 1;\r\n}\r\n.collapse {\r\n  display: none;\r\n}\r\n.collapse.in {\r\n  display: block;\r\n}\r\ntr.collapse.in {\r\n  display: table-row;\r\n}\r\ntbody.collapse.in {\r\n  display: table-row-group;\r\n}\r\n.collapsing {\r\n  position: relative;\r\n  height: 0;\r\n  overflow: hidden;\r\n  transition-property: height, visibility;\r\n  transition-duration: 0.35s;\r\n  transition-timing-function: ease;\r\n}\r\n.caret {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 2px;\r\n  vertical-align: middle;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.dropup,\r\n.dropdown {\r\n  position: relative;\r\n}\r\n.dropdown-toggle:focus {\r\n  outline: 0;\r\n}\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 160px;\r\n  padding: 5px 0;\r\n  margin: 2px 0 0;\r\n  list-style: none;\r\n  font-size: 16px;\r\n  text-align: left;\r\n  background-color: #ffffff;\r\n  border: 1px solid #cccccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n  background-clip: padding-box;\r\n}\r\n.dropdown-menu.pull-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.dropdown-menu .divider {\r\n  height: 1px;\r\n  margin: 10px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n}\r\n.dropdown-menu > li > a {\r\n  display: block;\r\n  padding: 3px 20px;\r\n  clear: both;\r\n  font-weight: normal;\r\n  line-height: 1.42857143;\r\n  color: #333333;\r\n  white-space: nowrap;\r\n}\r\n.dropdown-menu > li > a:hover,\r\n.dropdown-menu > li > a:focus {\r\n  text-decoration: none;\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n}\r\n.dropdown-menu > .active > a,\r\n.dropdown-menu > .active > a:hover,\r\n.dropdown-menu > .active > a:focus {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  outline: 0;\r\n  background-color: #4582ec;\r\n}\r\n.dropdown-menu > .disabled > a,\r\n.dropdown-menu > .disabled > a:hover,\r\n.dropdown-menu > .disabled > a:focus {\r\n  color: #b3b3b3;\r\n}\r\n.dropdown-menu > .disabled > a:hover,\r\n.dropdown-menu > .disabled > a:focus {\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  cursor: not-allowed;\r\n}\r\n.open > .dropdown-menu {\r\n  display: block;\r\n}\r\n.open > a {\r\n  outline: 0;\r\n}\r\n.dropdown-menu-right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.dropdown-menu-left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.dropdown-header {\r\n  display: block;\r\n  padding: 3px 20px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #b3b3b3;\r\n  white-space: nowrap;\r\n}\r\n.dropdown-backdrop {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  z-index: 990;\r\n}\r\n.pull-right > .dropdown-menu {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n.dropup .caret,\r\n.navbar-fixed-bottom .dropdown .caret {\r\n  border-top: 0;\r\n  border-bottom: 4px dashed;\r\n  border-bottom: 4px solid \\9;\r\n  content: \"\";\r\n}\r\n.dropup .dropdown-menu,\r\n.navbar-fixed-bottom .dropdown .dropdown-menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  margin-bottom: 2px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-right .dropdown-menu {\r\n    left: auto;\r\n    right: 0;\r\n  }\r\n  .navbar-right .dropdown-menu-left {\r\n    left: 0;\r\n    right: auto;\r\n  }\r\n}\r\n.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n  position: relative;\r\n  float: left;\r\n}\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover,\r\n.btn-group > .btn:focus,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group > .btn:active,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group > .btn.active,\r\n.btn-group-vertical > .btn.active {\r\n  z-index: 2;\r\n}\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group {\r\n  margin-left: -1px;\r\n}\r\n.btn-toolbar {\r\n  margin-left: -5px;\r\n}\r\n.btn-toolbar .btn,\r\n.btn-toolbar .btn-group,\r\n.btn-toolbar .input-group {\r\n  float: left;\r\n}\r\n.btn-toolbar > .btn,\r\n.btn-toolbar > .btn-group,\r\n.btn-toolbar > .input-group {\r\n  margin-left: 5px;\r\n}\r\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n  border-radius: 0;\r\n}\r\n.btn-group > .btn:first-child {\r\n  margin-left: 0;\r\n}\r\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.btn-group > .btn:last-child:not(:first-child),\r\n.btn-group > .dropdown-toggle:not(:first-child) {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.btn-group > .btn-group {\r\n  float: left;\r\n}\r\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.btn-group .dropdown-toggle:active,\r\n.btn-group.open .dropdown-toggle {\r\n  outline: 0;\r\n}\r\n.btn-group > .btn + .dropdown-toggle {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n.btn-group > .btn-lg + .dropdown-toggle {\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n}\r\n.btn-group.open .dropdown-toggle {\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n.btn-group.open .dropdown-toggle.btn-link {\r\n  box-shadow: none;\r\n}\r\n.btn .caret {\r\n  margin-left: 0;\r\n}\r\n.btn-lg .caret {\r\n  border-width: 5px 5px 0;\r\n  border-bottom-width: 0;\r\n}\r\n.dropup .btn-lg .caret {\r\n  border-width: 0 5px 5px;\r\n}\r\n.btn-group-vertical > .btn,\r\n.btn-group-vertical > .btn-group,\r\n.btn-group-vertical > .btn-group > .btn {\r\n  display: block;\r\n  float: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n.btn-group-vertical > .btn-group > .btn {\r\n  float: none;\r\n}\r\n.btn-group-vertical > .btn + .btn,\r\n.btn-group-vertical > .btn + .btn-group,\r\n.btn-group-vertical > .btn-group + .btn,\r\n.btn-group-vertical > .btn-group + .btn-group {\r\n  margin-top: -1px;\r\n  margin-left: 0;\r\n}\r\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.btn-group-vertical > .btn:first-child:not(:last-child) {\r\n  border-top-right-radius: 4px;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.btn-group-vertical > .btn:last-child:not(:first-child) {\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n  border-bottom-right-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.btn-group-justified {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  border-collapse: separate;\r\n}\r\n.btn-group-justified > .btn,\r\n.btn-group-justified > .btn-group {\r\n  float: none;\r\n  display: table-cell;\r\n  width: 1%;\r\n}\r\n.btn-group-justified > .btn-group .btn {\r\n  width: 100%;\r\n}\r\n.btn-group-justified > .btn-group .dropdown-menu {\r\n  left: auto;\r\n}\r\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\r\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\r\n  position: absolute;\r\n  clip: rect(0, 0, 0, 0);\r\n  pointer-events: none;\r\n}\r\n.input-group {\r\n  position: relative;\r\n  display: table;\r\n  border-collapse: separate;\r\n}\r\n.input-group[class*=\"col-\"] {\r\n  float: none;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n.input-group .form-control {\r\n  position: relative;\r\n  z-index: 2;\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n.input-group .form-control:focus {\r\n  z-index: 3;\r\n}\r\n.input-group-lg > .form-control,\r\n.input-group-lg > .input-group-addon,\r\n.input-group-lg > .input-group-btn > .btn {\r\n  height: 57px;\r\n  padding: 14px 16px;\r\n  font-size: 20px;\r\n  line-height: 1.3333333;\r\n  border-radius: 6px;\r\n}\r\nselect.input-group-lg > .form-control,\r\nselect.input-group-lg > .input-group-addon,\r\nselect.input-group-lg > .input-group-btn > .btn {\r\n  height: 57px;\r\n  line-height: 57px;\r\n}\r\ntextarea.input-group-lg > .form-control,\r\ntextarea.input-group-lg > .input-group-addon,\r\ntextarea.input-group-lg > .input-group-btn > .btn,\r\nselect[multiple].input-group-lg > .form-control,\r\nselect[multiple].input-group-lg > .input-group-addon,\r\nselect[multiple].input-group-lg > .input-group-btn > .btn {\r\n  height: auto;\r\n}\r\n.input-group-sm > .form-control,\r\n.input-group-sm > .input-group-addon,\r\n.input-group-sm > .input-group-btn > .btn {\r\n  height: 33px;\r\n  padding: 5px 10px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\nselect.input-group-sm > .form-control,\r\nselect.input-group-sm > .input-group-addon,\r\nselect.input-group-sm > .input-group-btn > .btn {\r\n  height: 33px;\r\n  line-height: 33px;\r\n}\r\ntextarea.input-group-sm > .form-control,\r\ntextarea.input-group-sm > .input-group-addon,\r\ntextarea.input-group-sm > .input-group-btn > .btn,\r\nselect[multiple].input-group-sm > .form-control,\r\nselect[multiple].input-group-sm > .input-group-addon,\r\nselect[multiple].input-group-sm > .input-group-btn > .btn {\r\n  height: auto;\r\n}\r\n.input-group-addon,\r\n.input-group-btn,\r\n.input-group .form-control {\r\n  display: table-cell;\r\n}\r\n.input-group-addon:not(:first-child):not(:last-child),\r\n.input-group-btn:not(:first-child):not(:last-child),\r\n.input-group .form-control:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.input-group-addon,\r\n.input-group-btn {\r\n  width: 1%;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n}\r\n.input-group-addon {\r\n  padding: 8px 12px;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #333333;\r\n  text-align: center;\r\n  background-color: #eeeeee;\r\n  border: 1px solid #dddddd;\r\n  border-radius: 4px;\r\n}\r\n.input-group-addon.input-sm {\r\n  padding: 5px 10px;\r\n  font-size: 14px;\r\n  border-radius: 3px;\r\n}\r\n.input-group-addon.input-lg {\r\n  padding: 14px 16px;\r\n  font-size: 20px;\r\n  border-radius: 6px;\r\n}\r\n.input-group-addon input[type=\"radio\"],\r\n.input-group-addon input[type=\"checkbox\"] {\r\n  margin-top: 0;\r\n}\r\n.input-group .form-control:first-child,\r\n.input-group-addon:first-child,\r\n.input-group-btn:first-child > .btn,\r\n.input-group-btn:first-child > .btn-group > .btn,\r\n.input-group-btn:first-child > .dropdown-toggle,\r\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\r\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.input-group-addon:first-child {\r\n  border-right: 0;\r\n}\r\n.input-group .form-control:last-child,\r\n.input-group-addon:last-child,\r\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group > .btn,\r\n.input-group-btn:last-child > .dropdown-toggle,\r\n.input-group-btn:first-child > .btn:not(:first-child),\r\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.input-group-addon:last-child {\r\n  border-left: 0;\r\n}\r\n.input-group-btn {\r\n  position: relative;\r\n  font-size: 0;\r\n  white-space: nowrap;\r\n}\r\n.input-group-btn > .btn {\r\n  position: relative;\r\n}\r\n.input-group-btn > .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n.input-group-btn > .btn:hover,\r\n.input-group-btn > .btn:focus,\r\n.input-group-btn > .btn:active {\r\n  z-index: 2;\r\n}\r\n.input-group-btn:first-child > .btn,\r\n.input-group-btn:first-child > .btn-group {\r\n  margin-right: -1px;\r\n}\r\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group {\r\n  z-index: 2;\r\n  margin-left: -1px;\r\n}\r\n.nav {\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.nav > li {\r\n  position: relative;\r\n  display: block;\r\n}\r\n.nav > li > a {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px 15px;\r\n}\r\n.nav > li > a:hover,\r\n.nav > li > a:focus {\r\n  text-decoration: none;\r\n  background-color: #eeeeee;\r\n}\r\n.nav > li.disabled > a {\r\n  color: #b3b3b3;\r\n}\r\n.nav > li.disabled > a:hover,\r\n.nav > li.disabled > a:focus {\r\n  color: #b3b3b3;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  cursor: not-allowed;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  background-color: #eeeeee;\r\n  border-color: #4582ec;\r\n}\r\n.nav .nav-divider {\r\n  height: 1px;\r\n  margin: 10px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n}\r\n.nav > li > a > img {\r\n  max-width: none;\r\n}\r\n.nav-tabs {\r\n  border-bottom: 1px solid #dddddd;\r\n}\r\n.nav-tabs > li {\r\n  float: left;\r\n  margin-bottom: -1px;\r\n}\r\n.nav-tabs > li > a {\r\n  margin-right: 2px;\r\n  line-height: 1.42857143;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n.nav-tabs > li > a:hover {\r\n  border-color: #eeeeee #eeeeee #dddddd;\r\n}\r\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:hover,\r\n.nav-tabs > li.active > a:focus {\r\n  color: #555555;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n  border-bottom-color: transparent;\r\n  cursor: default;\r\n}\r\n.nav-tabs.nav-justified {\r\n  width: 100%;\r\n  border-bottom: 0;\r\n}\r\n.nav-tabs.nav-justified > li {\r\n  float: none;\r\n}\r\n.nav-tabs.nav-justified > li > a {\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n}\r\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-tabs.nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .nav-tabs.nav-justified > li > a {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n.nav-tabs.nav-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\r\n}\r\n.nav-tabs.nav-justified > .active > a,\r\n.nav-tabs.nav-justified > .active > a:hover,\r\n.nav-tabs.nav-justified > .active > a:focus {\r\n  border: 1px solid #dddddd;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-tabs.nav-justified > li > a {\r\n    border-bottom: 1px solid #dddddd;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .nav-tabs.nav-justified > .active > a,\r\n  .nav-tabs.nav-justified > .active > a:hover,\r\n  .nav-tabs.nav-justified > .active > a:focus {\r\n    border-bottom-color: #ffffff;\r\n  }\r\n}\r\n.nav-pills > li {\r\n  float: left;\r\n}\r\n.nav-pills > li > a {\r\n  border-radius: 4px;\r\n}\r\n.nav-pills > li + li {\r\n  margin-left: 2px;\r\n}\r\n.nav-pills > li.active > a,\r\n.nav-pills > li.active > a:hover,\r\n.nav-pills > li.active > a:focus {\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n}\r\n.nav-stacked > li {\r\n  float: none;\r\n}\r\n.nav-stacked > li + li {\r\n  margin-top: 2px;\r\n  margin-left: 0;\r\n}\r\n.nav-justified {\r\n  width: 100%;\r\n}\r\n.nav-justified > li {\r\n  float: none;\r\n}\r\n.nav-justified > li > a {\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n}\r\n.nav-justified > .dropdown .dropdown-menu {\r\n  top: auto;\r\n  left: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-justified > li {\r\n    display: table-cell;\r\n    width: 1%;\r\n  }\r\n  .nav-justified > li > a {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n.nav-tabs-justified {\r\n  border-bottom: 0;\r\n}\r\n.nav-tabs-justified > li > a {\r\n  margin-right: 0;\r\n  border-radius: 4px;\r\n}\r\n.nav-tabs-justified > .active > a,\r\n.nav-tabs-justified > .active > a:hover,\r\n.nav-tabs-justified > .active > a:focus {\r\n  border: 1px solid #dddddd;\r\n}\r\n@media (min-width: 768px) {\r\n  .nav-tabs-justified > li > a {\r\n    border-bottom: 1px solid #dddddd;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  .nav-tabs-justified > .active > a,\r\n  .nav-tabs-justified > .active > a:hover,\r\n  .nav-tabs-justified > .active > a:focus {\r\n    border-bottom-color: #ffffff;\r\n  }\r\n}\r\n.tab-content > .tab-pane {\r\n  display: none;\r\n}\r\n.tab-content > .active {\r\n  display: block;\r\n}\r\n.nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  min-height: 65px;\r\n  margin-bottom: 22px;\r\n  border: 1px solid transparent;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar {\r\n    border-radius: 4px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-header {\r\n    float: left;\r\n  }\r\n}\r\n.navbar-collapse {\r\n  overflow-x: visible;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  border-top: 1px solid transparent;\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.navbar-collapse.in {\r\n  overflow-y: auto;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-collapse {\r\n    width: auto;\r\n    border-top: 0;\r\n    box-shadow: none;\r\n  }\r\n  .navbar-collapse.collapse {\r\n    display: block !important;\r\n    height: auto !important;\r\n    padding-bottom: 0;\r\n    overflow: visible !important;\r\n  }\r\n  .navbar-collapse.in {\r\n    overflow-y: visible;\r\n  }\r\n  .navbar-fixed-top .navbar-collapse,\r\n  .navbar-static-top .navbar-collapse,\r\n  .navbar-fixed-bottom .navbar-collapse {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n}\r\n.navbar-fixed-top .navbar-collapse,\r\n.navbar-fixed-bottom .navbar-collapse {\r\n  max-height: 340px;\r\n}\r\n@media (max-device-width: 480px) and (orientation: landscape) {\r\n  .navbar-fixed-top .navbar-collapse,\r\n  .navbar-fixed-bottom .navbar-collapse {\r\n    max-height: 200px;\r\n  }\r\n}\r\n.container > .navbar-header,\r\n.container-fluid > .navbar-header,\r\n.container > .navbar-collapse,\r\n.container-fluid > .navbar-collapse {\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n@media (min-width: 768px) {\r\n  .container > .navbar-header,\r\n  .container-fluid > .navbar-header,\r\n  .container > .navbar-collapse,\r\n  .container-fluid > .navbar-collapse {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n}\r\n.navbar-static-top {\r\n  z-index: 1000;\r\n  border-width: 0 0 1px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-static-top {\r\n    border-radius: 0;\r\n  }\r\n}\r\n.navbar-fixed-top,\r\n.navbar-fixed-bottom {\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-fixed-top,\r\n  .navbar-fixed-bottom {\r\n    border-radius: 0;\r\n  }\r\n}\r\n.navbar-fixed-top {\r\n  top: 0;\r\n  border-width: 0 0 1px;\r\n}\r\n.navbar-fixed-bottom {\r\n  bottom: 0;\r\n  margin-bottom: 0;\r\n  border-width: 1px 0 0;\r\n}\r\n.navbar-brand {\r\n  float: left;\r\n  padding: 21.5px 15px;\r\n  font-size: 20px;\r\n  line-height: 22px;\r\n  height: 65px;\r\n}\r\n.navbar-brand:hover,\r\n.navbar-brand:focus {\r\n  text-decoration: none;\r\n}\r\n.navbar-brand > img {\r\n  display: block;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar > .container .navbar-brand,\r\n  .navbar > .container-fluid .navbar-brand {\r\n    margin-left: -15px;\r\n  }\r\n}\r\n.navbar-toggle {\r\n  position: relative;\r\n  float: right;\r\n  margin-right: 15px;\r\n  padding: 9px 10px;\r\n  margin-top: 15.5px;\r\n  margin-bottom: 15.5px;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.navbar-toggle:focus {\r\n  outline: 0;\r\n}\r\n.navbar-toggle .icon-bar {\r\n  display: block;\r\n  width: 22px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n}\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n  margin-top: 4px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-toggle {\r\n    display: none;\r\n  }\r\n}\r\n.navbar-nav {\r\n  margin: 10.75px -15px;\r\n}\r\n.navbar-nav > li > a {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  line-height: 22px;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    box-shadow: none;\r\n  }\r\n  .navbar-nav .open .dropdown-menu > li > a,\r\n  .navbar-nav .open .dropdown-menu .dropdown-header {\r\n    padding: 5px 15px 5px 25px;\r\n  }\r\n  .navbar-nav .open .dropdown-menu > li > a {\r\n    line-height: 22px;\r\n  }\r\n  .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    background-image: none;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-nav {\r\n    float: left;\r\n    margin: 0;\r\n  }\r\n  .navbar-nav > li {\r\n    float: left;\r\n  }\r\n  .navbar-nav > li > a {\r\n    padding-top: 21.5px;\r\n    padding-bottom: 21.5px;\r\n  }\r\n}\r\n.navbar-form {\r\n  margin-left: -15px;\r\n  margin-right: -15px;\r\n  padding: 10px 15px;\r\n  border-top: 1px solid transparent;\r\n  border-bottom: 1px solid transparent;\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  margin-top: 12.5px;\r\n  margin-bottom: 12.5px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-form .form-group {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .form-control-static {\r\n    display: inline-block;\r\n  }\r\n  .navbar-form .input-group {\r\n    display: inline-table;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .input-group .input-group-addon,\r\n  .navbar-form .input-group .input-group-btn,\r\n  .navbar-form .input-group .form-control {\r\n    width: auto;\r\n  }\r\n  .navbar-form .input-group > .form-control {\r\n    width: 100%;\r\n  }\r\n  .navbar-form .control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .radio,\r\n  .navbar-form .checkbox {\r\n    display: inline-block;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .navbar-form .radio label,\r\n  .navbar-form .checkbox label {\r\n    padding-left: 0;\r\n  }\r\n  .navbar-form .radio input[type=\"radio\"],\r\n  .navbar-form .checkbox input[type=\"checkbox\"] {\r\n    position: relative;\r\n    margin-left: 0;\r\n  }\r\n  .navbar-form .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-form .form-group {\r\n    margin-bottom: 5px;\r\n  }\r\n  .navbar-form .form-group:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-form {\r\n    width: auto;\r\n    border: 0;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    box-shadow: none;\r\n  }\r\n}\r\n.navbar-nav > li > .dropdown-menu {\r\n  margin-top: 0;\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\r\n  margin-bottom: 0;\r\n  border-top-right-radius: 4px;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.navbar-btn {\r\n  margin-top: 12.5px;\r\n  margin-bottom: 12.5px;\r\n}\r\n.navbar-btn.btn-sm {\r\n  margin-top: 16px;\r\n  margin-bottom: 16px;\r\n}\r\n.navbar-btn.btn-xs {\r\n  margin-top: 21.5px;\r\n  margin-bottom: 21.5px;\r\n}\r\n.navbar-text {\r\n  margin-top: 21.5px;\r\n  margin-bottom: 21.5px;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-text {\r\n    float: left;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar-left {\r\n    float: left !important;\r\n  }\r\n  .navbar-right {\r\n    float: right !important;\r\n    margin-right: -15px;\r\n  }\r\n  .navbar-right ~ .navbar-right {\r\n    margin-right: 0;\r\n  }\r\n}\r\n.navbar-default {\r\n  background-color: #ffffff;\r\n  border-color: #dddddd;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #4582ec;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #4582ec;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #333333;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #4582ec;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #4582ec;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #4582ec;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-nav > .disabled > a,\r\n.navbar-default .navbar-nav > .disabled > a:hover,\r\n.navbar-default .navbar-nav > .disabled > a:focus {\r\n  color: #333333;\r\n  background-color: transparent;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: #dddddd;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #dddddd;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #cccccc;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #dddddd;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  background-color: transparent;\r\n  color: #4582ec;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #4582ec;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #4582ec;\r\n    background-color: transparent;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #4582ec;\r\n    background-color: transparent;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: #333333;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #4582ec;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #4582ec;\r\n}\r\n.navbar-default .btn-link {\r\n  color: #4582ec;\r\n}\r\n.navbar-default .btn-link:hover,\r\n.navbar-default .btn-link:focus {\r\n  color: #4582ec;\r\n}\r\n.navbar-default .btn-link[disabled]:hover,\r\nfieldset[disabled] .navbar-default .btn-link:hover,\r\n.navbar-default .btn-link[disabled]:focus,\r\nfieldset[disabled] .navbar-default .btn-link:focus {\r\n  color: #333333;\r\n}\r\n.navbar-inverse {\r\n  background-color: #ffffff;\r\n  border-color: #dddddd;\r\n}\r\n.navbar-inverse .navbar-brand {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .navbar-brand:hover,\r\n.navbar-inverse .navbar-brand:focus {\r\n  color: #333333;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-text {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .navbar-nav > li > a:hover,\r\n.navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #333333;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-nav > .active > a,\r\n.navbar-inverse .navbar-nav > .active > a:hover,\r\n.navbar-inverse .navbar-nav > .active > a:focus {\r\n  color: #333333;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-nav > .disabled > a,\r\n.navbar-inverse .navbar-nav > .disabled > a:hover,\r\n.navbar-inverse .navbar-nav > .disabled > a:focus {\r\n  color: #cccccc;\r\n  background-color: transparent;\r\n}\r\n.navbar-inverse .navbar-toggle {\r\n  border-color: #dddddd;\r\n}\r\n.navbar-inverse .navbar-toggle:hover,\r\n.navbar-inverse .navbar-toggle:focus {\r\n  background-color: #dddddd;\r\n}\r\n.navbar-inverse .navbar-toggle .icon-bar {\r\n  background-color: #cccccc;\r\n}\r\n.navbar-inverse .navbar-collapse,\r\n.navbar-inverse .navbar-form {\r\n  border-color: #ededed;\r\n}\r\n.navbar-inverse .navbar-nav > .open > a,\r\n.navbar-inverse .navbar-nav > .open > a:hover,\r\n.navbar-inverse .navbar-nav > .open > a:focus {\r\n  background-color: transparent;\r\n  color: #333333;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\r\n    border-color: #dddddd;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\r\n    background-color: #dddddd;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #333333;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #333333;\r\n    background-color: transparent;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #333333;\r\n    background-color: transparent;\r\n  }\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\r\n    color: #cccccc;\r\n    background-color: transparent;\r\n  }\r\n}\r\n.navbar-inverse .navbar-link {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .navbar-link:hover {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .btn-link {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .btn-link:hover,\r\n.navbar-inverse .btn-link:focus {\r\n  color: #333333;\r\n}\r\n.navbar-inverse .btn-link[disabled]:hover,\r\nfieldset[disabled] .navbar-inverse .btn-link:hover,\r\n.navbar-inverse .btn-link[disabled]:focus,\r\nfieldset[disabled] .navbar-inverse .btn-link:focus {\r\n  color: #cccccc;\r\n}\r\n.breadcrumb {\r\n  padding: 8px 15px;\r\n  margin-bottom: 22px;\r\n  list-style: none;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n}\r\n.breadcrumb > li {\r\n  display: inline-block;\r\n}\r\n.breadcrumb > li + li:before {\r\n  content: \"/\\A0\";\r\n  padding: 0 5px;\r\n  color: #cccccc;\r\n}\r\n.breadcrumb > .active {\r\n  color: #b3b3b3;\r\n}\r\n.pagination {\r\n  display: inline-block;\r\n  padding-left: 0;\r\n  margin: 22px 0;\r\n  border-radius: 4px;\r\n}\r\n.pagination > li {\r\n  display: inline;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n  position: relative;\r\n  float: left;\r\n  padding: 8px 12px;\r\n  line-height: 1.42857143;\r\n  text-decoration: none;\r\n  color: #333333;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n  margin-left: -1px;\r\n}\r\n.pagination > li:first-child > a,\r\n.pagination > li:first-child > span {\r\n  margin-left: 0;\r\n  border-bottom-left-radius: 4px;\r\n  border-top-left-radius: 4px;\r\n}\r\n.pagination > li:last-child > a,\r\n.pagination > li:last-child > span {\r\n  border-bottom-right-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n}\r\n.pagination > li > a:hover,\r\n.pagination > li > span:hover,\r\n.pagination > li > a:focus,\r\n.pagination > li > span:focus {\r\n  z-index: 2;\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n  border-color: #4582ec;\r\n}\r\n.pagination > .active > a,\r\n.pagination > .active > span,\r\n.pagination > .active > a:hover,\r\n.pagination > .active > span:hover,\r\n.pagination > .active > a:focus,\r\n.pagination > .active > span:focus {\r\n  z-index: 3;\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n  border-color: #4582ec;\r\n  cursor: default;\r\n}\r\n.pagination > .disabled > span,\r\n.pagination > .disabled > span:hover,\r\n.pagination > .disabled > span:focus,\r\n.pagination > .disabled > a,\r\n.pagination > .disabled > a:hover,\r\n.pagination > .disabled > a:focus {\r\n  color: #b3b3b3;\r\n  background-color: #ffffff;\r\n  border-color: #dddddd;\r\n  cursor: not-allowed;\r\n}\r\n.pagination-lg > li > a,\r\n.pagination-lg > li > span {\r\n  padding: 14px 16px;\r\n  font-size: 20px;\r\n  line-height: 1.3333333;\r\n}\r\n.pagination-lg > li:first-child > a,\r\n.pagination-lg > li:first-child > span {\r\n  border-bottom-left-radius: 6px;\r\n  border-top-left-radius: 6px;\r\n}\r\n.pagination-lg > li:last-child > a,\r\n.pagination-lg > li:last-child > span {\r\n  border-bottom-right-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n}\r\n.pagination-sm > li > a,\r\n.pagination-sm > li > span {\r\n  padding: 5px 10px;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n}\r\n.pagination-sm > li:first-child > a,\r\n.pagination-sm > li:first-child > span {\r\n  border-bottom-left-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n}\r\n.pagination-sm > li:last-child > a,\r\n.pagination-sm > li:last-child > span {\r\n  border-bottom-right-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.pager {\r\n  padding-left: 0;\r\n  margin: 22px 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.pager li {\r\n  display: inline;\r\n}\r\n.pager li > a,\r\n.pager li > span {\r\n  display: inline-block;\r\n  padding: 5px 14px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n  border-radius: 15px;\r\n}\r\n.pager li > a:hover,\r\n.pager li > a:focus {\r\n  text-decoration: none;\r\n  background-color: #4582ec;\r\n}\r\n.pager .next > a,\r\n.pager .next > span {\r\n  float: right;\r\n}\r\n.pager .previous > a,\r\n.pager .previous > span {\r\n  float: left;\r\n}\r\n.pager .disabled > a,\r\n.pager .disabled > a:hover,\r\n.pager .disabled > a:focus,\r\n.pager .disabled > span {\r\n  color: #b3b3b3;\r\n  background-color: #ffffff;\r\n  cursor: not-allowed;\r\n}\r\n.label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-size: 75%;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\na.label:hover,\r\na.label:focus {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.label:empty {\r\n  display: none;\r\n}\r\n.btn .label {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.label-default {\r\n  background-color: #ffffff;\r\n}\r\n.label-default[href]:hover,\r\n.label-default[href]:focus {\r\n  background-color: #e6e6e6;\r\n}\r\n.label-primary {\r\n  background-color: #4582ec;\r\n}\r\n.label-primary[href]:hover,\r\n.label-primary[href]:focus {\r\n  background-color: #1863e6;\r\n}\r\n.label-success {\r\n  background-color: #3fad46;\r\n}\r\n.label-success[href]:hover,\r\n.label-success[href]:focus {\r\n  background-color: #318837;\r\n}\r\n.label-info {\r\n  background-color: #5bc0de;\r\n}\r\n.label-info[href]:hover,\r\n.label-info[href]:focus {\r\n  background-color: #31b0d5;\r\n}\r\n.label-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.label-warning[href]:hover,\r\n.label-warning[href]:focus {\r\n  background-color: #ec971f;\r\n}\r\n.label-danger {\r\n  background-color: #d9534f;\r\n}\r\n.label-danger[href]:hover,\r\n.label-danger[href]:focus {\r\n  background-color: #c9302c;\r\n}\r\n.badge {\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  line-height: 1;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  background-color: #4582ec;\r\n  border-radius: 10px;\r\n}\r\n.badge:empty {\r\n  display: none;\r\n}\r\n.btn .badge {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.btn-xs .badge,\r\n.btn-group-xs > .btn .badge {\r\n  top: 0;\r\n  padding: 1px 5px;\r\n}\r\na.badge:hover,\r\na.badge:focus {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.list-group-item.active > .badge,\r\n.nav-pills > .active > a > .badge {\r\n  color: #4582ec;\r\n  background-color: #ffffff;\r\n}\r\n.list-group-item > .badge {\r\n  float: right;\r\n}\r\n.list-group-item > .badge + .badge {\r\n  margin-right: 5px;\r\n}\r\n.nav-pills > li > a > .badge {\r\n  margin-left: 3px;\r\n}\r\n.jumbotron {\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n  margin-bottom: 30px;\r\n  color: inherit;\r\n  background-color: #f7f7f7;\r\n}\r\n.jumbotron h1,\r\n.jumbotron .h1 {\r\n  color: inherit;\r\n}\r\n.jumbotron p {\r\n  margin-bottom: 15px;\r\n  font-size: 24px;\r\n  font-weight: 200;\r\n}\r\n.jumbotron > hr {\r\n  border-top-color: #dedede;\r\n}\r\n.container .jumbotron,\r\n.container-fluid .jumbotron {\r\n  border-radius: 6px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.jumbotron .container {\r\n  max-width: 100%;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .jumbotron {\r\n    padding-top: 48px;\r\n    padding-bottom: 48px;\r\n  }\r\n  .container .jumbotron,\r\n  .container-fluid .jumbotron {\r\n    padding-left: 60px;\r\n    padding-right: 60px;\r\n  }\r\n  .jumbotron h1,\r\n  .jumbotron .h1 {\r\n    font-size: 72px;\r\n  }\r\n}\r\n.thumbnail {\r\n  display: block;\r\n  padding: 4px;\r\n  margin-bottom: 22px;\r\n  line-height: 1.42857143;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n  border-radius: 4px;\r\n  transition: border 0.2s ease-in-out;\r\n}\r\n.thumbnail > img,\r\n.thumbnail a > img {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\na.thumbnail:hover,\r\na.thumbnail:focus,\r\na.thumbnail.active {\r\n  border-color: #4582ec;\r\n}\r\n.thumbnail .caption {\r\n  padding: 9px;\r\n  color: #333333;\r\n}\r\n.alert {\r\n  padding: 15px;\r\n  margin-bottom: 22px;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.alert h4 {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n.alert .alert-link {\r\n  font-weight: bold;\r\n}\r\n.alert > p,\r\n.alert > ul {\r\n  margin-bottom: 0;\r\n}\r\n.alert > p + p {\r\n  margin-top: 5px;\r\n}\r\n.alert-dismissable,\r\n.alert-dismissible {\r\n  padding-right: 35px;\r\n}\r\n.alert-dismissable .close,\r\n.alert-dismissible .close {\r\n  position: relative;\r\n  top: -2px;\r\n  right: -21px;\r\n  color: inherit;\r\n}\r\n.alert-success {\r\n  background-color: #3fad46;\r\n  border-color: #3fad46;\r\n  color: #ffffff;\r\n}\r\n.alert-success hr {\r\n  border-top-color: #389a3e;\r\n}\r\n.alert-success .alert-link {\r\n  color: #e6e6e6;\r\n}\r\n.alert-info {\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n  color: #ffffff;\r\n}\r\n.alert-info hr {\r\n  border-top-color: #46b8da;\r\n}\r\n.alert-info .alert-link {\r\n  color: #e6e6e6;\r\n}\r\n.alert-warning {\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n  color: #ffffff;\r\n}\r\n.alert-warning hr {\r\n  border-top-color: #eea236;\r\n}\r\n.alert-warning .alert-link {\r\n  color: #e6e6e6;\r\n}\r\n.alert-danger {\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n  color: #ffffff;\r\n}\r\n.alert-danger hr {\r\n  border-top-color: #d43f3a;\r\n}\r\n.alert-danger .alert-link {\r\n  color: #e6e6e6;\r\n}\r\n@-webkit-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 40px 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 40px 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n.progress {\r\n  overflow: hidden;\r\n  height: 22px;\r\n  margin-bottom: 22px;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.progress-bar {\r\n  float: left;\r\n  width: 0%;\r\n  height: 100%;\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  background-color: #4582ec;\r\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\r\n  transition: width 0.6s ease;\r\n}\r\n.progress-striped .progress-bar,\r\n.progress-bar-striped {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-size: 40px 40px;\r\n}\r\n.progress.active .progress-bar,\r\n.progress-bar.active {\r\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\r\n  animation: progress-bar-stripes 2s linear infinite;\r\n}\r\n.progress-bar-success {\r\n  background-color: #3fad46;\r\n}\r\n.progress-striped .progress-bar-success {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.progress-bar-info {\r\n  background-color: #5bc0de;\r\n}\r\n.progress-striped .progress-bar-info {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.progress-bar-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n.progress-striped .progress-bar-warning {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.progress-bar-danger {\r\n  background-color: #d9534f;\r\n}\r\n.progress-striped .progress-bar-danger {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n}\r\n.media {\r\n  margin-top: 15px;\r\n}\r\n.media:first-child {\r\n  margin-top: 0;\r\n}\r\n.media,\r\n.media-body {\r\n  zoom: 1;\r\n  overflow: hidden;\r\n}\r\n.media-body {\r\n  width: 10000px;\r\n}\r\n.media-object {\r\n  display: block;\r\n}\r\n.media-object.img-thumbnail {\r\n  max-width: none;\r\n}\r\n.media-right,\r\n.media > .pull-right {\r\n  padding-left: 10px;\r\n}\r\n.media-left,\r\n.media > .pull-left {\r\n  padding-right: 10px;\r\n}\r\n.media-left,\r\n.media-right,\r\n.media-body {\r\n  display: table-cell;\r\n  vertical-align: top;\r\n}\r\n.media-middle {\r\n  vertical-align: middle;\r\n}\r\n.media-bottom {\r\n  vertical-align: bottom;\r\n}\r\n.media-heading {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.media-list {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.list-group {\r\n  margin-bottom: 20px;\r\n  padding-left: 0;\r\n}\r\n.list-group-item {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px 15px;\r\n  margin-bottom: -1px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #dddddd;\r\n}\r\n.list-group-item:first-child {\r\n  border-top-right-radius: 4px;\r\n  border-top-left-radius: 4px;\r\n}\r\n.list-group-item:last-child {\r\n  margin-bottom: 0;\r\n  border-bottom-right-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\na.list-group-item,\r\nbutton.list-group-item {\r\n  color: #555555;\r\n}\r\na.list-group-item .list-group-item-heading,\r\nbutton.list-group-item .list-group-item-heading {\r\n  color: #333333;\r\n}\r\na.list-group-item:hover,\r\nbutton.list-group-item:hover,\r\na.list-group-item:focus,\r\nbutton.list-group-item:focus {\r\n  text-decoration: none;\r\n  color: #555555;\r\n  background-color: #f5f5f5;\r\n}\r\nbutton.list-group-item {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.list-group-item.disabled,\r\n.list-group-item.disabled:hover,\r\n.list-group-item.disabled:focus {\r\n  background-color: #eeeeee;\r\n  color: #b3b3b3;\r\n  cursor: not-allowed;\r\n}\r\n.list-group-item.disabled .list-group-item-heading,\r\n.list-group-item.disabled:hover .list-group-item-heading,\r\n.list-group-item.disabled:focus .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n.list-group-item.disabled .list-group-item-text,\r\n.list-group-item.disabled:hover .list-group-item-text,\r\n.list-group-item.disabled:focus .list-group-item-text {\r\n  color: #b3b3b3;\r\n}\r\n.list-group-item.active,\r\n.list-group-item.active:hover,\r\n.list-group-item.active:focus {\r\n  z-index: 2;\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n  border-color: #4582ec;\r\n}\r\n.list-group-item.active .list-group-item-heading,\r\n.list-group-item.active:hover .list-group-item-heading,\r\n.list-group-item.active:focus .list-group-item-heading,\r\n.list-group-item.active .list-group-item-heading > small,\r\n.list-group-item.active:hover .list-group-item-heading > small,\r\n.list-group-item.active:focus .list-group-item-heading > small,\r\n.list-group-item.active .list-group-item-heading > .small,\r\n.list-group-item.active:hover .list-group-item-heading > .small,\r\n.list-group-item.active:focus .list-group-item-heading > .small {\r\n  color: inherit;\r\n}\r\n.list-group-item.active .list-group-item-text,\r\n.list-group-item.active:hover .list-group-item-text,\r\n.list-group-item.active:focus .list-group-item-text {\r\n  color: #fefeff;\r\n}\r\n.list-group-item-success {\r\n  color: #3fad46;\r\n  background-color: #dff0d8;\r\n}\r\na.list-group-item-success,\r\nbutton.list-group-item-success {\r\n  color: #3fad46;\r\n}\r\na.list-group-item-success .list-group-item-heading,\r\nbutton.list-group-item-success .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-success:hover,\r\nbutton.list-group-item-success:hover,\r\na.list-group-item-success:focus,\r\nbutton.list-group-item-success:focus {\r\n  color: #3fad46;\r\n  background-color: #d0e9c6;\r\n}\r\na.list-group-item-success.active,\r\nbutton.list-group-item-success.active,\r\na.list-group-item-success.active:hover,\r\nbutton.list-group-item-success.active:hover,\r\na.list-group-item-success.active:focus,\r\nbutton.list-group-item-success.active:focus {\r\n  color: #fff;\r\n  background-color: #3fad46;\r\n  border-color: #3fad46;\r\n}\r\n.list-group-item-info {\r\n  color: #5bc0de;\r\n  background-color: #d9edf7;\r\n}\r\na.list-group-item-info,\r\nbutton.list-group-item-info {\r\n  color: #5bc0de;\r\n}\r\na.list-group-item-info .list-group-item-heading,\r\nbutton.list-group-item-info .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-info:hover,\r\nbutton.list-group-item-info:hover,\r\na.list-group-item-info:focus,\r\nbutton.list-group-item-info:focus {\r\n  color: #5bc0de;\r\n  background-color: #c4e3f3;\r\n}\r\na.list-group-item-info.active,\r\nbutton.list-group-item-info.active,\r\na.list-group-item-info.active:hover,\r\nbutton.list-group-item-info.active:hover,\r\na.list-group-item-info.active:focus,\r\nbutton.list-group-item-info.active:focus {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n.list-group-item-warning {\r\n  color: #f0ad4e;\r\n  background-color: #fcf8e3;\r\n}\r\na.list-group-item-warning,\r\nbutton.list-group-item-warning {\r\n  color: #f0ad4e;\r\n}\r\na.list-group-item-warning .list-group-item-heading,\r\nbutton.list-group-item-warning .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-warning:hover,\r\nbutton.list-group-item-warning:hover,\r\na.list-group-item-warning:focus,\r\nbutton.list-group-item-warning:focus {\r\n  color: #f0ad4e;\r\n  background-color: #faf2cc;\r\n}\r\na.list-group-item-warning.active,\r\nbutton.list-group-item-warning.active,\r\na.list-group-item-warning.active:hover,\r\nbutton.list-group-item-warning.active:hover,\r\na.list-group-item-warning.active:focus,\r\nbutton.list-group-item-warning.active:focus {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n.list-group-item-danger {\r\n  color: #d9534f;\r\n  background-color: #f2dede;\r\n}\r\na.list-group-item-danger,\r\nbutton.list-group-item-danger {\r\n  color: #d9534f;\r\n}\r\na.list-group-item-danger .list-group-item-heading,\r\nbutton.list-group-item-danger .list-group-item-heading {\r\n  color: inherit;\r\n}\r\na.list-group-item-danger:hover,\r\nbutton.list-group-item-danger:hover,\r\na.list-group-item-danger:focus,\r\nbutton.list-group-item-danger:focus {\r\n  color: #d9534f;\r\n  background-color: #ebcccc;\r\n}\r\na.list-group-item-danger.active,\r\nbutton.list-group-item-danger.active,\r\na.list-group-item-danger.active:hover,\r\nbutton.list-group-item-danger.active:hover,\r\na.list-group-item-danger.active:focus,\r\nbutton.list-group-item-danger.active:focus {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n.list-group-item-heading {\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n}\r\n.list-group-item-text {\r\n  margin-bottom: 0;\r\n  line-height: 1.3;\r\n}\r\n.panel {\r\n  margin-bottom: 22px;\r\n  background-color: #ffffff;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.panel-body {\r\n  padding: 15px;\r\n}\r\n.panel-heading {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-right-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n}\r\n.panel-heading > .dropdown .dropdown-toggle {\r\n  color: inherit;\r\n}\r\n.panel-title {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 18px;\r\n  color: inherit;\r\n}\r\n.panel-title > a,\r\n.panel-title > small,\r\n.panel-title > .small,\r\n.panel-title > small > a,\r\n.panel-title > .small > a {\r\n  color: inherit;\r\n}\r\n.panel-footer {\r\n  padding: 10px 15px;\r\n  background-color: #ffffff;\r\n  border-top: 1px solid #dddddd;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel > .list-group,\r\n.panel > .panel-collapse > .list-group {\r\n  margin-bottom: 0;\r\n}\r\n.panel > .list-group .list-group-item,\r\n.panel > .panel-collapse > .list-group .list-group-item {\r\n  border-width: 1px 0;\r\n  border-radius: 0;\r\n}\r\n.panel > .list-group:first-child .list-group-item:first-child,\r\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\r\n  border-top: 0;\r\n  border-top-right-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n}\r\n.panel > .list-group:last-child .list-group-item:last-child,\r\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\r\n  border-bottom: 0;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n.panel-heading + .list-group .list-group-item:first-child {\r\n  border-top-width: 0;\r\n}\r\n.list-group + .panel-footer {\r\n  border-top-width: 0;\r\n}\r\n.panel > .table,\r\n.panel > .table-responsive > .table,\r\n.panel > .panel-collapse > .table {\r\n  margin-bottom: 0;\r\n}\r\n.panel > .table caption,\r\n.panel > .table-responsive > .table caption,\r\n.panel > .panel-collapse > .table caption {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.panel > .table:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child {\r\n  border-top-right-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n}\r\n.panel > .table:first-child > thead:first-child > tr:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\r\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\r\n  border-top-left-radius: 3px;\r\n}\r\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\r\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\r\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\r\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\r\n  border-top-right-radius: 3px;\r\n}\r\n.panel > .table:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child {\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel > .table:last-child > tbody:last-child > tr:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\r\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\r\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\r\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\r\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.panel > .panel-body + .table,\r\n.panel > .panel-body + .table-responsive,\r\n.panel > .table + .panel-body,\r\n.panel > .table-responsive + .panel-body {\r\n  border-top: 1px solid #dddddd;\r\n}\r\n.panel > .table > tbody:first-child > tr:first-child th,\r\n.panel > .table > tbody:first-child > tr:first-child td {\r\n  border-top: 0;\r\n}\r\n.panel > .table-bordered,\r\n.panel > .table-responsive > .table-bordered {\r\n  border: 0;\r\n}\r\n.panel > .table-bordered > thead > tr > th:first-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n.panel > .table-bordered > tbody > tr > th:first-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n.panel > .table-bordered > tfoot > tr > th:first-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n.panel > .table-bordered > thead > tr > td:first-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n.panel > .table-bordered > tbody > tr > td:first-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n.panel > .table-bordered > tfoot > tr > td:first-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n  border-left: 0;\r\n}\r\n.panel > .table-bordered > thead > tr > th:last-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n.panel > .table-bordered > tbody > tr > th:last-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n.panel > .table-bordered > tfoot > tr > th:last-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n.panel > .table-bordered > thead > tr > td:last-child,\r\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n.panel > .table-bordered > tbody > tr > td:last-child,\r\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n.panel > .table-bordered > tfoot > tr > td:last-child,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n  border-right: 0;\r\n}\r\n.panel > .table-bordered > thead > tr:first-child > td,\r\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\r\n.panel > .table-bordered > tbody > tr:first-child > td,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\r\n.panel > .table-bordered > thead > tr:first-child > th,\r\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\r\n.panel > .table-bordered > tbody > tr:first-child > th,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\r\n  border-bottom: 0;\r\n}\r\n.panel > .table-bordered > tbody > tr:last-child > td,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n.panel > .table-bordered > tfoot > tr:last-child > td,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\r\n.panel > .table-bordered > tbody > tr:last-child > th,\r\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n.panel > .table-bordered > tfoot > tr:last-child > th,\r\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\r\n  border-bottom: 0;\r\n}\r\n.panel > .table-responsive {\r\n  border: 0;\r\n  margin-bottom: 0;\r\n}\r\n.panel-group {\r\n  margin-bottom: 22px;\r\n}\r\n.panel-group .panel {\r\n  margin-bottom: 0;\r\n  border-radius: 4px;\r\n}\r\n.panel-group .panel + .panel {\r\n  margin-top: 5px;\r\n}\r\n.panel-group .panel-heading {\r\n  border-bottom: 0;\r\n}\r\n.panel-group .panel-heading + .panel-collapse > .panel-body,\r\n.panel-group .panel-heading + .panel-collapse > .list-group {\r\n  border-top: 1px solid #dddddd;\r\n}\r\n.panel-group .panel-footer {\r\n  border-top: 0;\r\n}\r\n.panel-group .panel-footer + .panel-collapse .panel-body {\r\n  border-bottom: 1px solid #dddddd;\r\n}\r\n.panel-default {\r\n  border-color: #dddddd;\r\n}\r\n.panel-default > .panel-heading {\r\n  color: #333333;\r\n  background-color: #f5f5f5;\r\n  border-color: #dddddd;\r\n}\r\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #dddddd;\r\n}\r\n.panel-default > .panel-heading .badge {\r\n  color: #f5f5f5;\r\n  background-color: #333333;\r\n}\r\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #dddddd;\r\n}\r\n.panel-primary {\r\n  border-color: #4582ec;\r\n}\r\n.panel-primary > .panel-heading {\r\n  color: #ffffff;\r\n  background-color: #4582ec;\r\n  border-color: #4582ec;\r\n}\r\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #4582ec;\r\n}\r\n.panel-primary > .panel-heading .badge {\r\n  color: #4582ec;\r\n  background-color: #ffffff;\r\n}\r\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #4582ec;\r\n}\r\n.panel-success {\r\n  border-color: #3fad46;\r\n}\r\n.panel-success > .panel-heading {\r\n  color: #ffffff;\r\n  background-color: #3fad46;\r\n  border-color: #3fad46;\r\n}\r\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #3fad46;\r\n}\r\n.panel-success > .panel-heading .badge {\r\n  color: #3fad46;\r\n  background-color: #ffffff;\r\n}\r\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #3fad46;\r\n}\r\n.panel-info {\r\n  border-color: #5bc0de;\r\n}\r\n.panel-info > .panel-heading {\r\n  color: #ffffff;\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #5bc0de;\r\n}\r\n.panel-info > .panel-heading .badge {\r\n  color: #5bc0de;\r\n  background-color: #ffffff;\r\n}\r\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #5bc0de;\r\n}\r\n.panel-warning {\r\n  border-color: #f0ad4e;\r\n}\r\n.panel-warning > .panel-heading {\r\n  color: #ffffff;\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #f0ad4e;\r\n}\r\n.panel-warning > .panel-heading .badge {\r\n  color: #f0ad4e;\r\n  background-color: #ffffff;\r\n}\r\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #f0ad4e;\r\n}\r\n.panel-danger {\r\n  border-color: #d9534f;\r\n}\r\n.panel-danger > .panel-heading {\r\n  color: #ffffff;\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\r\n  border-top-color: #d9534f;\r\n}\r\n.panel-danger > .panel-heading .badge {\r\n  color: #d9534f;\r\n  background-color: #ffffff;\r\n}\r\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\r\n  border-bottom-color: #d9534f;\r\n}\r\n.embed-responsive {\r\n  position: relative;\r\n  display: block;\r\n  height: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n.embed-responsive .embed-responsive-item,\r\n.embed-responsive iframe,\r\n.embed-responsive embed,\r\n.embed-responsive object,\r\n.embed-responsive video {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  border: 0;\r\n}\r\n.embed-responsive-16by9 {\r\n  padding-bottom: 56.25%;\r\n}\r\n.embed-responsive-4by3 {\r\n  padding-bottom: 75%;\r\n}\r\n.well {\r\n  min-height: 20px;\r\n  padding: 19px;\r\n  margin-bottom: 20px;\r\n  background-color: #f7f7f7;\r\n  border: 1px solid #e5e5e5;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\r\n}\r\n.well blockquote {\r\n  border-color: #ddd;\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n}\r\n.well-lg {\r\n  padding: 24px;\r\n  border-radius: 6px;\r\n}\r\n.well-sm {\r\n  padding: 9px;\r\n  border-radius: 3px;\r\n}\r\n.close {\r\n  float: right;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #ffffff;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n  filter: alpha(opacity=50);\r\n}\r\nbutton.close {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n.modal-open {\r\n  overflow: hidden;\r\n}\r\n.modal {\r\n  display: none;\r\n  overflow: hidden;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  -webkit-overflow-scrolling: touch;\r\n  outline: 0;\r\n}\r\n.modal.fade .modal-dialog {\r\n  -webkit-transform: translate(0, -25%);\r\n  transform: translate(0, -25%);\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n}\r\n.modal.in .modal-dialog {\r\n  -webkit-transform: translate(0, 0);\r\n  transform: translate(0, 0);\r\n}\r\n.modal-open .modal {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 10px;\r\n}\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999999;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 6px;\r\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\r\n  background-clip: padding-box;\r\n  outline: 0;\r\n}\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000000;\r\n}\r\n.modal-backdrop.fade {\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n}\r\n.modal-backdrop.in {\r\n  opacity: 0.5;\r\n  filter: alpha(opacity=50);\r\n}\r\n.modal-header {\r\n  padding: 15px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.modal-header .close {\r\n  margin-top: -2px;\r\n}\r\n.modal-title {\r\n  margin: 0;\r\n  line-height: 1.42857143;\r\n}\r\n.modal-body {\r\n  position: relative;\r\n  padding: 20px;\r\n}\r\n.modal-footer {\r\n  padding: 20px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.modal-footer .btn + .btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n.modal-footer .btn-group .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n.modal-footer .btn-block + .btn-block {\r\n  margin-left: 0;\r\n}\r\n.modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\r\n}\r\n@media (min-width: 768px) {\r\n  .modal-dialog {\r\n    width: 600px;\r\n    margin: 30px auto;\r\n  }\r\n  .modal-content {\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\r\n  }\r\n  .modal-sm {\r\n    width: 300px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .modal-lg {\r\n    width: 900px;\r\n  }\r\n}\r\n.tooltip {\r\n  position: absolute;\r\n  z-index: 1070;\r\n  display: block;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  letter-spacing: normal;\r\n  line-break: auto;\r\n  line-height: 1.42857143;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  white-space: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  word-wrap: normal;\r\n  font-size: 14px;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n}\r\n.tooltip.in {\r\n  opacity: 0.9;\r\n  filter: alpha(opacity=90);\r\n}\r\n.tooltip.top {\r\n  margin-top: -3px;\r\n  padding: 5px 0;\r\n}\r\n.tooltip.right {\r\n  margin-left: 3px;\r\n  padding: 0 5px;\r\n}\r\n.tooltip.bottom {\r\n  margin-top: 3px;\r\n  padding: 5px 0;\r\n}\r\n.tooltip.left {\r\n  margin-left: -3px;\r\n  padding: 0 5px;\r\n}\r\n.tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 3px 8px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  background-color: #000000;\r\n  border-radius: 4px;\r\n}\r\n.tooltip-arrow {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n.tooltip.top .tooltip-arrow {\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000000;\r\n}\r\n.tooltip.top-left .tooltip-arrow {\r\n  bottom: 0;\r\n  right: 5px;\r\n  margin-bottom: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000000;\r\n}\r\n.tooltip.top-right .tooltip-arrow {\r\n  bottom: 0;\r\n  left: 5px;\r\n  margin-bottom: -5px;\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000000;\r\n}\r\n.tooltip.right .tooltip-arrow {\r\n  top: 50%;\r\n  left: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 5px 5px 0;\r\n  border-right-color: #000000;\r\n}\r\n.tooltip.left .tooltip-arrow {\r\n  top: 50%;\r\n  right: 0;\r\n  margin-top: -5px;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #000000;\r\n}\r\n.tooltip.bottom .tooltip-arrow {\r\n  top: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000000;\r\n}\r\n.tooltip.bottom-left .tooltip-arrow {\r\n  top: 0;\r\n  right: 5px;\r\n  margin-top: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000000;\r\n}\r\n.tooltip.bottom-right .tooltip-arrow {\r\n  top: 0;\r\n  left: 5px;\r\n  margin-top: -5px;\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000000;\r\n}\r\n.popover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1060;\r\n  display: none;\r\n  max-width: 276px;\r\n  padding: 1px;\r\n  font-family: Georgia, \"Times New Roman\", Times, serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  letter-spacing: normal;\r\n  line-break: auto;\r\n  line-height: 1.42857143;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  white-space: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  word-wrap: normal;\r\n  font-size: 16px;\r\n  background-color: #ffffff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #cccccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 6px;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n.popover.top {\r\n  margin-top: -10px;\r\n}\r\n.popover.right {\r\n  margin-left: 10px;\r\n}\r\n.popover.bottom {\r\n  margin-top: 10px;\r\n}\r\n.popover.left {\r\n  margin-left: -10px;\r\n}\r\n.popover-title {\r\n  margin: 0;\r\n  padding: 8px 14px;\r\n  font-size: 16px;\r\n  background-color: #f7f7f7;\r\n  border-bottom: 1px solid #ebebeb;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n.popover-content {\r\n  padding: 9px 14px;\r\n}\r\n.popover > .arrow,\r\n.popover > .arrow:after {\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n.popover > .arrow {\r\n  border-width: 11px;\r\n}\r\n.popover > .arrow:after {\r\n  border-width: 10px;\r\n  content: \"\";\r\n}\r\n.popover.top > .arrow {\r\n  left: 50%;\r\n  margin-left: -11px;\r\n  border-bottom-width: 0;\r\n  border-top-color: #999999;\r\n  border-top-color: rgba(0, 0, 0, 0.25);\r\n  bottom: -11px;\r\n}\r\n.popover.top > .arrow:after {\r\n  content: \" \";\r\n  bottom: 1px;\r\n  margin-left: -10px;\r\n  border-bottom-width: 0;\r\n  border-top-color: #ffffff;\r\n}\r\n.popover.right > .arrow {\r\n  top: 50%;\r\n  left: -11px;\r\n  margin-top: -11px;\r\n  border-left-width: 0;\r\n  border-right-color: #999999;\r\n  border-right-color: rgba(0, 0, 0, 0.25);\r\n}\r\n.popover.right > .arrow:after {\r\n  content: \" \";\r\n  left: 1px;\r\n  bottom: -10px;\r\n  border-left-width: 0;\r\n  border-right-color: #ffffff;\r\n}\r\n.popover.bottom > .arrow {\r\n  left: 50%;\r\n  margin-left: -11px;\r\n  border-top-width: 0;\r\n  border-bottom-color: #999999;\r\n  border-bottom-color: rgba(0, 0, 0, 0.25);\r\n  top: -11px;\r\n}\r\n.popover.bottom > .arrow:after {\r\n  content: \" \";\r\n  top: 1px;\r\n  margin-left: -10px;\r\n  border-top-width: 0;\r\n  border-bottom-color: #ffffff;\r\n}\r\n.popover.left > .arrow {\r\n  top: 50%;\r\n  right: -11px;\r\n  margin-top: -11px;\r\n  border-right-width: 0;\r\n  border-left-color: #999999;\r\n  border-left-color: rgba(0, 0, 0, 0.25);\r\n}\r\n.popover.left > .arrow:after {\r\n  content: \" \";\r\n  right: 1px;\r\n  border-right-width: 0;\r\n  border-left-color: #ffffff;\r\n  bottom: -10px;\r\n}\r\n.carousel {\r\n  position: relative;\r\n}\r\n.carousel-inner {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n.carousel-inner > .item {\r\n  display: none;\r\n  position: relative;\r\n  transition: 0.6s ease-in-out left;\r\n}\r\n.carousel-inner > .item > img,\r\n.carousel-inner > .item > a > img {\r\n  line-height: 1;\r\n}\r\n@media all and (transform-3d), (-webkit-transform-3d) {\r\n  .carousel-inner > .item {\r\n    transition: -webkit-transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n  }\r\n  .carousel-inner > .item.next,\r\n  .carousel-inner > .item.active.right {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n    left: 0;\r\n  }\r\n  .carousel-inner > .item.prev,\r\n  .carousel-inner > .item.active.left {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n    left: 0;\r\n  }\r\n  .carousel-inner > .item.next.left,\r\n  .carousel-inner > .item.prev.right,\r\n  .carousel-inner > .item.active {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    left: 0;\r\n  }\r\n}\r\n.carousel-inner > .active,\r\n.carousel-inner > .next,\r\n.carousel-inner > .prev {\r\n  display: block;\r\n}\r\n.carousel-inner > .active {\r\n  left: 0;\r\n}\r\n.carousel-inner > .next,\r\n.carousel-inner > .prev {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.carousel-inner > .next {\r\n  left: 100%;\r\n}\r\n.carousel-inner > .prev {\r\n  left: -100%;\r\n}\r\n.carousel-inner > .next.left,\r\n.carousel-inner > .prev.right {\r\n  left: 0;\r\n}\r\n.carousel-inner > .active.left {\r\n  left: -100%;\r\n}\r\n.carousel-inner > .active.right {\r\n  left: 100%;\r\n}\r\n.carousel-control {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 15%;\r\n  opacity: 0.5;\r\n  filter: alpha(opacity=50);\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n.carousel-control.left {\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\r\n}\r\n.carousel-control.right {\r\n  left: auto;\r\n  right: 0;\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\r\n}\r\n.carousel-control:hover,\r\n.carousel-control:focus {\r\n  outline: 0;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  opacity: 0.9;\r\n  filter: alpha(opacity=90);\r\n}\r\n.carousel-control .icon-prev,\r\n.carousel-control .icon-next,\r\n.carousel-control .glyphicon-chevron-left,\r\n.carousel-control .glyphicon-chevron-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -10px;\r\n  z-index: 5;\r\n  display: inline-block;\r\n}\r\n.carousel-control .icon-prev,\r\n.carousel-control .glyphicon-chevron-left {\r\n  left: 50%;\r\n  margin-left: -10px;\r\n}\r\n.carousel-control .icon-next,\r\n.carousel-control .glyphicon-chevron-right {\r\n  right: 50%;\r\n  margin-right: -10px;\r\n}\r\n.carousel-control .icon-prev,\r\n.carousel-control .icon-next {\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 1;\r\n  font-family: serif;\r\n}\r\n.carousel-control .icon-prev:before {\r\n  content: '\\2039';\r\n}\r\n.carousel-control .icon-next:before {\r\n  content: '\\203A';\r\n}\r\n.carousel-indicators {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  z-index: 15;\r\n  width: 60%;\r\n  margin-left: -30%;\r\n  padding-left: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.carousel-indicators li {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 1px;\r\n  text-indent: -999px;\r\n  border: 1px solid #ffffff;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: #000 \\9;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n.carousel-indicators .active {\r\n  margin: 0;\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: #ffffff;\r\n}\r\n.carousel-caption {\r\n  position: absolute;\r\n  left: 15%;\r\n  right: 15%;\r\n  bottom: 20px;\r\n  z-index: 10;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\r\n}\r\n.carousel-caption .btn {\r\n  text-shadow: none;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .carousel-control .glyphicon-chevron-left,\r\n  .carousel-control .glyphicon-chevron-right,\r\n  .carousel-control .icon-prev,\r\n  .carousel-control .icon-next {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-top: -10px;\r\n    font-size: 30px;\r\n  }\r\n  .carousel-control .glyphicon-chevron-left,\r\n  .carousel-control .icon-prev {\r\n    margin-left: -10px;\r\n  }\r\n  .carousel-control .glyphicon-chevron-right,\r\n  .carousel-control .icon-next {\r\n    margin-right: -10px;\r\n  }\r\n  .carousel-caption {\r\n    left: 20%;\r\n    right: 20%;\r\n    padding-bottom: 30px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: 20px;\r\n  }\r\n}\r\n.clearfix:before,\r\n.clearfix:after,\r\n.dl-horizontal dd:before,\r\n.dl-horizontal dd:after,\r\n.container:before,\r\n.container:after,\r\n.container-fluid:before,\r\n.container-fluid:after,\r\n.row:before,\r\n.row:after,\r\n.form-horizontal .form-group:before,\r\n.form-horizontal .form-group:after,\r\n.btn-toolbar:before,\r\n.btn-toolbar:after,\r\n.btn-group-vertical > .btn-group:before,\r\n.btn-group-vertical > .btn-group:after,\r\n.nav:before,\r\n.nav:after,\r\n.navbar:before,\r\n.navbar:after,\r\n.navbar-header:before,\r\n.navbar-header:after,\r\n.navbar-collapse:before,\r\n.navbar-collapse:after,\r\n.pager:before,\r\n.pager:after,\r\n.panel-body:before,\r\n.panel-body:after,\r\n.modal-header:before,\r\n.modal-header:after,\r\n.modal-footer:before,\r\n.modal-footer:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n.clearfix:after,\r\n.dl-horizontal dd:after,\r\n.container:after,\r\n.container-fluid:after,\r\n.row:after,\r\n.form-horizontal .form-group:after,\r\n.btn-toolbar:after,\r\n.btn-group-vertical > .btn-group:after,\r\n.nav:after,\r\n.navbar:after,\r\n.navbar-header:after,\r\n.navbar-collapse:after,\r\n.pager:after,\r\n.panel-body:after,\r\n.modal-header:after,\r\n.modal-footer:after {\r\n  clear: both;\r\n}\r\n.center-block {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.pull-right {\r\n  float: right !important;\r\n}\r\n.pull-left {\r\n  float: left !important;\r\n}\r\n.hide {\r\n  display: none !important;\r\n}\r\n.show {\r\n  display: block !important;\r\n}\r\n.invisible {\r\n  visibility: hidden;\r\n}\r\n.text-hide {\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.hidden {\r\n  display: none !important;\r\n}\r\n.affix {\r\n  position: fixed;\r\n}\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\n.visible-xs,\r\n.visible-sm,\r\n.visible-md,\r\n.visible-lg {\r\n  display: none !important;\r\n}\r\n.visible-xs-block,\r\n.visible-xs-inline,\r\n.visible-xs-inline-block,\r\n.visible-sm-block,\r\n.visible-sm-inline,\r\n.visible-sm-inline-block,\r\n.visible-md-block,\r\n.visible-md-inline,\r\n.visible-md-inline-block,\r\n.visible-lg-block,\r\n.visible-lg-inline,\r\n.visible-lg-inline-block {\r\n  display: none !important;\r\n}\r\n@media (max-width: 767px) {\r\n  .visible-xs {\r\n    display: block !important;\r\n  }\r\n  table.visible-xs {\r\n    display: table !important;\r\n  }\r\n  tr.visible-xs {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-xs,\r\n  td.visible-xs {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .visible-xs-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .visible-xs-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .visible-xs-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .visible-sm {\r\n    display: block !important;\r\n  }\r\n  table.visible-sm {\r\n    display: table !important;\r\n  }\r\n  tr.visible-sm {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-sm,\r\n  td.visible-sm {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .visible-sm-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .visible-sm-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .visible-sm-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .visible-md {\r\n    display: block !important;\r\n  }\r\n  table.visible-md {\r\n    display: table !important;\r\n  }\r\n  tr.visible-md {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-md,\r\n  td.visible-md {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .visible-md-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .visible-md-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .visible-md-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .visible-lg {\r\n    display: block !important;\r\n  }\r\n  table.visible-lg {\r\n    display: table !important;\r\n  }\r\n  tr.visible-lg {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-lg,\r\n  td.visible-lg {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .visible-lg-block {\r\n    display: block !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .visible-lg-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .visible-lg-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .hidden-xs {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .hidden-sm {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .hidden-md {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .hidden-lg {\r\n    display: none !important;\r\n  }\r\n}\r\n.visible-print {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .visible-print {\r\n    display: block !important;\r\n  }\r\n  table.visible-print {\r\n    display: table !important;\r\n  }\r\n  tr.visible-print {\r\n    display: table-row !important;\r\n  }\r\n  th.visible-print,\r\n  td.visible-print {\r\n    display: table-cell !important;\r\n  }\r\n}\r\n.visible-print-block {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .visible-print-block {\r\n    display: block !important;\r\n  }\r\n}\r\n.visible-print-inline {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .visible-print-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n.visible-print-inline-block {\r\n  display: none !important;\r\n}\r\n@media print {\r\n  .visible-print-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n@media print {\r\n  .hidden-print {\r\n    display: none !important;\r\n  }\r\n}\r\n.navbar {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.navbar-nav,\r\n.navbar-form {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n.navbar-nav > li > a {\r\n  margin: 12.5px 6px;\r\n  padding: 8px 12px;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.navbar-nav > li > a:hover {\r\n  border: 1px solid #ddd;\r\n}\r\n.navbar-nav > .active > a,\r\n.navbar-nav > .active > a:hover {\r\n  border: 1px solid #ddd;\r\n}\r\n.navbar-default .navbar-nav > .active > a:hover {\r\n  color: #4582ec;\r\n}\r\n.navbar-inverse .navbar-nav > .active > a:hover {\r\n  color: #333333;\r\n}\r\n.navbar-brand {\r\n  padding-top: 12.5px;\r\n  padding-bottom: 12.5px;\r\n  line-height: 1.9;\r\n}\r\n@media (min-width: 768px) {\r\n  .navbar .navbar-nav > li > a {\r\n    padding: 8px 12px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar .navbar-nav > li > a {\r\n    margin: 0;\r\n  }\r\n}\r\n.btn {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\nlegend {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.input-group-addon {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  border: 1px solid #ddd;\r\n}\r\n.pagination {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.pagination-lg > li > a,\r\n.pagination-lg > li > span {\r\n  padding: 14px 24px;\r\n}\r\n.pager {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.pager a {\r\n  color: #333333;\r\n}\r\n.pager a:hover {\r\n  border-color: transparent;\r\n  color: #fff;\r\n}\r\n.pager .disabled a {\r\n  border-color: #dddddd;\r\n}\r\n.close {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  opacity: 0.4;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #fff;\r\n  opacity: 1;\r\n}\r\n.alert .alert-link {\r\n  color: #ffffff;\r\n  text-decoration: underline;\r\n}\r\n.label {\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-weight: normal;\r\n}\r\n.label-default {\r\n  border: 1px solid #ddd;\r\n  color: #333333;\r\n}\r\n.badge {\r\n  padding: 1px 7px 5px;\r\n  vertical-align: 2px;\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-weight: normal;\r\n}\r\n.panel {\r\n  box-shadow: none;\r\n}\r\n.panel-default .close {\r\n  color: #333333;\r\n}\r\n.modal .close {\r\n  color: #333333;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\" >gesMDL</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\n            <!-- <li *ngIf=\"!authService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li> -->\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Perfil</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Sessão encerrada.', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\n<div class=\"col-md-8\">\n  <h2 class=\"page-header\">Perfil</h2>\n  <p>Aqui será o painel de informações do usuário.</p>\n  <p>Onde pode preencher mais informações, alterar foto, trocar de senha, etc.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2 class=\"page-header\">Criar conta</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Nome</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Usuário</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>E-mail</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Senha</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form> -->\r\n\r\n  <div id=\"signupbox\" style=\"margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Criar conta</div>\r\n        <!-- <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" [routerLink]=\"['/login']\">Fazer Login</a></div> -->\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" (submit)=\"onRegisterSubmit()\">\r\n\r\n          <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\r\n            <p>Error:</p>\r\n            <span></span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"firstname\" class=\"col-md-3 control-label\">Nome</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Seu nome aqui\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastname\" class=\"col-md-3 control-label\">Usuário</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Seu usuário aqui\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Seu e-mail aqui\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\" placeholder=\"Minimo de 8 digitos\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <!-- Button -->\r\n            <div class=\"col-md-offset-3 col-md-9\">\r\n              <button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i> Criar conta</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-12 control\">\r\n              <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\r\n              Já possui uma conta?\r\n\r\n                <a [routerLink]=\"['/login']\">Faça o login aqui</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Para continuar é necessário preencher todos os campos', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validar o email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Para continuar é necessário informar um e-mail válido', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Usuário registrado com sucesso. Agora você pode fazer seu login.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Ocorreu um erro ao tentar registrar seu usuário. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "        <div class=\"col-md-3 col-md-offset-0 col-sm-0 \" style=\"margin-top:30px\">\r\n          <div >\r\n              <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"panel-title\">Menu de navegação</div>\r\n                </div>\r\n\r\n            <!-- It can be fixed with bootstrap affix http://getbootstrap.com/javascript/#affix-->\r\n            <div id=\"sidebar\" class=\"well sidebar-nav\" style=\"background-color:#ffffff \">\r\n                <h5><i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                  <small><b>INFORMAÇÕES</b></small>\r\n              </h5>\r\n                <ul class=\"nav nav-pills nav-stacked\">\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n                </ul>\r\n                <h5><i class=\"glyphicon glyphicon-home\"></i>\r\n                    <small><b>GESTÃO</b></small>\r\n                </h5>\r\n                <ul class=\"nav nav-pills nav-stacked\">\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/federacao']\">Federação</a></li>\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/clubesdelaco']\">Clubes de laço</a></li>\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/lacadores']\">Laçadores</a></li>\r\n\r\n                </ul>\r\n\r\n        </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('user/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('user/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('user/profile');
        var user = localStorage.getItem('user');
        return this.http.get(ep, { headers: headers, params: { user: user } })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (!this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:3000/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/clubesdelaco.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubesdelacoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubesdelacoService = (function () {
    function ClubesdelacoService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    ClubesdelacoService.prototype.getClubesdelaco = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('clubedelaco/list');
        //console.log('service - getClubedelaco()');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['clubedelacoList']; });
    };
    ClubesdelacoService.prototype.getClubedelacoById = function (idClubedelaco) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('clubedelaco/view');
        console.log('service - getClubedelaco()');
        console.log(idClubedelaco);
        return this.http.get(ep, { headers: headers, params: { id: idClubedelaco } })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['clubedelaco']; });
    };
    ClubesdelacoService.prototype.addClubedelaco = function (clubedelaco) {
        //return new Promise(resolve => resolve(clubedelaco));
        //console.log('passou aqui');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('clubedelaco/add');
        return this.http.post(ep, clubedelaco, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClubesdelacoService.prototype.removeClubedelaco = function (idClubedelaco) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('clubedelaco/remove');
        //console.log(3);
        return this.http.post(ep, { idClubedelaco: idClubedelaco }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClubesdelacoService.prototype.updateClubedelaco = function (clubedelaco) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('clubedelaco/update');
        return this.http.post(ep, clubedelaco, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ClubesdelacoService;
}());
ClubesdelacoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], ClubesdelacoService);

var _a, _b;
//# sourceMappingURL=clubesdelaco.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/federacao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// let federacoes = [
//   { title: 'Federação 1', isActive: true },
//   { title: 'Federação 2', isActive: true },
//   { title: 'Federação 3', isActive: false },
//   { title: 'Federação 4', isActive: false },
// ];
var FederacaoService = (function () {
    function FederacaoService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    FederacaoService.prototype.getFederacoes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('federacao/list');
        //console.log('service - getFederacoes()');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FederacaoService.prototype.getFederacaoById = function (idFederacao) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('federacao/view');
        //console.log('service - getFederacoes()');
        return this.http.get(ep, { headers: headers, params: { idFederacao: idFederacao } })
            .map(function (res) { return res.json(); });
    };
    FederacaoService.prototype.addFederacao = function (federacao) {
        //return new Promise(resolve => resolve(federacoes));
        //console.log('passou aqui');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('federacao/add');
        return this.http.post(ep, federacao, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FederacaoService.prototype.removeFederacao = function (idFederacao) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('federacao/remove');
        //console.log(3);
        return this.http.post(ep, { idFederacao: idFederacao }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FederacaoService.prototype.updateFederacao = function (federacao) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('federacao/update');
        return this.http.post(ep, federacao, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return FederacaoService;
}());
FederacaoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], FederacaoService);

var _a, _b;
//# sourceMappingURL=federacao.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/lacadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LacadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LacadoresService = (function () {
    function LacadoresService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    LacadoresService.prototype.getLacadores = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/list');
        //console.log('service - getlacadores()');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['lacadorList']; });
        ;
    };
    LacadoresService.prototype.getLacadorById = function (idLacador) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/view');
        //console.log('service - getlacadores()');
        return this.http.get(ep, { headers: headers, params: { idLacador: idLacador } })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['lacador']; });
        ;
        ;
    };
    LacadoresService.prototype.getLacadorByClubeId = function (idClube) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/listByClubeId');
        return this.http.get(ep, { headers: headers, params: { idClube: idClube } })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['lacadorList']; });
    };
    LacadoresService.prototype.addLacador = function (lacador) {
        //return new Promise(resolve => resolve(lacador));
        //console.log('passou aqui');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/add');
        return this.http.post(ep, lacador, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LacadoresService.prototype.removeLacador = function (idLacador) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/remove');
        //console.log(3);
        return this.http.post(ep, { idLacador: idLacador }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LacadoresService.prototype.updateLacador = function (lacador) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/update');
        return this.http.post(ep, lacador, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return LacadoresService;
}());
LacadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], LacadoresService);

var _a, _b;
//# sourceMappingURL=lacadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map