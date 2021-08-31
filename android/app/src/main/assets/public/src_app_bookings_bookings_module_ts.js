(self["webpackChunkion_App"] = self["webpackChunkion_App"] || []).push([["src_app_bookings_bookings_module_ts"],{

/***/ 3118:
/*!*********************************************!*\
  !*** ./src/app/bookings/booking.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingService": () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _models_booking_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/booking.model */ 1282);

/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */






let BookingService = class BookingService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    get bookings() {
        return this._bookings.asObservable();
    }
    addBooking(placeId, placeTitle, placeImg, firstName, lastName, guestNumber, dateFrom, dateTo) {
        let generatedId;
        const newBooking = new _models_booking_model__WEBPACK_IMPORTED_MODULE_1__.Booking(Math.random.toString(), placeId, this.authService.userId, placeTitle, placeImg, firstName, lastName, guestNumber, dateFrom, dateTo);
        return this.http
            .post('https://ion-app-e8ff9-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json', Object.assign(Object.assign({}, newBooking), { id: null }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((resData) => {
            resData.name;
            return this.bookings;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((bookings) => {
            newBooking.id = generatedId;
            this._bookings.next(bookings.concat(newBooking));
        }));
    }
    fetchBookings() {
        return this.http
            .get(`https://ion-app-e8ff9-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json?orderBy="userId"&equalTo"${this.authService.userId}"`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((bookingsData) => {
            const bookings = [];
            for (const key in bookingsData) {
                if (bookingsData.hasOwnProperty(key)) {
                    bookings.push(new _models_booking_model__WEBPACK_IMPORTED_MODULE_1__.Booking(key, bookingsData[key].placeId, bookingsData[key].userId, bookingsData[key].placeTitle, bookingsData[key].placeImg, bookingsData[key].firstname, bookingsData[key].lastName, bookingsData[key].guestNumber, new Date(bookingsData[key].bookedFrom), new Date(bookingsData[key].bookedTo)));
                }
            }
            return bookings;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((bookings) => {
            this._bookings.next(bookings);
        }));
    }
    cancelBooking(bookingId) {
        return this.http
            .delete(`https://ion-app-e8ff9-default-rtdb.asia-southeast1.firebasedatabase.app/bookings/${bookingId}.json`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
            return this.bookings;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((bookings) => {
            this._bookings.next(bookings.filter((b) => {
                b.id = bookingId;
            }));
        }));
    }
};
BookingService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
BookingService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], BookingService);



/***/ }),

/***/ 5083:
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageRoutingModule": () => (/* binding */ BookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.page */ 3017);




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_0__.BookingsPage
    }
];
let BookingsPageRoutingModule = class BookingsPageRoutingModule {
};
BookingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingsPageRoutingModule);



/***/ }),

/***/ 7938:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPageModule": () => (/* binding */ BookingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings-routing.module */ 5083);
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page */ 3017);







let BookingsPageModule = class BookingsPageModule {
};
BookingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsPageRoutingModule],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_1__.BookingsPage],
    })
], BookingsPageModule);



/***/ }),

/***/ 3017:
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsPage": () => (/* binding */ BookingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bookings.page.html */ 220);
/* harmony import */ var _bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.page.scss */ 9706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.service */ 3118);






let BookingsPage = class BookingsPage {
    constructor(bookingService, loadingCtrl) {
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.loadedBookings = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.bookingSub = this.bookingService.bookings.subscribe((bookings) => {
            this.loadedBookings = bookings;
        });
    }
    ionViewWillEnter() {
        this.isLoading = true;
        this.bookingService.fetchBookings().subscribe(() => {
            this.isLoading = false;
        });
    }
    onCancelBooking(bookingId, ionSliding) {
        ionSliding.close();
        this.loadingCtrl
            .create({ message: 'Cancelling Booking' })
            .then((loadingEl) => {
            loadingEl.present();
            this.bookingService.cancelBooking(bookingId).subscribe(() => {
                loadingEl.dismiss();
            });
        });
    }
    ngOnDestroy() {
        this.bookingSub.unsubscribe();
    }
};
BookingsPage.ctorParameters = () => [
    { type: _booking_service__WEBPACK_IMPORTED_MODULE_2__.BookingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
BookingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bookings',
        template: _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bookings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingsPage);



/***/ }),

/***/ 1282:
/*!*****************************************!*\
  !*** ./src/app/models/booking.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Booking": () => (/* binding */ Booking)
/* harmony export */ });
class Booking {
    constructor(id, placeId, userId, placeImg, firstname, lastName, placeTitle, guestNumber, bookedFrom, bookedTo) {
        this.id = id;
        this.placeId = placeId;
        this.userId = userId;
        this.placeImg = placeImg;
        this.firstname = firstname;
        this.lastName = lastName;
        this.placeTitle = placeTitle;
        this.guestNumber = guestNumber;
        this.bookedFrom = bookedFrom;
        this.bookedTo = bookedTo;
    }
}


/***/ }),

/***/ 9706:
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 220:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        sizeMd=\"6\"\n        offsetMd=\"3\"\n        class=\"ion-text-center\"\n        *ngIf=\"isLoading\"\n      >\n        <ion-spinner color=\"secondary\"></ion-spinner>\n      </ion-col>\n      <ion-col\n        sizeMd=\"6\"\n        offsetMd=\"3\"\n        class=\"ion-text-center\"\n        *ngIf=\" !isLoading && (!loadedBookings || loadedBookings.length <= 0)\"\n      >\n        <p>No Bookings Found</p>\n      </ion-col>\n      <ion-col\n        sizeMd=\"6\"\n        offsetMd=\"3\"\n        *ngIf=\"!isLoading && (loadedBookings && loadedBookings.length > 0)\"\n      >\n        <ion-list>\n          <ion-item-sliding\n            *ngFor=\"let booking of loadedBookings\"\n            #slidingBooking\n          >\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"booking.placeImg\"></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <h5>{{ booking.placeTitle }}</h5>\n                <p>Guests {{ booking.guestNumber }}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option\n                color=\"danger\"\n                (click)=\"onCancelBooking(booking.id, slidingBooking)\"\n              >\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bookings_bookings_module_ts.js.map