(self["webpackChunkGoApp"] = self["webpackChunkGoApp"] || []).push([["src_app_cliente_cliente_module_ts"],{

/***/ 9414:
/*!***************************************************!*\
  !*** ./src/app/cliente/cliente-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePageRoutingModule": () => (/* binding */ ClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente.page */ 9858);




const routes = [
    {
        path: '',
        component: _cliente_page__WEBPACK_IMPORTED_MODULE_0__.ClientePage
    }
];
let ClientePageRoutingModule = class ClientePageRoutingModule {
};
ClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientePageRoutingModule);



/***/ }),

/***/ 4454:
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePageModule": () => (/* binding */ ClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-routing.module */ 9414);
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.page */ 9858);







let ClientePageModule = class ClientePageModule {
};
ClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientePageRoutingModule
        ],
        declarations: [_cliente_page__WEBPACK_IMPORTED_MODULE_1__.ClientePage]
    })
], ClientePageModule);



/***/ }),

/***/ 9858:
/*!*****************************************!*\
  !*** ./src/app/cliente/cliente.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePage": () => (/* binding */ ClientePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cliente.page.html */ 8573);
/* harmony import */ var _cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.page.scss */ 2301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let ClientePage = class ClientePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    Modelos() {
        this.router.navigate(['/modelos']);
    }
    Alertas() {
        this.router.navigate(['/alertas']);
    }
    Unete() {
        this.router.navigate(['/eventos']);
    }
    Eventos() {
        this.router.navigate(['/eventos']);
    }
    Ajustes() {
        this.router.navigate(['/eventos']);
    }
};
ClientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cliente',
        template: _raw_loader_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientePage);



/***/ }),

/***/ 2301:
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header.header-md:after {\n  background: transparent;\n}\n\n.imagen-cliente {\n  width: 100%;\n  height: 100%;\n}\n\n.imagen-cliente-dash {\n  box-shadow: -7px 5px 3px black;\n}\n\n.Option1 {\n  border-radius: 0px 55px 55px 0px;\n  width: 100%;\n}\n\n.Fondo-Body {\n  --background: url('Background.png') 0 0/100% 100% no-repeat;\n}\n\n.item-body {\n  --background: transparent;\n}\n\n.list-body {\n  background: transparent;\n}\n\n.my-toolbar {\n  --background: url('INICIO .png') 0 0/100% 100% no-repeat;\n  height: 250px;\n  width: 100%;\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUJBQUE7QUFBSjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSEY7O0FBT0E7RUFDRSw4QkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0NBQUE7RUFHQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSwyREFBQTtBQU5GOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLHVCQUFBO0FBUEY7O0FBVUE7RUFDRSx3REFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVBGIiwiZmlsZSI6ImNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgJi5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5pbWFnZW4tY2xpZW50ZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiBcclxufVxyXG5cclxuLmltYWdlbi1jbGllbnRlLWRhc2h7XHJcbiAgYm94LXNoYWRvdzogLTdweCA1cHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG4uT3B0aW9uMXtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNTVweCA1NXB4IDBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgLy8gaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLkZvbmRvLUJvZHl7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL0ltYWdlbmVzL0JhY2tncm91bmQucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICBcclxufVxyXG5cclxuLml0ZW0tYm9keXtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGlzdC1ib2R5e1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubXktdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvSW1hZ2VuZXMvSU5JQ0lPIC5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8573:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" lines=\"none\" style=\"padding: 12px;\">\r\n  <ion-toolbar style=\"border: none !important;\" class=\"my-toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <!-- <img src=\"../../assets/Imagenes/INICIO .png\" alt=\"\" class=\"imagen-cliente\"> -->\r\n    <!-- <P slot=\"end\" style=\"margin-right: 12px;\">CLIENTE</P>  -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"Fondo-Body\">\r\n  <ion-list class=\"list-body\">\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\" (click)=\"Modelos()\">\r\n            <div class=\"Option1\">\r\n              <img src=\"../../assets/Imagenes/NUESTRAS MODELOS.png\" alt=\"\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\" (click)=\"Alertas()\">\r\n            <div class=\"Option1\">\r\n              <img src=\"../../assets/Imagenes/TUS ALERTAS.png\" alt=\"\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\" (click)=\"Eventos()\">\r\n            <div class=\"Option1\">\r\n              <img src=\"../../assets/Imagenes/UNETE COMO MODELO.png\" alt=\"\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row> -->\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\" (click)=\"Ajustes()\">\r\n            <div class=\"Option1\">\r\n              <img src=\"../../assets/Imagenes/AJUSTES.png\" alt=\"\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cliente_cliente_module_ts.js.map