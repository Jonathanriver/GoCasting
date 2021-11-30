(self["webpackChunkGoApp"] = self["webpackChunkGoApp"] || []).push([["src_app_favoritos_favoritos_module_ts"],{

/***/ 8736:
/*!*******************************************************!*\
  !*** ./src/app/favoritos/favoritos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosPageRoutingModule": () => (/* binding */ FavoritosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favoritos.page */ 8695);




const routes = [
    {
        path: '',
        component: _favoritos_page__WEBPACK_IMPORTED_MODULE_0__.FavoritosPage
    }
];
let FavoritosPageRoutingModule = class FavoritosPageRoutingModule {
};
FavoritosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritosPageRoutingModule);



/***/ }),

/***/ 1768:
/*!***********************************************!*\
  !*** ./src/app/favoritos/favoritos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosPageModule": () => (/* binding */ FavoritosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favoritos-routing.module */ 8736);
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritos.page */ 8695);







let FavoritosPageModule = class FavoritosPageModule {
};
FavoritosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritosPageRoutingModule
        ],
        declarations: [_favoritos_page__WEBPACK_IMPORTED_MODULE_1__.FavoritosPage]
    })
], FavoritosPageModule);



/***/ }),

/***/ 8695:
/*!*********************************************!*\
  !*** ./src/app/favoritos/favoritos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosPage": () => (/* binding */ FavoritosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_favoritos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favoritos.page.html */ 9854);
/* harmony import */ var _favoritos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritos.page.scss */ 4619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FavoritosPage = class FavoritosPage {
    constructor() { }
    ngOnInit() {
    }
};
FavoritosPage.ctorParameters = () => [];
FavoritosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favoritos',
        template: _raw_loader_favoritos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favoritos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoritosPage);



/***/ }),

/***/ 4619:
/*!***********************************************!*\
  !*** ./src/app/favoritos/favoritos.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".imagen-cliente {\n  width: 80px;\n  height: 60px;\n  margin-left: 40%;\n  margin-top: 7px;\n}\n\n.imagen-cliente-dash {\n  box-shadow: -7px 5px 3px black;\n}\n\n.Fondo-Body {\n  --background: url('Background.png') 0 0/100% 100% no-repeat;\n}\n\n.item-body {\n  --background: transparent;\n}\n\n.Option1 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #F5A840;\n  height: 180px;\n  width: 100%;\n}\n\n.Option2 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #A82740;\n  height: 180px;\n  width: 100%;\n}\n\n.Option3 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #E78C93;\n  height: 180px;\n  width: 100%;\n}\n\n.Option4 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #6F5549;\n  height: 180px;\n  width: 100%;\n}\n\n.Nombre-Usuario {\n  color: white;\n  margin-left: 15px;\n  font-size: 20px;\n}\n\n.link-favorito {\n  color: white;\n  margin-left: 15px;\n  margin-top: 20px;\n}\n\n.boton-detalle {\n  margin-left: 30px;\n  font-size: 10px;\n  margin-bottom: 22px !important;\n}\n\n.list-body {\n  background: transparent;\n}\n\n.ImagenModelo {\n  width: 130px;\n  height: 151px;\n  margin-top: 24px !important;\n  margin-left: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLDJEQUFBO0FBQ0o7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRE47O0FBS0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLRTtFQUNFLHVCQUFBO0FBRko7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFGSiIsImZpbGUiOiJmYXZvcml0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbi1jbGllbnRle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VuLWNsaWVudGUtZGFzaHtcclxuICAgIGJveC1zaGFkb3c6IC03cHggNXB4IDNweCBibGFjaztcclxuICB9XHJcblxyXG4gIC5Gb25kby1Cb2R5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL0ltYWdlbmVzL0JhY2tncm91bmQucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuaXRlbS1ib2R5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLk9wdGlvbjF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMjRweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNGNUE4NDA7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuT3B0aW9uMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0E4Mjc0MDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAuT3B0aW9uM3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U3OEM5MztcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5PcHRpb240e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDI0cHggMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNkY1NTQ5O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuTm9tYnJlLVVzdWFyaW97XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC8vICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5saW5rLWZhdm9yaXRve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH0gIFxyXG5cclxuICAuYm90b24tZGV0YWxsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubGlzdC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuSW1hZ2VuTW9kZWxve1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTFweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ 9854:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favoritos/favoritos.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"FondoCabeza\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <img src=\"../../assets/Imagenes/LOGO GO CASTINGS NEGRO.png\" alt=\"\" class=\"imagen-cliente\">\r\n    <P slot=\"end\" style=\"margin-right: 12px;\">CLIENTE</P>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"Fondo-Body\">\r\n  <ion-list class=\"list-body\">\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <h4>FAVORITAS</h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <!-- <ion-icon name=\"checkmark-circle-outline\"></ion-icon> -->\r\n            <ion-icon name=\"checkmark-circle-outline\" style=\"font-size: 120px;border-top: 150px;\"></ion-icon>\r\n            <p>No tiene favoritas Activas </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_favoritos_favoritos_module_ts.js.map