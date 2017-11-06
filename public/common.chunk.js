webpackJsonp(["common"],{

/***/ "../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatepickerConfigComponent = (function () {
    function DatepickerConfigComponent(config) {
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        // days that don't belong to current month are not visible
        config.outsideDays = 'hidden';
    }
    DatepickerConfigComponent.prototype.ngOnInit = function () {
    };
    return DatepickerConfigComponent;
}());
DatepickerConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datepicker-config',
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theme/pages/default/components/datepicker-config/datepicker-config.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbDatepickerConfig */]] // add NgbDatepickerConfig to the component providers
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbDatepickerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbDatepickerConfig */]) === "function" && _a || Object])
], DatepickerConfigComponent);

var _a;
//# sourceMappingURL=datepicker-config.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/services/auth.service.ts":
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
        console.log('enviou para autenticar');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('user/view');
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
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
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

/***/ "../../../../../src/app/theme/pages/default/services/clubesdelaco.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubesdelacoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
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

/***/ "../../../../../src/app/theme/pages/default/services/federacao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
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
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['federacoesList']; });
        ;
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

/***/ "../../../../../src/app/theme/pages/default/services/lacadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LacadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
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
    LacadoresService.prototype.setLacadorIndependenteByClube = function (idClubedelaco) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/setLacadorIndependenteByClube');
        return this.http.post(ep, { idClubedelaco: idClubedelaco }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LacadoresService.prototype.setLacadorIndependenteById = function (idLacador) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('lacador/setLacadorIndependenteById');
        return this.http.post(ep, { idLacador: idLacador }, { headers: headers })
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

/***/ "../../../../../src/app/theme/pages/default/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/services/auth.service.ts");
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




var UsersService = (function () {
    function UsersService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('user/list');
        //console.log('service - getuseres()');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['userList']; });
        ;
    };
    UsersService.prototype.getUserById = function (idUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('user/view');
        //console.log('service - getuseres()');
        return this.http.get(ep, { headers: headers, params: { idUser: idUser } })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['user']; });
        ;
        ;
    };
    UsersService.prototype.getUserByUsername = function (idClube) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('user/viewByUsername');
        return this.http.get(ep, { headers: headers, params: { idClube: idClube } })
            .map(function (res) { return res.json(); })
            .map(function (res) { return res['userList']; });
    };
    UsersService.prototype.addUser = function (user) {
        //return new Promise(resolve => resolve(user));
        console.log('passou aqui');
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('user/add');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.removeUser = function (idUser) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('user/remove');
        //console.log(3);
        return this.http.post(ep, { idUser: idUser }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        //console.log(2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.authService.prepEndpoint('user/update');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map