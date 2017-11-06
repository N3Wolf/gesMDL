webpackJsonp(["federacaoView.module"],{

/***/ "../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tRegistro da Federação\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a routerLink=\"/clubesdelaco\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tFederações\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a href=\"javascript:history.go(0)\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tVer Detalhes\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tAções rápidas\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isView\" href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"onEditRequest(this.Federacao._id)\" class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEditar\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div class=\"col-lg-12\">\r\n  <div class=\"m-portlet\">\r\n    <div class=\"m-portlet__head\">\r\n      <div class=\"m-portlet__head-caption\">\r\n        <div class=\"m-portlet__head-title\">\r\n          <span class=\"m-portlet__head-icon m--hide\">\r\n            <i class=\"la la-gear\"></i>\r\n          </span>\r\n  \t\t\t\t<!-- <h3 class=\"m-form__heading-title\">\r\n  \t\t\t\t\t1. Dados do Clube:\r\n  \t\t\t\t</h3> -->\r\n  \t\t\t\t<h2 class=\"m-portlet__head-text\" style=\"font-size: 1.75rem\">\r\n            1. Dados da Federação:\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--begin::Form-->\r\n    <form #federacaoForm=\"ngForm\" class=\"m-form m-form--label-align-right\" id=\"formFederacao\" (submit)=\"onFederacaoSubmit(federacaoForm)\">\r\n      <div class=\"m-portlet__body\">\r\n        <div class=\"m-form__section m-form__section--first\">\r\n          <!-- <div class=\"m-form__heading\">\r\n            <h3 class=\"m-form__heading-title\">\r\n              1. Dados do Clube:\r\n            </h3>\r\n          </div> -->\r\n          <div class=\"form-group m-form__group row\">\r\n            <label class=\"col-lg-3 col-form-label\">\r\n               Nome da Federação:\r\n               <span class=\"asteriskField\">*</span>\r\n            </label>\r\n            <div class=\"col-lg-6\">\r\n              <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                <p class ='col-form-label' >{{this.Federacao.name}} </p>\r\n              </div>\r\n              <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger \">\r\n                <input class=\"form-control m-input\" id=\"id_nome\" #name=\"ngModel\" required minlength=\"3\" maxlength=\"60\" [(ngModel)]=\"Federacao.name\" name=\"name\" placeholder=\"Digite o nome da Federação\" style=\"margin-bottom: 10px\" type=\"text\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"form-control-feedback\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"name.errors.required\">\r\n\t\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div *ngIf=\"name.errors.minlength\">\r\n\t\t\t\t\t\t\t\t    Este campo exige ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group m-form__group row\">\r\n            <label class=\"col-lg-3 col-form-label\">\r\n               Razão social:\r\n               <span class=\"asteriskField\">*</span>\r\n            </label>\r\n            <div class=\"col-lg-6\">\r\n              <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                <p class ='col-form-label' >{{this.Federacao.razaosocial}} </p>\r\n              </div>\r\n              <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger \">\r\n                <input class=\"form-control m-input\" #razaosocial=\"ngModel\" required minlenght=\"3\" id=\"id_razaosocial\" [(ngModel)]=\"Federacao.razaosocial\" name=\"razaosocial\" placeholder=\"Digite a razão social\" style=\"margin-bottom: 10px\" type=\"text\" >\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"razaosocial.invalid && (razaosocial.dirty || razaosocial.touched)\" class=\"form-control-feedback\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"razaosocial.errors.required\">\r\n\t\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div *ngIf=\"razaosocial.errors.minlength\">\r\n\t\t\t\t\t\t\t\t    Este campo exige ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group m-form__group row\">\r\n            <label class=\"col-lg-3 col-form-label\">\r\n               CNPJ:\r\n               <span class=\"asteriskField\">*</span>\r\n            </label>\r\n            <div class=\"col-lg-6\">\r\n              <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                <p class ='col-form-label' >{{this.Federacao.cnpj}} </p>\r\n              </div>\r\n              <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger\">\r\n                <input class=\"form-control m-input\" #cnpj=\"ngModel\" required minlenght=\"3\" id=\"id_CNPJ\" [(ngModel)]=\"Federacao.cnpj\" name=\"cnpj\" placeholder=\"Digite o CNPJ\" style=\"margin-bottom: 10px\" type=\"text\" >\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"cnpj.invalid && (cnpj.dirty || cnpj.touched)\" class=\"form-control-feedback\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"cnpj.errors.required\">\r\n\t\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div *ngIf=\"cnpj.errors.minlength\">\r\n\t\t\t\t\t\t\t\t    Este campo exige ao menos 3 caracteres\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group m-form__group row\">\r\n            <label class=\"col-lg-3 col-form-label\">\r\n               E-MAIL:\r\n               <span class=\"asteriskField\">*</span>\r\n            </label>\r\n            <div class=\"col-lg-6\">\r\n              <div *ngIf=\"isView\" class=\"controls col-md-8 \">\r\n                <p class ='col-form-label' >{{this.Federacao.email}} </p>\r\n              </div>\r\n              <div *ngIf=\"!isView\" class=\"form-group m-form__group has-danger has-danger \">\r\n                <input class=\"form-control m-input\"  #email=\"ngModel\" required minlenght=\"3\" id=\"id_email\" [(ngModel)]=\"Federacao.email\" name=\"email\" placeholder=\"Digite um e-mail de contato\" style=\"margin-bottom: 10px\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"form-control-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t    Este campo não pode ficar em branco.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.email\" style=\"font-size: 1rem\">\r\n\t\t\t\t\t\t\t\t    Este campo exige um e-mail válido.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <!-- INICIO::RODAPÉ DE AÇÕES -->\r\n          <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n           <div class=\"m-form__actions m-form__actions\">\r\n             <div class=\"row\">\r\n               <div class=\"col-lg-2\"></div>\r\n               <div class=\"col-lg-6\">\r\n                 <button *ngIf=\"!isView\" id=\"submit-id-save\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-hand-right\">Salvar</i></button>\r\n                 <a class=\"m-nav__link\" style=\"padding-left: 2rem\"  [routerLink]=\"['/federacao']\"> Voltar </a>\r\n               </div>\r\n             </div>\r\n           </div>\r\n          </div>\r\n          <!-- FIM::RODAPÉ DE AÇÕES -->\r\n        </div>\r\n      </div>\r\n      <!-- FIM::PORTLET -->\r\n    </form>\r\n    <!--end::Form-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederacaoViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Depreciado
//import { ValidateService } from '../../../services/validate.service';



var FederacaoViewComponent = (function () {
    function FederacaoViewComponent(
        //Depreciado
        //private validateService: ValidateService,
        flashMessage, federacaoService, router, route) {
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
    FederacaoViewComponent.prototype.onEditRequest = function (idFederacao) {
        this.router.navigate(['/federacaoView', { id: idFederacao, isEdit: true }]);
    };
    FederacaoViewComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    FederacaoViewComponent.prototype.onFederacaoSubmit = function (federacaoForm) {
        var _this = this;
        this.markFormGroupTouched(federacaoForm);
        if (!federacaoForm.valid) {
            console.log("Form com erros!");
        }
        else {
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
                        _this.router.navigate(['federacaoView', { id: data.id, isView: true }]);
                        //TODO: Mensagem
                        alert('Federação registrada com sucesso.');
                    }
                    else {
                        //TODO: Mensagem
                        alert('Ocorreu um erro ao tentar inserir este registro. Favor entre em contato com o suporte técnico do sistema.' + data.msg);
                    }
                });
            }
            else {
                //isEdit
                this.federacaoService.updateFederacao(this.Federacao).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                        alert("Registro alterado com sucesso");
                        _this.router.navigate(['federacaoView', { id: _this.Federacao._id, isEdit: true }]);
                        //TODO: Mensagem
                        //this.flashMessage.show('Federação atualizada com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
                    }
                    else {
                        //TODO: Mensagem
                        alert('Ocorreu um erro ao tentar atualizar o registro. Favor entre em contato com o suporte técnico do sistema:  ' + data.msg);
                    }
                });
            }
        }
    };
    return FederacaoViewComponent;
}());
FederacaoViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
], FederacaoViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=federacaoView.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "federacaoViewModule", function() { return federacaoViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__federacaoView_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/federacao/federacaoView/federacaoView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_lacadores_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_federacao_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_myNgbDateParserFormatter__ = __webpack_require__("../../../../../src/app/classes/myNgbDateParserFormatter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datepicker_config_datepicker_config_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.ts");
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
                "component": __WEBPACK_IMPORTED_MODULE_6__federacaoView_component__["a" /* FederacaoViewComponent */]
            }
        ]
    }
];
var federacaoViewModule = (function () {
    function federacaoViewModule() {
    }
    return federacaoViewModule;
}());
federacaoViewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            //  BrowserModule,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot()
        ], providers: [
            //FederacaoService,
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services_clubesdelaco_service__["a" /* ClubesdelacoService */],
            __WEBPACK_IMPORTED_MODULE_9__services_lacadores_service__["a" /* LacadoresService */],
            __WEBPACK_IMPORTED_MODULE_10__services_federacao_service__["a" /* FederacaoService */],
            { provide: __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_12__classes_myNgbDateParserFormatter__["a" /* MyNgbDateParserFormatter */] },
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ], declarations: [
            __WEBPACK_IMPORTED_MODULE_6__federacaoView_component__["a" /* FederacaoViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__datepicker_config_datepicker_config_component__["a" /* DatepickerConfigComponent */]
        ]
    })
], federacaoViewModule);

//# sourceMappingURL=federacaoView.module.js.map

/***/ })

});
//# sourceMappingURL=federacaoView.module.chunk.js.map