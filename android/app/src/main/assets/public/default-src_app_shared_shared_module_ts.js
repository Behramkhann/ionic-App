(self["webpackChunkion_App"] = self["webpackChunkion_App"] || []).push([["default-src_app_shared_shared_module_ts"],{

/***/ 1218:
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModalComponent": () => (/* binding */ MapModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map-modal.component.html */ 8091);
/* harmony import */ var _map_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-modal.component.scss */ 7054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);



/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */



let MapModalComponent = class MapModalComponent {
    constructor(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = { lat: -34.397, lng: 150.644 };
        this.selectable = true;
        this.closeButtonText = 'cancel';
        this.title = 'pick a place';
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.getGoogleMaps()
            .then((googleMaps) => {
            this.googleMaps = googleMaps;
            const mapEl = this.mapElementRef.nativeElement;
            const map = new googleMaps.Map(mapEl, {
                center: this.center,
                zoom: 16,
            });
            googleMaps.event.addListenerOnce(map, 'idle', () => {
                this.renderer.addClass(mapEl, 'visible');
            });
            if (this.selectable) {
                this.clickListener = map.addListener('click', (event) => {
                    const selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    };
                    this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                const marker = new googleMaps.Marker({
                    position: this.center,
                    // eslint-disable-next-line object-shorthand
                    map: map,
                    title: 'Picked location',
                });
                marker.setMap(map);
            }
        })
            .catch((err) => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    getGoogleMaps() {
        const win = window;
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src =
                'https://maps.googleapis.com/maps/api/js?key=' +
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    }
};
MapModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2 }
];
MapModalComponent.propDecorators = {
    mapElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['map',] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    closeButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MapModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-map-modal',
        template: _raw_loader_map_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapModalComponent);



/***/ }),

/***/ 8912:
/*!****************************************************************************!*\
  !*** ./src/app/shared/picker/location-picker/location-picker.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerComponent": () => (/* binding */ LocationPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./location-picker.component.html */ 8336);
/* harmony import */ var _location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-picker.component.scss */ 7669);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ 1218);



/* eslint-disable max-len */







let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isLoading = false;
    }
    ngOnInit() { }
    onPickLocation() {
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__.MapModalComponent }).then((modalEl) => {
            modalEl.onDidDismiss().then((modalData) => {
                if (!modalData.data) {
                    return;
                }
                const pickedLocation = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng,
                    address: null,
                    staticMapImageUrl: null,
                };
                this.isLoading = true;
                this.getAddress(modalData.data.lat, modalData.data.lng)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((address) => {
                    pickedLocation.address = address;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
                }))
                    .subscribe((staticMapImageUrl) => {
                    pickedLocation.staticMapImageUrl = staticMapImageUrl;
                    this.selectedLocationImage = staticMapImageUrl;
                    this.isLoading = false;
                    this.locationPick.emit(pickedLocation);
                });
            });
            modalEl.present();
        });
    }
    getAddress(lat, lng) {
        return this.http
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=
       ${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.googleMapsAPIKey} `)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((geoData) => {
            if (!geoData || !geoData.results || geoData.results.lenght === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    }
    getMapImage(lat, lng, zoom) {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.googleMapsAPIKey}`;
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
LocationPickerComponent.propDecorators = {
    locationPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
LocationPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-location-picker',
        template: _raw_loader_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationPickerComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-modal/map-modal.component */ 1218);
/* harmony import */ var _picker_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker/location-picker/location-picker.component */ 8912);

/* eslint-disable @typescript-eslint/quotes */





let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent, _picker_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__.LocationPickerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        exports: [_picker_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_1__.LocationPickerComponent, _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent],
        entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_0__.MapModalComponent],
    })
], SharedModule);



/***/ }),

/***/ 7054:
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: transparent;\n}\n\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUlBO0VBQ0UsVUFBQTtBQURGIiwiZmlsZSI6Im1hcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gb3BhY2l0eTogMDtcclxuICAvLyB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi5tYXAudmlzaWJsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7669:
/*!******************************************************************************!*\
  !*** ./src/app/shared/picker/location-picker/location-picker.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.location-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJsb2NhdGlvbi1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlja2VyIHtcclxuICB3aWR0aDogMzByZW07XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2NhdGlvbi1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 8091:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">Cancel</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n");

/***/ }),

/***/ 8336:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/picker/location-picker/location-picker.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img\n    role=\"button\"\n    (click)=\"onPickLocation()\"\n    class=\"location-img\"\n    [src]=\"selectedLocationImage\"\n    *ngIf=\"selectedLocationImage && !isLoading\"\n  ></ion-img>\n  <ion-button\n    color=\"primary\"\n    (click)=\"onPickLocation()\"\n    *ngIf=\"!selectedLocationImage && !isLoading\"\n    ><ion-icon name=\"map\" slot=\"start\"></ion-icon\n    ><ion-label>Select location</ion-label></ion-button\n  >\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map