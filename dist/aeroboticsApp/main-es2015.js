(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n    <nav>\n        <div class=\"nav-wrapper nav-position-header\">\n            <div class=\"header\">\n                <!-- <h5>Dashboard</h5> -->\n                \n            </div>\n        </div>\n    </nav>\n</div>\n\n<ul id=\"slide-out\" class=\"sidenav sidenav-fixed\">\n    <li>\n        <div class=\"user-view\">\n                <img src=\"../assets/img/aerobotics_logo_new.svg\">\n        </div>\n    </li>\n\n    <li routerLinkActive=\"active\"><a class=\"waves-effect active center-text\" routerLink=\"/dashboard\">Dashboard</a></li>\n    <li>\n        <div class=\"divider\"></div>\n    </li>\n   \n</ul>\n\n\n<div class=\"main\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <button (click)=\"selectedScoutMissions($event)\" class=\"waves-effect waves-light btn\">button</button>\n    <input name=\"testt\" id=\"testt\" [(ngModel)]=\"testt\">\n    <pre>{{testt | json}}</pre>\n\n    {{selectedClient}} jj\n\n\n    <ul class=\"tabs\">\n      <li class=\"tab col s3\"><a href=\"#scoutMission\" class=\"active\">Scout Missions</a></li>\n      <li class=\"tab col s3\"><a href=\"#schedule\">Schedule</a></li>\n    </ul>\n  </div>\n  <div id=\"scoutMission\" class=\"col s12\">\n    <div class=\"card-panel\">\n      <h5 class=\"center-text\">Scout Missions</h5>\n      <table class=\"responsive-table striped centered\">\n        <thead>\n          <tr>\n            <th>Title</th>\n            <th>ID </th>\n            <th>Farm ID</th>\n            <th>Date</th>\n            <th>Complete</th>\n            <th>Allocate Worker</th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let scoutMission of scoutMissions\">\n            <td>{{scoutMission.title}}</td>\n            <td>{{scoutMission.id}}</td>\n            <td>{{scoutMission.farm_id}}</td>\n            <td>{{scoutMission.date}}</td>\n            <td>{{scoutMission.complete}}</td>\n            <td>\n\n              <!-- <div name=\"test\" class=\"input-field col s12\">\n                    <select id=\"selectedClient\" \n                     [ngModel]=\"selectedClient\" (ngModelChange)=\"onSelectedClientChange($event)\" name=\"selectedClient\" \n                     #createSelectedClient=\"ngModel\">\n                      <option value=\"\" disabled selected>Choose your option</option>\n                      <option *ngFor=\"let client of clients\" let i=\"index\" value=\"client.id\" [value]=\"client.id\">{{client.name}}</option>\n                     <label>select</label>\n                    </select>\n                  </div> -->\n\n              <div name=\"test\" class=\"input-field col s12\">\n                <select [(ngModel)]=\"selectedClient\" (ngModelChange)=\"onSelectedClientChange($event)\">\n                  <!-- <option value=\"\" disabled selected>Choose your option</option> -->\n                  <option *ngFor=\"let client of clients\" let i=\"index\" [value]=\"client.id\">\n                    {{client.name}}{{client.id}}</option>\n                  <label>select</label>\n                </select>\n\n                <!-- <select id=\"selectedClient\" #oldvalue=\"ngModel\" [(ngModel)]=\"selectedClient\" (ngModelChange)=\"onSelectedClientChange(oldvalue)\"\n                  name=\"selectedClient\" #updateSelectedClient=\"ngModel\" required>\n                  <option value=\"\" disabled selected>Select Client</option>\n                  <option *ngFor=\"let client of clients\" let i=index [ngValue]=\"client.id\" value=\"client.id\"\n                    [value]=\"client.id\">{{client.name}}</option>\n                </select> -->\n\n              </div>\n\n\n\n\n            </td>\n\n            <td> <button (click)=\"selectedScoutMissions(scoutMission.id, selectedClient)\"\n                class=\"waves-effect waves-light btn\">button</button></td>\n\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n  <div id=\"schedule\" class=\"col s12\">\n\n    <div class=\"card-panel\">\n      <h5 class=\"center-text\">Clients</h5>\n      <table class=\"responsive-table highlight striped centered\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Email </th>\n            <th>User ID</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let client of clients\">\n            <td>{{client.name}}</td>\n            <td>{{client.email}}</td>\n            <td>{{client.user_id}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',
    },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'aeroboticsApp';
    }
    ngAfterViewInit() {
        jQuery(document).ready(function () {
            // jQuery('#select').formSelect();
            jQuery('.dropdown-trigger').dropdown();
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



// import {HttpModule} from '@angular/http';





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core.service.ts":
/*!*********************************!*\
  !*** ./src/app/core.service.ts ***!
  \*********************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_models_clients_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/models/clients.model */ "./src/app/models/clients.model.ts");
/* harmony import */ var _app_models_scoutMissions_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/models/scoutMissions.module */ "./src/app/models/scoutMissions.module.ts");







// import { RequestOptions} from 'https';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Authorization': '1536660107LWZ2JGK17J72HR4O5NU53FBBSLSMRB' })
};
let CoreService = class CoreService {
    constructor(http) {
        this.http = http;
        this.clientsEndpoint = 'https://sherlock.aerobotics.io/developers/clients/';
        this.scoutMissionEndpoint = 'https://sherlock.aerobotics.io/developers/scoutmissions/';
    }
    handleError(error) {
        if (error instanceof Response) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json()['error'] || 'API server error');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'API server error');
    }
    //Clients Call - get all clients
    getClients() {
        const url = `${this.clientsEndpoint}`;
        this.observable = this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.observable = null;
            this.clients = new _app_models_clients_model__WEBPACK_IMPORTED_MODULE_5__["Clients"](response);
            return this.clients;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.handleError(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        return this.observable;
    }
    //Get Scout Missions
    getScoutMissions() {
        const url = `${this.scoutMissionEndpoint}`;
        this.observable = this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.observable = null;
            this.scoutMissions = new _app_models_scoutMissions_module__WEBPACK_IMPORTED_MODULE_6__["ScoutMissions"](response);
            return this.scoutMissions;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.handleError(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        return this.observable;
    }
};
CoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], CoreService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core.service */ "./src/app/core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DashboardComponent = class DashboardComponent {
    constructor(coreService, activatedRoute, _http, changeDetectorRefs) {
        this.coreService = coreService;
        this.activatedRoute = activatedRoute;
        this._http = _http;
        this.changeDetectorRefs = changeDetectorRefs;
        this.clients = [];
        this.scoutMissions = [];
        this.setClients();
        this.setScoutMissions();
        console.log(this.selectedClient);
    }
    setClients() {
        this.clients = [];
        this.coreService.getClients().subscribe(response => {
            this.clients = response.data.results;
            console.log(this.clients);
            setTimeout(function () {
                jQuery('select').material_select();
            }, 200);
        }, err => {
            console.log('Error fetching clients' + this.clients);
        });
    }
    setScoutMissions() {
        this.scoutMissions = [];
        this.coreService.getScoutMissions().subscribe(res => {
            this.scoutMissions = res.data.results;
            console.log(this.scoutMissions);
        }, err => {
            console.log('Error fetching Scout Missions' + this.scoutMissions);
        });
    }
    onSelectedClientChange(val) {
        debugger;
        // this.selectedClient.push(i);
        console.log(val);
    }
    selectedScoutMissions(missionID, workerID, i) {
        debugger;
        // this.selectedClient.push(i);
        console.log(i);
    }
    ngOnInit() {
        jQuery(document).ready(function () {
            jQuery('.tabs').tabs();
        });
        // this.selectedClient = 26255;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/models/clients.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/clients.model.ts ***!
  \*****************************************/
/*! exports provided: Clients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clients", function() { return Clients; });
class Clients {
    constructor(json) {
        this.data = [];
        this.data = json;
    }
}
Clients.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/app/models/scoutMissions.module.ts":
/*!************************************************!*\
  !*** ./src/app/models/scoutMissions.module.ts ***!
  \************************************************/
/*! exports provided: ScoutMissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoutMissions", function() { return ScoutMissions; });
class ScoutMissions {
    constructor(json) {
        this.data = [];
        this.data = json;
    }
}
ScoutMissions.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dsjankelow/Documents/dev/aeroboticsWebApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map