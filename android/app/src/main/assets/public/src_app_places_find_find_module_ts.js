(self["webpackChunkion_App"] = self["webpackChunkion_App"] || []).push([["src_app_places_find_find_module_ts"],{

/***/ 2594:
/*!****************************************************!*\
  !*** ./src/app/places/find/find-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPageRoutingModule": () => (/* binding */ FindPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _find_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.page */ 8873);




const routes = [
    {
        path: '',
        component: _find_page__WEBPACK_IMPORTED_MODULE_0__.FindPage
    },
    {
        path: 'place-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_places_find_place-detail_place-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./place-detail/place-detail.module */ 3896)).then(m => m.PlaceDetailPageModule)
    }
];
let FindPageRoutingModule = class FindPageRoutingModule {
};
FindPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindPageRoutingModule);



/***/ }),

/***/ 298:
/*!********************************************!*\
  !*** ./src/app/places/find/find.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPageModule": () => (/* binding */ FindPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _find_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-routing.module */ 2594);
/* harmony import */ var _find_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find.page */ 8873);







let FindPageModule = class FindPageModule {
};
FindPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _find_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindPageRoutingModule
        ],
        declarations: [_find_page__WEBPACK_IMPORTED_MODULE_1__.FindPage]
    })
], FindPageModule);



/***/ }),

/***/ 8873:
/*!******************************************!*\
  !*** ./src/app/places/find/find.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindPage": () => (/* binding */ FindPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_find_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find.page.html */ 2138);
/* harmony import */ var _find_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find.page.scss */ 2133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../places.service */ 4395);



/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-expressions */



let FindPage = class FindPage {
    constructor(placesService, authService) {
        this.placesService = placesService;
        this.authService = authService;
        this.loadedPlaces = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.subs = this.placesService.places.subscribe((places) => {
            this.loadedPlaces = places;
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        });
    }
    onFilterUpdate(event) {
        if (event.detail.value === 'all') {
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter((place) => {
                place.userId !== this.authService.userId;
            });
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe(() => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
};
FindPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_3__.PlacesService },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
FindPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-find',
        template: _raw_loader_find_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindPage);



/***/ }),

/***/ 2133:
/*!********************************************!*\
  !*** ./src/app/places/find/find.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5kLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2138:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/find/find.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-button (click)=\"onOpenMenu()\">\n        Open\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"all\" checked>All Places</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable Places</ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid\n    *ngIf=\"!isLoading && ( !relevantPlaces ||  relevantPlaces.length <= 0)\"\n  >\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <p>There are no Bookable Places right now</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && relevantPlaces.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle\n              >{{ loadedPlaces[0].price | currency }} / Night</ion-card-subtitle\n            >\n          </ion-card-header>\n          <ion-img [src]=\" relevantPlaces[0].imgUrl\"></ion-img>\n          <ion-card-content>\n            <p>{{ relevantPlaces[0].description }}</p>\n          </ion-card-content>\n          <div>\n            <ion-button\n              fill=\"clear\"\n              color=\"primary\"\n              [routerLink]=\"[\n                '/',\n                'places',\n                'tabs',\n                'find',\n                relevantPlaces[0].id\n              ]\"\n            >\n              More\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-virtual-scroll\n          [items]=\"listedLoadedPlaces\"\n          approxItemHeight=\"70px\"\n        >\n          <ion-item\n            *virtualItem=\"let place\"\n            [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\"\n            detail\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place.title }}</h2>\n              <p>{{ place.description }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_find_find_module_ts.js.map