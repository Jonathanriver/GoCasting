(self["webpackChunkGoApp"] = self["webpackChunkGoApp"] || []).push([["src_app_invitar-user_invitar-user_module_ts"],{

/***/ 1022:
/*!*************************************************************!*\
  !*** ./src/app/invitar-user/invitar-user-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitarUserPageRoutingModule": () => (/* binding */ InvitarUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _invitar_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitar-user.page */ 3294);




const routes = [
    {
        path: '',
        component: _invitar_user_page__WEBPACK_IMPORTED_MODULE_0__.InvitarUserPage
    }
];
let InvitarUserPageRoutingModule = class InvitarUserPageRoutingModule {
};
InvitarUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvitarUserPageRoutingModule);



/***/ }),

/***/ 6147:
/*!*****************************************************!*\
  !*** ./src/app/invitar-user/invitar-user.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitarUserPageModule": () => (/* binding */ InvitarUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _invitar_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitar-user-routing.module */ 1022);
/* harmony import */ var _invitar_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitar-user.page */ 3294);







let InvitarUserPageModule = class InvitarUserPageModule {
};
InvitarUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invitar_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvitarUserPageRoutingModule
        ],
        declarations: [_invitar_user_page__WEBPACK_IMPORTED_MODULE_1__.InvitarUserPage]
    })
], InvitarUserPageModule);



/***/ }),

/***/ 3294:
/*!***************************************************!*\
  !*** ./src/app/invitar-user/invitar-user.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitarUserPage": () => (/* binding */ InvitarUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_invitar_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invitar-user.page.html */ 3011);
/* harmony import */ var _invitar_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitar-user.page.scss */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InvitarUserPage = class InvitarUserPage {
    constructor() { }
    ngOnInit() {
    }
};
InvitarUserPage.ctorParameters = () => [];
InvitarUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-invitar-user',
        template: _raw_loader_invitar_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invitar_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvitarUserPage);



/***/ }),

/***/ 7369:
/*!*****************************************************!*\
  !*** ./src/app/invitar-user/invitar-user.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".imagen-cliente {\n  width: 80px;\n  height: 60px;\n  margin-left: 40%;\n  margin-top: 7px;\n}\n\n.imagen-cliente-dash {\n  box-shadow: -7px 5px 3px black;\n}\n\n.Fondo-Body {\n  --background: url('Background.png') 0 0/100% 100% no-repeat;\n}\n\n.item-body {\n  --background: transparent;\n}\n\n.Option1 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #F5A840;\n  height: 180px;\n  width: 100%;\n}\n\n.Option2 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #A82740;\n  height: 180px;\n  width: 100%;\n}\n\n.Option3 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #E78C93;\n  height: 180px;\n  width: 100%;\n}\n\n.Option4 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #6F5549;\n  height: 180px;\n  width: 100%;\n}\n\n.Nombre-Usuario {\n  color: white;\n  margin-left: 15px;\n  font-size: 20px;\n}\n\n.link-favorito {\n  color: white;\n  margin-left: 15px;\n  margin-top: 20px;\n}\n\n.boton-detalle {\n  margin-left: 30px;\n  font-size: 10px;\n  margin-bottom: 22px !important;\n}\n\n.list-body {\n  background: transparent;\n}\n\n.ImagenModelo {\n  width: 130px;\n  height: 151px;\n  margin-top: 24px !important;\n  margin-left: 25px !important;\n}\n\n.Campo-compartir {\n  border: solid 0.5px black;\n  border-radius: 26px;\n  padding-left: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0YXItdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLDJEQUFBO0FBQ0o7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRE47O0FBS0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLRTtFQUNFLHVCQUFBO0FBRko7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLRTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUZOIiwiZmlsZSI6Imludml0YXItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuLWNsaWVudGV7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZW4tY2xpZW50ZS1kYXNoe1xyXG4gICAgYm94LXNoYWRvdzogLTdweCA1cHggM3B4IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLkZvbmRvLUJvZHl7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvSW1hZ2VuZXMvQmFja2dyb3VuZC5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWJvZHl7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuT3B0aW9uMXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0Y1QTg0MDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5PcHRpb24ye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDI0cHggMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjQTgyNzQwO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5PcHRpb24ze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDI0cHggMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRTc4QzkzO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLk9wdGlvbjR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMjRweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM2RjU1NDk7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5Ob21icmUtVXN1YXJpb3tcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLy8gICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxpbmstZmF2b3JpdG97XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSAgXHJcblxyXG4gIC5ib3Rvbi1kZXRhbGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5JbWFnZW5Nb2RlbG97XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLkNhbXBvLWNvbXBhcnRpcntcclxuICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9Il19 */");

/***/ }),

/***/ 3011:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invitar-user/invitar-user.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"FondoCabeza\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <img src=\"../../assets/Imagenes/LOGO GO CASTINGS NEGRO.png\" alt=\"\" class=\"imagen-cliente\">\r\n    <P slot=\"end\" style=\"margin-right: 12px;\">CLIENTE</P>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"Fondo-Body\">\r\n  <ion-list class=\"list-body\">\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <h4>INVITAR USUARIOS</h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <ion-icon name=\"list-outline\" style=\"font-size: 120px;border-top: 150px;\"></ion-icon>\r\n            \r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-justify\">\r\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no\u0002nummy nibh euismod tincidunt ut\r\n            laoreet dolore magna aliquam erat\r\n            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            <ion-button color=\"dark\" size=\"full\">Compartir</ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            <br>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no\u0002nummy.\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            <br>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            <ion-input type=\"text\" placeholder=\"Campo de compartir\" class=\"Campo-compartir\"></ion-input>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            <ion-button color=\"dark\" size=\"full\">Copiar</ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"ion-text-justify\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"ion-text-center\">\r\n                  <ion-icon name=\"logo-facebook\" style=\"font-size: 40px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center\">\r\n                  <ion-icon name=\"logo-whatsapp\" style=\"font-size: 40px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center\">\r\n                  <ion-icon name=\"chatbubbles-outline\" style=\"font-size: 40px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center\"> \r\n                  <ion-icon name=\"logo-instagram\" style=\"font-size: 40px;\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_invitar-user_invitar-user_module_ts.js.map