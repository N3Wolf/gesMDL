webpackJsonp(["widgets-bootstrap-touchspin.module"],{

/***/ "../../../../../src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tBootstrap Touchspin\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tTouchspin\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tBootstrap Touchspin Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tMinimum Setup\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_1\" type=\"text\" class=\"form-control\" value=\"55\" name=\"demo1\" placeholder=\"Select time\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tWith Prefix\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_2\" type=\"text\" class=\"form-control\" value=\"0\" name=\"demo1\" placeholder=\"Select time\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tWith Postfix\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_3\" type=\"text\" class=\"form-control\" value=\"0\" name=\"demo1\" placeholder=\"Select time\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tVertical Icons:\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_4\" type=\"text\" class=\"form-control bootstrap-touchspin-vertical-btn\" value=\"\" name=\"demo1\" placeholder=\"40\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tVertical Custom Icons:\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_5\" type=\"text\" class=\"form-control bootstrap-touchspin-vertical-btn\" value=\"\" name=\"demo1\" placeholder=\"30\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tBootstrap Touchspin Brand Color Skin\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tMinimum Setup\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<div class=\"m-bootstrap-touchspin-brand\">\n\t\t\t\t\t\t\t<input id=\"m_touchspin_2_1\" type=\"text\" class=\"form-control\" value=\"55\" name=\"demo1\" placeholder=\"Select time\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tWith Prefix\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<div class=\"m-bootstrap-touchspin-brand\">\n\t\t\t\t\t\t\t<input id=\"m_touchspin_2_2\" type=\"text\" class=\"form-control\" value=\"0\" name=\"demo1\" placeholder=\"Select time\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tWith Postfix\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<div class=\"m-bootstrap-touchspin-brand\">\n\t\t\t\t\t\t\t<input id=\"m_touchspin_2_3\" type=\"text\" class=\"form-control\" value=\"0\" name=\"demo1\" placeholder=\"Select time\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tVertical Icons:\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<div class=\"m-bootstrap-touchspin-brand\">\n\t\t\t\t\t\t\t<input id=\"m_touchspin_2_4\" type=\"text\" class=\"form-control bootstrap-touchspin-vertical-btn\" value=\"\" name=\"demo1\" placeholder=\"40\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tVertical Custom Icons:\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<div class=\"m-bootstrap-touchspin-brand\">\n\t\t\t\t\t\t\t<input id=\"m_touchspin_2_5\" type=\"text\" class=\"form-control bootstrap-touchspin-vertical-btn\" value=\"\" name=\"demo1\" placeholder=\"30\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tValidation State Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row has-success\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSuccess State\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_1_validate\" type=\"text\" class=\"form-control\" value=\"\" name=\"demo1\" placeholder=\"40\">\n\t\t\t\t\t\t<div class=\"form-control-feedback\">\n\t\t\t\t\t\t\tSuccess! You've done it.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\tExample help text that remains unchanged.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row has-danger\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tDanger State\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_2_validate\" type=\"text\" class=\"form-control\" value=\"\" name=\"demo1\" placeholder=\"40\">\n\t\t\t\t\t\t<div class=\"form-control-feedback\">\n\t\t\t\t\t\t\tSorry, that username's taken. Try another?\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\tExample help text that remains unchanged.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row has-warning\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tWarning State\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input id=\"m_touchspin_3_validate\" type=\"text\" class=\"form-control bootstrap-touchspin-vertical-btn\" value=\"\" name=\"demo1\" placeholder=\"40\">\n\t\t\t\t\t\t<div class=\"form-control-feedback\">\n\t\t\t\t\t\t\tShucks, check the formatting of that and try again.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"m-form__help\">\n\t\t\t\t\t\t\tExample help text that remains unchanged.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsBootstrapTouchspinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsBootstrapTouchspinComponent = (function () {
    function WidgetsBootstrapTouchspinComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapTouchspinComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapTouchspinComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/components/forms/widgets/bootstrap-touchspin.js');
    };
    return WidgetsBootstrapTouchspinComponent;
}());
WidgetsBootstrapTouchspinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
        template: __webpack_require__("../../../../../src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */]) === "function" && _a || Object])
], WidgetsBootstrapTouchspinComponent);

var _a;
//# sourceMappingURL=widgets-bootstrap-touchspin.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapTouchspinModule", function() { return WidgetsBootstrapTouchspinModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_touchspin_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_touchspin_component__["a" /* WidgetsBootstrapTouchspinComponent */]
            }
        ]
    }
];
var WidgetsBootstrapTouchspinModule = (function () {
    function WidgetsBootstrapTouchspinModule() {
    }
    return WidgetsBootstrapTouchspinModule;
}());
WidgetsBootstrapTouchspinModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ], declarations: [
            __WEBPACK_IMPORTED_MODULE_3__widgets_bootstrap_touchspin_component__["a" /* WidgetsBootstrapTouchspinComponent */]
        ]
    })
], WidgetsBootstrapTouchspinModule);

//# sourceMappingURL=widgets-bootstrap-touchspin.module.js.map

/***/ })

});
//# sourceMappingURL=widgets-bootstrap-touchspin.module.chunk.js.map