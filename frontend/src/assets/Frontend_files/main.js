(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page/landing-page.component */ 4229);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 3653);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 8422);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 5908);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.component */ 3391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);









const routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.LandingPageComponent },
    { path: 'main-page', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.LandingPageComponent },
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent },
    { path: 'my-profile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__.MyProfileComponent },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_5__.NewsComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@font-face {\n  font-family: \"SemiBold\";\n  src: url('JosefinSans-SemiBold.ttf');\n}\n@font-face {\n  font-family: \"Bold\";\n  src: url('JosefinSans-Bold.ttf');\n}\n@font-face {\n  font-family: \"Regular\";\n  src: url('JosefinSans-Regular.ttf');\n}\n@font-face {\n  font-family: \"Beauty\";\n  src: url('IntroScriptDemo-Medium.otf');\n}\n  .error-snackbar {\n  background-color: #b41f1f !important;\n  color: white;\n}\n  .success-snackbar {\n  background-color: #349e14 !important;\n  color: white;\n}\n  .mat-focus-indicator {\n  background-color: white !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtBQUFGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLG1DQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QUFGRjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBSEY7QUFNQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSm9zZWZpblNhbnMtU2VtaUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0pvc2VmaW5TYW5zLUJvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JlZ3VsYXInO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0pvc2VmaW5TYW5zLVJlZ3VsYXIudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JlYXV0eSc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvSW50cm9TY3JpcHREZW1vLU1lZGl1bS5vdGYnKTtcbn1cblxuOjpuZy1kZWVwIC5lcnJvci1zbmFja2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDMxLCAzMSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLnN1Y2Nlc3Mtc25hY2tiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDE1OCwgMjApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ 4229);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 8422);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 3653);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/news.component */ 3391);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 5908);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ 2372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__.LandingPageComponent,
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__.SignUpComponent,
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__.SignInComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent,
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent,
        _news_news_component__WEBPACK_IMPORTED_MODULE_7__.NewsComponent,
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__.MyProfileComponent,
        _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__.EditProfileComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule] }); })();


/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2372:
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign-up/sign-up.component */ 8422);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);












function EditProfileComponent_mat_hint_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name field should contain only letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditProfileComponent_mat_hint_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Second name field should contain only letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditProfileComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditProfileComponent_mat_hint_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid telephone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditProfileComponent_mat_hint_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must contain from 7 to 15 characters, at least one numeric digit and a special character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditProfileComponent_mat_hint_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Your password and confirmation password do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class EditProfileComponent {
    constructor(dialogRef, data, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email
        ]);
        this.matcher = new _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__.MyErrorStateMatcher();
        this.firstName = '';
        this.firstNameError = false;
        this.secondNameError = false;
        this.secondName = '';
        this.telephone = '';
        this.telephoneError = false;
        this.origPass = '';
        this.origPassError = false;
        this.confirmPass = '';
        this.matchPassError = false;
    }
    ngOnInit() { }
    initializeAll() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email
        ]);
        this.matcher = new _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__.MyErrorStateMatcher();
        this.firstName = '';
        this.firstNameError = false;
        this.secondNameError = false;
        this.secondName = '';
        this.telephone = '';
        this.telephoneError = false;
        this.origPass = '';
        this.origPassError = false;
        this.confirmPass = '';
        this.matchPassError = false;
    }
    hasDigitsFirst() {
        let hasDigits = /\d/.test(this.firstName);
        this.firstNameError = hasDigits;
        return hasDigits;
    }
    hasDigitsSecond() {
        let hasDigits = /\d/.test(this.secondName);
        this.secondNameError = hasDigits;
        return hasDigits;
    }
    hasLettersTelephone() {
        let hasLetters = !/^\d+$/.test(this.telephone);
        this.telephoneError = hasLetters;
        return hasLetters;
    }
    isValidPassword() {
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if ((this.origPass !== '' && this.origPass.match(paswd)) ||
            this.origPass === '') {
            this.origPassError = false;
            return true;
        }
        else {
            this.origPassError = true;
            return false;
        }
    }
    isEqualToOrigPassword() {
        if (this.origPass !== '' &&
            this.confirmPass !== '' &&
            this.origPass === this.confirmPass) {
            this.matchPassError = false;
            return true;
        }
        if (this.origPass === '' || this.confirmPass === '') {
            this.matchPassError = false;
            return true;
        }
        this.matchPassError = true;
        return false;
    }
    saveChanges() {
        if (this.firstName !== '' && this.firstNameError) {
            this.snackBar.open('First name field should contain only letters!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.secondName !== '' && this.secondNameError) {
            this.snackBar.open('Second name field should contain only letters!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.emailFormControl.value !== '' &&
            this.emailFormControl.hasError('email')) {
            this.snackBar.open('Please enter a valid email address!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.origPass !== '' && this.matchPassError) {
            this.snackBar.open('Your password and confirmation password do not match!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.origPass !== '' && this.origPassError) {
            this.snackBar.open('Password must be 7 to 15 characters long and must contain at least one numeric digit and a special character!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.telephone !== '' && this.telephoneError) {
            this.snackBar.open('Please enter a valid telephone number!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        let changes = {
            firstName: this.firstName,
            secondName: this.secondName,
            telephone: this.telephone,
            email: this.emailFormControl.value,
            password: this.origPass
        };
        // request to make
        if (true) {
            this.dialogRef.close();
            this.snackBar.open('Changed succesfully saved! !', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['success-snackbar']
            });
            //refresh page
        }
        else {}
    }
    cancel() {
        this.dialogRef.close();
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
EditProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 44, vars: 17, consts: [[1, "div-form"], [1, "example-full-width"], ["matInput", "", "type", "text", "value", "caca", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["style", "color: red", 4, "ngIf"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", "value", "caca", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], ["type", "tel", "matInput", "", "placeholder", "555-555-1234", "value", "caca", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["type", "password", "matInput", "", 3, "ngModel", "ngModelChange"], [2, "height", "0.5vw"], [2, "text-align", "center"], ["mat-raised-button", "", 2, "margin-right", "2vw", 3, "click"], ["mat-raised-button", "", 3, "click"], [2, "color", "red"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_6_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditProfileComponent_mat_hint_7_Template, 2, 0, "mat-hint", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Second name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_12_listener($event) { return ctx.secondName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditProfileComponent_mat_hint_13_Template, 2, 0, "mat-hint", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EditProfileComponent_mat_error_19_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_24_listener($event) { return ctx.telephone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EditProfileComponent_mat_hint_27_Template, 2, 0, "mat-hint", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_31_listener($event) { return ctx.origPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EditProfileComponent_mat_hint_32_Template, 2, 0, "mat-hint", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_36_listener($event) { return ctx.confirmPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, EditProfileComponent_mat_hint_37_Template, 2, 0, "mat-hint", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_40_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_42_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasDigitsFirst());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.secondName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasDigitsSecond());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.telephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.telephone !== "" && ctx.hasLettersTelephone());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.origPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isValidPassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEqualToOrigPassword());
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: [".example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.div-form[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  min-width: 150px;\n  max-width: 680px;\n  background-color: white;\n  margin: 0 auto 0;\n  padding: 2vw;\n  color: black;\n  border-radius: 40px;\n  font-size: 1.1vw;\n  font-family: \"Beauty\";\n}\n\n.button-get-started[_ngcontent-%COMP%] {\n  font-size: 1.7vw;\n  background-color: white;\n  font-family: \"Regular\";\n  border-radius: 22px;\n  border: none;\n  padding: 15px 20px;\n  text-decoration: none;\n  color: black;\n  border: 1px solid #087a94;\n  font-family: \"Beauty\";\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-size: 200% auto;\n  background-image: linear-gradient(to right, #4ef8b9 0%, #087a94 50%, #4ef8b9 100%);\n  background-position: right center;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtGQUFBO0VBTUEsaUNBQUE7RUFDQSxnQkFBQTtBQUpGIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA2ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMCBhdXRvIDA7XG4gIHBhZGRpbmc6IDJ2dztcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LXNpemU6IDEuMXZ3O1xuICBmb250LWZhbWlseTogXCJCZWF1dHlcIjtcbn1cblxuLmJ1dHRvbi1nZXQtc3RhcnRlZCB7XG4gIGZvbnQtc2l6ZTogMS43dnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSZWd1bGFyXCI7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDgsIDEyMiwgMTQ4KTtcbiAgZm9udC1mYW1pbHk6IFwiQmVhdXR5XCI7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1nZXQtc3RhcnRlZDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICByZ2IoNzgsIDI0OCwgMTg1KSAwJSxcbiAgICByZ2IoOCwgMTIyLCAxNDgpIDUwJSxcbiAgICByZ2IoNzgsIDI0OCwgMTg1KSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4229:
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ 1105);



class LandingPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 12, vars: 0, consts: [[1, "background-style"], [1, "main-title"], [2, "width", "10%", "text-align", "left", "margin-left", "7vw", "margin-top", "2vw"], [1, "description"], [2, "height", "4vw"], ["routerLink", "/sign-in", 1, "button-get-started"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BirdNews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our app helps you keep up with the topics and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " trends that matter most to you, without the overwhelm.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "GET STARTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".background-style[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('yes.jpg');\n  background-size: 100vw 100vh;\n  color: white;\n}\n\n.main-title[_ngcontent-%COMP%] {\n  margin-left: 6.7vw;\n  font-family: \"Bold\";\n  font-size: 6vw;\n  padding-top: 18vw;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-left: 7vw;\n  font-family: \"Regular\";\n  font-size: 1.5vw;\n  padding-top: 1vw;\n}\n\n.button-get-started[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  background-color: white;\n  font-family: \"Regular\";\n  border-radius: 22px;\n  border: none;\n  padding: 15px 20px;\n  margin: 4vw 0 0 7vw;\n  text-decoration: none;\n  color: black;\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-size: 200% auto;\n  background-image: linear-gradient(to right, #4ef8b9 0%, #087a94 50%, #4ef8b9 100%);\n  background-position: right center;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0ZBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc3R5bGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi9hc3NldHMveWVzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDYuN3Z3O1xuICBmb250LWZhbWlseTogJ0JvbGQnO1xuICBmb250LXNpemU6IDZ2dztcbiAgcGFkZGluZy10b3A6IDE4dnc7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA3dnc7XG4gIGZvbnQtZmFtaWx5OiAnUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIHBhZGRpbmctdG9wOiAxdnc7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdSZWd1bGFyJztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG1hcmdpbjogNHZ3IDAgMCA3dnc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnV0dG9uLWdldC1zdGFydGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig3OCwgMjQ4LCAxODUpIDAlLCByZ2IoOCwgMTIyLCAxNDgpIDUwJSwgcmdiKDc4LCAyNDgsIDE4NSkgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/news.service */ 1857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




function MenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(newsService) {
        this.newsService = newsService;
    }
    ngOnInit() { }
    getIsSignedIn() {
        return this.newsService.getSignedIn();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 2, vars: 2, consts: [["class", "menu", 4, "ngIf"], [1, "menu"], ["routerLink", "/main-page", 1, "menu-item", 2, "margin-left", "57vw"], ["routerLink", "/sign-in", 1, "menu-item"], ["routerLink", "/sign-up", 1, "menu-item"], ["routerLink", "/contact", 1, "menu-item"], ["routerLink", "/news", 1, "menu-item"], ["routerLink", "/my-profile", 1, "menu-item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_1_Template, 9, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.getIsSignedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getIsSignedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".menu[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.3vw;\n  padding-top: 2vw;\n  font-family: \"SemiBold\";\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  margin-left: 7vw;\n  text-decoration: none;\n  color: white;\n  font-family: \"SemiBold\";\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  color: #3dddd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjN2dztcbiAgcGFkZGluZy10b3A6IDJ2dztcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogN3Z3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogcmdiYSg2MSwgMjIxLCAyMTMsIDI1NSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 5908:
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-profile/edit-profile.component */ 2372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/news.service */ 1857);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ 1105);






class MyProfileComponent {
    constructor(router, newsService, dialog) {
        this.router = router;
        this.newsService = newsService;
        this.dialog = dialog;
    }
    ngOnInit() {
        // if (!this.newsService.getSignedIn()) {
        //   this.router.navigate(['/sign-in']);
        // }
    }
    editProfile() {
        const dialogRef = this.dialog.open(_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__.EditProfileComponent, {
            width: '55vw',
            height: '70vh'
        });
        dialogRef.afterClosed().subscribe(result => {
            //request to api
            // reload the page
            console.log('The dialog was closed');
        });
    }
    logout() { }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 17, vars: 0, consts: [[1, "background-style"], [1, "info-profile-main"], [1, "info-profile"], [2, "height", "4vw"], [1, "button-get-started", 3, "click"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Second name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Telephone number : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyProfileComponent_Template_a_click_13_listener() { return ctx.editProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Edit my profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyProfileComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent], styles: [".background-style[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('yes.jpg');\n  background-size: 100vw 100vh;\n  color: white;\n}\n\n.button-get-started[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  background-color: white;\n  font-family: \"Regular\";\n  border-radius: 22px;\n  border: none;\n  padding: 15px 20px;\n  margin: 4vw 0 0 7vw;\n  text-decoration: none;\n  color: black;\n}\n\n.info-profile[_ngcontent-%COMP%] {\n  padding-left: 7vw;\n  font-size: 2vw;\n  font-family: \"Regular\";\n}\n\n.info-profile-main[_ngcontent-%COMP%] {\n  padding-left: 7vw;\n  font-size: 2vw;\n  padding-top: 9vw;\n  padding-bottom: 3vw;\n  font-size: 5vw;\n  font-family: \"Beauty\";\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-size: 200% auto;\n  background-image: linear-gradient(to right, #4ef8b9 0%, #087a94 50%, #4ef8b9 100%);\n  background-position: right center;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtGQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6Im15LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1zdHlsZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy95ZXMuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwdncgMTAwdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uYnV0dG9uLWdldC1zdGFydGVkIHtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUmVndWxhcic7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBtYXJnaW46IDR2dyAwIDAgN3Z3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmluZm8tcHJvZmlsZSB7XG4gIHBhZGRpbmctbGVmdDogN3Z3O1xuICBmb250LXNpemU6IDJ2dztcbiAgZm9udC1mYW1pbHk6ICdSZWd1bGFyJztcbn1cblxuLmluZm8tcHJvZmlsZS1tYWluIHtcbiAgcGFkZGluZy1sZWZ0OiA3dnc7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBwYWRkaW5nLXRvcDogOXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBmb250LXNpemU6IDV2dztcbiAgZm9udC1mYW1pbHk6IFwiQmVhdXR5XCI7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1nZXQtc3RhcnRlZDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDc4LCAyNDgsIDE4NSkgMCUsIHJnYig4LCAxMjIsIDE0OCkgNTAlLCByZ2IoNzgsIDI0OCwgMTg1KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuIl19 */"] });


/***/ }),

/***/ 3391:
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/news.service */ 1857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ 1105);




class NewsComponent {
    constructor(newsService, router) {
        this.newsService = newsService;
        this.router = router;
    }
    ngOnInit() {
        // if (!this.newsService.getSignedIn()) {
        //   this.router.navigate(['/sign-in']);
        // }
    }
    myTypeScriptFunction() { }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
NewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 2, vars: 0, consts: [[1, "background-style"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent], styles: [".background-style[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('sss.jpg');\n  background-size: 100vw 100vh;\n  color: white;\n  font-family: \"Regular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc3R5bGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi9hc3NldHMvc3NzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUmVndWxhcic7XG59XG4iXX0= */"] });


/***/ }),

/***/ 1857:
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NewsService {
    constructor() {
        this.signedIn = false;
    }
    setSignedIn(value) {
        this.signedIn = value;
    }
    getSignedIn() {
        return this.signedIn;
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(); };
NewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3653:
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign-up/sign-up.component */ 8422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/news.service */ 1857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ 1105);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 1321);











function SignInComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(signUpSnackBar, newsService, router) {
        this.signUpSnackBar = signUpSnackBar;
        this.newsService = newsService;
        this.router = router;
        this.matcher = new _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_0__.MyErrorStateMatcher();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email
        ]);
        this.origPass = '';
    }
    ngOnInit() {
        if (this.newsService.getSignedIn()) {
            this.router.navigate(['/news']);
        }
        this.origPass = '';
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email
        ]);
    }
    signInRequest() {
        if (this.origPass === '' || this.emailFormControl.value === '') {
            this.signUpSnackBar.open('Complete all the required fields please!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.emailFormControl.hasError('email')) {
            this.signUpSnackBar.open('Please enter a valid email address!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else {
            // sign in request
            this.signUpSnackBar.open('You are succesfully signed in!', 'Close', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['success-snackbar']
            });
            this.newsService.setSignedIn(true);
            //redirect to home page
        }
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 18, vars: 4, consts: [[1, "background-style"], [1, "div-form"], [1, "sign-up-title"], [1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", "required", "true", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], ["type", "password", "matInput", "", "required", "true", 3, "ngModel", "ngModelChange"], [2, "height", "6vw"], [2, "text-align", "center"], [1, "button-get-started", 3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SignInComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_13_listener($event) { return ctx.origPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_16_listener() { return ctx.signInRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.origPass);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: [".background-style[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('yes.jpg');\n  background-size: 100vw 100vh;\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.3vw;\n  padding-top: 2vw;\n  font-family: \"SemiBold\";\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  margin-left: 7vw;\n  text-decoration: none;\n  color: white;\n  font-family: \"SemiBold\";\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  color: #3dddd5;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.div-form[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  min-width: 150px;\n  max-width: 680px;\n  background-color: white;\n  margin: 12vw auto 0;\n  padding: 2vw;\n  color: black;\n  border-radius: 40px;\n  font-size: 1.4vw;\n}\n\n.button-get-started[_ngcontent-%COMP%] {\n  font-size: 1.7vw;\n  background-color: white;\n  font-family: \"Regular\";\n  border-radius: 22px;\n  border: none;\n  padding: 15px 20px;\n  margin-top: 4vw;\n  text-decoration: none;\n  color: black;\n  font-family: \"Beauty\";\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-size: 200% auto;\n  background-image: linear-gradient(to right, #4ef8b9 0%, #087a94 50%, #4ef8b9 100%);\n  background-position: right center;\n  transition: 0.5s;\n}\n\n@font-face {\n  font-family: \"Beauty\";\n  src: url('IntroScriptDemo-Medium.otf');\n}\n\n.sign-up-title[_ngcontent-%COMP%] {\n  font-family: \"Beauty\";\n  font-size: 3vw;\n  color: #033c71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrRkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGRiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc3R5bGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi9hc3NldHMveWVzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjN2dztcbiAgcGFkZGluZy10b3A6IDJ2dztcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogN3Z3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogcmdiYSg2MSwgMjIxLCAyMTMsIDI1NSk7XG59XG5cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LWZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMnZ3IGF1dG8gMDtcbiAgcGFkZGluZzogMnZ3O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMS40dnc7XG59XG5cblxuLmJ1dHRvbi1nZXQtc3RhcnRlZCB7XG4gIGZvbnQtc2l6ZTogMS43dnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1JlZ3VsYXInO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgbWFyZ2luLXRvcDogNHZ3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiQmVhdXR5XCI7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1nZXQtc3RhcnRlZDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDc4LCAyNDgsIDE4NSkgMCUsIHJnYig4LCAxMjIsIDE0OCkgNTAlLCByZ2IoNzgsIDI0OCwgMTg1KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdCZWF1dHknO1xuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0ludHJvU2NyaXB0RGVtby1NZWRpdW0ub3RmJyk7XG59XG5cbi5zaWduLXVwLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmVhdXR5XCI7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogIzAzM2M3MTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8422:
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher),
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/news.service */ 1857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ 1105);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);











function SignUpComponent_mat_hint_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First name field should contain only letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Second name field should contain only letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_hint_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter a valid telephone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_hint_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password must contain from 7 to 15 characters, at least one numeric digit and a special character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_hint_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Your password and confirmation password do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
class SignUpComponent {
    constructor(signUpSnackBar, newsService, router) {
        this.signUpSnackBar = signUpSnackBar;
        this.newsService = newsService;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email
        ]);
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
        this.firstName = '';
        this.firstNameError = false;
        this.secondNameError = false;
        this.secondName = '';
        this.telephone = '';
        this.telephoneError = false;
        this.origPass = '';
        this.origPassError = false;
        this.confirmPass = '';
        this.matchPassError = false;
    }
    ngOnInit() {
        if (this.newsService.getSignedIn()) {
            this.router.navigate(['/news']);
        }
        this.initializeAll();
    }
    initializeAll() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email
        ]);
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
        this.firstName = '';
        this.firstNameError = false;
        this.secondNameError = false;
        this.secondName = '';
        this.telephone = '';
        this.telephoneError = false;
        this.origPass = '';
        this.origPassError = false;
        this.confirmPass = '';
        this.matchPassError = false;
    }
    hasDigitsFirst() {
        let hasDigits = /\d/.test(this.firstName);
        this.firstNameError = hasDigits;
        return hasDigits;
    }
    hasDigitsSecond() {
        let hasDigits = /\d/.test(this.secondName);
        this.secondNameError = hasDigits;
        return hasDigits;
    }
    hasLettersTelephone() {
        let hasLetters = !/^\d+$/.test(this.telephone);
        this.telephoneError = hasLetters;
        return hasLetters;
    }
    isValidPassword() {
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if ((this.origPass !== '' && this.origPass.match(paswd)) ||
            this.origPass === '') {
            this.origPassError = false;
            return true;
        }
        else {
            this.origPassError = true;
            return false;
        }
    }
    isEqualToOrigPassword() {
        if (this.origPass !== '' &&
            this.confirmPass !== '' &&
            this.origPass === this.confirmPass) {
            this.matchPassError = false;
            return true;
        }
        if (this.origPass === '' || this.confirmPass === '') {
            this.matchPassError = false;
            return true;
        }
        this.matchPassError = true;
        return false;
    }
    signUpRequest() {
        console.log('signup request');
        if (this.firstName === '' ||
            this.confirmPass === '' ||
            this.secondName === '' ||
            this.telephone === '' ||
            this.origPass === '' ||
            this.emailFormControl.hasError('required')) {
            this.signUpSnackBar.open('Complete all the required fields please!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.firstNameError) {
            this.signUpSnackBar.open('First name field should contain only letters!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.secondNameError) {
            this.signUpSnackBar.open('Second name field should contain only letters!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.emailFormControl.hasError('email') &&
            !this.emailFormControl.hasError('required')) {
            this.signUpSnackBar.open('Please enter a valid email address!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.matchPassError) {
            this.signUpSnackBar.open('Your password and confirmation password do not match!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.origPassError) {
            this.signUpSnackBar.open('Password must be 7 to 15 characters long and must contain at least one numeric digit and a special character!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        else if (this.telephoneError) {
            this.signUpSnackBar.open('Please enter a valid telephone number!', 'Ok', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
            });
            return;
        }
        // request to make
        if (true) {
            this.signUpSnackBar.open('You are succesfully signed up!', 'Close', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['success-snackbar']
            });
            //redirect to sign in or sign up
        }
        else {}
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 42, vars: 18, consts: [[1, "background-style"], [1, "div-form"], [1, "sign-up-title"], [1, "example-full-width"], ["matInput", "", "type", "text", "required", "true", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["style", "color: red", 4, "ngIf"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", "required", "true", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], ["type", "tel", "matInput", "", "placeholder", "555-555-1234", "required", "true", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["type", "password", "matInput", "", "required", "true", 3, "ngModel", "ngModelChange"], [2, "height", "4vw"], [2, "text-align", "center"], [1, "button-get-started", 3, "click"], [2, "color", "red"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_8_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SignUpComponent_mat_hint_9_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Second name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_13_listener($event) { return ctx.secondName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SignUpComponent_mat_hint_14_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SignUpComponent_mat_error_19_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SignUpComponent_mat_error_20_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_24_listener($event) { return ctx.telephone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SignUpComponent_mat_hint_27_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_31_listener($event) { return ctx.origPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SignUpComponent_mat_hint_32_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_36_listener($event) { return ctx.confirmPass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SignUpComponent_mat_hint_37_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_40_listener() { return ctx.signUpRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.firstName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasDigitsFirst());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.secondName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasDigitsSecond());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.telephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.telephone !== "" && ctx.hasLettersTelephone());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.origPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isValidPassword());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.confirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isEqualToOrigPassword());
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: [".background-style[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('yes.jpg');\n  background-size: 100vw 100vh;\n  color: white;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.3vw;\n  padding-top: 2vw;\n  font-family: \"SemiBold\";\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  margin-left: 7vw;\n  text-decoration: none;\n  color: white;\n  font-family: \"SemiBold\";\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  color: #3dddd5;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  background-color: white;\n  margin: 5vw auto 0;\n  padding: 1vw;\n  color: black;\n  border-radius: 10px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.div-form[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  min-width: 150px;\n  max-width: 680px;\n  background-color: white;\n  margin: 5vw auto 0;\n  padding: 2vw;\n  color: black;\n  border-radius: 40px;\n  font-size: 1.3vw;\n}\n\n.button-get-started[_ngcontent-%COMP%] {\n  font-size: 1.7vw;\n  background-color: white;\n  font-family: \"Regular\";\n  border-radius: 22px;\n  border: none;\n  padding: 15px 20px;\n  margin-top: 4vw;\n  text-decoration: none;\n  color: black;\n  font-family: \"Beauty\";\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n.button-get-started[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-size: 200% auto;\n  background-image: linear-gradient(to right, #4ef8b9 0%, #087a94 50%, #4ef8b9 100%);\n  background-position: right center;\n  transition: 0.5s;\n}\n\n@font-face {\n  font-family: \"Beauty\";\n  src: url('IntroScriptDemo-Medium.otf');\n}\n\n.sign-up-title[_ngcontent-%COMP%] {\n  font-family: \"Beauty\";\n  font-size: 3vw;\n  color: #033c71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrRkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc3R5bGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi9hc3NldHMveWVzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjN2dztcbiAgcGFkZGluZy10b3A6IDJ2dztcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogN3Z3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTZW1pQm9sZCc7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogcmdiYSg2MSwgMjIxLCAyMTMsIDI1NSk7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXZ3IGF1dG8gMDtcbiAgcGFkZGluZzogMXZ3O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA2ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXZ3IGF1dG8gMDtcbiAgcGFkZGluZzogMnZ3O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQge1xuICBmb250LXNpemU6IDEuN3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdSZWd1bGFyJztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDR2dztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYXV0eVwiO1xufVxuXG4uYnV0dG9uLWdldC1zdGFydGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tZ2V0LXN0YXJ0ZWQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig3OCwgMjQ4LCAxODUpIDAlLCByZ2IoOCwgMTIyLCAxNDgpIDUwJSwgcmdiKDc4LCAyNDgsIDE4NSkgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmVhdXR5JztcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9JbnRyb1NjcmlwdERlbW8tTWVkaXVtLm90ZicpO1xufVxuXG4uc2lnbi11cC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYXV0eVwiO1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6ICMwMzNjNzE7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 7598
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5142), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map