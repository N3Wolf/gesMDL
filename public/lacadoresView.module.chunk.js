webpackJsonp(["lacadoresView.module"],{

/***/ "../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tRegistro do Laçador\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a routerLink=\"/lacadores\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tLaçadores\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"javascript:history.go(0)\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tVer Detalhes\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tAções rápidas\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isView\" href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"onEditRequest(this.Lacador._id)\" class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEditar\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div class=\"col-lg-12\">\r\n<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon m--hide\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n\t\t\t\t<!-- <h3 class=\"m-form__heading-title\">\r\n\t\t\t\t\t1. Dados do Clube:\r\n\t\t\t\t</h3> -->\r\n\t\t\t\t<h2 class=\"m-portlet__head-text\" style=\"font-size: 1.75rem\">\r\n          1. Dados do Laçador:\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--begin::Form-->\r\n  <form #lacadorForm=\"ngForm\" class=\"m-form m-form--label-align-right\" id=\"clubedelacoForm\" (submit)=\"onLacadoresSubmit(lacadorForm)\">\r\n    <div class=\"m-portlet__body\">\r\n\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n        <!-- <div class=\"m-form__heading\">\r\n          <h3 class=\"m-form__heading-title\">\r\n            1. Dados do Clube:\r\n          </h3>\r\n        </div> -->\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Nome:\r\n             <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' >{{this.Lacador.name}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger \">\r\n              <input class=\"form-control form-control-danger m-input\" id=\"id_name\" maxlength=\"60\" #name=\"ngModel\" required minlenght=\"3\" [(ngModel)]=\"Lacador.name\" name=\"name\" placeholder=\"Digite o nome do laçador\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"form-control-feedback\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"name.errors.required\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"name.errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tEste campo requer ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Clube de laço:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'> {{Lacador.nameClube}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger input-group \">\r\n              <select name=\"clube\" id=\"repeatSelect\" class=\"form-control form-control-danger m-input\" [(ngModel)]=\"Lacador.idClube\">\r\n                  <option> </option>\r\n                  <option *ngFor=\"let clube of Clubedelaco\" [ngValue]=\"clube._id\">\r\n                    {{clube.name}}\r\n                  </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Apelido:\r\n             <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' >{{this.Lacador.apelido}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger \">\r\n              <input class=\"form-control form-control-danger m-input\" id=\"id_apelido\" maxlength=\"30\" required minlenght=\"2\" #apelido=\"ngModel\" [(ngModel)]=\"Lacador.apelido\" name=\"apelido\" placeholder=\"Digite o apelido\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"apelido.invalid && (apelido.dirty || apelido.touched)\" class=\"form-control-feedback\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"apelido.errors.required\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"apelido.errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tEste campo requer ao menos 2 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Fone 1:\r\n\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.Lacador.foneDDD1}} {{this.Lacador.fone1}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger input-group \" >\r\n              <input class=\"form-control form-control-danger m-input col-md-2\" id=\"id_fone1\" maxlength=\"2\" [(ngModel)]=\"Lacador.foneDDD1\" name=\"foneDDD1\" placeholder=\"DDD\" style=\"margin-bottom: 10px ; width:50\" type=\"text\">\r\n              <input class=\"form-control form-control-danger m-input col-md-10\" id=\"id_fone1\" maxlength=\"30\" [(ngModel)]=\"Lacador.fone1\" name=\"fone1\" placeholder=\"Digite um numero de telefone\" style=\"margin-bottom: 10px;  margin-left: 5px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Fone 2:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.Lacador.foneDDD2}} {{this.Lacador.fone2}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger input-group \">\r\n              <input class=\"form-control form-control-danger m-input col-md-2\" id=\"id_fone2\" maxlength=\"2\" [(ngModel)]=\"Lacador.foneDDD2\" name=\"foneDDD2\" placeholder=\"DDD\" style=\"margin-bottom: 10px; \" type=\"text\">\r\n              <input class=\"form-control form-control-danger m-input col-md-10\" id=\"id_fone2\" maxlength=\"30\" [(ngModel)]=\"Lacador.fone2\" name=\"fone2\" placeholder=\"Digite um numero de telefone\" style=\"margin-bottom: 10px ; margin-left: 5px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             CPF:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.Lacador.cpf}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger input-group \">\r\n              <input class=\"form-control form-control-danger m-input\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Lacador.cpf\" name=\"cpf\" placeholder=\"Digite o CPF do laçador\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Endereço:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.Lacador.endereco}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger input-group \">\r\n              <input class=\"form-control m-input\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Lacador.endereco\" name=\"endereco\" placeholder=\"Digite um endereço de referência\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             E-mail:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.Lacador.email}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger \">\r\n              <input class=\"form-control form-control-danger m-input\" id=\"id_email\" maxlength=\"30\" [(ngModel)]=\"Lacador.email\" name=\"email\" placeholder=\"Digite um e-mail de contato\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            Data de Associação\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"date\"> {{this.Lacador.dataAssociacao | date:\"dd/MM/yyyy\" }} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger \">\r\n              <div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<button class = \"input-group-addon\" style=\"width: 15%\"  (click)=\"d.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon2\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t</button>\r\n                <input (click)=\"d.toggle()\" readonly type=\"text\" class=\"form-control form-control-danger m-input\" placeholder=\"dd/mm/yyyy\" aria-describedby=\"basic-addon2\"\r\n                         id=\"id_dataAssociacao\" name=\"dataAssociacao\" [(ngModel)]=\"Lacador.arrayDataAssociacao\" ngbDatepicker #d=\"ngbDatepicker\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Foto:\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label'>{{this.Lacador.picture}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger input-group \">\r\n              <button class=\"input-group-addon\" style=\"width: 15%\"  (click)=\"onUploadPicture()\" type=\"button\" >\r\n                \t<span class=\"input-group-addon\" id=\"basic-addon2\" >\r\n                      <span class=\"fa fa-photo\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\r\n                  </span>\r\n              </button>\r\n              <input (click)=\"onUploadPicture()\" type=\"text\" #pictureInput  class=\"form-control form-control-danger m-input\" id=\"id_picture\" name=\"picture\" placeholder=\"Escolha uma foto do computador\" readonly>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <!--  FORMULÁRIO ANTIGO\r\n\r\n          <form #formLacador=\"ngForm\" form id=\"lacadorForm\" class=\"form-horizontal\" role=\"form\" (submit)=\"onLacadoresSubmit(formLacador.value)\">\r\n\r\n\r\n            <div id=\"div_id_As\" class=\"form-group required\">\r\n                <label for=\"clube\" class=\"control-label col-md-4  requiredField\"> Clube <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                    <p style=\"margin-top: 10px\" type=\"text\" ><label style=\"font-weight: normal\"> {{Lacador.nameClube}} </label> </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                    <select name=\"clube\" id=\"repeatSelect\" class=\"input-md form-control \" style=\"margin-bottom: 10px;\" [(ngModel)]=\"Lacador.idClube\">\r\n                        <option> </option>\r\n                        <option *ngFor=\"let clube of Clubedelaco\" [ngValue]=\"clube._id\">{{clube.name}}\r\n                        </option>\r\n\r\n                    </select>\r\n                </div>\r\n\r\n\r\n\r\n                <label for=\"nomeLacador\" class=\"control-label col-md-4  requiredField\"> Nome do Laçador <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.name}} </label> </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_name\" maxlength=\"30\" [(ngModel)]=\"Lacador.name\" name=\"name\" placeholder=\"Digite o nome do laçador\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n\r\n                <label for=\"apelido\" class=\"control-label col-md-4  requiredField\"> Apelido </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.apelido}} </label></p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_apelido\" maxlength=\"30\" [(ngModel)]=\"Lacador.apelido\" name=\"apelido\" placeholder=\"Digite o apelido\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n\r\n                <label for=\"foneDDD1\" class=\"control-label col-md-4  requiredField\"> Fone 1 </label>\r\n                <div *ngIf=\"isView\" class=\"col-sm-7\">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.foneDDD1}} {{this.Lacador.fone1}} </label></p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                  <input class=\"form-control col-md-2\" id=\"id_fone1\" maxlength=\"2\" [(ngModel)]=\"Lacador.foneDDD1\" name=\"foneDDD1\" placeholder=\"(##)\" style=\"margin-bottom: 10px ; width:50\" type=\"text\">\r\n                  <input class=\"form-control\" id=\"id_fone1\" maxlength=\"30\" [(ngModel)]=\"Lacador.fone1\" name=\"fone1\" placeholder=\"Digite um numero de telefone\" style=\"margin-bottom: 10px;  margin-left: 5px\" type=\"text\">\r\n                </div>\r\n\r\n                <label for=\"foneDDD2\" class=\"control-label col-md-4  requiredField\"> Fone 2 </label>\r\n                <div *ngIf=\"isView\" class=\"col-sm-7\">\r\n                  <p style=\"margin-top: 10px \" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.foneDDD2}} {{this.Lacador.fone2}} </label></p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                  <input class=\"form-control col-md-2\" id=\"id_fone2\" maxlength=\"2\" [(ngModel)]=\"Lacador.foneDDD2\" name=\"foneDDD2\" placeholder=\"(##)\" style=\"margin-bottom: 10px; \" type=\"text\">\r\n                  <input class=\"form-control\" id=\"id_fone2\" maxlength=\"30\" [(ngModel)]=\"Lacador.fone2\" name=\"fone2\" placeholder=\"Digite um numero de telefone\" style=\"margin-bottom: 10px ; margin-left: 5px\" type=\"text\">\r\n                </div>\r\n\r\n                <label for=\"cpf\" class=\"control-label col-md-4  requiredField\"> CPF <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.cpf}} </label></p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Lacador.cpf\" name=\"cpf\" placeholder=\"Digite o CPF do laçador\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n\r\n\r\n\r\n                <label for=\"cpf\" class=\"control-label col-md-4  requiredField\"> Endereço <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\">{{this.Lacador.endereco}}</label> </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Lacador.endereco\" name=\"endereco\" placeholder=\"Digite um endereço de referência\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n\r\n\r\n\r\n                <label for=\"email\" class=\"control-label col-md-4\"> E-mail </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.email}} </label></p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls  col-md-7 input-group\">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_email\" maxlength=\"30\" [(ngModel)]=\"Lacador.email\" name=\"email\" placeholder=\"Digite um e-mail de contato\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n\r\n\r\n\r\n                <label for=\"dataAssociacao\" class=\"control-label col-md-4  requiredField\"> Data de Associação </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <div *ngIf=\"this.Lacador.dataAssociacao\">\r\n                    <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{  this.Lacador.dataAssociacao }} </label></p>\r\n                  </div>\r\n                  <div *ngIf=\"!(this.Lacador.dataAssociacao)\" >\r\n                    <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> Não informada </label></p>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls date col-md-7 input-group\" style=\"margin-bottom: 10px\">\r\n                  <input class=\"input-md textinput textInput form-control\" placeholder=\"dd/MM/yyyy\"\r\n                             id=\"dataAssociacao\" name=\"dataAssociacao\" [(ngModel)]=\"Lacador.arrayDataAssociacao\" ngbDatepicker #d=\"ngbDatepicker\" >\r\n                      <button class=\"input-group-addon\" style=\"width: 8%\"  (click)=\"d.toggle()\" type=\"button\" >\r\n                        <span class=\"fa fa-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\r\n\r\n                      </button>\r\n\r\n\r\n                </div>\r\n\r\n                <label for=\"picture\" class=\"control-label col-md-4\"> picture </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Lacador.picture}} </label></p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls file col-md-7 input-group\" style=\"margin-bottom: 10px\">\r\n                  <input type=\"text\" #pictureInput  class=\"input-md  form-control image-preview-filename\" id=\"id_picture\" name=\"picture\" placeholder=\"Escolha uma foto do computador\" disabled=\"disabled\">\r\n                  <button class=\"input-group-addon\" style=\"width: 8%\"  (click)=\"onUploadPicture()\" type=\"button\" >\r\n                      <span class=\"fa fa-photo\" style=\"width: 0.2rem; height: 1rem; cursor: pointer;\"></span>\r\n                  </button>\r\n                </div>\r\n\r\n\r\n            </div> -->\r\n\r\n\r\n\r\n     <!-- INICIO::RODAPÉ DE AÇÕES -->\r\n     <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n      <div class=\"m-form__actions m-form__actions\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2\"></div>\r\n          <div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-hand-right\">Salvar</i></button>\r\n            <a class=\"m-nav__link\" style=\"padding-left: 2rem\"  [routerLink]=\"['/lacadores']\"> Voltar </a>\r\n\t\t\t\t\t</div>\r\n\t\t \t\t</div>\r\n      </div>\r\n     </div>\r\n     <!-- FIM::RODAPÉ DE AÇÕES -->\r\n   </div>\r\n  </div>\r\n <!-- FIM::PORTLET -->\r\n </form>\r\n<!--end::Form-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LacadoresViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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


//Depreciado
//import { ValidateService } from '../../../services/validate.service';


//TODO: Quando 2 módulos usando ngDatepicker são abertos em sequencia, ocorre erro ao tentar carregar 2x o ngDatepicker

//import { uiSelect } from 'ui-select';
//import { ngSanitize } from 'angular-sanitize';

var now = new Date();
var LacadoresViewComponent = (function () {
    function LacadoresViewComponent(
        //Depreciado
        //private validateService: ValidateService,
        flashMessage, 
        //private federacaoService: FederacaoService,
        router, route, clubesdelacoService, lacadoresService, ngbDateParserFormatter) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
        this.clubesdelacoService = clubesdelacoService;
        this.lacadoresService = lacadoresService;
        this.ngbDateParserFormatter = ngbDateParserFormatter;
        this.Lacador = {
            _id: String,
            name: String,
            cpf: String,
            endereco: String,
            email: String,
            picture: Blob,
            status: Boolean,
            idClube: String,
            nameClube: String,
            flgIndepentente: Boolean,
            apelido: String,
            foneDDD1: String,
            fone1: String,
            foneDDD2: String,
            fone2: String,
            dataAssociacao: Date
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
                //pega a data no formato do banco de dados e monta o array do componente Datepicker
                if (_this.Lacador.dataAssociacao) {
                    _this.Lacador.arrayDataAssociacao = _this.ngbDateParserFormatter.parse(_this.Lacador.dataAssociacao);
                }
                console.log('this.Lacador');
                console.log(_this.Lacador);
                // console.log('this.Lacador.idClube');
                // console.log(this.Lacador.idClube);
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
                        //Se não encontrou um clube, significa que ele foi removido do sistema. Então se torna um Laçador Independente
                        _this.Lacador.nameClube = clubeDoLacador ? clubeDoLacador['name'] : "Laçador Independente (Clube removido do sistema)";
                        console.log('View: clubeDoLacador');
                        console.log(clubeDoLacador);
                        //console.log(this.Lacador.nameClube);
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
            this.Lacador.apelido = null;
            this.Lacador.foneDDD1 = null;
            this.Lacador.fone1 = null;
            this.Lacador.foneDDD2 = null;
            this.Lacador.fone2 = null;
            this.Lacador.dataAssociacao = null;
            if (!this.requestIdClube) {
                // permite selecionar um clube
                this.Lacador.idClube = null;
                this.Lacador.flgIndepentente = null;
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
        console.log(this.Lacador);
    };
    LacadoresViewComponent.prototype.onEditRequest = function (idLacador) {
        this.router.navigate(['/lacadoresView', { id: idLacador, isEdit: true }]);
    };
    LacadoresViewComponent.prototype.onUploadPicture = function () {
        var fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            var formData = new FormData();
            formData.append("image", fileBrowser.files[0]);
            // this.projectService.upload(formData, this.project.id).subscribe(res => {
            //   // do stuff w/my uploaded file
            // });
        }
    };
    //toca todos os campos do form, para ativar a validação
    LacadoresViewComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    LacadoresViewComponent.prototype.onLacadoresSubmit = function (lacadorForm) {
        var _this = this;
        //toca todos os campos do form, para ativar a validação
        this.markFormGroupTouched(lacadorForm);
        if (!lacadorForm.valid) {
            console.log("Form com erros!");
        }
        else {
            //Monta a data de fundação no formato para o banco de dados.
            this.Lacador.dataAssociacao = new Date(this.Lacador.arrayDataAssociacao.year, this.Lacador.arrayDataAssociacao.month - 1, this.Lacador.arrayDataAssociacao.day);
            var newLacador = {
                name: this.Lacador.name,
                cpf: this.Lacador.cpf,
                endereco: this.Lacador.endereco,
                email: this.Lacador.email,
                picture: this.Lacador.picture,
                idClube: this.Lacador.idClube,
                status: true,
                apelido: this.Lacador.apelido,
                foneDDD1: this.Lacador.foneDDD1,
                fone1: this.Lacador.fone1,
                foneDDD2: this.Lacador.foneDDD2,
                fone2: this.Lacador.fone2,
                dataAssociacao: this.Lacador.dataAssociacao
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
            console.log(newLacador);
            if (this.isInsert) {
                this.lacadoresService.addLacador(newLacador).subscribe(function (data) {
                    if (data.success) {
                        //console.log(data);
                        _this.router.navigate(['lacadoresView', { id: data.id, isView: true }]);
                        //TODO: Mensagem
                        //this.flashMessage.show('Laçador registrado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                    }
                    else {
                        //TODO: Mensagem
                        //this.flashMessage.show('Ocorreu um erro ao tentar inserir este Laçador. Favor entre em contato com o suporte técnico do sistema.', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
            else {
                //isEdit
                this.lacadoresService.updateLacador(this.Lacador).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                        //this.router.navigate(['lacadoresView', { id: this.Lacador._id, isEdit: true }]);
                        //TODO: Mensagem
                        //this.flashMessage.show('Laçador atualizado com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
                        window.scrollTo(0, 0);
                    }
                    else {
                        //TODO: Mensagem
                        //this.flashMessage.show('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        window.scrollTo(0, 0);
                    }
                });
            }
        }
    };
    return LacadoresViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pictureInput'),
    __metadata("design:type", Object)
], LacadoresViewComponent.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LacadoresViewComponent.prototype, "requestIdClube", void 0);
LacadoresViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__["a" /* LacadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__["a" /* LacadoresService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */]) === "function" && _f || Object])
], LacadoresViewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=lacadoresView.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lacadoresViewModule", function() { return lacadoresViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lacadoresView_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/lacadores/lacadoresView/lacadoresView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_lacadores_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classes_myNgbDateParserFormatter__ = __webpack_require__("../../../../../src/app/classes/myNgbDateParserFormatter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datepicker_config_datepicker_config_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { BrowserModule } from '@angular/platform-browser';






//import { AuthGuard } from '../../guards/auth.guard';

//import { FederacaoService } from '../../../services/federacao.service';





//import { SharedModule } from '../../../components/sharedModule.module';
var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_6__lacadoresView_component__["a" /* LacadoresViewComponent */]
            }
        ]
    }
];
var lacadoresViewModule = (function () {
    function lacadoresViewModule() {
    }
    return lacadoresViewModule;
}());
lacadoresViewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            //  BrowserModule,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot()
        ], providers: [
            //FederacaoService,
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services_clubesdelaco_service__["a" /* ClubesdelacoService */],
            __WEBPACK_IMPORTED_MODULE_9__services_lacadores_service__["a" /* LacadoresService */],
            { provide: __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_11__classes_myNgbDateParserFormatter__["a" /* MyNgbDateParserFormatter */] },
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"]
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ], declarations: [
            __WEBPACK_IMPORTED_MODULE_6__lacadoresView_component__["a" /* LacadoresViewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__datepicker_config_datepicker_config_component__["a" /* DatepickerConfigComponent */]
        ]
    })
], lacadoresViewModule);

//# sourceMappingURL=lacadoresView.module.js.map

/***/ })

});
//# sourceMappingURL=lacadoresView.module.chunk.js.map