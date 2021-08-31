(self["webpackChunkion_App"] = self["webpackChunkion_App"] || []).push([["default-src_app_places_find_place-detail_place-detail_module_ts"],{

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

/***/ 7004:
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBookingComponent": () => (/* binding */ CreateBookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_booking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-booking.component.html */ 1646);
/* harmony import */ var _create_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-booking.component.scss */ 3658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);



/* eslint-disable max-len */


let CreateBookingComponent = class CreateBookingComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        const availableFrom = new Date(this.selectedPlace.availableFrom);
        const availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            this.startDate = new Date(availableFrom.getTime() +
                Math.random() *
                    (availableTo.getTime() -
                        7 * 24 * 60 * 60 * 1000 -
                        availableFrom.getTime())).toISOString();
            this.endDate = new Date(new Date(this.startDate).getTime() +
                Math.random() *
                    (new Date(this.startDate).getTime() +
                        6 * 24 * 60 * 60 * 1000 -
                        new Date(this.startDate).getTime())).toISOString();
        }
    }
    onCancel() {
        this.modalCtrl.dismiss({
            dismissed: true,
        });
    }
    onBookPlace() {
        if (!this.form.valid || !this.dateValid) {
            return;
        }
        this.modalCtrl.dismiss({
            bookingData: {
                firstName: this.form.value['first-name'],
                lastName: this.form.value['last-name'],
                guestNumber: +this.form.value['guest-number'],
                startDate: new Date(this.form.value['date-from']),
                endDate: new Date(this.form.value['date-to']),
            },
        }, 'confirm');
    }
    dateValid() {
        const startDate = new Date(this.form.value['date-from']);
        const endDate = new Date(this.form.value['date-to']);
        return endDate > startDate;
    }
};
CreateBookingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CreateBookingComponent.propDecorators = {
    selectedPlace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['f',] }]
};
CreateBookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-booking',
        template: _raw_loader_create_booking_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateBookingComponent);



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

/***/ 8760:
/*!*************************************************************************!*\
  !*** ./src/app/places/find/place-detail/place-detail-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageRoutingModule": () => (/* binding */ PlaceDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail.page */ 508);




const routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPage
    }
];
let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {
};
PlaceDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceDetailPageRoutingModule);



/***/ }),

/***/ 3896:
/*!*****************************************************************!*\
  !*** ./src/app/places/find/place-detail/place-detail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageModule": () => (/* binding */ PlaceDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail-routing.module */ 8760);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page */ 508);
/* harmony import */ var src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bookings/create-booking/create-booking.component */ 7004);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);









let PlaceDetailPageModule = class PlaceDetailPageModule {
};
PlaceDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailPage, src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent],
        entryComponents: [src_app_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_2__.CreateBookingComponent],
    })
], PlaceDetailPageModule);



/***/ }),

/***/ 508:
/*!***************************************************************!*\
  !*** ./src/app/places/find/place-detail/place-detail.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPage": () => (/* binding */ PlaceDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_place_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./place-detail.page.html */ 7065);
/* harmony import */ var _place_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page.scss */ 7965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bookings/booking.service */ 3118);
/* harmony import */ var src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/map-modal/map-modal.component */ 1218);
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ 7004);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../places.service */ 4395);



/* eslint-disable max-len */








let PlaceDetailPage = class PlaceDetailPage {
    constructor(navCtrl, route, modalCtrl, placesService, actionSheetCtrl, bookingService, router, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.placesService = placesService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingService = bookingService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.isBookable = false;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/discover');
                return;
            }
            this.isLoading = true;
            this.placeSub = this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe((place) => {
                this.place = place;
                this.isBookable = place.userId !== this.authService.userId;
                this.isLoading = false;
            }, (error) => {
                this.alertCtrl
                    .create({
                    header: 'An error occured',
                    message: 'Could not load place try again',
                    buttons: [
                        {
                            text: 'okay',
                            handler: () => {
                                this.router.navigate(['/places/tabs/find']);
                            },
                        },
                    ],
                })
                    .then((alertEl) => alertEl.present());
            });
        });
    }
    onBookPlace() {
        this.actionSheetCtrl
            .create({
            header: 'Choose An action',
            buttons: [
                {
                    text: 'select Date',
                    handler: () => {
                        this.onOpenBookingModal('select');
                    },
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.onOpenBookingModal('random');
                    },
                },
                { text: 'Cancel', role: 'destructive' },
            ],
        })
            .then((actionSheetEl) => {
            actionSheetEl.present();
        });
    }
    onOpenBookingModal(mode) {
        this.modalCtrl
            .create({
            component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_5__.CreateBookingComponent,
            componentProps: { selectedPlace: this.place, selectedMode: mode },
        })
            .then((modalEl) => {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then((resData) => {
            if (resData.role === 'confirm') {
                this.loadingCtrl
                    .create({ message: 'Booking Place' })
                    .then((loadingEl) => {
                    loadingEl.present();
                    const data = resData.data.bookingData;
                    this.bookingService
                        .addBooking(this.place.id, this.place.title, this.place.imgUrl, data.firstName, data.lastName, data.guestNumber, data.startDate, data.EndDate)
                        .subscribe(() => {
                        loadingEl.dismiss();
                    });
                });
            }
        });
    }
    onShowFullMap() {
        this.modalCtrl
            .create({
            component: src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__.MapModalComponent,
            componentProps: {
                center: {
                    lat: this.place.location.lat,
                    lng: this.place.location.lng,
                },
                selectable: false,
                closeButtonText: 'Close',
                title: this.place.location.address,
            },
        })
            .then((modalEl) => {
            modalEl.present();
        });
    }
    ngOnDestroy() {
        this.placeSub.unsubscribe();
    }
};
PlaceDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_6__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
PlaceDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-place-detail',
        template: _raw_loader_place_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_place_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlaceDetailPage);



/***/ }),

/***/ 3658:
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 7965:
/*!*****************************************************************!*\
  !*** ./src/app/places/find/place-detail/place-detail.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".location-img {\n  width: 100%;\n  height: 25rem;\n  max-height: 30vh;\n  object-fit: cover;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRiIsImZpbGUiOiJwbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxuICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1646:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ selectedPlace.title }} </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"text-center padding\">\n  <form (ngSubmit)=\"onBookPlace()\" #f=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col sizeSm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> First Name </ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"first-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col sizeSm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> Last Name </ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"last-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col sizeSm=\"6\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> Number of Guests </ion-label>\n            <ion-select name=\"guest-number\" [ngModel]=\"'2'\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col sizeSm=\"3\" offsetSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> From </ion-label>\n            <ion-datetime\n              displayFormat=\"MMM DD YYYY\"\n              pickerFormat=\"YY MM DD\"\n              [min]=\"selectedPlace.availableFrom\"\n              [max]=\"selectedPlace.availableTo\"\n              [ngModel]=\"startDate\"\n              name=\"date-from\"\n              required\n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col sizeSm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\"> To </ion-label>\n            <ion-datetime\n              displayFormat=\"MMM DD YYYY\"\n              pickerFormat=\"YY MM DD\"\n              [min]=\"startDateCtrl.value\"\n              [max]=\"selectedPlace.availableTo\"\n              [ngModel]=\"endDate\"\n              name=\"date-to\"\n              required\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col sizeSm=\"6\" offsetSm=\"3\">\n          <ion-button\n            color=\"secondary\"\n            expand=\"block\"\n            type=\"submit\"\n            [disabled]=\"!dateValid\"\n          >\n            Book\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 7065:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/find/place-detail/place-detail.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/find\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ isLoading ? 'Loading...' : place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col sizeSm=\"6\" offsetSm=\"3\">\n        <ion-img [src]=\"place.imgUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col sizeSm=\"6\" offsetSm=\"3\" class=\"ion-text-center ion-padding\">\n        <p>{{ place.description }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col sizeSm=\"6\" offsetSm=\"3\" class=\"ion-text-center ion-padding\">\n        <ion-img\n          (click)=\"onShowFullMap()\"\n          role=\"button\"\n          class=\"location-img\"\n          [src]=\"place.location.staticMapImageUrl\"\n        ></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col\n        sizeSm=\"6\"\n        offsetSm=\"3\"\n        class=\"ion-padding\"\n        class=\"ion-text-center\"\n        ><p>{{ place.location.address }}</p></ion-col\n      >\n    </ion-row>\n    <ion-row *ngIf=\"isBookable\">\n      <ion-col sizeSm=\"6\" offsetSm=\"3\" class=\"ion-text-center\">\n        <ion-button\n          class=\"ion-margin\"\n          color=\"primary\"\n          (click)=\"onBookPlace()\"\n          expand=\"block\"\n          >Book</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_places_find_place-detail_place-detail_module_ts.js.map