webpackJsonp(["clubesdelacoView.module"],{

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelacoView/clubesdelacoView.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tRegistro do Clube de Laço\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a routerLink=\"/clubesdelaco\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tClubes de Laço\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"javascript:history.go(0)\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tVer Detalhes\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tAções rápidas\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isView\" href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"onEditRequest(this.Clubedelaco._id)\" class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEditar\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div class=\"col-lg-12\">\r\n<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <span class=\"m-portlet__head-icon m--hide\">\r\n          <i class=\"la la-gear\"></i>\r\n        </span>\r\n\t\t\t\t<!-- <h3 class=\"m-form__heading-title\">\r\n\t\t\t\t\t1. Dados do Clube:\r\n\t\t\t\t</h3> -->\r\n\t\t\t\t<h2 class=\"m-portlet__head-text\" style=\"font-size: 1.75rem\">\r\n          1. Dados do Clube:\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--begin::Form-->\r\n\t<form #clubedelacoForm=\"ngForm\" class=\"m-form m-form--label-align-right \" id=\"clubedelacoForm\" (submit)=\"onClubesdelacoSubmit(clubedelacoForm)\">\r\n    <div class=\"m-portlet__body\">\r\n\t\t\t<div class=\"m-form__section m-form__section--first\">\r\n        <!-- <div class=\"m-form__heading\">\r\n          <h3 class=\"m-form__heading-title\">\r\n            1. Dados do Clube:\r\n          </h3>\r\n        </div> -->\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n             Nome do clube:\r\n             <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' >{{this.Clubedelaco.name}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n              <input class=\"form-control m-input\" id=\"id_name\" #name=\"ngModel\" required minlength=\"3\" maxlength=\"60\" [(ngModel)]=\"Clubedelaco.name\" name=\"name\" placeholder=\"Escolha um nome para o Clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"form-control-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"name.errors.required\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"name.errors.minlength\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo requer ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            Sede / Localização <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"text\">{{this.Clubedelaco.sede}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n              <input class=\"form-control m-input\" id=\"id_sede\" #sede=\"ngModel\" required maxlength=\"60\" [(ngModel)]=\"Clubedelaco.sede\" name=\"sede\" placeholder=\"Sede ou localização do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"sede.invalid && (sede.dirty || sede.touched)\" class=\"form-control-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"sede.errors.required\" style=\"font-size: 1rem\" >\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"sede.errors.minlength\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo requer ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            E-mail <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"text\">{{this.Clubedelaco.email}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n              <input class=\"form-control m-input\" id=\"id_email\" #email=\"ngModel\" required maxlength=\"30\" [(ngModel)]=\"Clubedelaco.email\" name=\"email\" placeholder=\"Email do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"form-control-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.email\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo exige um e-mail válido.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            Razão Social <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"text\">{{this.Clubedelaco.razaoSocial}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n              <input class=\"form-control m-input\" id=\"id_razaoSocial\" #razaoSocial=\"ngModel\" required minlength=\"3\" maxlength=\"80\" [(ngModel)]=\"Clubedelaco.razaoSocial\" name=\"razaoSocial\" placeholder=\"Razão social do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"razaoSocial.invalid && (razaoSocial.dirty || razaoSocial.touched)\" class=\"form-control-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"razaoSocial.errors.required\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"razaoSocial.errors.minlength\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo exige ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            CNPJ <span class=\"asteriskField\">*</span>\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"text\">{{this.Clubedelaco.cnpj}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n              <input class=\"form-control m-input\" id=\"id_cnpj\" #cnpj=\"ngModel\" required maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cnpj\" name=\"cnpj\" placeholder=\"CNPJ do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"cnpj.invalid && (cnpj.dirty || cnpj.touched)\" class=\"form-control-feedback\">\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"cnpj.errors.required\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\tEste campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            Sigla\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"text\">{{this.Clubedelaco.sigla}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"col-lg-8\">\r\n              <input class=\"form-control m-input\" id=\"id_sigla\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.sigla\" name=\"sigla\" placeholder=\"Sigla do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group m-form__group row\">\r\n          <label class=\"col-lg-3 col-form-label\">\r\n            Data de Fundação\r\n          </label>\r\n          <div class=\"col-lg-6\">\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p class ='col-form-label' type=\"date\"> {{this.Clubedelaco.dataFundacao | date:\"dd/MM/yyyy\" }} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n              <div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<button class = \"input-group-addon\" style=\"width: 15%\"  (click)=\"d.toggle()\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon2\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<input disabled type=\"text\" class=\"form-control m-input\" placeholder=\"dd/mm/yyyy\" aria-describedby=\"basic-addon2\"\r\n                         id=\"id_dataFundacao\" name=\"dataFundacao\" [(ngModel)]=\"Clubedelaco.arrayDataFundacao\" ngbDatepicker #d=\"ngbDatepicker\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tRegistro SETEL\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.registroSETEL}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_registroSETEL\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.registroSETEL\" name=\"registroSETEL\" placeholder=\"Registro SETEL do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tRua\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.rua}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_rua\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.rua\" name=\"rua\" placeholder=\"nome da rua do endereço do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tNúmero da sede\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.numeroSala}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_numeroSala\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.numeroSala\" name=\"numeroSala\" placeholder=\"Numero/Sala do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tBairro\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.bairro}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_bairro\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.bairro\" name=\"bairro\" placeholder=\"Bairro do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tCEP\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.cep}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_cep\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cep\" name=\"cep\" placeholder=\"CEP do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tCidade\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.cidade}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_cidade\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cidade\" name=\"cidade\" placeholder=\"cidade do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tTelefone\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.foneDDD}} {{this.Clubedelaco.fone}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t  <div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input col-lg-2\" id=\"id_foneDDD\" maxlength=\"2\" [(ngModel)]=\"Clubedelaco.foneDDD\" name=\"foneDDD\" placeholder=\"DDD\" style=\"margin-bottom: 10px; \" type=\"text\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input col-lg-10\" id=\"id_fone\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.fone\" name=\"fone\" placeholder=\"Fone do clube\" style=\"margin-bottom: 10px; margin-left: 5px\" type=\"text\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tFax\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.faxDDD}} {{this.Clubedelaco.fax}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input col-lg-2\" id=\"id_faxDDD\" maxlength=\"2\" [(ngModel)]=\"Clubedelaco.faxDDD\" name=\"faxDDD\" placeholder=\"DDD\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input col-lg-10\" id=\"id_fax\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.fax\" name=\"fax\" placeholder=\"Fax do Clube\" style=\"margin-bottom: 10px; margin-left: 5px\" type=\"text\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tÁrea de atuação\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.atuacao}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control m-input\" id=\"id_atuacao\" maxlength=\"300\" [(ngModel)]=\"Clubedelaco.atuacao\" name=\"atuacao\" placeholder=\"Área de abrangência e público alvo.\" style=\"margin-bottom: 0px\" type=\"text\" rows=\"4\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n\t\t\t<br>\r\n\t\t\t<!--INICIO: SEÇÃO DO REPRESENTANTE  -->\r\n\t\t\t<div class=\"m-form__section m-form__section--last\">\r\n\t\t\t\t<div class=\"m-form__heading\">\r\n\t\t\t\t\t<h3 class=\"m-form__heading-title\">\r\n\t\t\t\t\t\t2. Dados do representante:\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tNome\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.nomeRepresentante}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_nomeRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.nomeRepresentante\" name=\"nomeRepresentante\" placeholder=\"Nome do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tCPF\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.cpfRepresentante}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_cpfRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cpfRepresentante\" name=\"cpfRepresentante\" placeholder=\"CPF do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tRG do representante\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.rgRepresentante}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_rgRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.rgRepresentante\" name=\"rgRepresentante\" placeholder=\"RG do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tCargo do representante\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.cargoRepresentante}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<input class=\"form-control m-input\" id=\"id_cargoRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cargoRepresentante\" name=\"cargoRepresentante\" placeholder=\"RG do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\tTelefone\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n\t\t\t\t\t\t\t<p class ='col-form-label' type=\"text\">{{this.Clubedelaco.foneDDDRepresentante}} {{this.Clubedelaco.foneRepresentante}} </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isView\" class=\"form-group m-form__group \">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input col-lg-2\" id=\"id_foneDDDRepresentante\" maxlength=\"2\" [(ngModel)]=\"Clubedelaco.foneDDDRepresentante\" name=\"foneDDDRepresentante\" placeholder=\"DDD\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input col-lg-10\" id=\"id_foneRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.foneRepresentante\" name=\"foneRepresentante\" placeholder=\"Fone do representante do Clube\" style=\"margin-bottom: 10px; margin-left: 5px\" type=\"text\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n        <br>\r\n      </div>\r\n\t\t\t<!--FIM: SEÇÃO DO REPRESENTANTE  -->\r\n\t\t<!-- INICIO::RODAPÉ DE AÇÕES -->\r\n    <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n      <div class=\"m-form__actions m-form__actions\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2\"></div>\r\n          <div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-hand-right\">Salvar</i></button>\r\n\t\t\t\t\t\t\t<a class=\"m-nav__link\" style=\"padding-left: 2rem\"  [routerLink]=\"['/clubesdelaco']\"> Voltar </a>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\t\t<!-- FIM::RODAPÉ DE AÇÕES -->\r\n\t<div class=\"m-form__section m-form__section--last\">\r\n\t\t<div class=\"m-form__heading\">\r\n\t\t\t<h3 class=\"m-form__heading-title\">\r\n\t\t\t\tLaçadores do clube\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t\t<!-- INICIO TABLE LACADORES DO CLUBE -->\r\n\t\t<div>\r\n\t\t\t<div *ngIf=\"!isInsert\">\r\n\t\t\t\t<table class=\"table m-table m-table--head-bg-success\"  id=\"lacadores\" width=\"90%\" >\r\n\t\t\t\t\t<thead class='thead-success'>\r\n\t\t\t\t\t\t<tr role=\"row\">\r\n\t\t\t\t\t\t\t<th title=\"Field #1\"> Laçador </th>\r\n\t\t\t\t\t\t\t<th title=\"Field #2\"> CPF </th>\r\n\t\t\t\t\t\t\t<th title=\"Field #3\"> E-mail </th>\r\n\t\t\t\t\t\t\t<th title=\"Field #4\"> Endereço </th>\r\n\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr role=\"row\">\r\n\t\t\t\t\t\t\t<tr role=\"row\" *ngFor=\"let registro of listLacadores\">\r\n\t\t\t\t\t\t\t\t<td ><a class=\"m-menu__link\" [routerLink]=\"['/clubesdelacoView', { id : registro._id , isView: true}]\" >{{registro.name}}</a></td>\r\n\t\t\t\t\t\t\t\t<td>{{registro.cpf}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{registro.email}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{registro.endereco}}</td>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<div  id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n\t\t\t\t\t\t<label style=\"float:right\" > {{this.qtdLacadores}} <small>registros encontrados</small> </label>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- FIM::TABLE LACADORES DO CLUBE -->\r\n\t</div>\r\n  </form>\r\n\t<br>\r\n\t<br>\r\n  <!--end::Form-->\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n\r\n\r\n\r\n  <div id=\"addboxClubeLaco\" style=\"margin-top:30px\" >\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\"></div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n\r\n          <form form id=\"clubedelacoForm\" class=\"form-horizontal\" role=\"form\" (submit)=\"onClubesdelacoSubmit()\">\r\n\r\n            <div id=\"div_id_As\" class=\"form-group required\">\r\n              <div id=\"div_nomeclube\" class=\"form-group required\">\r\n                <label for=\"nomeclube\" class=\"control-label col-md-5  requiredField\"> Nome do clube: <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.name}} </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_name\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.name\" name=\"name\" placeholder=\"Escolha um nome para o Clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div id=\"div_sede_localização\" class=\"form-group required\">\r\n                <label for=\"sede_localizacao\" class=\"control-label col-md-5  requiredField\"> Sede / Localização <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.sede}} </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_sede\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.sede\" name=\"sede\" placeholder=\"Sede ou localização do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"div_email\" class=\"form-group required\">\r\n                <label for=\"email\" class=\"control-label col-md-5  requiredField\"> E-mail <span class=\"asteriskField\">*</span> </label>\r\n                <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                  <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.email}} </p>\r\n                </div>\r\n                <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n                  <input class=\"input-md  textinput textInput form-control\" id=\"id_email\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.email\" name=\"email\" placeholder=\"Sede ou localização do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n                </div>\r\n              </div>\r\n\r\n\r\n            <div id=\"div_razaoSocial\" class=\"form-group required\">\r\n              <label for=\"razaoSocial\" class=\"control-label col-md-5  requiredField\"> Razão Social <span class=\"asteriskField\">*</span> </label>\r\n              <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.razaoSocial}} </p>\r\n              </div>\r\n              <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n                <input class=\"input-md  textinput textInput form-control\" id=\"id_razaoSocial\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.razaoSocial\" name=\"razaoSocial\" placeholder=\"Razão social do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n          <div id=\"div_cnpj\" class=\"form-group required\">\r\n            <label for=\"cnpj\" class=\"control-label col-md-5  requiredField\"> CNPJ <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.cnpj}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group\">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_cnpj\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cnpj\" name=\"cnpj\" placeholder=\"CNPJ do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_sigla\" class=\"form-group \">\r\n            <label for=\"sigla\" class=\"control-label col-md-5  requiredField\"> Sigla </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.sigla}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_sigla\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.sigla\" name=\"sigla\" placeholder=\"sigla do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_dataFundacao\" class=\"form-group required\">\r\n            <label for=\"dataFundacao\" class=\"control-label col-md-5  requiredField\"> Data de Fundação <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-7 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\"> <label style=\"font-weight: normal\"> {{this.Clubedelaco.dataFundacao | date:\"dd/MM/yyyy\" }}  </label></p>\r\n            </div>\r\n            {{this.Clubedelaco.dataFundacao | date:\"dd/MM/yyyy\" }}\r\n            <div *ngIf=\"!isView\" class=\"controls date col-md-7 input-group \">\r\n              <input class=\"input-md textinput textInput form-control\" placeholder=\"dd/mm/yyyy\"\r\n                         id=\"id_dataFundacao\" name=\"dataFundacao\" [(ngModel)]=\"Clubedelaco.arrayDataFundacao\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <button class=\"input-group-addon\" style=\"width: 8%\"  (click)=\"d.toggle()\" type=\"button\">\r\n                    <span class=\"fa fa-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\r\n\r\n                  </button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div id=\"div_registroSETEL\" class=\"form-group required\">\r\n            <label for=\"registroSETEL\" class=\"control-label col-md-5  requiredField\"> Registro SETEL <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.registroSETEL}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_registroSETEL\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.registroSETEL\" name=\"registroSETEL\" placeholder=\"Registro SETEL do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_rua\" class=\"form-group required\">\r\n            <label for=\"rua\" class=\"control-label col-md-4  requiredField\"> Rua </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.rua}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_rua\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.rua\" name=\"rua\" placeholder=\"Rua do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_numeroSala\" class=\"form-group required\">\r\n            <label for=\"numeroSala\" class=\"control-label col-md-4  requiredField\"> Número/Sala <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.numeroSala}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_numeroSala\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.numeroSala\" name=\"numeroSala\" placeholder=\"Numero/Sala do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_bairro\" class=\"form-group \">\r\n            <label for=\"bairro\" class=\"control-label col-md-4  requiredField\"> Bairro  </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.bairro}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_bairro\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.bairro\" name=\"bairro\" placeholder=\"Bairro do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div id=\"div_cep\" class=\"form-group \">\r\n            <label for=\"cep\" class=\"control-label col-md-4  requiredField\"> CEP  </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.cep}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_cep\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cep\" name=\"cep\" placeholder=\"CEP do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_cidade\" class=\"form-group \">\r\n            <label for=\"cidade\" class=\"control-label col-md-4  requiredField\"> Cidade  </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.cidade}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_cidade\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cidade\" name=\"cidade\" placeholder=\"cidade do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_foneDDD\" class=\"form-group \">\r\n            <label for=\"foneDDD\" class=\"control-label col-md-4  requiredField\"> Fone  </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.foneDDD}} {{this.Clubedelaco.fone}}</p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"form-control col-md-2\" id=\"id_foneDDD\" maxlength=\"2\" [(ngModel)]=\"Clubedelaco.foneDDD\" name=\"foneDDD\" placeholder=\"(##)\" style=\"margin-bottom: 10px; \" type=\"text\">\r\n              <input class=\"form-control\" id=\"id_fone\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.fone\" name=\"fone\" placeholder=\"Fone do clube\" style=\"margin-bottom: 10px; margin-left: 5px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div id=\"div_faxDDD\" class=\"form-group \">\r\n            <label for=\"faxDDD\" class=\"control-label col-md-4  requiredField\"> Fax </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\"><label style=\"font-weight: normal\"> {{this.Clubedelaco.fax}}  {{this.Clubedelaco.faxDDD}} </label> </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"form-control col-md-2\" id=\"id_faxDDD\" maxlength=\"2\" [(ngModel)]=\"Clubedelaco.faxDDD\" name=\"faxDDD\" placeholder=\"(##)\" style=\"margin-bottom: 10px\" type=\"text\">\r\n              <input class=\"form-control\" id=\"id_fax\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.fax\" name=\"fax\" placeholder=\"Fax do Clube\" style=\"margin-bottom: 10px; margin-left: 5px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_atuacao\" class=\"form-group required\">\r\n            <label for=\"atuacao\" class=\"control-label col-md-4  requiredField\"> Atuação <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-7 input-group \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.atuacao}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <textarea class=\"input-md  textinput textInput form-control\" id=\"id_atuacao\" maxlength=\"300\" [(ngModel)]=\"Clubedelaco.atuacao\" name=\"atuacao\" placeholder=\"Área de abrangência e público alvo.\" style=\"margin-bottom: 0px\" type=\"text\" rows=\"4\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div id=\"div_representante\" class=\"form-group col-md-12\">\r\n            <h4 class=\"page-header\" style=\"margin-left: 65px\">Representante </h4>\r\n          </div>\r\n          <div id=\"div_nomeRepresentante\" class=\"form-group required\">\r\n            <label for=\"nomeRepresentante\" class=\"control-label col-md-4  requiredField\"> Nome <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.nomeRepresentante}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_nomeRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.nomeRepresentante\" name=\"nomeRepresentante\" placeholder=\"Nome do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_cpfRepresentante\" class=\"form-group required\">\r\n            <label for=\"cpfRepresentante\" class=\"control-label col-md-4  requiredField\"> CPF <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-7 input-group \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.cpfRepresentante}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group  \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_cpfRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cpfRepresentante\" name=\"cpfRepresentante\" placeholder=\"CPF do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_rgRepresentante\" class=\"form-group required\">\r\n            <label for=\"rgRepresentante\" class=\"control-label col-md-4  requiredField\"> RG  <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.rgRepresentante}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_rgRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.rgRepresentante\" name=\"rgRepresentante\" placeholder=\"RG do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_cargoRepresentante\" class=\"form-group required\">\r\n            <label for=\"cargoRepresentante\" class=\"control-label col-md-4  requiredField\"> Cargo  <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.cargoRepresentante}} </p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"input-md  textinput textInput form-control\" id=\"id_cargoRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.cargoRepresentante\" name=\"cargoRepresentante\" placeholder=\"RG do representante do clube\" style=\"margin-bottom: 10px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"div_foneDDDRepresentante\" class=\"form-group required\">\r\n            <label for=\"foneDDDRepresentante\" class=\"control-label col-md-4  requiredField\"> Fone  <span class=\"asteriskField\">*</span> </label>\r\n            <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n              <p style=\"margin-top: 10px\" type=\"text\">{{this.Clubedelaco.foneDDDRepresentante}} {{this.Clubedelaco.foneRepresentante}}</p>\r\n            </div>\r\n            <div *ngIf=\"!isView\" class=\"controls col-md-7 input-group \">\r\n              <input class=\"form-control col-md-2\" id=\"id_foneDDDRepresentante\" maxlength=\"2\" [(ngModel)]=\"Clubedelaco.foneDDDRepresentante\" name=\"foneDDDRepresentante\" placeholder=\"(##)\" style=\"margin-bottom: 10px\" type=\"text\">\r\n              <input class=\"form-control\" id=\"id_foneRepresentante\" maxlength=\"30\" [(ngModel)]=\"Clubedelaco.foneRepresentante\" name=\"foneRepresentante\" placeholder=\"Fone do representante do Clube\" style=\"margin-bottom: 10px; margin-left: 5px\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div >\r\n              <div *ngIf=\"!isInsert\">\r\n                <app-lacadores [paramIdClube]=\"idRecord\" [isDetail]= \"true\"></app-lacadores>\r\n\r\n                <table class=\"table\"  id=\"lacadores\" width=\"100%\" >\r\n          \t\t\t\t<thead class='thead-success'>\r\n          \t\t\t\t\t<tr role=\"row\">\r\n          \t\t\t\t\t\t<th title=\"Field #1\"> Laçador </th>\r\n          \t\t\t\t\t\t<th title=\"Field #2\"> CPF </th>\r\n          \t\t\t\t\t\t<th title=\"Field #3\"> E-mail </th>\r\n          \t\t\t\t\t\t<th title=\"Field #4\"> Endereço </th>\r\n\r\n          \t\t\t\t\t</tr>\r\n          \t\t\t\t</thead>\r\n          \t\t\t\t<tbody>\r\n                    <tr role=\"row\">\r\n                      <tr role=\"row\" *ngFor=\"let registro of listLacadores\">\r\n                        <td ><a class=\"m-menu__link\" [routerLink]=\"['/clubesdelacoView', { id : registro._id , isView: true}]\" >{{registro.name}}</a></td>\r\n                        <td>{{registro.cpf}}</td>\r\n                        <td>{{registro.email}}</td>\r\n                        <td>{{registro.endereco}}</td>\r\n                      </tbody>\r\n                  </table>\r\n                  <div  id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n                    <label style=\"float:right\" > {{this.qtdLacadores}} <small>registros encontrados</small> </label>\r\n                  </div>\r\n\r\n\r\n\r\n              </div>\r\n              <div class=\"aab controls col-md-4 \"></div>\r\n              <div class=\"controls col-md-8 \">\r\n\r\n                <button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary btn btn-confirm\"><i class=\"icon-hand-right\">Salvar</i></button>\r\n                <input type=\"button\" [routerLink]=\"['/clubesdelaco']\"  name=\"BtnCancel\" value=\"Voltar\" class=\"btn btn btn-cancel\" id=\"button-id-cancelar\" >\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n\r\n      </div>\r\n  </div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelacoView/clubesdelacoView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubesdelacoViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Depreciado
// import { ValidateService } from '../../../services/validate.service';




var ClubesdelacoViewComponent = (function () {
    function ClubesdelacoViewComponent(
        //Depreciado
        //private validateService: ValidateService,
        flashMessage, lacadoresService, federacaoService, router, route, clubesdelacoService, ngbDateParserFormatter) {
        this.flashMessage = flashMessage;
        this.lacadoresService = lacadoresService;
        this.federacaoService = federacaoService;
        this.router = router;
        this.route = route;
        this.clubesdelacoService = clubesdelacoService;
        this.ngbDateParserFormatter = ngbDateParserFormatter;
        this.Clubedelaco = {
            name: String,
            email: String,
            sede: String,
            status: Boolean,
            razaoSocial: String,
            cnpj: String,
            sigla: String,
            dataFundacao: String,
            registroSETEL: String,
            rua: String,
            numeroSala: String,
            bairro: String,
            cep: String,
            cidade: String,
            foneDDD: String,
            fone: String,
            faxDDD: String,
            fax: String,
            nomeRepresentante: String,
            cpfRepresentante: String,
            rgRepresentante: String,
            cargoRepresentante: String,
            foneDDDRepresentante: String,
            foneRepresentante: String,
            atuacao: String
        };
    }
    ClubesdelacoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Clubedelaco.name = '';
        this.Clubedelaco.sede = '';
        this.Clubedelaco.email = '';
        this.Clubedelaco.status = '';
        this.Clubedelaco.razaoSocial = '';
        this.Clubedelaco.cnpj = '';
        this.Clubedelaco.sigla = '';
        this.Clubedelaco.dataFundacao = '';
        this.Clubedelaco.registroSETEL = '';
        this.Clubedelaco.rua = '';
        this.Clubedelaco.numeroSala = '';
        this.Clubedelaco.bairro = '';
        this.Clubedelaco.cep = '';
        this.Clubedelaco.cidade = '';
        this.Clubedelaco.foneDDD = '';
        this.Clubedelaco.fone = '';
        this.Clubedelaco.faxDDD = '';
        this.Clubedelaco.fax = '';
        this.Clubedelaco.nomeRepresentante = '';
        this.Clubedelaco.cpfRepresentante = '';
        this.Clubedelaco.rgRepresentante = '';
        this.Clubedelaco.cargoRepresentante = '';
        this.Clubedelaco.foneDDDRepresentante = '';
        this.Clubedelaco.foneRepresentante = '';
        this.Clubedelaco.atuacao = '';
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.idRecord = params.id;
            }
            _this.isInsert = true ? params.isInsert : true;
            _this.isEdit = true ? params.isEdit : true;
            _this.isView = true ? params.isView : true;
        });
        if (!this.isInsert) {
            //BUSCA INFOS DO CLUBE
            this.clubesdelacoService.getClubedelacoById(this.idRecord).subscribe(function (result) {
                _this.Clubedelaco = result;
                //pega a data no formato do banco de dados e monta o array do componente Datepicker
                _this.Clubedelaco.arrayDataFundacao = _this.ngbDateParserFormatter.parse(_this.Clubedelaco.dataFundacao);
            });
            //BUSCA OS LACADORES DO clube
            this.lacadoresService.getLacadorByClubeId(this.idRecord).subscribe(function (result) {
                //this.qtdLacadoresRegistrados = result.length;
                _this.listLacadores = result;
                console.log('this.listLacadores');
                console.log(_this.listLacadores);
                _this.qtdLacadores = result.length;
            });
        }
    };
    ClubesdelacoViewComponent.prototype.onEditRequest = function (idClubedelaco) {
        console.log('idClubedelaco');
        console.log(idClubedelaco);
        this.router.navigate(['/clubesdelacoView', { id: idClubedelaco, isEdit: true }]);
    };
    ClubesdelacoViewComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    ClubesdelacoViewComponent.prototype.onClubesdelacoSubmit = function (clubesdelacoForm) {
        var _this = this;
        this.markFormGroupTouched(clubesdelacoForm);
        if (!clubesdelacoForm.valid) {
            console.log("Form com erros!");
        }
        else {
            //Monta a data de fundação no formato para o banco de dados.
            if (this.Clubedelaco.arrayDataFundacao) {
                this.Clubedelaco.dataFundacao = new Date(this.Clubedelaco.arrayDataFundacao.year, this.Clubedelaco.arrayDataFundacao.month - 1, this.Clubedelaco.arrayDataFundacao.day);
            }
            else {
                this.Clubedelaco.dataFundacao = null;
            }
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
                var newClubedelaco = {
                    name: this.Clubedelaco.name,
                    sede: this.Clubedelaco.sede,
                    email: this.Clubedelaco.email,
                    status: true,
                    razaoSocial: this.Clubedelaco.razaoSocial,
                    cnpj: this.Clubedelaco.cnpj,
                    sigla: this.Clubedelaco.sigla,
                    dataFundacao: this.Clubedelaco.dataFundacao,
                    registroSETEL: this.Clubedelaco.registroSETEL,
                    rua: this.Clubedelaco.rua,
                    numeroSala: this.Clubedelaco.numeroSala,
                    bairro: this.Clubedelaco.bairro,
                    cep: this.Clubedelaco.cep,
                    cidade: this.Clubedelaco.cidade,
                    foneDDD: this.Clubedelaco.foneDDD,
                    fone: this.Clubedelaco.fone,
                    faxDDD: this.Clubedelaco.faxDDD,
                    fax: this.Clubedelaco.fax,
                    nomeRepresentante: this.Clubedelaco.nomeRepresentante,
                    cpfRepresentante: this.Clubedelaco.cpfRepresentante,
                    rgRepresentante: this.Clubedelaco.rgRepresentante,
                    cargoRepresentante: this.Clubedelaco.cargoRepresentante,
                    foneDDDRepresentante: this.Clubedelaco.foneDDDRepresentante,
                    foneRepresentante: this.Clubedelaco.foneRepresentante,
                    atuacao: this.Clubedelaco.atuacao
                };
                console.log('this.Clubedelaco');
                console.log(this.Clubedelaco);
                this.clubesdelacoService.addClubedelaco(newClubedelaco).subscribe(function (data) {
                    if (data.success) {
                        _this.router.navigate(['clubesdelacoView', { id: data.id, isView: true }]);
                        //TODO: Mensagem
                        alert('Clube de Laço registrado com sucesso.');
                    }
                    else {
                        //TODO: Mensagem
                        alert('Ocorreu um erro ao tentar inserir este Clube de laço. Favor entre em contato com o suporte técnico do sistema.');
                    }
                });
            }
            else {
                //isEdit
                this.clubesdelacoService.updateClubedelaco(this.Clubedelaco).subscribe(function (data) {
                    if (data.success) {
                        //TODO: Mensagem
                        alert('Clube de Laço atualizado com sucesso.');
                        window.scrollTo(0, 0);
                        //this.router.navigate(['clubesdelacoView', { id: this.Clubedelaco._id, isEdit: true }]);
                    }
                    else {
                        window.scrollTo(0, 0);
                        //TODO: Mensagem
                        alert('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema: ' + data.msg);
                    }
                });
            }
        }
    };
    return ClubesdelacoViewComponent;
}());
ClubesdelacoViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelacoView/clubesdelacoView.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__["a" /* LacadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lacadores_service__["a" /* LacadoresService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */]) === "function" && _g || Object])
], ClubesdelacoViewComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=clubesdelacoView.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelacoView/clubesdelacoView.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubesdelacoViewModule", function() { return clubesdelacoViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clubesdelacoView_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelacoView/clubesdelacoView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_federacao_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_lacadores_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_myNgbDateParserFormatter__ = __webpack_require__("../../../../../src/app/classes/myNgbDateParserFormatter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { BrowserModule } from '@angular/platform-browser';




//import { clubesdelacoModule } from '../clubesdelaco.module';
//import { LacadoresModule} from '../../lacadores/lacadores.module';
//import { LacadoresModule } from '../../lacadores/lacadores.module';



//import { AuthGuard } from '../../guards/auth.guard';






//import { SharedModule } from '../../../components/sharedModule.module';
var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_6__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_4__clubesdelacoView_component__["a" /* ClubesdelacoViewComponent */]
            }
        ]
    }
];
var clubesdelacoViewModule = (function () {
    function clubesdelacoViewModule() {
    }
    return clubesdelacoViewModule;
}());
clubesdelacoViewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            //BrowserModule,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_5__layouts_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot(),
        ], providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_federacao_service__["a" /* FederacaoService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__services_clubesdelaco_service__["a" /* ClubesdelacoService */],
            __WEBPACK_IMPORTED_MODULE_10__services_lacadores_service__["a" /* LacadoresService */],
            { provide: __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_12__classes_myNgbDateParserFormatter__["a" /* MyNgbDateParserFormatter */] },
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"]
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ], declarations: [
            //DatepickerConfigComponent,
            __WEBPACK_IMPORTED_MODULE_4__clubesdelacoView_component__["a" /* ClubesdelacoViewComponent */]
        ]
    })
], clubesdelacoViewModule);

//# sourceMappingURL=clubesdelacoView.module.js.map

/***/ })

});
//# sourceMappingURL=clubesdelacoView.module.chunk.js.map