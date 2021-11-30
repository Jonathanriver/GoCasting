(self["webpackChunkGoApp"] = self["webpackChunkGoApp"] || []).push([["src_app_preguntas-frecuentes_preguntas-frecuentes_module_ts"],{

/***/ 3278:
/*!*****************************************************************************!*\
  !*** ./src/app/preguntas-frecuentes/preguntas-frecuentes-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasFrecuentesPageRoutingModule": () => (/* binding */ PreguntasFrecuentesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _preguntas_frecuentes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preguntas-frecuentes.page */ 5424);




const routes = [
    {
        path: '',
        component: _preguntas_frecuentes_page__WEBPACK_IMPORTED_MODULE_0__.PreguntasFrecuentesPage
    }
];
let PreguntasFrecuentesPageRoutingModule = class PreguntasFrecuentesPageRoutingModule {
};
PreguntasFrecuentesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreguntasFrecuentesPageRoutingModule);



/***/ }),

/***/ 1073:
/*!*********************************************************************!*\
  !*** ./src/app/preguntas-frecuentes/preguntas-frecuentes.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasFrecuentesPageModule": () => (/* binding */ PreguntasFrecuentesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _preguntas_frecuentes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preguntas-frecuentes-routing.module */ 3278);
/* harmony import */ var _preguntas_frecuentes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preguntas-frecuentes.page */ 5424);







let PreguntasFrecuentesPageModule = class PreguntasFrecuentesPageModule {
};
PreguntasFrecuentesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _preguntas_frecuentes_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreguntasFrecuentesPageRoutingModule
        ],
        declarations: [_preguntas_frecuentes_page__WEBPACK_IMPORTED_MODULE_1__.PreguntasFrecuentesPage]
    })
], PreguntasFrecuentesPageModule);



/***/ }),

/***/ 5424:
/*!*******************************************************************!*\
  !*** ./src/app/preguntas-frecuentes/preguntas-frecuentes.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasFrecuentesPage": () => (/* binding */ PreguntasFrecuentesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_preguntas_frecuentes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./preguntas-frecuentes.page.html */ 8095);
/* harmony import */ var _preguntas_frecuentes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preguntas-frecuentes.page.scss */ 5931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PreguntasFrecuentesPage = class PreguntasFrecuentesPage {
    constructor() { }
    ngOnInit() {
    }
};
PreguntasFrecuentesPage.ctorParameters = () => [];
PreguntasFrecuentesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-preguntas-frecuentes',
        template: _raw_loader_preguntas_frecuentes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_preguntas_frecuentes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PreguntasFrecuentesPage);



/***/ }),

/***/ 5931:
/*!*********************************************************************!*\
  !*** ./src/app/preguntas-frecuentes/preguntas-frecuentes.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVndW50YXMtZnJlY3VlbnRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8095:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preguntas-frecuentes/preguntas-frecuentes.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>PreguntasFrecuentes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_preguntas-frecuentes_preguntas-frecuentes_module_ts.js.map