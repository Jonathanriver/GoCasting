(self["webpackChunkGoApp"] = self["webpackChunkGoApp"] || []).push([["src_app_detalle-modelo_detalle-modelo_module_ts"],{

/***/ 7269:
/*!*****************************************************************!*\
  !*** ./src/app/detalle-modelo/detalle-modelo-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleModeloPageRoutingModule": () => (/* binding */ DetalleModeloPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_modelo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-modelo.page */ 77);




const routes = [
    {
        path: '',
        component: _detalle_modelo_page__WEBPACK_IMPORTED_MODULE_0__.DetalleModeloPage
    }
];
let DetalleModeloPageRoutingModule = class DetalleModeloPageRoutingModule {
};
DetalleModeloPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleModeloPageRoutingModule);



/***/ }),

/***/ 5365:
/*!*********************************************************!*\
  !*** ./src/app/detalle-modelo/detalle-modelo.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleModeloPageModule": () => (/* binding */ DetalleModeloPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _detalle_modelo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-modelo-routing.module */ 7269);
/* harmony import */ var _detalle_modelo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-modelo.page */ 77);







let DetalleModeloPageModule = class DetalleModeloPageModule {
};
DetalleModeloPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_modelo_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleModeloPageRoutingModule
        ],
        declarations: [_detalle_modelo_page__WEBPACK_IMPORTED_MODULE_1__.DetalleModeloPage]
    })
], DetalleModeloPageModule);



/***/ }),

/***/ 77:
/*!*******************************************************!*\
  !*** ./src/app/detalle-modelo/detalle-modelo.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleModeloPage": () => (/* binding */ DetalleModeloPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_modelo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-modelo.page.html */ 7667);
/* harmony import */ var _detalle_modelo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-modelo.page.scss */ 8664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DetalleModeloPage = class DetalleModeloPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
    }
    openCity(evt, cityName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
};
DetalleModeloPage.ctorParameters = () => [];
DetalleModeloPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detalle-modelo',
        template: _raw_loader_detalle_modelo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_modelo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetalleModeloPage);



/***/ }),

/***/ 8664:
/*!*********************************************************!*\
  !*** ./src/app/detalle-modelo/detalle-modelo.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".imagen-cliente {\n  width: 80px;\n  height: 60px;\n  margin-left: 40%;\n  margin-top: 7px;\n}\n\n.imagen-cliente-dash {\n  box-shadow: -7px 5px 3px black;\n}\n\n.Fondo-Body {\n  --background: url('Background.png') 0 0/100% 100% no-repeat;\n}\n\n.item-body {\n  --background: transparent;\n}\n\n.Option1 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #F5A840;\n  height: 180px;\n  width: 100%;\n}\n\n.Option2 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #A82740;\n  height: 180px;\n  width: 100%;\n}\n\n.Option3 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #E78C93;\n  height: 180px;\n  width: 100%;\n}\n\n.Option4 {\n  border-radius: 24px 24px 24px 24px;\n  background-color: #6F5549;\n  height: 180px;\n  width: 100%;\n}\n\n.Nombre-Usuario {\n  color: white;\n  margin-left: 15px;\n  font-size: 20px;\n}\n\n.link-favorito {\n  color: white;\n  margin-left: 15px;\n  margin-top: 20px;\n}\n\n.boton-detalle {\n  margin-left: 30px;\n  font-size: 10px;\n  margin-bottom: 22px !important;\n}\n\n.list-body {\n  background: transparent;\n}\n\n.ImagenModelo {\n  width: 130px;\n  height: 151px;\n  margin-top: 24px !important;\n  margin-left: 25px !important;\n}\n\n.Slider-imag {\n  height: 300px;\n  width: 330px;\n}\n\n.tab {\n  overflow: hidden;\n  border: 1px solid black;\n  background-color: black;\n  color: white;\n  width: 100%;\n}\n\n/* Style the buttons inside the tab */\n\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n  font-size: 17px;\n}\n\n/* Change background color of buttons on hover */\n\n.tab button:hover {\n  background-color: #F5A840;\n  color: black;\n}\n\n/* Create an active/current tablink class */\n\n.tab button.active {\n  background-color: #F5A840;\n  color: black;\n}\n\n/* Style the tab content */\n\n.tabcontent {\n  width: 100%;\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtbW9kZWxvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsMkRBQUE7QUFDSjs7QUFHRTtFQUNFLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFETjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUtFO0VBQ0UsdUJBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0UscUNBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFLGdEQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0UsMkNBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRSwwQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRkoiLCJmaWxlIjoiZGV0YWxsZS1tb2RlbG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbi1jbGllbnRle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VuLWNsaWVudGUtZGFzaHtcclxuICAgIGJveC1zaGFkb3c6IC03cHggNXB4IDNweCBibGFjaztcclxuICB9XHJcblxyXG4gIC5Gb25kby1Cb2R5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL0ltYWdlbmVzL0JhY2tncm91bmQucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuaXRlbS1ib2R5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLk9wdGlvbjF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMjRweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNGNUE4NDA7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuT3B0aW9uMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0E4Mjc0MDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAuT3B0aW9uM3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U3OEM5MztcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5PcHRpb240e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDI0cHggMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNkY1NTQ5O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuTm9tYnJlLVVzdWFyaW97XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC8vICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5saW5rLWZhdm9yaXRve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH0gIFxyXG5cclxuICAuYm90b24tZGV0YWxsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubGlzdC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuSW1hZ2VuTW9kZWxve1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTFweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuU2xpZGVyLWltYWd7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYnV0dG9ucyBpbnNpZGUgdGhlIHRhYiAqL1xyXG4gIC50YWIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXHJcbiAgLnRhYiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1QTg0MDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuICAudGFiIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1QTg0MDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcbiAgLnRhYmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgIl19 */");

/***/ }),

/***/ 7667:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-modelo/detalle-modelo.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"FondoCabeza\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <img src=\"../../assets/Imagenes/LOGO GO CASTINGS NEGRO.png\" alt=\"\" class=\"imagen-cliente\">\r\n    <P slot=\"end\" style=\"margin-right: 12px;\">CLIENTE</P>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"Fondo-Body\">\r\n  <ion-list class=\"list-body\">\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <h4>Maria <br> Cristina Espitia</h4>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide>\r\n          <img src=\"../../assets/Imagenes/Cat1.jpg\" alt=\"\" class=\"Slider-imag\">\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img src=\"../../assets/Imagenes/Cat2.jpg\" alt=\"\" class=\"Slider-imag\">\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img src=\"../../assets/Imagenes/Cat3.jpg\" alt=\"\" class=\"Slider-imag\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <ion-button color=\"dark\">\r\n              <ion-icon name=\"images-outline\"></ion-icon>&nbsp;&nbsp;Galeria de Imagenes\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n<br>\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <div class=\"tab\">\r\n        <button class=\"tablinks\" style=\"color: white;\" (click)=\"openCity(event, 'London')\">Datos</button>\r\n        <button class=\"tablinks\" style=\"color: white;\" (click)=\"openCity(event, 'Paris')\">D. Personal</button>\r\n        <button class=\"tablinks\" style=\"color: white;\" (click)=\"openCity(event, 'Tokyo')\">D. Psicologica</button>\r\n      </div>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-body\">\r\n      <div id=\"London\" class=\"tabcontent\">\r\n        <h3>Datos Basicos</h3>\r\n        <p>London is the capital city of England.</p>\r\n      </div>\r\n\r\n      <div id=\"Paris\" class=\"tabcontent\">\r\n        <h3>Descripcion Personal</h3>\r\n        <p>Paris is the capital of France.</p>\r\n      </div>\r\n\r\n      <div id=\"Tokyo\" class=\"tabcontent\">\r\n        <h3>Descripcion Psicologica</h3>\r\n        <p>Tokyo is the capital of Japan.</p>\r\n      </div>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"item-body\" lines=\"none\">\r\n  <ion-toolbar class=\"item-body\" lines=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-button color=\"dark\">\r\n            <ion-icon name=\"star-outline\"></ion-icon>&nbsp;&nbsp;Favoritos\r\n          </ion-button> \r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-button color=\"dark\">\r\n          <ion-icon name=\"storefront-outline\"></ion-icon>&nbsp;&nbsp;Reservar\r\n        </ion-button> \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_detalle-modelo_detalle-modelo_module_ts.js.map