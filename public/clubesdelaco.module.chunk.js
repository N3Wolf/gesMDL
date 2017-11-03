webpackJsonp(["clubesdelaco.module"],{

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n\t<div class=\"d-flex align-items-center\">\r\n\t\t<div class=\"mr-auto\">\r\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\tClubes de laço cadastrados\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t-\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t<a routerLink=\"/clubesdelaco\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\tClubes de Laço\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tAções rápidas\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<!-- <li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isView\" href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"onEditRequest(this.Clubedelaco._id)\" class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEditar\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/clubesdelacoView', {isInsert: true}]\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon fa fa-plus\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAdicionar\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t-\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<br>\r\n<div class=\"col-lg-12\">\r\n<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <!-- <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\"> -->\r\n          <a class=\"btn btn-primary m-btn m-btn--icon float-right \" style=\"margin-top:1.25rem\" [routerLink]=\"['/clubesdelacoView', {isInsert: true}]\" >\r\n            <span>\r\n              <i class=\"fa fa-plus\" > </i>\r\n              <span>\r\n                Adicionar\r\n              </span>\r\n            </span>\r\n          </a>\r\n\r\n  </div>\r\n  <div class=\"m-portlet__body\">\r\n    <div class=\"m-section\">\r\n      <!-- <span class=\"m-section__sub\">\r\n\r\n      </span> -->\r\n      <div class=\"m-section__content\">\r\n\r\n        <table class=\"table m-table m-table--head-bg-success\"  id=\"lacadores\" width=\"90%\" >\r\n          <thead class='thead-success'>\r\n            <tr role=\"row\">\r\n              <th title=\"Field #1\"> Nome </th>\r\n              <th title=\"Field #2\"> CNPJ </th>\r\n              <th title=\"Field #2\"> E-mail </th>\r\n              <th title=\"Field #3\"> Sede/Localização </th>\r\n              <th title=\"Field #4\"> Endereço </th>\r\n              <th title=\"Field #5\"> Cidade </th>\r\n              <th title=\"Field #6\">  </th>\r\n              <th title=\"Field #7\">  </th>\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr role=\"row\">\r\n              <tr role=\"row\" *ngFor=\"let registro of ClubesList\">\r\n                <td ><a class=\"m-menu__link\" [routerLink]=\"['/clubesdelacoView', { id : registro._id , isView: true}]\" >{{registro.name}}</a></td>\r\n                <td>{{registro.cnpj}}</td>\r\n                <td>{{registro.email}}</td>\r\n                <td>{{registro.sede}}</td>\r\n                <td>{{registro.rua}}, {{registro.numeroSala}}, {{registro.bairro}} . </td>\r\n                <td>{{registro.cidade}}</td>\r\n                <td>\r\n                  <!-- <a class=\"m-nav__link\" href=\"\"> -->\r\n                    <span class=\"m-nav__link-text\" (click)=\"onEditRequest(registro._id)\">\r\n                      <i class=\"m-nav__link-icon fa fa-edit\"></i>\r\n                    </span>\r\n                  <!-- </a> -->\r\n                </td>\r\n                <td>\r\n                  <!-- <a class=\"m-nav__link\" href=\"\"> -->\r\n                    <span  class=\"m-nav__link-text\" (click)=\"onDeleteRequest(registro._id, registro.name)\">\r\n                      <i class=\"m-nav__link-icon fa fa-remove\"></i>\r\n                    </span>\r\n                  <!-- </a> -->\r\n                </td>\r\n              </tbody>\r\n          </table>\r\n          <div class=\"panel-footer\" id=\"DataTables_Table_0_info\" role=\"status\" aria-live=\"polite\">\r\n            <label style=\"float:right\" > {{this.registros}} <small>registros encontrados</small> </label>\r\n          </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubesdelacoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
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



//Depreciado
//import { ValidateService } from '../../services/validate.service';


var ClubesdelacoComponent = (function () {
    function ClubesdelacoComponent(
        //Depreciado
        //private validateService: ValidateService,
        flashMessage, federacaoService, router, clubesdelacoService) {
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
    ClubesdelacoComponent.prototype.onEditRequest = function (idClubedelaco) {
        this.router.navigate(['/clubesdelacoView', { id: idClubedelaco, isEdit: true }]);
    };
    ClubesdelacoComponent.prototype.onDeleteRequest = function (idClubedelaco, nameClubedelaco) {
        if (confirm("Confirma a exclusão do clube \'" + nameClubedelaco + "\'?")) {
            this.clubesdelacoService.removeClubedelaco(idClubedelaco).subscribe(function (data) {
                if (data.success) {
                    location.reload();
                    //TODO: Mensagem 
                    //this.flashMessage.show('Registro removido com sucesso.', { cssClass: 'alert-success', timeout: 5000 });
                    //this.router.navigate(['/federacao']);
                }
            });
        }
    };
    return ClubesdelacoComponent;
}());
ClubesdelacoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_federacao_service__["a" /* FederacaoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clubesdelaco_service__["a" /* ClubesdelacoService */]) === "function" && _d || Object])
], ClubesdelacoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clubesdelaco.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubesdelacoModule", function() { return clubesdelacoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_federacao_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/federacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clubesdelaco_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_lacadores_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/lacadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clubesdelaco_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/clubesdelaco/clubesdelaco.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AuthGuard } from '../../guards/auth.guard';





var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_4__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_9__clubesdelaco_component__["a" /* ClubesdelacoComponent */]
            }
        ]
    }
];
var clubesdelacoModule = (function () {
    function clubesdelacoModule() {
    }
    return clubesdelacoModule;
}());
clubesdelacoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__["a" /* LayoutModule */]
            //SharedModule
        ], providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_federacao_service__["a" /* FederacaoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_clubesdelaco_service__["a" /* ClubesdelacoService */],
            __WEBPACK_IMPORTED_MODULE_8__services_lacadores_service__["a" /* LacadoresService */],
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_9__clubesdelaco_component__["a" /* ClubesdelacoComponent */]
        ], declarations: [
            __WEBPACK_IMPORTED_MODULE_9__clubesdelaco_component__["a" /* ClubesdelacoComponent */]
        ]
    })
], clubesdelacoModule);

//# sourceMappingURL=clubesdelaco.module.js.map

/***/ })

});
//# sourceMappingURL=clubesdelaco.module.chunk.js.map