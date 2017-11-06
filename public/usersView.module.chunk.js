webpackJsonp(["usersView.module"],{

/***/ "../../../../../src/app/theme/pages/default/components/users/usersView/usersView.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/users/usersView/usersView.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tRegistro do Usuário\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a routerLink=\"/users\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tUsuários\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"javascript:history.go(0)\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tVer Detalhes\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tAções rápidas\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isView\" href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"onEditRequest(this.User._id)\" class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEditar\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div class=\"col-lg-12\">\r\n<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon m--hide\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n\t\t\t\t<!-- <h3 class=\"m-form__heading-title\">\r\n\t\t\t\t\t1. Dados do Clube:\r\n\t\t\t\t</h3> -->\r\n\t\t\t\t<h2 class=\"m-portlet__head-text\" style=\"font-size: 1.75rem\">\r\n          Dados do Usuário:\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--begin::Form-->\r\n  <form #userForm=\"ngForm\" class=\"m-form m-form--label-align-right\" name = \"userForm\" id=\"userForm\" (submit)=\"onUsersSubmit(userForm)\"  >\r\n    <div class=\"m-portlet__body\">\r\n\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n        <!-- <div class=\"m-form__heading\">\r\n          <h3 class=\"m-form__heading-title\">\r\n            1. Dados do Clube:\r\n          </h3>\r\n        </div> -->\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Nome:\r\n             <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' >{{this.User.name}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger\">\r\n\t\t\t\t\t\t\t<input class=\"form-control form-control-danger m-input\" id=\"id_name\" #name=\"ngModel\" name=\"name\" required maxlength=\"30\" minlength=\"3\" [(ngModel)]=\"User.name\"  placeholder=\"Digite o nome do usuário\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"form-control-feedback\" style=\"font-size:1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"name.errors.required\">\r\n\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div *ngIf=\"name.errors.minlength\">\r\n\t\t\t\t\t\t\t    Este campo requer ao menos 3 caracteres\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             E-mail:\r\n             <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' >{{this.User.email}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n              <input class=\"form-control m-input\" id=\"id_email\" email required #email=\"ngModel\" maxlength=\"30\" [(ngModel)]=\"User.email\" name=\"email\" placeholder=\"Digite o e-mail\" style=\"margin-bottom: 10px\" type=\"email\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"form-control-feedback\" style=\"font-size:1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">\r\n\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.email\">\r\n\t\t\t\t\t\t\t    Este campo exige um e-mail válido.\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Login do usuário:\r\n             <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' >{{this.User.username}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger \">\r\n              <input class=\"form-control m-input\" id=\"id_username\" minlenght=\"3\" required #username=\"ngModel\" [(ngModel)]=\"User.username\" name=\"username\" placeholder=\"Digite o login\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"form-control-feedback\" style=\"font-size:1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"username.errors.required\">\r\n\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"username.errors.minlength\">\r\n\t\t\t\t\t\t\t    Este campo exige ao menos 3 caracteres\r\n\t\t\t\t\t\t\t  </div>\r\n            </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t Senha:\r\n\t\t\t\t\t\t <span class=\"asteriskField\">*</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' > Entre na tela de edição para alterar a senha</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_username\" required #pass=\"ngModel\" minlength=\"6\" maxlength=\"30\" [(ngModel)]=\"User.password\" name=\"pass\" style=\"margin-bottom: 10px\" type=\"password\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"form-control-feedback\" style=\"font-size:1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"pass.errors.required\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"pass.errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tEste campo exige ao menos 6 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPara alterar sua senha apague este campo e digite uma nova senha.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t CPF:\r\n\t\t\t\t\t\t <span class=\"asteriskField\">*</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' >{{this.User.cpf}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_username\" #cpf= \"ngModel\" required maxlength=\"9\" maxlength=\"15\" [(ngModel)]=\"User.cpf\" name=\"cpf\" placeholder=\"Digite o CPF\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"cpf.invalid && (cpf.dirty || cpf.touched)\" class=\"form-control-feedback\" style=\"font-size:1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"cpf.errors.required\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"pass.errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tEste campo exige ao menos 9 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Foto:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.User.picture}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group input-group \">\r\n              <button class=\"input-group-addon\" style=\"width: 15%\"  (click)=\"onUploadPicture()\" type=\"button\" >\r\n                \t<span class=\"input-group-addon\" id=\"basic-addon2\" >\r\n                      <span class=\"fa fa-photo\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\r\n                  </span>\r\n              </button>\r\n              <input (click)=\"onUploadPicture()\" type=\"text\" #pictureInput  class=\"form-control m-input\" id=\"id_picture\" name=\"picture\" placeholder=\"Escolha uma foto do computador\" readonly>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t Fone:\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label'>{{this.User.foneDDD1}} {{this.User.fone1}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group input-group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input col-md-2\" id=\"id_fone1\" maxlength=\"2\" [(ngModel)]=\"User.foneDDD1\" name=\"foneDDD1\" placeholder=\"DDD\" style=\"margin-bottom: 10px ; width:50\" type=\"text\">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input col-md-10\" id=\"id_fone1\" maxlength=\"30\" [(ngModel)]=\"User.fone1\" name=\"fone1\" placeholder=\"Digite um numero de telefone\" style=\"margin-bottom: 10px;  margin-left: 5px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n     <!-- INICIO::RODAPÉ DE AÇÕES -->\r\n     <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n      <div class=\"m-form__actions m-form__actions\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2\"></div>\r\n          <div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary\"  ><i class=\"icon-hand-right\">Salvar</i></button>\r\n\t\t\t\t\t\t<!-- [disabled] =\"!userForm.valid\" -->\r\n            <a class=\"m-nav__link\" style=\"padding-left: 2rem\"  [routerLink]=\"['/users']\"> Voltar </a>\r\n\t\t\t\t\t</div>\r\n\t\t \t\t</div>\r\n      </div>\r\n     </div>\r\n     <!-- FIM::RODAPÉ DE AÇÕES -->\r\n   </div>\r\n  </div>\r\n <!-- FIM::PORTLET -->\r\n </form>\r\n<!--end::Form-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/users/usersView/usersView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/user.service.ts");
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

// import { appOutputMessages } from '../../../../../../shared/appmessages';

//Depreciado
//import { ValidateService } from '../../../services/validate.service';


var now = new Date();
var UsersViewComponent = (function () {
    //userForm: FormGroup;
    function UsersViewComponent(
        //Depreciado
        //private validateService: ValidateService,
        router, route, usersService) {
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.User = {
            _id: String,
            name: String,
            email: String,
            username: String,
            password: String,
            status: Boolean,
            picture: Blob,
            cpf: String,
            foneDDD1: String,
            fone1: String,
            dataCadastro: Date
        };
    }
    UsersViewComponent.prototype.ngOnInit = function () {
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
        console.log('this.User');
        console.log(this.User);
        //Se for view ou edit, busca os dados do Usuário e de todos os Clubes
        if (!this.isInsert) {
            //Edit ou View
            this.usersService.getUserById(this.idRecord).subscribe(function (result) {
                _this.User = result;
                //pega a data no formato do banco de dados e monta o array do componente Datepicker
                // if (this.User.dataCadastro){
                //   this.User.arrayDataAssociacao = this.ngbDateParserFormatter.parse(this.User.dataAssociacao);
                // }
                console.log('this.User');
                console.log(_this.User);
                // console.log('this.Lacador.idClube');
                // console.log(this.Lacador.idClube);
            });
        }
        else {
            //Insert
            this.User.name = null;
            this.User.email = null;
            this.User.username = null;
            this.User.password = null;
            this.User.status = null;
            this.User.picture = null;
            this.User.cpf = null;
            this.User.foneDDD1 = null;
            this.User.fone1 = null;
            //this.User.dataAssociacao = now.getDate();
        }
        console.log(this.User);
    };
    UsersViewComponent.prototype.onEditRequest = function (idUser) {
        this.router.navigate(['/usersView', { id: idUser, isEdit: true }]);
    };
    UsersViewComponent.prototype.onUploadPicture = function () {
        var fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            var formData = new FormData();
            formData.append("image", fileBrowser.files[0]);
            // this.projectService.upload(formData, this.project.id).subscribe(res => {
            //   // do stuff w/my uploaded file
            // });
        }
    };
    UsersViewComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    // validateAllFormFields(formGroup: any) {         //{1}
    //   Object.keys(formGroup.controls).forEach(field => {  //{2}
    //     const control = formGroup.get(field);             //{3}
    //     if (control instanceof FormControl) {             //{4}
    //       control.markAsTouched({ onlySelf: true });
    //     } else if (control instanceof FormGroup) {        //{5}
    //       this.validateAllFormFields(control);            //{6}
    //     }
    //   });
    // }
    UsersViewComponent.prototype.onUsersSubmit = function (userForm) {
        var _this = this;
        this.markFormGroupTouched(userForm);
        if (!userForm.valid) {
            console.log("Form com erros!");
        }
        else {
            //Monta a data de fundação no formato para o banco de dados.
            //this.User.dataCadastro = new Date(this.User.arrayDataAssociacao.year, this.User.arrayDataAssociacao.month - 1, this.User.arrayDataAssociacao.day);
            var newUser = {
                name: this.User.name,
                email: this.User.email,
                username: this.User.username,
                password: this.User.password,
                //TODO: Campo status em tela
                status: true,
                picture: this.User.picture,
                cpf: this.User.cpf,
                foneDDD1: this.User.foneDDD1,
                fone1: this.User.fone1,
                dataCadastro: this.User.dataCadastro
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
            console.log('newUser');
            console.log(newUser);
            if (this.isInsert) {
                this.usersService.addUser(newUser).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                        //TODO: Mensagem
                        alert('Usuário registrado com sucesso.');
                    }
                    else {
                        //TODO: Mensagem
                        alert('Ocorreu um erro ao tentar inserir este Laçador. Favor entre em contato com o suporte técnico do sistema.' + data.msg);
                    }
                    _this.router.navigate(['usersView', { id: data.id, isView: true }]);
                });
            }
            else {
                //isEdit
                this.usersService.updateUser(this.User).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                        //TODO: Mensagem
                        alert('Usuário atualizado com sucesso.');
                        window.scrollTo(0, 0);
                    }
                    else {
                        //TODO: Mensagem
                        alert('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.');
                        window.scrollTo(0, 0);
                    }
                });
            }
        }
    };
    return UsersViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pictureInput'),
    __metadata("design:type", Object)
], UsersViewComponent.prototype, "fileInput", void 0);
UsersViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/users/usersView/usersView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/pages/default/components/users/usersView/usersView.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UsersService */]) === "function" && _c || Object])
], UsersViewComponent);

var _a, _b, _c;
//# sourceMappingURL=usersView.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/users/usersView/usersView.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersViewModule", function() { return usersViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usersView_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/users/usersView/usersView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { BrowserModule } from '@angular/platform-browser';







//import { AuthGuard } from '../../guards/auth.guard';


//import { SharedModule } from '../../../components/sharedModule.module';
var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_6__usersView_component__["a" /* UsersViewComponent */]
            }
        ]
    }
];
var usersViewModule = (function () {
    function usersViewModule() {
    }
    return usersViewModule;
}());
usersViewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            //  BrowserModule,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
        ], providers: [
            //FederacaoService,
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ], declarations: [
            __WEBPACK_IMPORTED_MODULE_6__usersView_component__["a" /* UsersViewComponent */]
        ]
    })
], usersViewModule);

//# sourceMappingURL=usersView.module.js.map

/***/ })

});
//# sourceMappingURL=usersView.module.chunk.js.map