(self["webpackChunkGoApp"] = self["webpackChunkGoApp"] || []).push([["src_app_eventos_eventos_module_ts"],{

/***/ 4006:
/*!***************************************************!*\
  !*** ./src/app/eventos/eventos-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventosPageRoutingModule": () => (/* binding */ EventosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventos.page */ 9250);




const routes = [
    {
        path: '',
        component: _eventos_page__WEBPACK_IMPORTED_MODULE_0__.EventosPage
    }
];
let EventosPageRoutingModule = class EventosPageRoutingModule {
};
EventosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventosPageRoutingModule);



/***/ }),

/***/ 9735:
/*!*******************************************!*\
  !*** ./src/app/eventos/eventos.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventosPageModule": () => (/* binding */ EventosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventos-routing.module */ 4006);
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventos.page */ 9250);







let EventosPageModule = class EventosPageModule {
};
EventosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eventos_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventosPageRoutingModule
        ],
        declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_1__.EventosPage]
    })
], EventosPageModule);



/***/ }),

/***/ 9250:
/*!*****************************************!*\
  !*** ./src/app/eventos/eventos.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventosPage": () => (/* binding */ EventosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./eventos.page.html */ 3031);
/* harmony import */ var _eventos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventos.page.scss */ 6321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EventosPage = class EventosPage {
    constructor() {
    }
    ngOnInit() {
    }
    onChange($event) {
        console.log($event);
    }
};
EventosPage.ctorParameters = () => [];
EventosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-eventos',
        template: _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_eventos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EventosPage);



/***/ }),

/***/ 6321:
/*!*******************************************!*\
  !*** ./src/app/eventos/eventos.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".imagen-cliente {\n  width: 80px;\n  height: 60px;\n  margin-left: 40%;\n  margin-top: 7px;\n}\n\n.imagen-cliente-dash {\n  box-shadow: -7px 5px 3px black;\n}\n\n.Fondo-Body {\n  --background: url('Background.png') 0 0/100% 100% no-repeat;\n}\n\n.item-body {\n  --background: transparent;\n}\n\n.Option1 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #F5A840;\n  height: 180px;\n  width: 100%;\n}\n\n.Option2 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #A82740;\n  height: 180px;\n  width: 100%;\n}\n\n.Option3 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #E78C93;\n  height: 180px;\n  width: 100%;\n}\n\n.Option4 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #6F5549;\n  height: 180px;\n  width: 100%;\n}\n\n.Nombre-Usuario {\n  color: white;\n  margin-left: 15px;\n  font-size: 20px;\n}\n\n.link-favorito {\n  color: white;\n  margin-left: 15px;\n  margin-top: 20px;\n}\n\n.boton-detalle {\n  margin-left: 30px;\n  font-size: 10px;\n  margin-bottom: 22px !important;\n}\n\n.list-body {\n  background: transparent;\n}\n\n.ImagenModelo {\n  width: 130px;\n  height: 151px;\n  margin-top: 24px !important;\n  margin-left: 25px !important;\n}\n\n.month {\n  padding: 70px 25px;\n  width: 100%;\n  background: #F5A840;\n  text-align: center;\n}\n\n.month ul {\n  margin: 0;\n  padding: 0;\n}\n\n.month ul li {\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n\n.month .prev {\n  float: left;\n  padding-top: 10px;\n}\n\n.month .next {\n  float: right;\n  padding-top: 10px;\n}\n\n.weekdays {\n  margin: 0;\n  padding: 10px 0;\n  background-color: #ddd;\n}\n\n.weekdays li {\n  display: inline-block;\n  width: 13.6%;\n  color: #666;\n  text-align: center;\n}\n\n.days {\n  padding: 10px 0;\n  background: #eee;\n  margin: 0;\n}\n\n.days li {\n  list-style-type: none;\n  display: inline-block;\n  width: 13.6%;\n  text-align: center;\n  margin-bottom: 5px;\n  font-size: 12px;\n  color: #777;\n}\n\n.days li .active {\n  padding: 5px;\n  background: black;\n  color: white !important;\n}\n\n/* Add media queries for smaller screens */\n\n@media screen and (max-width: 720px) {\n  .weekdays li, .days li {\n    width: 13.1%;\n  }\n}\n\n@media screen and (max-width: 420px) {\n  .weekdays li, .days li {\n    width: 12.5%;\n  }\n\n  .days li .active {\n    padding: 2px;\n  }\n}\n\n@media screen and (max-width: 290px) {\n  .weekdays li, .days li {\n    width: 12.2%;\n  }\n}\n\nul {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyREFBQTtBQUNKOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUU7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUROOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0U7RUFDRSx1QkFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBRko7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNRSwwQ0FBQTs7QUFDQTtFQUNFO0lBQXdCLFlBQUE7RUFGMUI7QUFDRjs7QUFJRTtFQUNFO0lBQXdCLFlBQUE7RUFEMUI7O0VBRUU7SUFBa0IsWUFBQTtFQUVwQjtBQUNGOztBQUFFO0VBQ0U7SUFBd0IsWUFBQTtFQUcxQjtBQUNGOztBQUZFO0VBQUkscUJBQUE7QUFLTiIsImZpbGUiOiJldmVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW4tY2xpZW50ZXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlbi1jbGllbnRlLWRhc2h7XHJcbiAgICBib3gtc2hhZG93OiAtN3B4IDVweCAzcHggYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuRm9uZG8tQm9keXtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9JbWFnZW5lcy9CYWNrZ3JvdW5kLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tYm9keXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5PcHRpb24xe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDI0cHggMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRjVBODQwO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLk9wdGlvbjJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMjRweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNBODI3NDA7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLk9wdGlvbjN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMjRweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNFNzhDOTM7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuT3B0aW9uNHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzZGNTU0OTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLk5vbWJyZS1Vc3Vhcmlve1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubGluay1mYXZvcml0b3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9ICBcclxuXHJcbiAgLmJvdG9uLWRldGFsbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtYm9keXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLkltYWdlbk1vZGVsb3tcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTUxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAubW9udGgge1xyXG4gICAgcGFkZGluZzogNzBweCAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVBODQwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubW9udGggdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vbnRoIHVsIGxpIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIH1cclxuICBcclxuICAubW9udGggLnByZXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vbnRoIC5uZXh0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAud2Vla2RheXMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLndlZWtkYXlzIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMy42JTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZGF5cyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZGF5cyBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTMuNiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICAuZGF5cyBsaSAuYWN0aXZlIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIG1lZGlhIHF1ZXJpZXMgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzIwcHgpIHtcclxuICAgIC53ZWVrZGF5cyBsaSwgLmRheXMgbGkge3dpZHRoOiAxMy4xJTt9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAud2Vla2RheXMgbGksIC5kYXlzIGxpIHt3aWR0aDogMTIuNSU7fVxyXG4gICAgLmRheXMgbGkgLmFjdGl2ZSB7cGFkZGluZzogMnB4O31cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkwcHgpIHtcclxuICAgIC53ZWVrZGF5cyBsaSwgLmRheXMgbGkge3dpZHRoOiAxMi4yJTt9XHJcbiAgfVxyXG4gIHVsIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fSJdfQ== */");

/***/ }),

/***/ 3031:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventos/eventos.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"FondoCabeza\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <img src=\"../../assets/Imagenes/LOGO GO CASTINGS NEGRO.png\" alt=\"\" class=\"imagen-cliente\">\r\n    <P slot=\"end\" style=\"margin-right: 12px;\">CLIENTE</P>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"Fondo-Body\">\r\n  <ion-list class=\"list-body\">\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <h4>EVENTOS</h4>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <div class=\"month\">\r\n              <ul>\r\n                <li class=\"prev\">&#10094;</li>\r\n                <li class=\"next\">&#10095;</li>\r\n                <li>\r\n                  August<br>\r\n                  <span style=\"font-size:18px\">2021</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <ul class=\"weekdays\">\r\n              <li>Mo</li>\r\n              <li>Tu</li>\r\n              <li>We</li>\r\n              <li>Th</li>\r\n              <li>Fr</li>\r\n              <li>Sa</li>\r\n              <li>Su</li>\r\n            </ul>\r\n\r\n            <ul class=\"days\">\r\n              <li>1</li>\r\n              <li>2</li>\r\n              <li>3</li>\r\n              <li>4</li>\r\n              <li>5</li>\r\n              <li>6</li>\r\n              <li>7</li>\r\n              <li>8</li>\r\n              <li>9</li>\r\n              <li><span class=\"active\">10</span></li>\r\n              <li>11</li>\r\n              <li>12</li>\r\n              <li>13</li>\r\n              <li>14</li>\r\n              <li>15</li>\r\n              <li>16</li>\r\n              <li>17</li>\r\n              <li>18</li>\r\n              <li>19</li>\r\n              <li>20</li>\r\n              <li>21</li>\r\n              <li>22</li>\r\n              <li>23</li>\r\n              <li>24</li>\r\n              <li>25</li>\r\n              <li>26</li>\r\n              <li>27</li>\r\n              <li>28</li>\r\n              <li>29</li>\r\n              <li>30</li>\r\n              <li>31</li>\r\n            </ul>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card style=\"width: 100%;background-color: black;\">\r\n              <ion-item lines=\"none\" class=\"item-body\" style=\"width: 100%;\">\r\n                <p slot=\"start\" style=\"color: white;\">Evento 1</p>\r\n                <ion-icon name=\"checkmark-done-circle-outline\" style=\"color: white;\" slot=\"end\"></ion-icon>\r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card style=\"width: 100%;background-color: black;\">\r\n              <ion-item lines=\"none\" class=\"item-body\" style=\"width: 100%;\">\r\n                <p slot=\"start\" style=\"color: white;\">Evento 2</p>\r\n                <ion-icon name=\"checkmark-done-circle-outline\" style=\"color: white;\" slot=\"end\"></ion-icon>\r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-card style=\"width: 100%;background-color: black;\">\r\n              <ion-item lines=\"none\" class=\"item-body\" style=\"width: 100%;\">\r\n                <p slot=\"start\" style=\"color: white;\">Evento 3</p>\r\n                <ion-icon name=\"checkmark-done-circle-outline\" style=\"color: white;\" slot=\"end\"></ion-icon>\r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-button color=\"dark\" size=\"full\">\r\n              <ion-icon name=\"add-circle-outline\"></ion-icon>&nbsp;&nbsp;Nuevo Evento \r\n            </ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_eventos_eventos_module_ts.js.map