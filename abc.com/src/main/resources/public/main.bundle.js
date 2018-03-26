webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Projectlist/projectlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".big-wrpr{\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex;\r\n\tmargin-top:0%;\r\n\tmargin-left:0%;\r\n    margin-right:0%;\r\n    BACKGROUND-COLOR:WHITE; \r\n    height:14em;\r\n}\r\n.section-wrpr{\r\n\tmargin-bottom:3%;\r\n}\r\n.someTable th{\r\n\tpadding:15px;\r\n}\r\n.someTable td{\r\n\tpadding:15px;\r\n\tfont-weight:600;\r\n}\r\n\r\n.someTable tbody tr{\r\n\tborder-bottom:1px solid #e7ebea;\r\n}\r\n\r\n.someTable table tbody tr:nth-child(odd) {\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\n.someTable table tbody tr:nth-child(even) {\r\n\tbackground: #f7f7f7;\r\n}\r\n.box-wrpr{\r\n    font-size:6em;\r\n\tbox-shadow: 2px 0px 0px #ccc;\r\n\twidth:150px;\r\n\theight:130px;\r\n\t/* border-radius:6px; */\r\n\ttext-align:center;\r\n\t-ms-flex-line-pack:center;\r\n\t    align-content:center;\r\n\tmargin:auto;\r\n\tposition: relative;\r\n}\r\n\r\n.box-wrpr:hover{\r\n\tbox-shadow: 0 3px 8px #ccc;\r\n\ttop: -1px;\r\n}\r\n\r\n.content-wrpr{\r\n    \r\n\twidth:100%;\r\n}\r\n.box-label{\r\n\tmargin-top:10%;\r\n\ttext-align:center;\r\n\twidth:100%\r\n}\r\n.someTable thead{\r\n\tbackground-color:#f1f7f7;\r\n}\r\n.appImg{\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex;\r\n\tpadding:25%;\r\n\tcursor: pointer;\r\n}\r\n.pointer{\r\n\tcursor: pointer;\r\n}\r\n.bold{\r\n    font-weight:bold;\r\n    font-size:230%;\r\n    padding:2em;\r\n}\r\n\r\n.marginTop40{\r\n\tmargin-top:40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Projectlist/projectlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded\"  style=\"background-color:white;\">\r\n<div class=\"section-wrpr\"  >\r\n  <div class=\"section-label bold box-border-bottom\" style=\"BACKGROUND-COLOR:WHITE\">  Project:\r\n     \r\n              projectName \r\n          \r\n  </div>\r\n  <hr style=\"margin-top: -58px;\">\r\n  <div class=\"big-wrpr\" >\r\n    \r\n    <div class=\"content-wrpr\">\r\n        <label class=\"box-label\" for=\"\">Name</label>\r\n      <div class=\" box-wrpr text-center\"></div>\r\n    </div>\r\n    <div class=\"content-wrpr\">\r\n         <label class=\"box-label\" for=\"\">Date of Establishment</label>\r\n      <div class=\" box-wrpr text-center\"></div>\r\n    </div>\r\n    <div class=\"content-wrpr\">\r\n       <label class=\"box-label\" for=\"\">Main Address</label>\r\n       <div class=\" box-wrpr text-center\"></div>\r\n    </div>\r\n    <div class=\"content-wrpr\">\r\n       <label class=\"box-label\" for=\"\">Projects</label>\r\n       <div class=\" box-wrpr text-center\"></div>\r\n    </div>\r\n    <div class=\"content-wrpr\">\r\n        <label class=\"box-label\" for=\"\">Employees</label>\r\n        <div class=\" box-wrpr text-center\"></div>\r\n    </div>\r\n    <div class=\"content-wrpr\">\r\n      <label class=\"box-label\" for=\"\">Phone Number</label>\r\n      <div class=\" box-wrpr text-center\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"column\" style=\"margin-top:2%;\">\r\n    <!-- <div class = \"glyphicon glyphicon-cog\"></div> -->\r\n    <a href=\"#/meeting\" class=\"btn btn-primary round pull-left\" role=\"button\">Meeting</a>\r\n    <!-- <a href=\"#/meeting\" class=\"btn btn-primary round pull-center\" role=\"button\" style=\"margin-left: 33%;\">Change Request</a>\r\n    <a href=\"#/meeting\" class=\"btn btn-primary round pull-right\" role=\"button\">Quality Control</a> -->\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n<hr>\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h6 class=\"panel-title\">\r\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\r\n      + Documents\r\n      </a>\r\n    </h6>\r\n  </div>\r\n  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"panel-body\"><document></document></div>       \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h6 class=\"panel-title\">\r\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo0\">\r\n      + BoQ\r\n      </a>\r\n    </h6>\r\n  </div>\r\n  <div id=\"collapseTwo0\" class=\"panel-collapse collapse\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"panel-body\"> <boq></boq>  </div>       \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h6 class=\"panel-title\">\r\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree0\">\r\n        + Project Directory\r\n        </a>\r\n      </h6>\r\n    </div>\r\n    <div id=\"collapseThree0\" class=\"panel-collapse collapse\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"panel-body\"> <employee></employee>  </div>       \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h6 class=\"panel-title\">\r\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour0\">\r\n      + Drawing\r\n      </a>\r\n    </h6>\r\n  </div>\r\n  <div id=\"collapseFour0\" class=\"panel-collapse collapse\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"panel-body\"> <document></document>  </div>       \r\n    </div>\r\n  </div>\r\n</div>\r\n</div>  \r\n\r\n\r\n  \r\n\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/Projectlist/projectlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// declare var jQuery:any;
var projectState = { name: 'project', url: '/project', component: __WEBPACK_IMPORTED_MODULE_3__project_project_component__["a" /* ProjectComponent */] };
var ProjectListComponent = (function () {
    function ProjectListComponent(projectService, projects, stateService) {
        this.projectService = projectService;
        this.projects = projects;
        this.stateService = stateService;
    }
    ProjectListComponent.prototype.ngOnInit = function () { };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'projectlist',
        template: __webpack_require__("../../../../../src/app/Projectlist/projectlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Projectlist/projectlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__project_projects__["a" /* Projects */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["StateService"]) === "function" && _c || Object])
], ProjectListComponent);

var _a, _b, _c;
//# sourceMappingURL=projectlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/Projectlist/projectlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectlist_component__ = __webpack_require__("../../../../../src/app/Projectlist/projectlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__document_document_module__ = __webpack_require__("../../../../../src/app/document/document.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boq_boq_module__ = __webpack_require__("../../../../../src/app/boq/boq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_employee_module__ = __webpack_require__("../../../../../src/app/employee/employee.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__meeting_meeting_module__ = __webpack_require__("../../../../../src/app/meeting/meeting.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProjectListModule = (function () {
    function ProjectListModule() {
    }
    return ProjectListModule;
}());
ProjectListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__projectlist_component__["a" /* ProjectListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__document_document_module__["a" /* DocumentModule */],
            __WEBPACK_IMPORTED_MODULE_5__boq_boq_module__["a" /* BoQModule */],
            __WEBPACK_IMPORTED_MODULE_6__employee_employee_module__["a" /* EmployeeModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_9__meeting_meeting_module__["a" /* MeetingModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__projectlist_component__["a" /* ProjectListComponent */]],
        providers: [],
        bootstrap: []
    })
], ProjectListModule);

//# sourceMappingURL=projectlist.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<home class=\"app-root\"></home>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-root {\n  background: #ef00ef; }\n\n.flex-container {\n  /* Safari */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__globals_globals__["a" /* Globals */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/boq/boq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-boq rounded\"><br>\r\n  <div class=\"column\">\r\n    <div class = \"glyphicon glyphicon-cog\">MANAGE BOQS</div>\r\n    <a class=\"btn btn-primary round pull-right\" role=\"button\" (click)=\"exportAsPdf()\">Export BoQ</a>\r\n    <a href=\"#/new-boq\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add BoQ</a>\r\n    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n\r\n<div class=\"container-fluid digi-boq rounded\">\r\n <br>\r\n  <div id=\"boqs\">\r\n\r\n    <table class=\"table\" id=\"tableboq\">\r\n      <thead>\r\n        <tr>\r\n          <th>BoQ Id</th>\r\n          <th>Project Name</th>\r\n          <th>Department Name</th>\r\n          <th>Current Version</th>\r\n          <th>Total Versions</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let boq of boqs.boqs | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: boqs.totalItems, id:'server'} \">\r\n          <td class=\"table-cell\">{{ boq.boqNumber }}</td>\r\n          <td class=\"table-cell\">{{ boq.projectName }}</td>\r\n          <td class=\"table-cell\">{{ boq.boQDepartmentName }}</td>\r\n          <td class=\"table-cell\">{{ boq.version }}</td>\r\n          <td class=\"table-cell\">{{ boq.totalVersions }}</td>\r\n          <td class=\"table-cell\">\r\n\r\n            <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n              <div>\r\n                <span>\r\n                  <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n                </span>\r\n                <div class=\"tooltip-text-regisnation\">View</div>\r\n              </div>\r\n            </tooltip-content>\r\n            <button class=\"btn-primary\" (click)=\"getBoQ(boq)\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n                <a href=\"#/product\" (click)=\"setSelectedBoQNumber(boq.boqNumber)\">\r\n              <img src=\"assets/view.svg\" style=\"width:30px\"></a>\r\n            </button>\r\n\r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n              <div>\r\n                <span>\r\n                  <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n                </span>\r\n                <div class=\"tooltip-text-regisnation\">Delete</div>\r\n              </div>\r\n            </tooltip-content>\r\n            <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getBoQ(boq)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">Delete\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteBoQ(currentBoQId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/boq/boq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-boq th {\n  background-color: #efefef; }\n\n.digi-boq td {\n  background-color: white; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/boq/boq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoQComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boq_service__ = __webpack_require__("../../../../../src/app/boq/boq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boqs__ = __webpack_require__("../../../../../src/app/boq/boqs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoQComponent = (function () {
    function BoQComponent(boqService, boqs, element, queryParamsService) {
        this.boqService = boqService;
        this.boqs = boqs;
        this.element = element;
        this.queryParamsService = queryParamsService;
        this.loading = false;
        this.currentPage = 1;
        this.getBoQs(null);
    }
    BoQComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getBoQs(queryParam);
        });
    };
    BoQComponent.prototype.getBoQs = function (queryParams) {
        this.boqService.getBoQs(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    BoQComponent.prototype.deleteBoQ = function (id) {
        // console.log("Id "+ id);
        this.boqService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    BoQComponent.prototype.getBoQ = function (boq) {
        this.currentBoQId = boq.getId();
        // console.log("In BoQ" + boq.getBoQNumber());
        this.currentBoQNumber = boq.getBoQNumber();
    };
    BoQComponent.prototype.exportAsPdf = function () {
        var pdf = new __WEBPACK_IMPORTED_MODULE_4_jspdf__('p', 'pt', 'a4');
        var elementHandler = {
            '#Export': function (element, renderer) {
                return true;
            }
        };
        pdf.setFillColor(204, 204, 204, 0);
        var options = {
            pagesplit: true,
            'elementHandlers': elementHandler,
        };
        pdf.addHTML(document.getElementById('tableboq'), 5, 5, options, function () {
            pdf.save('web.pdf');
        });
    };
    BoQComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    BoQComponent.prototype.setSelectedBoQNumber = function (boQNumber) {
        this.boqService.setSelectedBoQNumber(boQNumber);
        // console.log("Selected BoQNumber " + boQNumber);
    };
    BoQComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return BoQComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('currentBoQNumber'),
    __metadata("design:type", Object)
], BoQComponent.prototype, "currentBoQNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BoQComponent.prototype, "el", void 0);
BoQComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'boq',
        template: __webpack_require__("../../../../../src/app/boq/boq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/boq/boq.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__boq_service__["a" /* BoQService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boq_service__["a" /* BoQService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__boqs__["a" /* BoQs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__boqs__["a" /* BoQs */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _e || Object])
], BoQComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=boq.component.js.map

/***/ }),

/***/ "../../../../../src/app/boq/boq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoQModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boq_component__ = __webpack_require__("../../../../../src/app/boq/boq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boq_service__ = __webpack_require__("../../../../../src/app/boq/boq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boqs__ = __webpack_require__("../../../../../src/app/boq/boqs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BoQModule = (function () {
    function BoQModule() {
    }
    return BoQModule;
}());
BoQModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__boq_component__["a" /* BoQComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_tooltip__["TooltipModule"]
            //    NewBoQModule
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__boq_component__["a" /* BoQComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__boqs__["a" /* BoQs */],
            __WEBPACK_IMPORTED_MODULE_2__boq_service__["a" /* BoQService */]
        ],
        bootstrap: []
    })
], BoQModule);

//# sourceMappingURL=boq.module.js.map

/***/ }),

/***/ "../../../../../src/app/boq/boq.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoQService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boq__ = __webpack_require__("../../../../../src/app/boq/boq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boqs__ = __webpack_require__("../../../../../src/app/boq/boqs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BoQService = (function () {
    function BoQService(http, boqs, globals) {
        this.http = http;
        this.boqs = boqs;
        this.globals = globals;
        this.boqUrl = this.globals.getBackendUrl() + 'boq/';
    }
    BoQService.prototype.setSelectedBoQNumber = function (selectedBoQNumber) {
        this.selectedBoQNumber = selectedBoQNumber;
    };
    BoQService.prototype.getSelectedBoQNumber = function () {
        return this.selectedBoQNumber;
    };
    BoQService.prototype.getBoQs = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.boqUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var boqs = new Array();
            for (i = 0; i < response.length; i++) {
                var boq = new __WEBPACK_IMPORTED_MODULE_3__boq__["a" /* BoQ */]();
                boq.setId(response[i].id);
                boq.setProjectName(response[i].projectName);
                boq.setBoQDepartmentName(response[i].departmentName);
                boq.setVersion(response[i].version);
                boq.setTotalVersions(response[i].totalVersions);
                boq.setBoQNumber(response[i].boqNumber);
                boqs.push(boq);
            }
            _this.boqs.setBoQs(boqs);
            _this.boqs.setTotalItems(res1.totalElements);
            return true;
        });
    };
    BoQService.prototype.save = function (boq) {
        var _this = this;
        var endPoint = this.boqUrl + boq.getBoQDepartmentId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, boq)
            .map(function (res) {
            var res1 = res.json();
            boq.setId(res1.id);
            _this.boqs.addBoQ(boq);
            return res1.id;
        });
    };
    BoQService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.boqUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.boqs.deleteBoQ(res1.response);
        });
    };
    BoQService.prototype.update = function (boq) {
        var endPoint = this.boqUrl + boq.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return BoQService;
}());
BoQService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__boqs__["a" /* BoQs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__boqs__["a" /* BoQs */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], BoQService);

var _a, _b, _c;
//# sourceMappingURL=boq.service.js.map

/***/ }),

/***/ "../../../../../src/app/boq/boq.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoQ; });
var BoQ = (function () {
    function BoQ() {
    }
    BoQ.prototype.setId = function (id) {
        this.id = id;
    };
    BoQ.prototype.getId = function () {
        return this.id;
    };
    BoQ.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    BoQ.prototype.getProjectName = function () {
        return this.projectName;
    };
    BoQ.prototype.setBoQDepartmentName = function (boQDepartmentName) {
        this.boQDepartmentName = boQDepartmentName;
    };
    BoQ.prototype.getBoQDepartmentName = function () {
        return this.boQDepartmentName;
    };
    BoQ.prototype.setBoQDepartmentId = function (boQDepartmentId) {
        this.boQDepartmentId = boQDepartmentId;
    };
    BoQ.prototype.getBoQDepartmentId = function () {
        return this.boQDepartmentId;
    };
    BoQ.prototype.setVersion = function (version) {
        this.version = version;
    };
    BoQ.prototype.getVersion = function () {
        return this.version;
    };
    BoQ.prototype.setTotalVersions = function (totalVersions) {
        this.totalVersions = totalVersions;
    };
    BoQ.prototype.getTotalVersions = function () {
        return this.totalVersions;
    };
    BoQ.prototype.setBoQNumber = function (boqNumber) {
        this.boqNumber = boqNumber;
    };
    BoQ.prototype.getBoQNumber = function () {
        return this.boqNumber;
    };
    return BoQ;
}());

//# sourceMappingURL=boq.js.map

/***/ }),

/***/ "../../../../../src/app/boq/boqs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoQs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BoQs = (function () {
    function BoQs() {
        this.boqs = new Array();
    }
    BoQs.prototype.setBoQs = function (boqs) {
        this.boqs = boqs;
    };
    BoQs.prototype.getBoQs = function () {
        return this.boqs;
    };
    BoQs.prototype.deleteBoQ = function (boqId) {
        var boqFound = this.boqs.find(function (boq) { return boqId === boq.getId(); });
        var index = this.boqs.indexOf(boqFound);
        if (index !== -1) {
            this.boqs.splice(index, 1);
            this.totalItems--;
        }
    };
    BoQs.prototype.addBoQ = function (boq) {
        this.boqs.push(boq);
        this.totalItems++;
    };
    BoQs.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    BoQs.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return BoQs;
}());
BoQs = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BoQs);

//# sourceMappingURL=boqs.js.map

/***/ }),

/***/ "../../../../../src/app/boq/new/new-boq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n          <div class=\"glyphicon glyphicon-cog\">ADD BOQ</div>\r\n    </div>\r\n    <br>\r\n</div>\r\n\r\n<hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid rounded\" style=\"background-color:white;  width:35%;\">\r\n \t<!-- <div class = \"glyphicon glyphicon-cog\">ADD BOQ</div> -->\r\n      <div >\r\n        <form>\r\n          <div class=\"form-group\" >\r\n            <label for=\"department-option\" class=\"form-control-label\">BoQ Departments:</label>\r\n            <select id=\"department-option\" class=\"form-control\"   [(ngModel)]=\"boQDepartmentId\" name=\"boQDepartments\">\r\n              <option *ngFor=\"let department of availableDepartments\" [value]=\"department.id\">\r\n                {{ department.departmentName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n\t        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n\t        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewBoQ()\" >Add</button>\r\n      \t  </div>\r\n        </form>\r\n      </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/boq/new/new-boq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBoQComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boq__ = __webpack_require__("../../../../../src/app/boq/boq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boqs__ = __webpack_require__("../../../../../src/app/boq/boqs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boq_service__ = __webpack_require__("../../../../../src/app/boq/boq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boq_component__ = __webpack_require__("../../../../../src/app/boq/boq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__department_departments__ = __webpack_require__("../../../../../src/app/department/departments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__department_department_service__ = __webpack_require__("../../../../../src/app/department/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var boqState = { name: 'boq', url: '/boq', component: __WEBPACK_IMPORTED_MODULE_3__boq_component__["a" /* BoQComponent */] };
var NewBoQComponent = (function () {
    function NewBoQComponent(departmentService, boqService, boqs, departments, stateService) {
        this.departmentService = departmentService;
        this.boqService = boqService;
        this.boqs = boqs;
        this.departments = departments;
        this.stateService = stateService;
    }
    NewBoQComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    NewBoQComponent.prototype.addNewBoQ = function () {
        var _this = this;
        var boq = new __WEBPACK_IMPORTED_MODULE_0__boq__["a" /* BoQ */]();
        boq.setBoQDepartmentId(this.boQDepartmentId);
        this.boqService.save(boq).subscribe(function (data) {
            console.log(data);
            // boq.setId(data);
            //this.boqs.addBoQ(boq);
            _this.stateService.go('boq');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewBoQComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments(null).subscribe(function (data) {
            _this.availableDepartments = _this.departments.getDepartments();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewBoQComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewBoQComponent;
}());
NewBoQComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'new-boq',
        template: __webpack_require__("../../../../../src/app/boq/new/new-boq.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__department_department_service__["a" /* DepartmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__department_department_service__["a" /* DepartmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__boq_service__["a" /* BoQService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__boq_service__["a" /* BoQService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__boqs__["a" /* BoQs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boqs__["a" /* BoQs */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__department_departments__["a" /* Departments */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__department_departments__["a" /* Departments */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewBoQComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-boq.component.js.map

/***/ }),

/***/ "../../../../../src/app/boq/new/new-boq.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBoQModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_boq_component__ = __webpack_require__("../../../../../src/app/boq/new/new-boq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewBoQModule = (function () {
    function NewBoQModule() {
    }
    return NewBoQModule;
}());
NewBoQModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_boq_component__["a" /* NewBoQComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_boq_component__["a" /* NewBoQComponent */]],
        providers: [],
        bootstrap: []
    })
], NewBoQModule);

//# sourceMappingURL=new-boq.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Categories = (function () {
    function Categories() {
        this.categories = new Array();
    }
    Categories.prototype.setCategories = function (categories) {
        this.categories = categories;
    };
    Categories.prototype.getCategories = function () {
        return this.categories;
    };
    Categories.prototype.deleteCategory = function (categoryId) {
        var categoryFound = this.categories.find(function (category) { return categoryId === category.getId(); });
        var index = this.categories.indexOf(categoryFound);
        if (index !== -1) {
            this.categories.splice(index, 1);
            this.totalItems--;
        }
    };
    Categories.prototype.addCategory = function (category) {
        this.categories.push(category);
        this.totalItems++;
    };
    Categories.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Categories.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Categories;
}());
Categories = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Categories);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-category rounded\">\r\n  <br>\r\n    <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">MANAGE CATEGORIES</div>\r\n      <a href=\"#/new-category\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Category</a>\r\n    </div>\r\n    <br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n<div class=\"container-fluid digi-category rounded\">\r\n  <br>\r\n  <table class=\"table \">\r\n    <thead>\r\n      <tr>\r\n        <th>Category Name</th>\r\n        <th>Description</th>\r\n        <th>SubCategories</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories.categories | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: categories.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\">{{ category.name }}</td>\r\n        <td class=\"table-cell\">{{ category.description }}</td>\r\n        <td class=\"table-cell\">{{ category.subCategories }}</td>\r\n        <td class=\"table-cell\">\r\n          \r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Edit</div>\r\n                </div>\r\n              </tooltip-content> \r\n          <button  class=\"btn-primary\" (click)=\"editCategory(category)\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n              <img src=\"assets/edit.svg\" style=\"width:30px\" >\r\n            </button>\r\n\r\n\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getCategory(category)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteCategory(currentCategoryId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-category th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories__ = __webpack_require__("../../../../../src/app/category/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subcategory_subcategories__ = __webpack_require__("../../../../../src/app/subcategory/subcategories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subcategory_subcategory_service__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = (function () {
    function CategoryComponent(categoryService, queryParamsService, categories, subcategories, subcategoryService) {
        this.categoryService = categoryService;
        this.queryParamsService = queryParamsService;
        this.categories = categories;
        this.subcategories = subcategories;
        this.subcategoryService = subcategoryService;
        this.currentPage = 1;
        this.getCategories(null);
        this.getSubcategories();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageMode = "viewMode";
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getCategories(queryParam);
        });
    };
    CategoryComponent.prototype.getSubcategories = function () {
        var _this = this;
        this.subcategoryService.getSubcategories(null).subscribe(function (data) {
            _this.availableSubcat = _this.subcategories.getSubcategories();
        }, function (error) {
            window.alert(error._body);
        });
    };
    CategoryComponent.prototype.getCategories = function (queryParams) {
        this.categoryService.getCategories(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    //  public editCategory(category: Category) {
    //   this.pageMode = "editMode";
    //  }
    CategoryComponent.prototype.saveCategory = function (category) {
        this.pageMode = "viewMode";
    };
    CategoryComponent.prototype.cancelEdit = function () {
        this.pageMode = "viewMode";
    };
    CategoryComponent.prototype.deleteCategory = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.categoryService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    CategoryComponent.prototype.getCategory = function (category) {
        this.currentCategoryId = category.getId();
    };
    CategoryComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'category',
        template: __webpack_require__("../../../../../src/app/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/category.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* Categories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* Categories */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__subcategory_subcategories__["a" /* Subcategories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__subcategory_subcategories__["a" /* Subcategories */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__subcategory_subcategory_service__["a" /* SubcategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__subcategory_subcategory_service__["a" /* SubcategoryService */]) === "function" && _e || Object])
], CategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories__ = __webpack_require__("../../../../../src/app/category/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {NewCategoryComponent} from './new/new-category.component';



var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__category_component__["a" /* CategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__category_component__["a" /* CategoryComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__categories__["a" /* Categories */],
            __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]
        ],
        bootstrap: []
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__("../../../../../src/app/category/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories__ = __webpack_require__("../../../../../src/app/category/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryService = (function () {
    function CategoryService(http, categories, globals) {
        this.http = http;
        this.categories = categories;
        this.globals = globals;
        this.categoryUrl = this.globals.getBackendUrl() + 'category/';
    }
    CategoryService.prototype.getCategories = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.categoryUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var categories = new Array();
            for (i = 0; i < response.length; i++) {
                var category = new __WEBPACK_IMPORTED_MODULE_3__category__["a" /* Category */]();
                category.setId(response[i].id);
                category.setName(response[i].name);
                category.setDescription(response[i].description);
                category.setSubCategories(response[i].subCatNames);
                categories.push(category);
            }
            _this.categories.setCategories(categories);
            _this.categories.setTotalItems(res1.totalElements);
            return true;
        });
    };
    CategoryService.prototype.save = function (category) {
        var _this = this;
        var endPoint = this.categoryUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, category)
            .map(function (res) {
            var res1 = res.json();
            category.setId(res1.id);
            _this.categories.addCategory(category);
            return res1.id;
        });
    };
    CategoryService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.categoryUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.categories.deleteCategory(res1.response);
        });
    };
    CategoryService.prototype.getCategory = function (name) {
        this.getCategories(null).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body.errorMessage);
        });
        var i = 0;
        for (i = 0; i < this.categories.getTotalItems(); i++) {
            if (this.categories[i].getName() === name) {
                return this.categories[i].getId();
            }
        }
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* Categories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__categories__["a" /* Categories */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], CategoryService);

var _a, _b, _c;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category() {
    }
    Category.prototype.setId = function (id) {
        this.id = id;
    };
    Category.prototype.getId = function () {
        return this.id;
    };
    Category.prototype.setName = function (name) {
        this.name = name;
    };
    Category.prototype.getName = function () {
        return this.name;
    };
    Category.prototype.setDescription = function (description) {
        this.description = description;
    };
    Category.prototype.getDescription = function () {
        return this.description;
    };
    Category.prototype.setSubCategories = function (subCategories) {
        this.subCategories = subCategories;
    };
    Category.prototype.getSubCategories = function () {
        return this.subCategories;
    };
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/category/new/new-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD CATEGORY</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n  \r\n<div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n  <br>\r\n \t<div >\r\n        <form>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"category-name\" class=\"form-control-label\">Category Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"category-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"description\" class=\"form-control-label\">Description:</label>\r\n            <input type=\"textarea\" style=\"width: 100%;\" cols=\"50\" rows=\"7\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"first\">\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n\t        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewCategory()\" >Add</button>\r\n      \t  </div>\r\n        </form>\r\n      </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/category/new/new-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/new/new-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category__ = __webpack_require__("../../../../../src/app/category/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories__ = __webpack_require__("../../../../../src/app/category/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var categoryState = { name: 'category', url: '/category', component: __WEBPACK_IMPORTED_MODULE_3__category_component__["a" /* CategoryComponent */] };
var NewCategoryComponent = (function () {
    function NewCategoryComponent(categoryService, categories, stateService) {
        this.categoryService = categoryService;
        this.categories = categories;
        this.stateService = stateService;
    }
    NewCategoryComponent.prototype.ngOnInit = function () {
    };
    NewCategoryComponent.prototype.addNewCategory = function () {
        var _this = this;
        var category = new __WEBPACK_IMPORTED_MODULE_0__category__["a" /* Category */]();
        category.setName(this.name);
        category.setDescription(this.description);
        this.categoryService.save(category).subscribe(function (data) {
            //  console.log(data);
            _this.stateService.go('category');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewCategoryComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewCategoryComponent;
}());
NewCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'new-category',
        template: __webpack_require__("../../../../../src/app/category/new/new-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/new/new-category.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__categories__["a" /* Categories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__categories__["a" /* Categories */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["StateService"]) === "function" && _c || Object])
], NewCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=new-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/new/new-category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_category_component__ = __webpack_require__("../../../../../src/app/category/new/new-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewCategoryModule = (function () {
    function NewCategoryModule() {
    }
    return NewCategoryModule;
}());
NewCategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_category_component__["a" /* NewCategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_category_component__["a" /* NewCategoryComponent */]],
        providers: [],
        bootstrap: []
    })
], NewCategoryModule);

//# sourceMappingURL=new-category.module.js.map

/***/ }),

/***/ "../../../../../src/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-client rounded \"><br>\r\n  <div class=\"column\">\r\n    <div class = \"glyphicon glyphicon-cog\">MANAGE CLIENTS</div>\r\n    <a href=\"#/new-client\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Client</a>    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n\r\n<div class=\"container-fluid digi-client rounded\">\r\n  <br>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Client Name</th>\r\n        <th>Address</th>\r\n        <th>Client's Company</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let client of clients.clients | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: clients.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"client.name\" (input)=\"client.name=$event.target.textContent\">{{ client.name }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"client.address\" (input)=\"client.address=$event.target.textContent\">{{ client.address }}</td>\r\n        <td class=\"table-cell\">{{ client.companyName }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateClient(client)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n          \r\n          <tooltip-content #screeningOption2 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getClient(client)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption2\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteClient(currentClientId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/client/client.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-client th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__("../../../../../src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clients__ = __webpack_require__("../../../../../src/app/client/clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientComponent = (function () {
    function ClientComponent(clientService, clients, queryParamsService) {
        this.clientService = clientService;
        this.clients = clients;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getClients(null);
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getClients(queryParam);
        });
    };
    ClientComponent.prototype.getClients = function (queryParams) {
        this.clientService.getClients(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    ClientComponent.prototype.updateClient = function (client) {
        var _this = this;
        this.loading = true;
        this.clientService.update(client).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ClientComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    ClientComponent.prototype.deleteClient = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.clientService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    ClientComponent.prototype.getClient = function (client) {
        // this.currentSpecificationName = specification.getSpecificationName();
        this.currentClientId = client.getId();
    };
    ClientComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client',
        template: __webpack_require__("../../../../../src/app/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/client/client.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__clients__["a" /* Clients */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__clients__["a" /* Clients */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], ClientComponent);

var _a, _b, _c;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/client/client.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_component__ = __webpack_require__("../../../../../src/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__("../../../../../src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_client_module__ = __webpack_require__("../../../../../src/app/client/new/new-client.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients__ = __webpack_require__("../../../../../src/app/client/clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ClientModule = (function () {
    function ClientModule() {
    }
    return ClientModule;
}());
ClientModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__client_component__["a" /* ClientComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_client_module__["a" /* NewClientModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__client_component__["a" /* ClientComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__clients__["a" /* Clients */],
            __WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */]
        ],
        bootstrap: []
    })
], ClientModule);

//# sourceMappingURL=client.module.js.map

/***/ }),

/***/ "../../../../../src/app/client/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client__ = __webpack_require__("../../../../../src/app/client/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients__ = __webpack_require__("../../../../../src/app/client/clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientService = (function () {
    function ClientService(http, clients, globals) {
        this.http = http;
        this.clients = clients;
        this.globals = globals;
        this.clientUrl = this.globals.getBackendUrl() + 'client/';
    }
    ClientService.prototype.getClients = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.clientUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var clients = new Array();
            for (i = 0; i < response.length; i++) {
                var client = new __WEBPACK_IMPORTED_MODULE_3__client__["a" /* Client */]();
                client.setName(response[i].name);
                client.setAddress(response[i].address);
                client.setCompanyName(response[i].companyName);
                client.setProjectNames(response[i].projectNames);
                client.setId(response[i].id);
                clients.push(client);
            }
            _this.clients.setClients(clients);
            _this.clients.setTotalItems(res1.totalElements);
            return true;
        });
    };
    ClientService.prototype.save = function (client) {
        var _this = this;
        var endPoint = this.clientUrl + client.getCompanyId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, client)
            .map(function (res) {
            var res1 = res.json();
            client.setId(res1.id);
            _this.clients.addClient(client);
            return res1.id;
        });
    };
    ClientService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.clientUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.clients.deleteClient(res1.response);
        });
    };
    ClientService.prototype.update = function (client) {
        var endPoint = this.clientUrl + client.getId();
        // Returns response
        return this.http.patch(endPoint, client)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__clients__["a" /* Clients */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__clients__["a" /* Clients */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], ClientService);

var _a, _b, _c;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/client/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    Client.prototype.setId = function (id) {
        this.id = id;
    };
    Client.prototype.getId = function () {
        return this.id;
    };
    Client.prototype.setName = function (name) {
        this.name = name;
    };
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Client.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Client.prototype.setCompanyId = function (companyId) {
        this.companyId = companyId;
    };
    Client.prototype.getCompanyId = function () {
        return this.companyId;
    };
    Client.prototype.setAddress = function (address) {
        this.address = address;
    };
    Client.prototype.getAddress = function () {
        return this.address;
    };
    Client.prototype.setProjectNames = function (projectNames) {
        this.projectNames = projectNames;
    };
    Client.prototype.getProjectNames = function () {
        return this.projectNames;
    };
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/client/clients.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clients; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Clients = (function () {
    function Clients() {
        this.clients = new Array();
    }
    Clients.prototype.setClients = function (clients) {
        this.clients = clients;
    };
    Clients.prototype.getClients = function () {
        return this.clients;
    };
    Clients.prototype.deleteClient = function (clientId) {
        var clientFound = this.clients.find(function (client) { return clientId === client.getId(); });
        var index = this.clients.indexOf(clientFound);
        if (index !== -1) {
            this.clients.splice(index, 1);
            this.totalItems--;
        }
    };
    Clients.prototype.addClient = function (client) {
        this.clients.push(client);
        this.totalItems++;
    };
    Clients.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Clients.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Clients;
}());
Clients = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Clients);

//# sourceMappingURL=clients.js.map

/***/ }),

/***/ "../../../../../src/app/client/new/new-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n      \t<div class = \"glyphicon glyphicon-cog\">ADD CLIENT</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid rounded\" style=\"background-color:white;\" >\r\n<br>\r\n      <div>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"client-name\" class=\"form-control-label\">Client Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"client-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"address\" class=\"form-control-label\">Address:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"address\" name=\"first\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" >\r\n            <label for=\"company-option\" class=\"form-control-label\">Companies:</label>\r\n            <select id=\"company-option\" class=\"form-control\"   [(ngModel)]=\"companyId\" name=\"companies\">\r\n              <option *ngFor=\"let company of availableCompanies\" [value]=\"company.id\">\r\n                {{ company.companyName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewClient()\" >Add</button>\r\n      </div>\r\n\t</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/client/new/new-client.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-newclient th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n\n.hr {\n  margin-top: 3px;\n  margin-bottom: 0px;\n  border: 0;\n  border-top: 1px solid #eee; }\n\n.form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/client/new/new-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__("../../../../../src/app/client/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_service__ = __webpack_require__("../../../../../src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients__ = __webpack_require__("../../../../../src/app/client/clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_component__ = __webpack_require__("../../../../../src/app/client/client.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//declare var jQuery:any;
var clientState = { name: 'client', url: '/client', component: __WEBPACK_IMPORTED_MODULE_9__client_component__["a" /* ClientComponent */] };
var NewClientComponent = (function () {
    function NewClientComponent(clientService, companyService, projectService, projects, clients, companies, stateService) {
        this.clientService = clientService;
        this.companyService = companyService;
        this.projectService = projectService;
        this.projects = projects;
        this.clients = clients;
        this.companies = companies;
        this.stateService = stateService;
    }
    NewClientComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    NewClientComponent.prototype.addNewClient = function () {
        var _this = this;
        var client = new __WEBPACK_IMPORTED_MODULE_2__client__["a" /* Client */]();
        client.setName(this.name);
        client.setCompanyId(this.companyId);
        client.setAddress(this.address);
        this.clientService.save(client).subscribe(function (data) {
            // console.log(data);
            // client.setId(data);
            //this.clients.addClient(client);
            _this.stateService.go('client');
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewClientComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies(null).subscribe(function (data) {
            _this.availableCompanies = _this.companies.getCompanies();
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewClientComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewClientComponent;
}());
NewClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'new-client',
        template: __webpack_require__("../../../../../src/app/client/new/new-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/client/new/new-client.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__company_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__project_project_service__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__project_projects__["a" /* Projects */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__clients__["a" /* Clients */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__clients__["a" /* Clients */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__company_companies__["a" /* Companies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__company_companies__["a" /* Companies */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"]) === "function" && _g || Object])
], NewClientComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/client/new/new-client.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClientModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_client_component__ = __webpack_require__("../../../../../src/app/client/new/new-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewClientModule = (function () {
    function NewClientModule() {
    }
    return NewClientModule;
}());
NewClientModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_client_component__["a" /* NewClientComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_client_component__["a" /* NewClientComponent */]],
        providers: [],
        bootstrap: []
    })
], NewClientModule);

//# sourceMappingURL=new-client.module.js.map

/***/ }),

/***/ "../../../../../src/app/company/companies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Companies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Companies = (function () {
    function Companies() {
        this.companies = new Array();
    }
    Companies.prototype.setCompanies = function (companies) {
        this.companies = companies;
    };
    Companies.prototype.getCompanies = function () {
        return this.companies;
    };
    Companies.prototype.deleteCompany = function (companyId) {
        var companyFound = this.companies.find(function (company) { return companyId === company.getId(); });
        var index = this.companies.indexOf(companyFound);
        if (index !== -1) {
            this.companies.splice(index, 1);
            this.totalItems--;
        }
    };
    Companies.prototype.addCompany = function (company) {
        this.companies.push(company);
        this.totalItems++;
    };
    Companies.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Companies.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Companies;
}());
Companies = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Companies);

//# sourceMappingURL=companies.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-company rounded\" ><br>\r\n  <div class=\"column\">\r\n    <div class = \"glyphicon glyphicon-cog\">MANAGE COMPANY</div>\r\n    <a href=\"#/new-company\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Company</a>\r\n    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-company rounded\">\r\n  <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Company Name</th>\r\n        <th>Employee</th>\r\n        <th>Location</th>\r\n        <th >Email</th>\r\n        <th> Phone </th>\r\n        <th>No. of Offices</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let company of companies.companies| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: companies.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"company.companyName\" (input)=\"company.companyName=$event.target.textContent\">{{ company.companyName }}</td>\r\n        <td class=\"table-cell\" >{{ company.noOfEmployee }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"company.address\" (input)=\"company.address=$event.target.textContent\">{{ company.address }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"company.email\" (input)=\"company.email=$event.target.textContent\">{{ company.email }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"company.phone\" (input)=\"company.phone=$event.target.textContent\">{{ company.phone }}</td>\r\n        <td class=\"table-cell\" >{{ company.noOfoffice }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateCompany(company)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">View</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button class=\"btn-primary\" (click)=\"getCompany(company)\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\r\n            <img src=\"assets/view.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getCompany(company)\" data-toggle=\"modal\" data-target=\".bd1-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"big-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n\r\n                <div class=\"content-wrpr\">\r\n                  <label class=\"box-label\" style=\"font-size:20px\" for=\"\">Name :</label>\r\n                  <label class=\"box-label\">{{currentCompanyName }}</label>\r\n                </div>\r\n                <div class=\"content-wrpr\">\r\n                  <label class=\"box-label\" style=\"font-size:20px\" for=\"\">Main Address:</label>\r\n                  <label class=\" box-label\">{{currentCompanyAddress }}</label>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h6 class=\"panel-title\">\r\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\r\n                    + Office\r\n                  </a>\r\n                </h6>\r\n              </div>\r\n              <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"panel-body\">\r\n                    <office></office>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <h6 class=\"panel-title\">\r\n                  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo0\">\r\n                    + Employee\r\n                  </a>\r\n                </h6>\r\n              </div>\r\n              <div id=\"collapseTwo0\" class=\"panel-collapse collapse\">\r\n                <div class=\"panel-body\">\r\n                  <div class=\"panel-body\">\r\n                    <employee></employee>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd1-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteCompany(currentCompanyId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/company/company.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-company th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = (function () {
    function CompanyComponent(companyService, companies, queryParamsService) {
        this.companyService = companyService;
        this.companies = companies;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getCompanies(null);
    }
    CompanyComponent.prototype.getCompany = function (company) {
        this.currentCompanyId = company.getId();
        // console.log(company.getCompanyName());
        // console.log(company.getAddress());
        this.currentCompanyName = company.getCompanyName();
        this.currentCompanyAddress = company.getAddress();
    };
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getCompanies(queryParam);
        });
    };
    CompanyComponent.prototype.getCompanies = function (queryParams) {
        this.companyService.getCompanies(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    CompanyComponent.prototype.updateCompany = function (company) {
        var _this = this;
        this.loading = true;
        this.companyService.update(company).subscribe(function (data) {
            _this.loading = false;
        });
    };
    CompanyComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    CompanyComponent.prototype.deleteCompany = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.companyService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    CompanyComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    CompanyComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__companies__["a" /* Companies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__companies__["a" /* Companies */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], CompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_company_module__ = __webpack_require__("../../../../../src/app/company/new/new-company.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employee_employee_module__ = __webpack_require__("../../../../../src/app/employee/employee.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__office_office_module__ = __webpack_require__("../../../../../src/app/office/office.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import {CompanyListModule} from '../companylist/compnylist.module';


// import {NewOfficeModule} from '../office/new-office/new-office.module';

var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__company_component__["a" /* CompanyComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_company_module__["a" /* NewCompanyModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            // CompanyListModule,
            __WEBPACK_IMPORTED_MODULE_10__employee_employee_module__["a" /* EmployeeModule */],
            __WEBPACK_IMPORTED_MODULE_11__office_office_module__["a" /* OfficeModule */],
            // NewOfficeModule,
            __WEBPACK_IMPORTED_MODULE_12_ngx_tooltip__["TooltipModule"],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__company_component__["a" /* CompanyComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__companies__["a" /* Companies */],
            __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]],
        bootstrap: []
    })
], CompanyModule);

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company__ = __webpack_require__("../../../../../src/app/company/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyService = (function () {
    function CompanyService(http, companies, globals) {
        this.http = http;
        this.companies = companies;
        this.globals = globals;
        this.companyUrl = this.globals.getBackendUrl() + 'company/';
    }
    CompanyService.prototype.getCompanies = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.companyUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var companies = new Array();
            for (i = 0; i < response.length; i++) {
                var company = new __WEBPACK_IMPORTED_MODULE_3__company__["a" /* Company */]();
                company.setCompanyName(response[i].companyName);
                company.setAddress(response[i].address);
                company.setEmployeeNames(response[i].employeeNames);
                company.setClientNames(response[i].clientNames);
                company.setOfficeNames(response[i].officeNames);
                company.setId(response[i].id);
                company.setEmail(response[i].email);
                company.setPhone(response[i].phone);
                company.setNoOfEmployee(response[i].noOfEmployee);
                company.setNoofOffices(response[i].noOfoffice);
                companies.push(company);
            }
            _this.companies.setCompanies(companies);
            _this.companies.setTotalItems(res1.totalElements);
            return true;
        });
    };
    CompanyService.prototype.save = function (company) {
        var _this = this;
        var endPoint = this.companyUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, company)
            .map(function (res) {
            var res1 = res.json();
            company.setId(res1.id);
            _this.companies.addCompany(company);
            return res1.id;
        });
    };
    CompanyService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.companyUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.companies.deleteCompany(res1.response);
        });
    };
    CompanyService.prototype.update = function (company) {
        var endPoint = this.companyUrl + company.getId();
        // Returns response
        return this.http.patch(endPoint, company)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__companies__["a" /* Companies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__companies__["a" /* Companies */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], CompanyService);

var _a, _b, _c;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
    }
    Company.prototype.setId = function (id) {
        this.id = id;
    };
    Company.prototype.getId = function () {
        return this.id;
    };
    Company.prototype.setEmail = function (email) {
        this.email = email;
    };
    Company.prototype.getEmail = function () {
        return this.email;
    };
    Company.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    Company.prototype.getPhone = function () {
        return this.phone;
    };
    Company.prototype.setAddress = function (address) {
        this.address = address;
    };
    Company.prototype.getAddress = function () {
        return this.address;
    };
    Company.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Company.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Company.prototype.setEmployeeNames = function (employeeNames) {
        this.employeeNames = employeeNames;
    };
    Company.prototype.getEmployeeNames = function () {
        return this.employeeNames;
    };
    Company.prototype.setClientNames = function (clientNames) {
        this.clientNames = clientNames;
    };
    Company.prototype.getClientNames = function () {
        return this.clientNames;
    };
    Company.prototype.setOfficeNames = function (officeNames) {
        this.officeNames = officeNames;
    };
    Company.prototype.getOfficeNames = function () {
        return this.officeNames;
    };
    Company.prototype.setNoofOffices = function (noOfoffice) {
        this.noOfoffice = noOfoffice;
    };
    Company.prototype.getNoOfoffice = function () {
        return this.noOfoffice;
    };
    Company.prototype.setNoOfEmployee = function (noOfEmployee) {
        this.noOfEmployee = noOfEmployee;
    };
    Company.prototype.getNoOfEmployee = function () {
        return this.noOfEmployee;
    };
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ "../../../../../src/app/company/new/new-company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">ADD COMPANY</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n\r\n<div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n  <br>\r\n  <div>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"company-name\" class=\"form-control-label\">Company Name:</label>\r\n        <br>\r\n        <input type=\"text\" class=\"form-control\" id=\"company-name\" [(ngModel)]=\"companyName\" name=\"first\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"address\" class=\"form-control-label\">Address:</label>\r\n        <br>\r\n        <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"address\" name=\"first\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label\">Contact:</label>\r\n        <br>\r\n        <div class=\"form-group\">\r\n          <form>\r\n            <div class=\"form-row\">\r\n              <div class=\"col-7\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"email\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"number\" maxlength=\"10\" class=\"form-control\" placeholder=\"phone\" id=\"phone\" [(ngModel)]=\"phone\" name=\"phone\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewCompany()\">Add</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/company/new/new-company.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/new/new-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company__ = __webpack_require__("../../../../../src/app/company/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var companyState = { name: 'company', url: '/company', component: __WEBPACK_IMPORTED_MODULE_4__company_component__["a" /* CompanyComponent */] };
var NewCompanyComponent = (function () {
    function NewCompanyComponent(companyService, companies, stateService) {
        this.companyService = companyService;
        this.companies = companies;
        this.stateService = stateService;
    }
    NewCompanyComponent.prototype.ngOnInit = function () {
    };
    NewCompanyComponent.prototype.addNewCompany = function () {
        var _this = this;
        var company = new __WEBPACK_IMPORTED_MODULE_0__company__["a" /* Company */]();
        company.setCompanyName(this.companyName);
        company.setAddress(this.address);
        company.setEmail(this.email);
        company.setPhone(this.phone);
        // console.log("Contact "+ this.email + "phone "+ this.phone );
        this.companyService.save(company).subscribe(function (data) {
            // console.log(data);
            // company.setId(data);
            // this.companies.addCompany(company);
            _this.stateService.go('company');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewCompanyComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewCompanyComponent;
}());
NewCompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'new-company',
        template: __webpack_require__("../../../../../src/app/company/new/new-company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/new/new-company.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__companies__["a" /* Companies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__companies__["a" /* Companies */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__uirouter_angular__["StateService"]) === "function" && _c || Object])
], NewCompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=new-company.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/new/new-company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_company_component__ = __webpack_require__("../../../../../src/app/company/new/new-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewCompanyModule = (function () {
    function NewCompanyModule() {
    }
    return NewCompanyModule;
}());
NewCompanyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_company_component__["a" /* NewCompanyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_company_component__["a" /* NewCompanyComponent */]],
        providers: [],
        bootstrap: []
    })
], NewCompanyModule);

//# sourceMappingURL=new-company.module.js.map

/***/ }),

/***/ "../../../../../src/app/department/department.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded\" ><br>\r\n  <div class=\"column\">\r\n    <div class = \"glyphicon glyphicon-cog\">MANAGE DEPARTMENTS</div>\r\n    <a href=\"#/new-department\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Department</a>\r\n  </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-department rounded \" >\r\n<br>\r\n<nav class=\"navbar\">\r\n  <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\" >\r\n</nav>\r\n<table class=\"table \">\r\n  <thead>\r\n  <tr>\r\n    <th>Department Name</th>\r\n    <th>Project Name</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let department of departments.departments| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: departments.totalItems, id:'server'} \">\r\n        <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"department.departmentName\" (input)=\"department.departmentName=$event.target.textContent\">{{ department.departmentName}}</td>\r\n        <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"department.projectName\" (input)=\"department.projectName=$event.target.textContent\">{{ department.projectName }}</td>\r\n         <td class = \"table-cell\">\r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Edit</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <button [disabled]=\"!isValid\" class=\"btn-primary\" (click) = \"updateDepartment(department)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\"></button> \r\n            <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Delete</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <!-- <button style=\"background-color:red;\"><img src=\"assets/delete.svg\" (click) = \"deleteDepartment(department)\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\"></button> -->\r\n            <button style=\"background-color:red;\" class=\"btn-primary\"  (click) = \"getDepartment(department)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n            </button>\r\n          </td>\r\n     </tr>\r\n  </tbody>\r\n </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n \r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                  <div class=\"content-wrpr\">\r\n                      Are you sure?\r\n                  </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img  src=\"assets/delete.svg\" (click) = \"deleteDepartment(currentDepartmentId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/department/department.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-department th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/department/department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__department_service__ = __webpack_require__("../../../../../src/app/department/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__departments__ = __webpack_require__("../../../../../src/app/department/departments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepartmentComponent = (function () {
    function DepartmentComponent(departmentService, departments, queryParamsService) {
        this.departmentService = departmentService;
        this.departments = departments;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getDepartments(null);
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getDepartments(queryParam);
        });
    };
    DepartmentComponent.prototype.getDepartments = function (queryParams) {
        this.departmentService.getDepartments(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    DepartmentComponent.prototype.updateDepartment = function (department) {
        var _this = this;
        this.loading = true;
        this.departmentService.update(department).subscribe(function (data) {
            _this.loading = false;
        });
    };
    DepartmentComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    DepartmentComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    DepartmentComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    DepartmentComponent.prototype.deleteDepartment = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.departmentService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    DepartmentComponent.prototype.getDepartment = function (department) {
        // this.currentSpecificationName = specification.getSpecificationName();
        this.currentDepartmentId = department.getId();
    };
    return DepartmentComponent;
}());
DepartmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'department',
        template: __webpack_require__("../../../../../src/app/department/department.component.html"),
        styles: [__webpack_require__("../../../../../src/app/department/department.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__department_service__["a" /* DepartmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__department_service__["a" /* DepartmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__departments__["a" /* Departments */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__departments__["a" /* Departments */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], DepartmentComponent);

var _a, _b, _c;
//# sourceMappingURL=department.component.js.map

/***/ }),

/***/ "../../../../../src/app/department/department.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__department_component__ = __webpack_require__("../../../../../src/app/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__department_service__ = __webpack_require__("../../../../../src/app/department/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_department_module__ = __webpack_require__("../../../../../src/app/department/new/new-department.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__departments__ = __webpack_require__("../../../../../src/app/department/departments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DepartmentModule = (function () {
    function DepartmentModule() {
    }
    return DepartmentModule;
}());
DepartmentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__department_component__["a" /* DepartmentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_department_module__["a" /* NewDepartmentModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__department_component__["a" /* DepartmentComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__departments__["a" /* Departments */],
            __WEBPACK_IMPORTED_MODULE_2__department_service__["a" /* DepartmentService */]
        ],
        bootstrap: []
    })
], DepartmentModule);

//# sourceMappingURL=department.module.js.map

/***/ }),

/***/ "../../../../../src/app/department/department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__department__ = __webpack_require__("../../../../../src/app/department/department.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__departments__ = __webpack_require__("../../../../../src/app/department/departments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepartmentService = (function () {
    function DepartmentService(http, departments, globals) {
        this.http = http;
        this.departments = departments;
        this.globals = globals;
        this.departmentUrl = this.globals.getBackendUrl() + 'boqdepartment/';
    }
    DepartmentService.prototype.getDepartments = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.departmentUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var departments = new Array();
            for (i = 0; i < response.length; i++) {
                var department = new __WEBPACK_IMPORTED_MODULE_3__department__["a" /* Department */]();
                department.setDepartmentName(response[i].boqDepartmentName);
                department.setProjectName(response[i].projectName);
                department.setId(response[i].id);
                departments.push(department);
            }
            _this.departments.setDepartments(departments);
            _this.departments.setTotalItems(res1.totalElements);
            return true;
        });
    };
    DepartmentService.prototype.save = function (department) {
        var _this = this;
        var endPoint = this.departmentUrl + department.getProjectId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, department)
            .map(function (res) {
            var res1 = res.json();
            department.setId(res1.id);
            _this.departments.addDepartment(department);
            return res1.id;
        });
    };
    DepartmentService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.departmentUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.departments.deleteDepartment(res1.response);
        });
    };
    DepartmentService.prototype.update = function (department) {
        var endPoint = this.departmentUrl + department.getId();
        // Returns response
        return this.http.patch(endPoint, department)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return DepartmentService;
}());
DepartmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__departments__["a" /* Departments */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__departments__["a" /* Departments */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], DepartmentService);

var _a, _b, _c;
//# sourceMappingURL=department.service.js.map

/***/ }),

/***/ "../../../../../src/app/department/department.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Department; });
var Department = (function () {
    function Department() {
    }
    Department.prototype.setId = function (id) {
        this.id = id;
    };
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.setDepartmentName = function (name) {
        this.departmentName = name;
    };
    Department.prototype.getDepartmentName = function () {
        return this.departmentName;
    };
    Department.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Department.prototype.getProjectName = function () {
        return this.projectName;
    };
    Department.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Department.prototype.getProjectId = function () {
        return this.projectId;
    };
    return Department;
}());

//# sourceMappingURL=department.js.map

/***/ }),

/***/ "../../../../../src/app/department/departments.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Departments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Departments = (function () {
    function Departments() {
        this.departments = new Array();
    }
    Departments.prototype.setDepartments = function (departments) {
        this.departments = departments;
    };
    Departments.prototype.getDepartments = function () {
        return this.departments;
    };
    Departments.prototype.deleteDepartment = function (departmentId) {
        var departmentFound = this.departments.find(function (department) { return departmentId === department.getId(); });
        var index = this.departments.indexOf(departmentFound);
        if (index !== -1) {
            this.departments.splice(index, 1);
            this.totalItems--;
        }
    };
    Departments.prototype.addDepartment = function (department) {
        this.departments.push(department);
        this.totalItems++;
    };
    Departments.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Departments.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Departments;
}());
Departments = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Departments);

//# sourceMappingURL=departments.js.map

/***/ }),

/***/ "../../../../../src/app/department/new/new-department.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">ADD DEPARTMENT</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n<div class=\"container-fluid rounded\" style=\"background-color:white;\" >\r\n<br>\r\n      <div>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"department-name\" class=\"form-control-label\">Department Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"department-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"project-option\" class=\"form-control-label\">Projects:</label>\r\n            \r\n            <select id=\"project-option\" class=\"form-control\"   [(ngModel)]=\"projectId\" name=\"projects\">\r\n              <!-- <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\"  > -->\r\n               <option *ngFor=\"let project of availableProjects\" [value]=\"project.id\">\r\n                {{ project.projectName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewDepartment()\" >Add</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/department/new/new-department.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/department/new/new-department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__department__ = __webpack_require__("../../../../../src/app/department/department.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__departments__ = __webpack_require__("../../../../../src/app/department/departments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__department_service__ = __webpack_require__("../../../../../src/app/department/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__department_component__ = __webpack_require__("../../../../../src/app/department/department.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var departmentState = { name: 'department', url: '/department', component: __WEBPACK_IMPORTED_MODULE_7__department_component__["a" /* DepartmentComponent */] };
var NewDepartmentComponent = (function () {
    function NewDepartmentComponent(departmentService, projectService, departments, projects, stateService) {
        this.departmentService = departmentService;
        this.projectService = projectService;
        this.departments = departments;
        this.projects = projects;
        this.stateService = stateService;
    }
    NewDepartmentComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewDepartmentComponent.prototype.addNewDepartment = function () {
        var _this = this;
        var department = new __WEBPACK_IMPORTED_MODULE_0__department__["a" /* Department */]();
        department.setDepartmentName(this.name);
        department.setProjectId(this.projectId);
        this.departmentService.save(department).subscribe(function (data) {
            _this.stateService.go('department');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDepartmentComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDepartmentComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewDepartmentComponent;
}());
NewDepartmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'new-department',
        template: __webpack_require__("../../../../../src/app/department/new/new-department.component.html"),
        styles: [__webpack_require__("../../../../../src/app/department/new/new-department.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__department_service__["a" /* DepartmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__department_service__["a" /* DepartmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__project_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__departments__["a" /* Departments */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__departments__["a" /* Departments */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__project_projects__["a" /* Projects */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewDepartmentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-department.component.js.map

/***/ }),

/***/ "../../../../../src/app/department/new/new-department.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDepartmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_department_component__ = __webpack_require__("../../../../../src/app/department/new/new-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewDepartmentModule = (function () {
    function NewDepartmentModule() {
    }
    return NewDepartmentModule;
}());
NewDepartmentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_department_component__["a" /* NewDepartmentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_department_component__["a" /* NewDepartmentComponent */]],
        providers: [],
        bootstrap: []
    })
], NewDepartmentModule);

//# sourceMappingURL=new-department.module.js.map

/***/ }),

/***/ "../../../../../src/app/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \" ><br>\r\n  <div class=\"column\">\r\n    <div class = \"glyphicon glyphicon-cog\">DOCUMENTS - All Documents</div>\r\n    <a href=\"#/new-document\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Document</a>\r\n    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-document rounded \" >\r\n<br>\r\n<nav class=\"navbar\">\r\n  <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\" >\r\n</nav>\r\n<table class=\"table\">\r\n  <thead>\r\n  <tr>\r\n    <th>Document</th>\r\n    <th>Project</th>\r\n    <th>Uploader</th>\r\n    <th>Version</th>\r\n    <th>Date</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let document of documents.documents| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: documents.totalItems, id:'server'} \">\r\n        <td class = \"table-cell\" >{{ document.displayName }}</td>\r\n        <td class = \"table-cell\" >{{ document.projectName }}</td>\r\n        <td class = \"table-cell\" >{{ document.createdBy }}</td>\r\n         <td class = \"table-cell\" >{{ document.version }}</td>\r\n        <td class = \"table-cell\">{{ document.creationTime |  date:'MM/dd/yyyy'}}</td>\r\n         <td class = \"table-cell\">\r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">download</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <button  class=\"btn-primary\" (click) = \"downloadFile(document)\">\r\n            <img src=\"assets/view.svg\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\"></button> \r\n            <!-- <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Delete</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <button style=\"background-color:red;\"><img src=\"assets/delete.svg\" (click) = \"deleteDocument(document)\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\"></button> \r\n            <button style=\"background-color:red;\" class=\"btn-primary\"  (click) = \"getDocument(document)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n            </button> -->\r\n          </td>\r\n     </tr>\r\n  </tbody>\r\n </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                  <div class=\"content-wrpr\">\r\n                      Are you sure?\r\n                  </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img  src=\"assets/delete.svg\" (click) = \"deleteDocument(currentDocumentId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/document/document.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-document th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_service__ = __webpack_require__("../../../../../src/app/document/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documents__ = __webpack_require__("../../../../../src/app/document/documents.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentComponent = (function () {
    function DocumentComponent(documentService, documents, queryParamsService) {
        this.documentService = documentService;
        this.documents = documents;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getDocuments(null);
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getDocuments(queryParam);
        });
    };
    DocumentComponent.prototype.getDocuments = function (queryParams) {
        this.documentService.getDocuments(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    DocumentComponent.prototype.updateDocument = function (document) {
        var _this = this;
        this.loading = true;
        this.documentService.update(document).subscribe(function (data) {
            _this.loading = false;
        });
    };
    DocumentComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    DocumentComponent.prototype.deleteDocument = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.documentService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    DocumentComponent.prototype.getDocument = function (document) {
        this.currentDocumentId = document.getId();
    };
    DocumentComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    DocumentComponent.prototype.downloadFile = function (document) {
        // console.log("In Dowload Document");
        this.documentService.getDocument(document).subscribe(function (data) {
        });
    };
    return DocumentComponent;
}());
DocumentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'document',
        template: __webpack_require__("../../../../../src/app/document/document.component.html"),
        styles: [__webpack_require__("../../../../../src/app/document/document.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__document_service__["a" /* DocumentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__documents__["a" /* Documents */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__documents__["a" /* Documents */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], DocumentComponent);

var _a, _b, _c;
//# sourceMappingURL=document.component.js.map

/***/ }),

/***/ "../../../../../src/app/document/document.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_component__ = __webpack_require__("../../../../../src/app/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_service__ = __webpack_require__("../../../../../src/app/document/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_file_module__ = __webpack_require__("../../../../../src/app/document/new/new-file.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__documents__ = __webpack_require__("../../../../../src/app/document/documents.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DocumentModule = (function () {
    function DocumentModule() {
    }
    return DocumentModule;
}());
DocumentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__document_component__["a" /* DocumentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_file_module__["a" /* NewDocumentModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__document_component__["a" /* DocumentComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__documents__["a" /* Documents */],
            __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */]
        ],
        bootstrap: []
    })
], DocumentModule);

//# sourceMappingURL=document.module.js.map

/***/ }),

/***/ "../../../../../src/app/document/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__document__ = __webpack_require__("../../../../../src/app/document/document.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents__ = __webpack_require__("../../../../../src/app/document/documents.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentService = (function () {
    function DocumentService(http, documents, globals) {
        this.http = http;
        this.documents = documents;
        this.globals = globals;
        this.documentUrl = this.globals.getBackendUrl() + 'document/';
    }
    DocumentService.prototype.getDocuments = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.documentUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var documents = new Array();
            for (i = 0; i < response.length; i++) {
                var document = new __WEBPACK_IMPORTED_MODULE_3__document__["a" /* Document */]();
                document.setDisplayName(response[i].displayName);
                document.setProjectName(response[i].projectName);
                document.setCreatedBy(response[i].createdBy);
                document.setVersion(response[i].version);
                document.setCreationTime(response[i].creationTime);
                document.setId(response[i].id);
                documents.push(document);
            }
            _this.documents.setDocuments(documents);
            _this.documents.setTotalItems(res1.totalElements);
            return true;
        });
    };
    DocumentService.prototype.save = function (event, document) {
        var _this = this;
        var endPoint = this.documentUrl + document.getProjectId();
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            return this.http.post(endPoint, formData)
                .map(function (res) {
                var res1 = res.json();
                document.setId(res1.response.id);
                _this.documents.addDocument(document);
                return res1.id;
            });
        }
    };
    DocumentService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.documentUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.documents.deleteDocument(res1.response);
        });
    };
    DocumentService.prototype.update = function (document) {
        var endPoint = this.documentUrl + document.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    DocumentService.prototype.getDocument = function (document) {
        var endPoint = this.documentUrl + document.getId();
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            // var mediaType = "image/png";
            // var blob = new Blob([res], {type: mediaType});
            // var filename = 'test.pdf';
            // saveAs(blob, filename);
            var blob = new Blob([res], { type: 'image/png' });
            var url = window.URL.createObjectURL(blob);
            window.open(endPoint);
        });
    };
    return DocumentService;
}());
DocumentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__documents__["a" /* Documents */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__documents__["a" /* Documents */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], DocumentService);

var _a, _b, _c;
//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ "../../../../../src/app/document/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = (function () {
    function Document() {
    }
    Document.prototype.setId = function (id) {
        this.id = id;
    };
    Document.prototype.getId = function () {
        return this.id;
    };
    Document.prototype.setDisplayName = function (name) {
        this.displayName = name;
    };
    Document.prototype.getDisplayName = function () {
        return this.displayName;
    };
    Document.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Document.prototype.getProjectName = function () {
        return this.projectName;
    };
    Document.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Document.prototype.getProjectId = function () {
        return this.projectId;
    };
    Document.prototype.setCreatedBy = function (createdBy) {
        this.createdBy = createdBy;
    };
    Document.prototype.getCreatedBy = function () {
        return this.createdBy;
    };
    Document.prototype.setVersion = function (version) {
        this.version = version;
    };
    Document.prototype.getVersion = function () {
        return this.version;
    };
    Document.prototype.setCreationTime = function (creationTime) {
        this.creationTime = creationTime;
    };
    Document.prototype.getCreationTime = function () {
        return this.creationTime;
    };
    return Document;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ "../../../../../src/app/document/documents.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Documents = (function () {
    function Documents() {
        this.documents = new Array();
    }
    Documents.prototype.setDocuments = function (documents) {
        this.documents = documents;
    };
    Documents.prototype.getDocuments = function () {
        return this.documents;
    };
    Documents.prototype.deleteDocument = function (documentId) {
        var documentFound = this.documents.find(function (document) { return documentId === document.getId(); });
        var index = this.documents.indexOf(documentFound);
        if (index !== -1) {
            this.documents.splice(index, 1);
            this.totalItems--;
        }
    };
    Documents.prototype.addDocument = function (document) {
        this.documents.push(document);
        this.totalItems++;
    };
    Documents.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Documents.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Documents;
}());
Documents = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Documents);

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ "../../../../../src/app/document/new/new-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  \" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">UPLOAD DOCUMENT</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid \" id=\"new-document\" style=\"background-color:white;\">\r\n \t<br>\r\n      <div >\r\n        <form>\r\n\r\n          <div class=\"form-group\" >\r\n            <label for=\"project-option\" class=\"form-control-label\">Projects:</label>\r\n            <select id=\"project-option\" class=\"form-control\"   [(ngModel)]=\"projectId\" name=\"projects\">\r\n              <option *ngFor=\"let project of availableProjects\" [value]=\"project.id\">\r\n                {{ project.projectName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n           <input type=\"file\" (change)=\"addNewDocument($event)\" required class=\"form-control \" name=\"attach_file\" id=\"attach_file\">\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\t<div class=\"modal-footer\">\r\n       <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n     </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/document/new/new-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/new/new-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__("../../../../../src/app/document/document.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__document_service__ = __webpack_require__("../../../../../src/app/document/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents__ = __webpack_require__("../../../../../src/app/document/documents.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__document_component__ = __webpack_require__("../../../../../src/app/document/document.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var documentState = { name: 'document', url: '/document', component: __WEBPACK_IMPORTED_MODULE_7__document_component__["a" /* DocumentComponent */] };
var NewDocumentComponent = (function () {
    function NewDocumentComponent(documentService, projectService, documents, projects, stateService) {
        this.documentService = documentService;
        this.projectService = projectService;
        this.documents = documents;
        this.projects = projects;
        this.stateService = stateService;
    }
    NewDocumentComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewDocumentComponent.prototype.addNewDocument = function (event) {
        var _this = this;
        var document = new __WEBPACK_IMPORTED_MODULE_2__document__["a" /* Document */]();
        document.setProjectId(this.projectId);
        this.documentService.save(event, document).subscribe(function (data) {
            // console.log(data);
            _this.stateService.go('document');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDocumentComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDocumentComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewDocumentComponent;
}());
NewDocumentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'new-document',
        template: __webpack_require__("../../../../../src/app/document/new/new-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/document/new/new-file.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__document_service__["a" /* DocumentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__documents__["a" /* Documents */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__documents__["a" /* Documents */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__project_projects__["a" /* Projects */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewDocumentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/document/new/new-file.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDocumentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_file_component__ = __webpack_require__("../../../../../src/app/document/new/new-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewDocumentModule = (function () {
    function NewDocumentModule() {
    }
    return NewDocumentModule;
}());
NewDocumentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_file_component__["a" /* NewDocumentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_file_component__["a" /* NewDocumentComponent */]],
        providers: [],
        bootstrap: []
    })
], NewDocumentModule);

//# sourceMappingURL=new-file.module.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/drawing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \" ><br>\r\n  <div class=\"column\">\r\n      <div class = \"glyphicon glyphicon-cog\">Drawings - All Drawing</div>\r\n      <a href=\"#/new-drawing\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Drawing</a>\r\n    </div>\r\n    <br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-drawing rounded\" >\r\n<br>\r\n<nav class=\"navbar\">\r\n  <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\" >\r\n</nav>\r\n<table class=\"table\">\r\n  <thead>\r\n  <tr>\r\n    <th>Drawings</th>\r\n    <th>Project</th>\r\n    <th>Uploader</th>\r\n    <th>Version</th>\r\n    <th>Date</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let drawing of drawings.drawings| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: drawings.totalItems, id:'server'} \">\r\n        <td class = \"table-cell\" >{{ drawing.displayName }}</td>\r\n        <td class = \"table-cell\" >{{ drawing.projectName }}</td>\r\n        <td class = \"table-cell\" >{{ drawing.createdBy }}</td>\r\n         <td class = \"table-cell\">{{ drawing.version }}</td>\r\n        <td class = \"table-cell\">{{ drawing.creationTime |  date:'MM/dd/yyyy'}}</td>\r\n         <td class = \"table-cell\">\r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">View</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <button  class=\"btn-primary\" (click) = \"downloadFile(drawing)\">\r\n            <img src=\"assets/view.svg\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\"></button> \r\n            <!-- <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Delete</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <button style=\"background-color:red;\" class=\"btn-primary\"  (click) = \"getDrawing(drawing)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n            </button> -->\r\n          </td>\r\n     </tr>\r\n  </tbody>\r\n </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                  <div class=\"content-wrpr\">\r\n                      Are you sure?\r\n                  </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img  src=\"assets/delete.svg\" (click) = \"deleteDrawing(currentDrawingId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/drawing/drawing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-drawing th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drawing/drawing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_service__ = __webpack_require__("../../../../../src/app/drawing/drawing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawings__ = __webpack_require__("../../../../../src/app/drawing/drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawingComponent = (function () {
    function DrawingComponent(drawingService, drawings, queryParamsService) {
        this.drawingService = drawingService;
        this.drawings = drawings;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getDrawings(null);
    }
    DrawingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getDrawings(queryParam);
        });
    };
    DrawingComponent.prototype.getDrawings = function (queryParams) {
        this.drawingService.getDrawings(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    DrawingComponent.prototype.updateDrawing = function (drawing) {
        var _this = this;
        this.loading = true;
        this.drawingService.update(drawing).subscribe(function (data) {
            _this.loading = false;
        });
    };
    DrawingComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    DrawingComponent.prototype.deleteDrawing = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.drawingService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    DrawingComponent.prototype.getDrawing = function (drawing) {
        this.currentDrawingId = drawing.getId();
    };
    DrawingComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    DrawingComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    DrawingComponent.prototype.downloadFile = function (drawing) {
        // console.log("In Dowload Document");
        this.drawingService.getDrawing(drawing).subscribe(function (data) {
        });
    };
    return DrawingComponent;
}());
DrawingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drawing',
        template: __webpack_require__("../../../../../src/app/drawing/drawing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drawing/drawing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__drawing_service__["a" /* DrawingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__drawing_service__["a" /* DrawingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__drawings__["a" /* Drawings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__drawings__["a" /* Drawings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], DrawingComponent);

var _a, _b, _c;
//# sourceMappingURL=drawing.component.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/drawing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_component__ = __webpack_require__("../../../../../src/app/drawing/drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawing_service__ = __webpack_require__("../../../../../src/app/drawing/drawing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_drawing_module__ = __webpack_require__("../../../../../src/app/drawing/new/new-drawing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drawings__ = __webpack_require__("../../../../../src/app/drawing/drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DrawingModule = (function () {
    function DrawingModule() {
    }
    return DrawingModule;
}());
DrawingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__drawing_component__["a" /* DrawingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_drawing_module__["a" /* NewDrawingModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__drawing_component__["a" /* DrawingComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__drawings__["a" /* Drawings */],
            __WEBPACK_IMPORTED_MODULE_2__drawing_service__["a" /* DrawingService */]
        ],
        bootstrap: []
    })
], DrawingModule);

//# sourceMappingURL=drawing.module.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/drawing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawing__ = __webpack_require__("../../../../../src/app/drawing/drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drawings__ = __webpack_require__("../../../../../src/app/drawing/drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawingService = (function () {
    function DrawingService(http, drawings, globals) {
        this.http = http;
        this.drawings = drawings;
        this.globals = globals;
        this.drawingUrl = this.globals.getBackendUrl() + 'drawing/';
    }
    DrawingService.prototype.getDrawings = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.drawingUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var drawings = new Array();
            for (i = 0; i < response.length; i++) {
                var drawing = new __WEBPACK_IMPORTED_MODULE_3__drawing__["a" /* Drawing */]();
                drawing.setDisplayName(response[i].displayName);
                drawing.setProjectName(response[i].projectName);
                drawing.setCreatedBy(response[i].createdBy);
                drawing.setVersion(response[i].version);
                drawing.setCreationTime(response[i].creationTime);
                drawing.setId(response[i].id);
                drawings.push(drawing);
            }
            _this.drawings.setDrawings(drawings);
            _this.drawings.setTotalItems(res1.totalElements);
            return true;
        });
    };
    DrawingService.prototype.save = function (event, drawing) {
        var _this = this;
        var endPoint = this.drawingUrl + drawing.getProjectId();
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            return this.http.post(endPoint, formData)
                .map(function (res) {
                var res1 = res.json();
                drawing.setId(res1.response.id);
                _this.drawings.addDrawing(drawing);
                return res1.id;
            });
        }
    };
    DrawingService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.drawingUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.drawings.deleteDrawing(res1.response);
        });
    };
    DrawingService.prototype.update = function (drawing) {
        var endPoint = this.drawingUrl + drawing.getId();
        // Returns response
        return this.http.patch(endPoint, drawing)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    DrawingService.prototype.getDrawing = function (drawing) {
        var endPoint = this.drawingUrl + drawing.getId();
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            // var mediaType = "image/png";
            // var blob = new Blob([res], {type: mediaType});
            // var filename = 'test.pdf';
            // saveAs(blob, filename);
            var blob = new Blob([res], { type: 'image/png' });
            var url = window.URL.createObjectURL(blob);
            window.open(endPoint);
        });
    };
    return DrawingService;
}());
DrawingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__drawings__["a" /* Drawings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__drawings__["a" /* Drawings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], DrawingService);

var _a, _b, _c;
//# sourceMappingURL=drawing.service.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/drawing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drawing; });
var Drawing = (function () {
    function Drawing() {
    }
    Drawing.prototype.setId = function (id) {
        this.id = id;
    };
    Drawing.prototype.getId = function () {
        return this.id;
    };
    Drawing.prototype.setDisplayName = function (name) {
        this.displayName = name;
    };
    Drawing.prototype.getDisplayName = function () {
        return this.displayName;
    };
    Drawing.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Drawing.prototype.getProjectName = function () {
        return this.projectName;
    };
    Drawing.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Drawing.prototype.getProjectId = function () {
        return this.projectId;
    };
    Drawing.prototype.setCreatedBy = function (createdBy) {
        this.createdBy = createdBy;
    };
    Drawing.prototype.getCreatedBy = function () {
        return this.createdBy;
    };
    Drawing.prototype.setVersion = function (version) {
        this.version = version;
    };
    Drawing.prototype.getVersion = function () {
        return this.version;
    };
    Drawing.prototype.setCreationTime = function (creationTime) {
        this.creationTime = creationTime;
    };
    Drawing.prototype.getCreationTime = function () {
        return this.creationTime;
    };
    return Drawing;
}());

//# sourceMappingURL=drawing.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/drawings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drawings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Drawings = (function () {
    function Drawings() {
        this.drawings = new Array();
    }
    Drawings.prototype.setDrawings = function (drawings) {
        this.drawings = drawings;
    };
    Drawings.prototype.getDrawings = function () {
        return this.drawings;
    };
    Drawings.prototype.deleteDrawing = function (drawingId) {
        var drawingFound = this.drawings.find(function (drawing) { return drawingId === drawing.getId(); });
        var index = this.drawings.indexOf(drawingFound);
        if (index !== -1) {
            this.drawings.splice(index, 1);
            this.totalItems--;
        }
    };
    Drawings.prototype.addDrawing = function (drawing) {
        this.drawings.push(drawing);
        this.totalItems++;
    };
    Drawings.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Drawings.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Drawings;
}());
Drawings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Drawings);

//# sourceMappingURL=drawings.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/new/new-drawing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n      \t<div class = \"glyphicon glyphicon-cog\">UPLOAD Drawing</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid \" id=\"new-drawing\" style=\"background-color:white;\">\r\n<br>      <div >\r\n        <form>\r\n\r\n          <div class=\"form-group\" >\r\n            <label for=\"project-option\" class=\"form-control-label\">Projects:</label>\r\n            <select id=\"project-option\" class=\"form-control\"   [(ngModel)]=\"projectId\" name=\"projects\">\r\n              <option *ngFor=\"let project of availableProjects\" [value]=\"project.id\">\r\n                {{ project.projectName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n           <input type=\"file\" (change)=\"addNewDrawing($event)\" required class=\"form-control \" name=\"attach_file\" id=\"attach_file\">\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\t<div class=\"modal-footer\">\r\n       <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n     </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/drawing/new/new-drawing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drawing/new/new-drawing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDrawingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawing__ = __webpack_require__("../../../../../src/app/drawing/drawing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawing_service__ = __webpack_require__("../../../../../src/app/drawing/drawing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drawings__ = __webpack_require__("../../../../../src/app/drawing/drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drawing_component__ = __webpack_require__("../../../../../src/app/drawing/drawing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var drawingState = { name: 'drawing', url: '/drawing', component: __WEBPACK_IMPORTED_MODULE_7__drawing_component__["a" /* DrawingComponent */] };
var NewDrawingComponent = (function () {
    function NewDrawingComponent(drawingService, projectService, drawings, projects, stateService) {
        this.drawingService = drawingService;
        this.projectService = projectService;
        this.drawings = drawings;
        this.projects = projects;
        this.stateService = stateService;
    }
    NewDrawingComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewDrawingComponent.prototype.addNewDrawing = function (event) {
        var _this = this;
        var drawing = new __WEBPACK_IMPORTED_MODULE_2__drawing__["a" /* Drawing */]();
        drawing.setProjectId(this.projectId);
        this.drawingService.save(event, drawing).subscribe(function (data) {
            // console.log(data);
            _this.stateService.go('drawing');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDrawingComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDrawingComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewDrawingComponent;
}());
NewDrawingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'new-drawing',
        template: __webpack_require__("../../../../../src/app/drawing/new/new-drawing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drawing/new/new-drawing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__drawing_service__["a" /* DrawingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__drawing_service__["a" /* DrawingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__drawings__["a" /* Drawings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__drawings__["a" /* Drawings */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__project_projects__["a" /* Projects */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewDrawingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-drawing.component.js.map

/***/ }),

/***/ "../../../../../src/app/drawing/new/new-drawing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDrawingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_drawing_component__ = __webpack_require__("../../../../../src/app/drawing/new/new-drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewDrawingModule = (function () {
    function NewDrawingModule() {
    }
    return NewDrawingModule;
}());
NewDrawingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_drawing_component__["a" /* NewDrawingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_drawing_component__["a" /* NewDrawingComponent */]],
        providers: [],
        bootstrap: []
    })
], NewDrawingModule);

//# sourceMappingURL=new-drawing.module.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">MANAGE EMPLOYEES</div>\r\n    <a href=\"#/new-employee\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Employee</a>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-employee rounded\">\r\n  <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table \">\r\n    <thead>\r\n      <tr>\r\n        <th>Employee Name</th>\r\n        <th>Role</th>\r\n        <th>Phone</th>\r\n        <th>Company</th>\r\n        <th>Projects</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of employees.employees| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: employees.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"employee.firstname\" (input)=\"employee.firstname=$event.target.textContent\">{{ employee.firstname }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"employee.role\" (input)=\"employee.role=$event.target.textContent\">{{ employee.role }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"employee.telephone\" (input)=\"employee.telephone=$event.target.textContent\">{{ employee.telephone }} </td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"employee.companyName\" (input)=\"employee.companyName=$event.target.textContent\">{{ employee.companyName }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"employee.noOfProjects\" (input)=\"employee.noOfProjects=$event.target.textContent\">{{ employee.noOfProjects }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateEmployee(employee)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <!-- <button style=\"background-color:red;\"><img src=\"assets/delete.svg\" (click) = \"deleteEmployee(employee)\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\"></button> -->\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getEmployee(employee)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteEmployee(currentEmployeeId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-employee th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  border-radius: 10px;\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees__ = __webpack_require__("../../../../../src/app/employee/employees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, employees, queryParamsService) {
        this.employeeService = employeeService;
        this.employees = employees;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getEmployees(null);
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getEmployees(queryParam);
        });
    };
    EmployeeComponent.prototype.getEmployees = function (queryParams) {
        this.employeeService.getEmployees(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    EmployeeComponent.prototype.updateEmployee = function (employee) {
        var _this = this;
        this.loading = true;
        this.employeeService.update(employee).subscribe(function (data) {
            _this.loading = false;
        });
    };
    EmployeeComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    EmployeeComponent.prototype.deleteEmployee = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.employeeService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    EmployeeComponent.prototype.getEmployee = function (employee) {
        this.currentEmployeeId = employee.getId();
    };
    EmployeeComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'employee',
        template: __webpack_require__("../../../../../src/app/employee/employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/employee.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__employees__["a" /* Employees */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__employees__["a" /* Employees */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], EmployeeComponent);

var _a, _b, _c;
//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_component__ = __webpack_require__("../../../../../src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employees__ = __webpack_require__("../../../../../src/app/employee/employees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            //RouterModule,
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            //NewEmployeeModule
            __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__["TooltipModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__employee_component__["a" /* EmployeeComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__employee_component__["a" /* EmployeeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__employees__["a" /* Employees */],
            __WEBPACK_IMPORTED_MODULE_2__employee_service__["a" /* EmployeeService */]
        ],
        bootstrap: []
    })
], EmployeeModule);

//# sourceMappingURL=employee.module.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee__ = __webpack_require__("../../../../../src/app/employee/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees__ = __webpack_require__("../../../../../src/app/employee/employees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeService = (function () {
    function EmployeeService(http, employees, globals) {
        this.http = http;
        this.employees = employees;
        this.globals = globals;
        this.employeeUrl = this.globals.getBackendUrl() + 'employee/';
    }
    EmployeeService.prototype.getEmployees = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.employeeUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var employees = new Array();
            for (i = 0; i < response.length; i++) {
                var employee = new __WEBPACK_IMPORTED_MODULE_3__employee__["a" /* Employee */]();
                employee.setFirstname(response[i].firstname);
                employee.setRole(response[i].role);
                employee.setTelephone(response[i].telephone);
                employee.setCompanyName(response[i].companyName);
                employee.setNoOfProjects(response[i].noOfProjects);
                employee.setId(response[i].id);
                employees.push(employee);
            }
            _this.employees.setEmployees(employees);
            _this.employees.setTotalItems(res1.totalElements);
            return true;
        });
    };
    EmployeeService.prototype.getEmployeeByProject = function (projectId) {
        var _this = this;
        var endPoint = this.employeeUrl + projectId;
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var employees = new Array();
            for (i = 0; i < response.length; i++) {
                var employee = new __WEBPACK_IMPORTED_MODULE_3__employee__["a" /* Employee */]();
                employee.setFirstname(response[i].firstname);
                employee.setRole(response[i].role);
                employee.setTelephone(response[i].telephone);
                employee.setCompanyName(response[i].companyName);
                employee.setNoOfProjects(response[i].noOfProjects);
                employee.setId(response[i].id);
                employees.push(employee);
            }
            _this.employees.setEmployees(employees);
            _this.employees.setTotalItems(res1.totalElements);
            return true;
        });
    };
    EmployeeService.prototype.save = function (employee, file) {
        var _this = this;
        var endPoint = this.employeeUrl + employee.getCompanyId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', undefined);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var formData = new FormData();
        //if(file !== null){
        formData.append('file', file, file.name);
        formData.append('inputStr', JSON.stringify(employee));
        //}
        // Returns response
        return this.http.post(endPoint, formData)
            .map(function (res) {
            var res1 = res.json();
            employee.setId(res1.id);
            _this.employees.addEmployee(employee);
            return res1.id;
        });
    };
    EmployeeService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.employeeUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.employees.deleteEmployee(res1.response);
        });
    };
    EmployeeService.prototype.update = function (employee) {
        var endPoint = this.employeeUrl + employee.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__employees__["a" /* Employees */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__employees__["a" /* Employees */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], EmployeeService);

var _a, _b, _c;
//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.setId = function (id) {
        this.id = id;
    };
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    Employee.prototype.getFirstname = function () {
        return this.firstname;
    };
    Employee.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    Employee.prototype.getLastname = function () {
        return this.lastname;
    };
    Employee.prototype.setDOB = function (DOB) {
        this.DOB = DOB;
    };
    Employee.prototype.getDOB = function () {
        return this.DOB;
    };
    Employee.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.setCity = function (city) {
        this.city = city;
    };
    Employee.prototype.getCity = function () {
        return this.city;
    };
    Employee.prototype.setCountry = function (country) {
        this.country = country;
    };
    Employee.prototype.getCountry = function () {
        return this.country;
    };
    Employee.prototype.setRole = function (role) {
        this.role = role;
    };
    Employee.prototype.getRole = function () {
        return this.role;
    };
    Employee.prototype.setTelephone = function (telephone) {
        this.telephone = telephone;
    };
    Employee.prototype.getTelephone = function () {
        return this.telephone;
    };
    Employee.prototype.setMobile = function (mobile) {
        this.mobile = mobile;
    };
    Employee.prototype.getMobile = function () {
        return this.mobile;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Employee.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Employee.prototype.setCompanyId = function (departmentId) {
        this.companyId = departmentId;
    };
    Employee.prototype.getCompanyId = function () {
        return this.companyId;
    };
    Employee.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Employee.prototype.getProjectId = function () {
        return this.projectId;
    };
    Employee.prototype.setNoOfProjects = function (noOfProjects) {
        this.noOfProjects = noOfProjects;
    };
    Employee.prototype.getNoOfProjects = function () {
        return this.noOfProjects;
    };
    return Employee;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employees.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employees; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Employees = (function () {
    function Employees() {
        this.employees = new Array();
    }
    Employees.prototype.setEmployees = function (employees) {
        this.employees = employees;
    };
    Employees.prototype.getEmployees = function () {
        return this.employees;
    };
    Employees.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        this.totalItems++;
    };
    Employees.prototype.deleteEmployee = function (id) {
        var employeeFound = this.employees.find(function (employee) { return id === employee.getId(); });
        var index = this.employees.indexOf(employeeFound);
        if (index !== -1) {
            this.employees.splice(index, 1);
            this.totalItems--;
        }
    };
    Employees.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Employees.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Employees;
}());
Employees = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Employees);

//# sourceMappingURL=employees.js.map

/***/ }),

/***/ "../../../../../src/app/employee/new/new-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" style=\"background-color:white;\">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">ADD EMPLOYEE</div>\r\n  </div>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"container-fluid rounded\" style=\"background-color:white\">\r\n  <!-- <div class = \"glyphicon glyphicon-cog\">ADD EMPLOYEE</div> -->\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <img id=\"preview\" src=\"http://placehold.it/180\" alt=\"your image\" />\r\n      <input type=\"file\" id=\"file\" name=\"file\" (change)=\"add($event)\" />\r\n    </div>\r\n    <label>Personal Information</label>\r\n    <div class=\"form-group\">\r\n      <label for=\"employee-name\" class=\"form-control-label\">First Name:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"employee-name\" [(ngModel)]=\"firstname\" name=\"firstname\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"employee-lastname\" class=\"form-control-label\">Last Name:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"employee-lastname\" [(ngModel)]=\"lastname\" name=\"lastname\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"employee-gender\" class=\"form-control-label\">Gender:</label>\r\n      <select id=\"employee-option\" class=\"form-control\" [(ngModel)]=\"gender\" name=\"gender\">\r\n        <option value=\"Male\">Male</option>\r\n        <option value=\"Female\">Female</option>\r\n      </select>\r\n    </div>\r\n    <label>Work Information</label>\r\n    <div class=\"form-group\">\r\n      <label for=\"employee-role\" class=\"form-control-label\">Role:</label>\r\n      <select id=\"employee-option\" class=\"form-control\" [(ngModel)]=\"role\" name=\"roles\">\r\n        <!-- <option selected></option> -->\r\n        <option value=\"Director\">Director</option>\r\n        <option value=\"Architect\">Architect</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"company-option\" class=\"form-control-label\">Companies:</label>\r\n      <select id=\"company-option\" class=\"form-control\" [(ngModel)]=\"companyId\" name=\"companies\">\r\n        <option *ngFor=\"let company of availableCompanies\" [value]=\"company.id\">\r\n          {{ company.companyName }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"project-option\" class=\"form-control-label\">Projects:</label>\r\n      <select id=\"project-option\" class=\"form-control\" [(ngModel)]=\"projectId\" name=\"projects\">\r\n        <option *ngFor=\"let project of availableProjects\" [value]=\"project.id\">\r\n          {{ project.projectName }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <label>Contact Information</label>\r\n    <div class=\"form-group\">\r\n      <label for=\"address\" class=\"form-control-label\">Address:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"address\" name=\"address\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"country\" class=\"form-control-label\">Country:</label>\r\n      <select class=\"input-medium bfh-countries\" data-country=\"US\" [(ngModel)]=\"country\" name=\"country\"></select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"city\" class=\"form-control-label\">City:</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"city\" name=\"city\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <form>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-7\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile\" id=\"mobile\" [(ngModel)]=\"mobile\" name=\"mobile\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Telephone\" id=\"telephone\" [(ngModel)]=\"telephone\" name=\"telephone\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </form>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewEmployee()\">Add</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/employee/new/new-employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-width: 180px; }\n\ninput[type=file] {\n  padding: 10px;\n  background: #2d2d2d; }\n\n.form-control {\n  width: 35%; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/new/new-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee__ = __webpack_require__("../../../../../src/app/employee/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_component__ = __webpack_require__("../../../../../src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees__ = __webpack_require__("../../../../../src/app/employee/employees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//declare var jQuery:any;
var employeeState = { name: 'employee', url: '/employee', component: __WEBPACK_IMPORTED_MODULE_7__employee_component__["a" /* EmployeeComponent */] };
var NewEmployeeComponent = (function () {
    //private projectIds:Array<string>;
    function NewEmployeeComponent(employeeService, companyService, projectService, employees, companies, projects, stateService) {
        this.employeeService = employeeService;
        this.companyService = companyService;
        this.projectService = projectService;
        this.employees = employees;
        this.companies = companies;
        this.projects = projects;
        this.stateService = stateService;
        //this.router = router;
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
        this.getCompanies();
        this.getProjects();
    };
    NewEmployeeComponent.prototype.addNewEmployee = function () {
        var _this = this;
        var employee = new __WEBPACK_IMPORTED_MODULE_5__employee__["a" /* Employee */]();
        employee.setFirstname(this.firstname);
        employee.setEmail(this.email);
        employee.setLastname(this.lastname);
        employee.setGender(this.gender);
        employee.setRole(this.role);
        employee.setAddress(this.address);
        employee.setCity(this.city);
        employee.setCountry(this.country);
        employee.setTelephone(this.telephone);
        employee.setMobile(this.mobile);
        employee.setEmail(this.email);
        // employee.setDOB(new Date(this.DOB));
        employee.setCompanyId(this.companyId);
        // this.projectIds.push(this.projectId);
        employee.setProjectId(this.projectId);
        this.employeeService.save(employee, this.file).subscribe(function (data) {
            // console.log(data);
            employee.setId(data);
            _this.employees.addEmployee(employee);
            _this.stateService.go('employee');
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewEmployeeComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies(null).subscribe(function (data) {
            _this.availableCompanies = _this.companies.getCompanies();
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewEmployeeComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewEmployeeComponent.prototype.add = function (e) {
        var r = new FileReader();
        r.onload = function (e) {
            document.getElementById("preview").setAttribute("src", e.target.result);
        };
        r.readAsDataURL(e.target.files[0]);
        var fileList = e.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
        }
    };
    NewEmployeeComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewEmployeeComponent;
}());
NewEmployeeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-employee',
        template: __webpack_require__("../../../../../src/app/employee/new/new-employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/new/new-employee.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__employee_service__["a" /* EmployeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__project_project_service__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__employees__["a" /* Employees */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__employees__["a" /* Employees */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__company_companies__["a" /* Companies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__company_companies__["a" /* Companies */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_projects__["a" /* Projects */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__uirouter_angular__["StateService"]) === "function" && _g || Object])
], NewEmployeeComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee/new/new-employee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmployeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_employee_component__ = __webpack_require__("../../../../../src/app/employee/new/new-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//const employeeState = { name: 'employee', url: '/employee',  component: EmployeeComponent };
var NewEmployeeModule = (function () {
    function NewEmployeeModule() {
    }
    return NewEmployeeModule;
}());
NewEmployeeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
            // UIRouterModule.forRoot({ states: [employeeState], useHash: true })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_employee_component__["a" /* NewEmployeeComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_employee_component__["a" /* NewEmployeeComponent */]],
        providers: [],
        bootstrap: []
    })
], NewEmployeeModule);

//# sourceMappingURL=new-employee.module.js.map

/***/ }),

/***/ "../../../../../src/app/globals/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.backEndUrl = 'http://localhost:8080/api/';
    }
    // 97.74.237.176
    Globals.prototype.getBackendUrl = function () {
        return this.backEndUrl;
    };
    return Globals;
}());
Globals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Globals);

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div role=\"navigation\" style=\"background-color: darkblue;height: 60px;\r\nwidth: auto;\"> \r\n  \r\n\t<div class=\"grid-logo-cell\">\r\n\t  <br><img src=\"assets/digiconsult logo.png\">\r\n\t</div> \r\n\t\r\n\t<div class=\"container\">\r\n\t\t  <div class=\"topright\">\r\n\t\t\t  <div class=\"dropdown\" style=\"float:right\">\r\n\t\t\t   <button class=\"item -link \" type=\"button\" data-toggle=\"dropdown\" style=\"background-color:darkblue;\r\n\t\t\t\t border-color:darkblue;\">\r\n\t\t\t\t\t <img src=\"assets/img_avatar3.png\" \t style=\"    width: 41px;\r\n\t\t\t\t\t width: 47px;\r\n\t\t\t\t\t height: 45px;\r\n\t\t\t\t\t border-radius: 50%;\r\n\t\t\t\t\t -webkit-border-radius: 50%;\">\r\n\t\t\t\t</button>\r\n\t\t\t  <ul class=\"dropdown-menu\">\r\n\t\t\t\t  <div class=\"grid-cell col-md-2\" ng-model=\"username\" style=\"color:black\">Welcome {{username}}  </div>\r\n\t\t\t\t<button class=\"btn btn-primary round\" data-target=\"#newProfile\" data-toggle=\"model\">\r\n\t\t\t\t\tProfile \r\n\t\t\t\t</button><br><br>\r\n\t\t\t\t<button class=\"btn btn-primary round\" data-toggle=\"model\" >\r\n\t\t\t\t\t\t<a href=\"/logout\" style=\"color:white\">\tLogout</a>\r\n\t\t\t\t</button>\t\r\n\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t  </div>\r\n\t</div>\r\n\t\r\n\t</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*, *:before, *:after {\n  box-sizing: inherit; }\n\nhtml {\n  box-sizing: border-box; }\n\nimg {\n  border-radius: 0%; }\n\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background: darkblue; }\n\n.grid-logo-cell {\n  width: 292px;\n  height: 84px;\n  background-color: white;\n  text-align: center;\n  padding-top: 8px; }\n\n.grid-user-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 10%;\n          flex: 1 0 10%; }\n\n.grid-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.loggedinUser {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.dropdown-menu {\n  left: -34px;\n  position: absolute;\n  top: 100%;\n  float: left;\n  min-width: 101px;\n  list-style: none;\n  text-align: center;\n  border: 1px solid;\n  background-clip: padding-box; }\n\n.topright {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  font-size: 18px; }\n\n.btn {\n  padding: 5px 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('UserName');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/home/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/header/header.component.scss")]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("../../../../../src/app/home/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
        ],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]],
        providers: [],
        bootstrap: []
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body1 {\r\n  font-family: OpenSans-Regular;\r\n  font-size: 12px;\r\n  background: #000;\r\n}\r\n.panel-heading .accordion-toggle:after {\r\n    /* symbol for \"opening\" panels */\r\n    font-family: 'Glyphicons Halflings';  /* essential for enabling glyphicon */\r\n    content: \"\\E114\";    /* adjust as needed, taken from bootstrap.css */\r\n    float: right;        /* adjust as needed */\r\n    color: grey;         /* adjust as needed */\r\n}\r\n.panel-heading .accordion-toggle.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\E080\";    /* adjust as needed, taken from bootstrap.css */\r\n}\r\n.right {\r\n   position: absolute;\r\n    right: 0px;\r\n    /* //width: 300px; */\r\n   \r\n}\r\n.panel-title {\r\n\t font-size: 12px;\r\n\r\n    }\r\n.panel-heading{\r\n           background-color: #0099cc;\r\n           color:white;\r\n           \r\n       }\r\n.panel-default{\r\n           border-color:#0099cc;\r\n       }\r\n        .panel-heading:hover {\r\n           background-color:#ddd; \r\n           \r\n           color: black;\r\n       }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"body1\"></header>\r\n<div id=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"pull-left col-md-3\">\r\n      <div class=\"panel-group\" id=\"accordion\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/home black.svg\" style=\"width:20px\">\r\n              <a href='#/overview'>OVERVIEW</a>\r\n            </h6>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/project management black.svg\" style=\"width:20px\">\r\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\r\n                PROJECT MANAGEMENT\r\n              </a>\r\n            </h6>\r\n          </div>\r\n          <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/company\">Manage Companies</a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/project\">Manage Projects</a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/client\">Manage Clients</a>\r\n            </div>\r\n            <!-- <div class=\"panel-body\">\r\n              <a href=\"#/phase\">Manage Phases</a>\r\n            </div> -->\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/meeting\">Meetings</a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/boq\">Manage BoQs</a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/department\">Manage Departments</a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <a href=\"#/section\">Manage Sections</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/user management black.svg\" style=\"width:20px\">\r\n              <a class=\"accordion-toggle \" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\r\n                USER MANAGEMENT\r\n              </a>\r\n            </h6>\r\n          </div>\r\n          <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/role\">Roles and Permissions</a>\r\n              </div>\r\n\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/user\"> Manage Users</a>\r\n              </div>\r\n\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/employee\">Employee Directory</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/ticket management black.svg\" style=\"width:20px\">\r\n              <a class=\"accordion-toggle \" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\">\r\n                TICKET MANAGEMENT\r\n              </a>\r\n            </h6>\r\n          </div>\r\n          <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/request\">Change Request</a>\r\n              </div>\r\n              <!-- <div class=\"panel-body\"><a href=\"#/request\">Quality control</a></div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/project management black.svg\" style=\"width:20px\">\r\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\">\r\n                PRODUCT MANAGEMENT\r\n              </a>\r\n            </h6>\r\n          </div>\r\n          <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/category\">Manage Product Categories</a>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/subcategory\">Manage Product SubCategories</a>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/product\">Manage Product</a>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/specification\">Specification</a>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/documents black.svg\" style=\"width:20px\">\r\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\">\r\n                DOCUMENT\r\n              </a>\r\n            </h6>\r\n          </div>\r\n          <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/document\">Manage Documents</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h6 class=\"panel-title\">\r\n              <img src=\"assets/drawing black.svg\" style=\"width:20px\">\r\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\">\r\n                DRAWINGS\r\n              </a>\r\n            </h6>\r\n          </div>\r\n          <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"panel-body\">\r\n                <a href=\"#/drawing\">Manage Drawings</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <div class=\"column\">\r\n        <br/>\r\n        <br/>\r\n        <!-- <div><search ></search></div> -->\r\n        <div>\r\n          <ui-view></ui-view>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_module__ = __webpack_require__("../../../../../src/app/home/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_component__ = __webpack_require__("../../../../../src/app/users/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_new_new_user_component__ = __webpack_require__("../../../../../src/app/users/new/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_new_new_user_module__ = __webpack_require__("../../../../../src/app/users/new/new-user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_module__ = __webpack_require__("../../../../../src/app/users/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search_module__ = __webpack_require__("../../../../../src/app/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__ = __webpack_require__("../../../../../src/app/pagination/pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_new_new_project_module__ = __webpack_require__("../../../../../src/app/project/new/new-project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project_new_new_project_component__ = __webpack_require__("../../../../../src/app/project/new/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project_project_module__ = __webpack_require__("../../../../../src/app/project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__client_client_component__ = __webpack_require__("../../../../../src/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__client_client_module__ = __webpack_require__("../../../../../src/app/client/client.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__client_new_new_client_component__ = __webpack_require__("../../../../../src/app/client/new/new-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__client_new_new_client_module__ = __webpack_require__("../../../../../src/app/client/new/new-client.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__company_company_module__ = __webpack_require__("../../../../../src/app/company/company.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__company_new_new_company_component__ = __webpack_require__("../../../../../src/app/company/new/new-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__company_new_new_company_module__ = __webpack_require__("../../../../../src/app/company/new/new-company.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__phase_phase_component__ = __webpack_require__("../../../../../src/app/phase/phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__phase_phase_module__ = __webpack_require__("../../../../../src/app/phase/phase.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__phase_new_new_phase_component__ = __webpack_require__("../../../../../src/app/phase/new/new-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__phase_new_new_phase_module__ = __webpack_require__("../../../../../src/app/phase/new/new-phase.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__roles_role_component__ = __webpack_require__("../../../../../src/app/roles/role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__roles_new_new_role_module__ = __webpack_require__("../../../../../src/app/roles/new/new-role.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__roles_new_new_role_component__ = __webpack_require__("../../../../../src/app/roles/new/new-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__roles_role_module__ = __webpack_require__("../../../../../src/app/roles/role.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__document_document_component__ = __webpack_require__("../../../../../src/app/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__document_document_module__ = __webpack_require__("../../../../../src/app/document/document.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__document_new_new_file_component__ = __webpack_require__("../../../../../src/app/document/new/new-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__document_new_new_file_module__ = __webpack_require__("../../../../../src/app/document/new/new-file.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__boq_boq_component__ = __webpack_require__("../../../../../src/app/boq/boq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__boq_boq_module__ = __webpack_require__("../../../../../src/app/boq/boq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__boq_new_new_boq_component__ = __webpack_require__("../../../../../src/app/boq/new/new-boq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__boq_new_new_boq_module__ = __webpack_require__("../../../../../src/app/boq/new/new-boq.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__department_department_component__ = __webpack_require__("../../../../../src/app/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__department_department_module__ = __webpack_require__("../../../../../src/app/department/department.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__department_new_new_department_component__ = __webpack_require__("../../../../../src/app/department/new/new-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__department_new_new_department_module__ = __webpack_require__("../../../../../src/app/department/new/new-department.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__section_section_component__ = __webpack_require__("../../../../../src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__section_section_module__ = __webpack_require__("../../../../../src/app/section/section.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__section_new_new_section_component__ = __webpack_require__("../../../../../src/app/section/new/new-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__section_new_new_section_module__ = __webpack_require__("../../../../../src/app/section/new/new-section.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__product_product_module__ = __webpack_require__("../../../../../src/app/product/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__product_new_new_product_component__ = __webpack_require__("../../../../../src/app/product/new/new-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__product_new_new_product_module__ = __webpack_require__("../../../../../src/app/product/new/new-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__category_category_module__ = __webpack_require__("../../../../../src/app/category/category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__category_new_new_category_component__ = __webpack_require__("../../../../../src/app/category/new/new-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__category_new_new_category_module__ = __webpack_require__("../../../../../src/app/category/new/new-category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__subcategory_subcategory_component__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__subcategory_subcategory_module__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__subcategory_new_new_subcategory_component__ = __webpack_require__("../../../../../src/app/subcategory/new/new-subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__subcategory_new_new_subcategory_module__ = __webpack_require__("../../../../../src/app/subcategory/new/new-subcategory.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__employee_employee_component__ = __webpack_require__("../../../../../src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__employee_employee_module__ = __webpack_require__("../../../../../src/app/employee/employee.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__employee_new_new_employee_component__ = __webpack_require__("../../../../../src/app/employee/new/new-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__employee_new_new_employee_module__ = __webpack_require__("../../../../../src/app/employee/new/new-employee.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__meeting_meeting_component__ = __webpack_require__("../../../../../src/app/meeting/meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__meeting_meeting_module__ = __webpack_require__("../../../../../src/app/meeting/meeting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__meeting_new_new_meeting_component__ = __webpack_require__("../../../../../src/app/meeting/new/new-meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__meeting_new_new_meeting_module__ = __webpack_require__("../../../../../src/app/meeting/new/new-meeting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__quality_quality_module__ = __webpack_require__("../../../../../src/app/quality/quality.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__quality_quality_component__ = __webpack_require__("../../../../../src/app/quality/quality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__quality_new_new_quality_module__ = __webpack_require__("../../../../../src/app/quality/new/new-quality.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__quality_new_new_quality_component__ = __webpack_require__("../../../../../src/app/quality/new/new-quality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__request_request_module__ = __webpack_require__("../../../../../src/app/request/request.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__request_request_component__ = __webpack_require__("../../../../../src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__request_new_new_request_module__ = __webpack_require__("../../../../../src/app/request/new/new-request.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__request_new_new_request_component__ = __webpack_require__("../../../../../src/app/request/new/new-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__Projectlist_projectlist_module__ = __webpack_require__("../../../../../src/app/Projectlist/projectlist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__Projectlist_projectlist_component__ = __webpack_require__("../../../../../src/app/Projectlist/projectlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__specification_specification_module__ = __webpack_require__("../../../../../src/app/specification/specification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__specification_specification_component__ = __webpack_require__("../../../../../src/app/specification/specification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__specification_new_new_specification_module__ = __webpack_require__("../../../../../src/app/specification/new/new-specification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__specification_new_new_specification_component__ = __webpack_require__("../../../../../src/app/specification/new/new-specification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__office_office_component__ = __webpack_require__("../../../../../src/app/office/office.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__office_office_module__ = __webpack_require__("../../../../../src/app/office/office.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__office_new_office_new_office_module__ = __webpack_require__("../../../../../src/app/office/new-office/new-office.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__office_new_office_new_office_component__ = __webpack_require__("../../../../../src/app/office/new-office/new-office.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__overview_overview_module__ = __webpack_require__("../../../../../src/app/overview/overview.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__drawing_drawing_component__ = __webpack_require__("../../../../../src/app/drawing/drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__drawing_drawing_module__ = __webpack_require__("../../../../../src/app/drawing/drawing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__drawing_new_new_drawing_component__ = __webpack_require__("../../../../../src/app/drawing/new/new-drawing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__drawing_new_new_drawing_module__ = __webpack_require__("../../../../../src/app/drawing/new/new-drawing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































































// import { CompanyListComponent} from '../companylist/companylist.component';
// import { CompanyListModule } from '../companylist/compnylist.module';










var overviewState = { name: 'overview', url: '/overview', component: __WEBPACK_IMPORTED_MODULE_88__overview_overview_component__["a" /* OverviewComponent */] };
var userState = { name: 'user', url: '/user', component: __WEBPACK_IMPORTED_MODULE_3__users_user_component__["a" /* UserComponent */] };
var newUserState = { name: 'new-user', url: '/new-user', component: __WEBPACK_IMPORTED_MODULE_4__users_new_new_user_component__["a" /* NewUserComponent */] };
var roleState = { name: 'role', url: '/role', component: __WEBPACK_IMPORTED_MODULE_28__roles_role_component__["a" /* RoleComponent */] };
var newRoleState = { name: 'new-role', url: '/new-role', component: __WEBPACK_IMPORTED_MODULE_30__roles_new_new_role_component__["a" /* NewRoleComponent */] };
var projectState = { name: 'project', url: '/project', component: __WEBPACK_IMPORTED_MODULE_10__project_project_component__["a" /* ProjectComponent */] };
var newProjectState = { name: 'new-project', url: '/new-project', component: __WEBPACK_IMPORTED_MODULE_12__project_new_new_project_component__["a" /* NewProjectComponent */] };
var clientState = { name: 'client', url: '/client', component: __WEBPACK_IMPORTED_MODULE_14__client_client_component__["a" /* ClientComponent */] };
var newClientState = { name: 'new-client', url: '/new-client', component: __WEBPACK_IMPORTED_MODULE_16__client_new_new_client_component__["a" /* NewClientComponent */] };
var companyState = { name: 'company', url: '/company', component: __WEBPACK_IMPORTED_MODULE_18__company_company_component__["a" /* CompanyComponent */] };
var newCompanyState = { name: 'new-company', url: '/new-company', component: __WEBPACK_IMPORTED_MODULE_20__company_new_new_company_component__["a" /* NewCompanyComponent */] };
var phaseState = { name: 'phase', url: '/phase', component: __WEBPACK_IMPORTED_MODULE_22__phase_phase_component__["a" /* PhaseComponent */] };
var newPhaseState = { name: 'new-phase', url: '/new-phase', component: __WEBPACK_IMPORTED_MODULE_24__phase_new_new_phase_component__["a" /* NewPhaseComponent */] };
var documentState = { name: 'document', url: '/document', component: __WEBPACK_IMPORTED_MODULE_32__document_document_component__["a" /* DocumentComponent */] };
var newDocumentState = { name: 'new-file', url: '/new-document', component: __WEBPACK_IMPORTED_MODULE_34__document_new_new_file_component__["a" /* NewDocumentComponent */] };
var boqState = { name: 'boq', url: '/boq', component: __WEBPACK_IMPORTED_MODULE_36__boq_boq_component__["a" /* BoQComponent */] };
var newBoQState = { name: 'new-boq', url: '/new-boq', component: __WEBPACK_IMPORTED_MODULE_38__boq_new_new_boq_component__["a" /* NewBoQComponent */] };
var departmentState = { name: 'department', url: '/department', component: __WEBPACK_IMPORTED_MODULE_40__department_department_component__["a" /* DepartmentComponent */] };
var newDepartmentState = { name: 'new-department', url: '/new-department', component: __WEBPACK_IMPORTED_MODULE_42__department_new_new_department_component__["a" /* NewDepartmentComponent */] };
var sectionState = { name: 'section', url: '/section', component: __WEBPACK_IMPORTED_MODULE_44__section_section_component__["a" /* SectionComponent */] };
var newSectionState = { name: 'new-section', url: '/new-section', component: __WEBPACK_IMPORTED_MODULE_46__section_new_new_section_component__["a" /* NewSectionComponent */] };
var productState = { name: 'product', url: '/product', component: __WEBPACK_IMPORTED_MODULE_48__product_product_component__["a" /* ProductComponent */] };
var newProductState = { name: 'new-product', url: '/new-product', component: __WEBPACK_IMPORTED_MODULE_50__product_new_new_product_component__["a" /* NewProductComponent */] };
var categoryState = { name: 'category', url: '/category', component: __WEBPACK_IMPORTED_MODULE_52__category_category_component__["a" /* CategoryComponent */] };
var newCategoryState = { name: 'new-category', url: '/new-category', component: __WEBPACK_IMPORTED_MODULE_54__category_new_new_category_component__["a" /* NewCategoryComponent */] };
var subcategoryState = { name: 'subcategory', url: '/subcategory', component: __WEBPACK_IMPORTED_MODULE_56__subcategory_subcategory_component__["a" /* SubcategoryComponent */] };
var newSubcategoryState = { name: 'new-subcategory', url: '/new-subcategory', component: __WEBPACK_IMPORTED_MODULE_58__subcategory_new_new_subcategory_component__["a" /* NewSubcategoryComponent */] };
var employeeState = { name: 'employee', url: '/employee', component: __WEBPACK_IMPORTED_MODULE_60__employee_employee_component__["a" /* EmployeeComponent */] };
var newEmployeeState = { name: 'new-employee', url: '/new-employee', component: __WEBPACK_IMPORTED_MODULE_62__employee_new_new_employee_component__["a" /* NewEmployeeComponent */] };
var meetingState = { name: 'meeting', url: '/meeting', component: __WEBPACK_IMPORTED_MODULE_64__meeting_meeting_component__["a" /* MeetingComponent */] };
var newMeetingState = { name: 'new-meeting', url: '/new-meeting', component: __WEBPACK_IMPORTED_MODULE_66__meeting_new_new_meeting_component__["a" /* NewMeetingComponent */] };
var loginState = { name: 'login', url: '/user-login', component: __WEBPACK_IMPORTED_MODULE_68__login_login_component__["a" /* LoginComponent */] };
var qualityState = { name: 'quality', url: '/quality', component: __WEBPACK_IMPORTED_MODULE_70__quality_quality_component__["a" /* QualityComponent */] };
var newQualityState = { name: 'new-quality', url: '/new-quality', component: __WEBPACK_IMPORTED_MODULE_72__quality_new_new_quality_component__["a" /* NewQualityComponent */] };
var requestState = { name: 'request', url: '/request', component: __WEBPACK_IMPORTED_MODULE_74__request_request_component__["a" /* RequestComponent */] };
var newRequestState = { name: 'new-request', url: '/new-request', component: __WEBPACK_IMPORTED_MODULE_76__request_new_new_request_component__["a" /* NewRequestComponent */] };
var projectlistState = { name: 'projectlist', url: '/projectlist', component: __WEBPACK_IMPORTED_MODULE_78__Projectlist_projectlist_component__["a" /* ProjectListComponent */] };
var specificationState = { name: 'specification', url: '/specification', component: __WEBPACK_IMPORTED_MODULE_80__specification_specification_component__["a" /* SpecificationComponent */] };
var NewSpecificationState = { name: 'new-specification', url: '/new-specification', component: __WEBPACK_IMPORTED_MODULE_82__specification_new_new_specification_component__["a" /* NewSpecificationComponent */] };
// const companylistState ={ name:'companylist', url:'/companylist', component:CompanyListComponent};
var officeState = { name: 'office', url: '/office', component: __WEBPACK_IMPORTED_MODULE_83__office_office_component__["a" /* OfficeComponent */] };
var newofficeState = { name: 'new-office', url: '/new-office', component: __WEBPACK_IMPORTED_MODULE_86__office_new_office_new_office_component__["a" /* NewOfficeComponent */] };
var drawingState = { name: 'drawing', url: '/drawing', component: __WEBPACK_IMPORTED_MODULE_89__drawing_drawing_component__["a" /* DrawingComponent */] };
var newDrawingState = { name: 'new-drawing', url: '/new-drawing', component: __WEBPACK_IMPORTED_MODULE_91__drawing_new_new_drawing_component__["a" /* NewDrawingComponent */] };
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_27_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_2__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_7__users_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_5__users_new_new_user_module__["a" /* NewUserModule */],
            // LoginModule,
            __WEBPACK_IMPORTED_MODULE_31__roles_role_module__["a" /* RoleModule */],
            __WEBPACK_IMPORTED_MODULE_29__roles_new_new_role_module__["a" /* NewRoleModule */],
            __WEBPACK_IMPORTED_MODULE_13__project_project_module__["a" /* ProjectModule */],
            __WEBPACK_IMPORTED_MODULE_11__project_new_new_project_module__["a" /* NewProjectModule */],
            __WEBPACK_IMPORTED_MODULE_15__client_client_module__["a" /* ClientModule */],
            __WEBPACK_IMPORTED_MODULE_17__client_new_new_client_module__["a" /* NewClientModule */],
            __WEBPACK_IMPORTED_MODULE_19__company_company_module__["a" /* CompanyModule */],
            __WEBPACK_IMPORTED_MODULE_21__company_new_new_company_module__["a" /* NewCompanyModule */],
            __WEBPACK_IMPORTED_MODULE_23__phase_phase_module__["a" /* PhaseModule */],
            __WEBPACK_IMPORTED_MODULE_25__phase_new_new_phase_module__["a" /* NewPhaseModule */],
            __WEBPACK_IMPORTED_MODULE_33__document_document_module__["a" /* DocumentModule */],
            __WEBPACK_IMPORTED_MODULE_35__document_new_new_file_module__["a" /* NewDocumentModule */],
            __WEBPACK_IMPORTED_MODULE_90__drawing_drawing_module__["a" /* DrawingModule */],
            __WEBPACK_IMPORTED_MODULE_92__drawing_new_new_drawing_module__["a" /* NewDrawingModule */],
            __WEBPACK_IMPORTED_MODULE_41__department_department_module__["a" /* DepartmentModule */],
            __WEBPACK_IMPORTED_MODULE_43__department_new_new_department_module__["a" /* NewDepartmentModule */],
            __WEBPACK_IMPORTED_MODULE_8__search_search_module__["a" /* SearchModule */],
            __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* PaginationModule */],
            __WEBPACK_IMPORTED_MODULE_37__boq_boq_module__["a" /* BoQModule */],
            __WEBPACK_IMPORTED_MODULE_39__boq_new_new_boq_module__["a" /* NewBoQModule */],
            __WEBPACK_IMPORTED_MODULE_45__section_section_module__["a" /* SectionModule */],
            __WEBPACK_IMPORTED_MODULE_47__section_new_new_section_module__["a" /* NewSectionModule */],
            __WEBPACK_IMPORTED_MODULE_49__product_product_module__["a" /* ProductModule */],
            __WEBPACK_IMPORTED_MODULE_51__product_new_new_product_module__["a" /* NewProductModule */],
            __WEBPACK_IMPORTED_MODULE_53__category_category_module__["a" /* CategoryModule */],
            __WEBPACK_IMPORTED_MODULE_55__category_new_new_category_module__["a" /* NewCategoryModule */],
            __WEBPACK_IMPORTED_MODULE_57__subcategory_subcategory_module__["a" /* SubcategoryModule */],
            __WEBPACK_IMPORTED_MODULE_59__subcategory_new_new_subcategory_module__["a" /* NewSubcategoryModule */],
            __WEBPACK_IMPORTED_MODULE_61__employee_employee_module__["a" /* EmployeeModule */],
            __WEBPACK_IMPORTED_MODULE_63__employee_new_new_employee_module__["a" /* NewEmployeeModule */],
            __WEBPACK_IMPORTED_MODULE_65__meeting_meeting_module__["a" /* MeetingModule */],
            __WEBPACK_IMPORTED_MODULE_67__meeting_new_new_meeting_module__["a" /* NewMeetingModule */],
            __WEBPACK_IMPORTED_MODULE_69__quality_quality_module__["a" /* QualityModule */],
            __WEBPACK_IMPORTED_MODULE_71__quality_new_new_quality_module__["a" /* NewQualityModule */],
            __WEBPACK_IMPORTED_MODULE_73__request_request_module__["a" /* RequestModule */],
            __WEBPACK_IMPORTED_MODULE_75__request_new_new_request_module__["a" /* NewRequestModule */],
            __WEBPACK_IMPORTED_MODULE_77__Projectlist_projectlist_module__["a" /* ProjectListModule */],
            __WEBPACK_IMPORTED_MODULE_79__specification_specification_module__["a" /* SpecificationModule */],
            __WEBPACK_IMPORTED_MODULE_81__specification_new_new_specification_module__["a" /* NewSpecificationModule */],
            __WEBPACK_IMPORTED_MODULE_84__office_office_module__["a" /* OfficeModule */],
            __WEBPACK_IMPORTED_MODULE_85__office_new_office_new_office_module__["a" /* NewOfficeModule */],
            __WEBPACK_IMPORTED_MODULE_87__overview_overview_module__["a" /* OverviewModule */],
            __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["UIRouterModule"].forRoot({ states: [userState, newUserState, roleState, newRoleState, projectState,
                    newProjectState, clientState, newClientState, companyState, newCompanyState, phaseState,
                    newPhaseState, documentState, newDocumentState, drawingState, newDrawingState, boqState, newBoQState, departmentState, newDepartmentState,
                    sectionState, newSectionState, productState, newProductState, categoryState, newCategoryState,
                    subcategoryState, newSubcategoryState, employeeState, newEmployeeState, meetingState, newMeetingState,
                    qualityState, newQualityState, requestState, newRequestState, projectlistState, specificationState, NewSpecificationState, officeState,
                    newofficeState, overviewState], useHash: true })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_26__query_obeservables_query_params_service__["a" /* QueryParamsService */]],
        bootstrap: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/query-obeservables/query-params.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryParamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_params__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by gipai on 10/4/2017.
 */



var QueryParamsService = (function () {
    function QueryParamsService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.queryParams = new __WEBPACK_IMPORTED_MODULE_1__query_params__["a" /* QueryParams */]();
    }
    QueryParamsService.prototype.setSearchString = function (searchString) {
        this.queryParams.searchString = searchString;
        this.subject.next(this.queryParams);
    };
    QueryParamsService.prototype.setPageNumber = function (page) {
        this.queryParams.pageNumber = page;
        this.subject.next(this.queryParams);
    };
    QueryParamsService.prototype.getQueryParams = function () {
        return this.subject.asObservable();
    };
    return QueryParamsService;
}());
QueryParamsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], QueryParamsService);

//# sourceMappingURL=query-params.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/query-obeservables/query-params.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryParams; });
/**
 * Created by gipai on 10/4/2017.
 */
var QueryParams = (function () {
    function QueryParams() {
        this._pageNumber = 0;
        this._pageSize = 3;
    }
    Object.defineProperty(QueryParams.prototype, "searchString", {
        get: function () {
            return this._searchString;
        },
        set: function (value) {
            this._searchString = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParams.prototype, "pageNumber", {
        get: function () {
            return this._pageNumber;
        },
        set: function (value) {
            this._pageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParams.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    return QueryParams;
}());

//# sourceMappingURL=query-params.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n<form name=\"form\" ng-submit=\"login()\" role=\"form\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <i class=\"fa fa-key\"></i>\r\n    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"username\" required />\r\n    <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <i class=\"fa fa-lock\"></i>\r\n    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"password\" required />\r\n    <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\r\n  </div>\r\n  <div class=\"form-actions\">\r\n    <button type=\"submit\" ng-disabled=\"form.$invalid || dataLoading\" class=\"btn btn-danger\">Login</button>\r\n    <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {userService} from '../user/user.service';
var LoginComponent = (function () {
    //   status:string;  
    //  username: string;
    //
    //    upassword : string;
    //    router: Router;
    //    currentUser: User = new User();
    //    
    //    
    //      service : userService; 
    function LoginComponent() {
        //        this.service = service;
        //        this.router = router;
        //        
    }
    LoginComponent.prototype.SubmitUser = function () {
        //make wen service call to db using services 
        //     this.service.AuthenticateUser(this.username,this.upassword).then((res) => {
        //        
        //        console.log(res);
        //      var obj = JSON.parse(res);
        //        if (obj.status=="OK"){
        //            
        //            localStorage.setItem('UserName',this.username);
        //            this.router.navigateByUrl('/home');
        //        }
        //        else
        //        {
        //           alert("Invalid UserName and password");
        //        }
        //          
        //    })    
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/discussion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TYPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Discussion; });
var TYPE;
(function (TYPE) {
    TYPE[TYPE["DISCUSSION"] = 0] = "DISCUSSION";
    TYPE[TYPE["SUB_DISCUSSION"] = 1] = "SUB_DISCUSSION";
})(TYPE || (TYPE = {}));
;
var Discussion = (function () {
    function Discussion() {
        this.type = TYPE.DISCUSSION;
        this.numSubDiscussions = 0;
    }
    Discussion.prototype.getItem = function () {
        return this.item;
    };
    Discussion.prototype.setItem = function (item) {
        this.item = item;
    };
    Discussion.prototype.getText = function () {
        return this.text;
    };
    Discussion.prototype.setText = function (text) {
        this.text = text;
    };
    Discussion.prototype.setInfoActionBy = function (infoActionBy) {
        this.infoActionBy = infoActionBy;
    };
    Discussion.prototype.getInfoActionBy = function () {
        return this.infoActionBy;
    };
    /* public addSubTopic(discussion:Discussion){
     this.subDiscussions.push(discussion);
     }
     public getSubTopics():Array<Discussion>{
     return this.subDiscussions;
     }
     public setSubDiscussions(subDiscussions:Array<Discussion>){
     this.subDiscussions = subDiscussions;
     }*/
    Discussion.prototype.setParentDiscussion = function (parent) {
        this.parentDiscussion = parent;
        this.type = TYPE.SUB_DISCUSSION;
        parent.incrementSubDiscussions();
    };
    Discussion.prototype.getParentDiscussion = function () {
        return this.parentDiscussion;
    };
    Discussion.prototype.getNumSubDiscussions = function () {
        return this.numSubDiscussions;
    };
    Discussion.prototype.setNumSubDiscussions = function (numSubDiscussions) {
        this.numSubDiscussions = numSubDiscussions;
    };
    Discussion.prototype.incrementSubDiscussions = function () {
        this.numSubDiscussions++;
    };
    Discussion.prototype.getType = function () {
        return this.type;
    };
    return Discussion;
}());

//# sourceMappingURL=discussion.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/meeting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">MEETING</div>\r\n    <a href=\"#/new-meeting\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Meeting</a>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 3px;\r\n  margin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-meeting rounded\">\r\n  <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Meeting Objective</th>\r\n        <th>Venue</th>\r\n        <th>Uploaded by</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let meeting of meetings.meetings| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: meetings.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\">{{ meeting.objective }}</td>\r\n        <td class=\"table-cell\">{{ meeting.venue }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"meeting.createdBy\" (input)=\"meeting.createdBy=$event.target.textContent\">{{ meeting.createdBy }}</td>\r\n        <td class=\"table-cell\">\r\n          <!-- <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n\r\n          <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\"> -->\r\n\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <!-- <img src=\"assets/delete.svg\" (click) = \"deleteMeeting(meeting)\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\"> -->\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getMeeting(meeting)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteMeeting(currentMeetingId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/meeting/meeting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-project th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/meeting/meeting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meeting_service__ = __webpack_require__("../../../../../src/app/meeting/meeting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meetings__ = __webpack_require__("../../../../../src/app/meeting/meetings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingComponent = (function () {
    function MeetingComponent(meetingService, meetings, queryParamsService) {
        this.meetingService = meetingService;
        this.meetings = meetings;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getMeetings(null);
    }
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getMeetings(queryParam);
        });
    };
    MeetingComponent.prototype.getMeetings = function (queryParams) {
        this.meetingService.getMeetings(queryParams).subscribe(function (data) {
        }, function (error) {
            // console.log(error._body.toString() + ' No Meeting are available');
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    // public deleteMeeting(meeting: Meeting) {
    //   this.meetingService.delete(meeting.getId()).subscribe(data => {
    //   });
    // }
    MeetingComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    MeetingComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    MeetingComponent.prototype.deleteMeeting = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.meetingService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    MeetingComponent.prototype.getMeeting = function (meeting) {
        // this.currentSpecificationName = specification.getSpecificationName();
        this.currentMeetingId = meeting.getId();
    };
    return MeetingComponent;
}());
MeetingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'meeting',
        template: __webpack_require__("../../../../../src/app/meeting/meeting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/meeting/meeting.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__meeting_service__["a" /* MeetingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__meeting_service__["a" /* MeetingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__meetings__["a" /* Meetings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meetings__["a" /* Meetings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], MeetingComponent);

var _a, _b, _c;
//# sourceMappingURL=meeting.component.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/meeting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meeting_component__ = __webpack_require__("../../../../../src/app/meeting/meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_service__ = __webpack_require__("../../../../../src/app/meeting/meeting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meetings__ = __webpack_require__("../../../../../src/app/meeting/meetings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_new_meeting_module__ = __webpack_require__("../../../../../src/app/meeting/new/new-meeting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MeetingModule = (function () {
    function MeetingModule() {
    }
    return MeetingModule;
}());
MeetingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7__new_new_meeting_module__["a" /* NewMeetingModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__meeting_component__["a" /* MeetingComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__meeting_component__["a" /* MeetingComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__meeting_service__["a" /* MeetingService */],
            __WEBPACK_IMPORTED_MODULE_5__meetings__["a" /* Meetings */]
        ],
        bootstrap: []
    })
], MeetingModule);

//# sourceMappingURL=meeting.module.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/meeting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting__ = __webpack_require__("../../../../../src/app/meeting/meeting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meetings__ = __webpack_require__("../../../../../src/app/meeting/meetings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MeetingService = (function () {
    function MeetingService(http, meetings, globals) {
        this.http = http;
        this.meetings = meetings;
        this.globals = globals;
        this.meetingUrl = this.globals.getBackendUrl() + 'mom/';
    }
    MeetingService.prototype.getMeetings = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.meetingUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var meetings = new Array();
            for (i = 0; i < response.length; i++) {
                var meeting = new __WEBPACK_IMPORTED_MODULE_3__meeting__["a" /* Meeting */]();
                meeting.setId(response[i].id);
                meeting.setObjective(response[i].objective);
                meeting.setMeetingType(response[i].type);
                meeting.setVenue(response[i].venue);
                meeting.setDate(response[i].date);
                meeting.setMeetingNo(response[i].meetingNo);
                meeting.setCreatedBy(response[i].createdBy);
                meetings.push(meeting);
            }
            _this.meetings.setMeeting(meetings);
            _this.meetings.setTotalItems(res1.totalElements);
            return true;
        });
    };
    MeetingService.prototype.save = function (meeting) {
        var _this = this;
        var endPoint = this.meetingUrl + meeting.getProjectId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, meeting)
            .map(function (res) {
            var res1 = res.json();
            meeting.setId(res1.id);
            _this.meetings.addMeeting(meeting);
            return res1.id;
        });
    };
    MeetingService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.meetingUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.meetings.deleteMeeting(res1.id);
        });
    };
    return MeetingService;
}());
MeetingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__meetings__["a" /* Meetings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__meetings__["a" /* Meetings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], MeetingService);

var _a, _b, _c;
//# sourceMappingURL=meeting.service.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/meeting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Meeting; });
var Meeting = (function () {
    function Meeting() {
        this.pplList = new Array();
    }
    Meeting.prototype.setId = function (id) {
        this.id = id;
    };
    Meeting.prototype.getId = function () {
        return this.id;
    };
    Meeting.prototype.setMeetingType = function (type) {
        this.meetingType = type;
    };
    Meeting.prototype.getMeetingType = function () {
        return this.meetingType;
    };
    Meeting.prototype.setVenue = function (venue) {
        this.venue = venue;
    };
    Meeting.prototype.getVenue = function () {
        return this.venue;
    };
    Meeting.prototype.setDate = function (ondate) {
        this.date = ondate;
    };
    Meeting.prototype.getDate = function () {
        return this.date;
    };
    Meeting.prototype.setTitle = function (title) {
        this.title = title;
    };
    Meeting.prototype.getTitle = function () {
        return this.title;
    };
    Meeting.prototype.setObjective = function (objective) {
        this.objective = objective;
    };
    Meeting.prototype.getObjective = function () {
        return this.objective;
    };
    Meeting.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Meeting.prototype.getProjectId = function () {
        return this.projectId;
    };
    Meeting.prototype.setMeetingNo = function (meetingNo) {
        this.meetingNo = meetingNo;
    };
    Meeting.prototype.getMeetingNo = function () {
        return this.meetingNo;
    };
    Meeting.prototype.setCreatedBy = function (createdBy) {
        this.createdBy = createdBy;
    };
    Meeting.prototype.getCreatedBy = function () {
        return this.createdBy;
    };
    Meeting.prototype.setPplList = function (employees) {
        this.pplList = employees;
    };
    return Meeting;
}());

//# sourceMappingURL=meeting.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/meetings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Meetings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Meetings = (function () {
    function Meetings() {
        this.meetings = new Array();
    }
    Meetings.prototype.setMeeting = function (meetings) {
        this.meetings = meetings;
    };
    Meetings.prototype.getMeeting = function () {
        return this.meetings;
    };
    Meetings.prototype.deleteMeeting = function (meetingId) {
        var meetingFound = this.meetings.find(function (meeting) { return meetingId === meeting.getId(); });
        var index = this.meetings.indexOf(meetingFound);
        if (index !== -1) {
            this.meetings.splice(index, 1);
            this.totalItems--;
        }
    };
    Meetings.prototype.addMeeting = function (meeting) {
        this.meetings.push(meeting);
        this.totalItems++;
    };
    Meetings.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Meetings.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Meetings;
}());
Meetings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Meetings);

//# sourceMappingURL=meetings.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/new/new-meeting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section \" style=\"background-color:white;\">\r\n        <br>\r\n        <div class=\"column\">\r\n            <div class = \"glyphicon glyphicon-cog\">ADD Meeting</div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n      <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n      \r\n<div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n    <form >\r\n        <div class=\"form-group\">\r\n            <label for=\"meeting-tittle\" class=\"form-control-label\">Project</label>\r\n            <select    [(ngModel)]=\"projectId\" name=\"projects\" (change)=\"onProjectChange()\">\r\n                <option *ngFor=\"let project of projects.projects\" [value]=\"project.id\">\r\n                    {{ project.projectName }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"meeting-tittle\" class=\"form-control-label\">Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"meeting-tittle\" [(ngModel)]=\"tittle\" name=\"tittle\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"meeting-objective\" class=\"form-control-label\">Objective</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"meeting-objective\" [(ngModel)]=\"objective\" name=\"objective\">\r\n          </div>\r\n          <hr>\r\n      <label style=\"text-decoration: underline;\">Summary</label>\r\n        <table>\r\n        <tr >\r\n            <td>Date Of Meeting:\r\n            </td>\r\n            <td >\r\n                <input type=\"date\" class=\"form-control\" id=\"meeting-date\" name=\"date\" [(ngModel)]=\"date\">\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n        <td>Meeting Type:\r\n        </td>\r\n        <td>\r\n          <input type=\"text\" class=\"form-control\" id=\"meeting-type\" name=\"type\" [(ngModel)]=\"type\">\r\n        </td>\r\n      </tr>\r\n      <tr >\r\n          <td>Venue:\r\n          </td>\r\n          <td >\r\n            <input type=\"text\" class=\"form-control\" id=\"meeting-venue\" name=\"venue\" [(ngModel)]=\"venue\">\r\n          </td>\r\n        </tr>\r\n            <!-- <tr>\r\n                <td>Meeting Commenced:\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" class=\"form-control\" id=\"meeting-commenced\" name=\"type\" [(ngModel)]=\"meetingCommenced\">\r\n                </td>\r\n            </tr> -->\r\n            <!-- <tr>\r\n                <td>Meeting Adjourned:\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" class=\"form-control\" id=\"meeting-adjourned\" name=\"type\" [(ngModel)]=\"meetingAdjourned\">\r\n                </td>\r\n            </tr> -->\r\n            <tr>\r\n                <td>Meeting No:\r\n                </td>\r\n                <td>\r\n                    <input type=\"text\" class=\"form-control\" id=\"meeting-no\" name=\"type\" [(ngModel)]=\"meetingNo\">\r\n                </td>\r\n            </tr>\r\n\r\n        </table>\r\n\r\n        <!-- <table class=\"table \">\r\n            <thead>\r\n            <tr>\r\n                <th>Sl No</th>\r\n                <th>Name</th>\r\n                <th>Company</th>\r\n                <th>Role</th>\r\n                <th>References</th>\r\n                <th>Present</th>\r\n                <th>Absent</th>\r\n                <th>Appologies</th>\r\n                <th>DistributionList</th>\r\n\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let employee of employees\">\r\n                <td class = \"table-cell\"></td>\r\n                <td class = \"table-cell\">{{employee.firstname}}</td>\r\n                <td class = \"table-cell\">{{employee.companyName}}</td>\r\n                <td class = \"table-cell\">{{employee.role}}</td>\r\n                <td class = \"table-cell\">{{employee.companyName}}</td>\r\n                <td>\r\n                    <input type=\"checkbox\" name=\"present\" [(ngModel)]=\"employee.isPresent\" style=\"text-align:center; vertical-align: middle;\" (click)=\"onPresent(employee)\">\r\n                </td>\r\n                <td>\r\n                    <input type=\"checkbox\" name=\"absent\" [(ngModel)]=\"employee.isAbsent\" style=\"text-align:center; vertical-align: middle;\"(click)=\"onAbsent(employee)\">\r\n                </td>\r\n                <td>\r\n                    <input type=\"checkbox\" name=\"appologized\" [(ngModel)]=\"employee.isAppologized\" style=\"text-align:center; vertical-align: middle;\"(click)=\"onApologized(employee)\">\r\n                </td>\r\n                <td>\r\n                    <input type=\"checkbox\" name=\"partofdl\" [(ngModel)]=\"employee.isPartOfDL\" style=\"text-align:center; vertical-align: middle;\">\r\n                </td>\r\n\r\n                <td class = \"table-cell\"></td>\r\n            </tr>\r\n            </tbody>\r\n        </table> -->\r\n\r\n        <label style=\"text-decoration: underline;\">Discussed Items</label>\r\n        <table class=\"table \">\r\n        <thead>\r\n        <tr>\r\n            <th>\r\n                Item\r\n            </th>\r\n            <th>\r\n                Discussion\r\n            </th>\r\n            <th>\r\n                Edit\r\n            </th>\r\n            <th>\r\n                Info/Action By\r\n            </th>\r\n\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let discussion of this.discussions\">\r\n            <td class = \"table-cell\">{{discussion.item}}</td>\r\n            <td class = \"table-cell\">\r\n                <input type=\"text\" [(ngModel)]=\"discussion.text\" >\r\n            </td>\r\n            <td class = \"table-cell\" >\r\n                <input type=\"button\" [hidden] =  \"discussion.getType()== 0? false : true\" value=\"AddTopic\" (click) = \"onAddNewDiscussion()\">\r\n                <input type=\"button\" value=\"AddSubTopic\" [hidden] =  \"discussion.getType()== 0? false : true\" (click) = \"onAddNewSubDiscussion(discussion)\">\r\n            </td>\r\n            <td class = \"table-cell\">{{discussion.infoActionBy}}</td>\r\n        </tr>\r\n        </tbody>\r\n        </table>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewMeeting()\" >Add</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/meeting/new/new-meeting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  counter-reset: Serial;\n  /* Set the Serial counter to 0 */ }\n\ntable {\n  border-collapse: separate; }\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: vertical; }\n\nlabel {\n  padding: 12px 12px 12px 0;\n  display: inline-block; }\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right; }\n\ninput[type=submit]:hover {\n  background-color: #45a049; }\n\n.container {\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px; }\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px; }\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px; }\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media (max-width: 600px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/meeting/new/new-meeting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMeetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meeting__ = __webpack_require__("../../../../../src/app/meeting/meeting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_service__ = __webpack_require__("../../../../../src/app/meeting/meeting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting_component__ = __webpack_require__("../../../../../src/app/meeting/meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meetings__ = __webpack_require__("../../../../../src/app/meeting/meetings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employee_employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__employee_employees__ = __webpack_require__("../../../../../src/app/employee/employees.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__discussion__ = __webpack_require__("../../../../../src/app/meeting/discussion.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//declare var jQuery:any;
var meetingState = { name: 'meeting', url: '/meeting', component: __WEBPACK_IMPORTED_MODULE_3__meeting_component__["a" /* MeetingComponent */] };
var NewMeetingComponent = (function () {
    function NewMeetingComponent(meetingService, meetings, stateService, projectService, employeeService, projects, employees) {
        this.meetingService = meetingService;
        this.meetings = meetings;
        this.stateService = stateService;
        this.projectService = projectService;
        this.employeeService = employeeService;
        this.projects = projects;
        this.employees = employees;
        this.MeetingEmployees = new Array();
        this.discussions = new Array();
        //this.router = router;
    }
    NewMeetingComponent.prototype.ngOnInit = function () {
        var discussion = new __WEBPACK_IMPORTED_MODULE_10__discussion__["a" /* Discussion */]();
        discussion.setItem(((this.discussions.length) + 1) + '.0');
        this.discussions.push(discussion);
        this.getProjects();
    };
    NewMeetingComponent.prototype.addNewMeeting = function () {
        var _this = this;
        var meeting = new __WEBPACK_IMPORTED_MODULE_1__meeting__["a" /* Meeting */]();
        meeting.setTitle(this.tittle);
        meeting.setObjective(this.objective);
        meeting.setMeetingType(this.type);
        meeting.setVenue(this.venue);
        meeting.setDate(new Date(this.ondate));
        meeting.setProjectId(this.projectId);
        meeting.setPplList(this.MeetingEmployees);
        this.meetingService.save(meeting).subscribe(function (data) {
            // console.log(data);
            meeting.setId(data);
            _this.meetings.addMeeting(meeting);
            _this.stateService.go('meeting');
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewMeetingComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewMeetingComponent.prototype.getProjects = function () {
        this.projectService.getProjects(null).subscribe(function (data) {
        }, function (error) {
            // console.log(error._body.toString() + " No projects found");
        });
    };
    NewMeetingComponent.prototype.onProjectChange = function () {
        // this.employeeService.getEmployeeByProject(this.projectId).subscribe(data => {
        // }, error => {
        //     console.log(error._body.toString() + " No Employess found");
        // });
    };
    NewMeetingComponent.prototype.onPresent = function (emp) {
        emp.setStatus(0);
    };
    NewMeetingComponent.prototype.onAbsent = function (emp) {
        emp.setStatus(1);
    };
    NewMeetingComponent.prototype.onApologized = function (emp) {
        emp.setStatus(2);
    };
    NewMeetingComponent.prototype.onAddNewDiscussion = function () {
        var discussion = new __WEBPACK_IMPORTED_MODULE_10__discussion__["a" /* Discussion */]();
        var length = this.discussions.length - 1;
        var count = 1;
        for (var i = 0; i < length; i++) {
            if (this.discussions[i].getType() === 0) {
                count++;
            }
        }
        var item = count + '.' + '0';
        discussion.setItem(item);
        this.discussions.push(discussion);
    };
    NewMeetingComponent.prototype.onAddNewSubDiscussion = function (parentDiscussion) {
        var discussion = new __WEBPACK_IMPORTED_MODULE_10__discussion__["a" /* Discussion */]();
        discussion.setParentDiscussion(parentDiscussion);
        var item = parentDiscussion.getItem();
        var tokens = item.split('.');
        var childItem = tokens[0];
        childItem += '.' + parentDiscussion.getNumSubDiscussions();
        discussion.setItem(childItem);
        var i = this.discussions.indexOf(parentDiscussion);
        if (i !== -1) {
            i++;
            for (; i < this.discussions.length; i++) {
                if (this.discussions[i].getType() === 0) {
                    break;
                }
            }
            this.discussions.splice(i, 0, discussion);
        }
    };
    return NewMeetingComponent;
}());
NewMeetingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-meeting',
        template: __webpack_require__("../../../../../src/app/meeting/new/new-meeting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/meeting/new/new-meeting.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__meeting_service__["a" /* MeetingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meeting_service__["a" /* MeetingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__meetings__["a" /* Meetings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__meetings__["a" /* Meetings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__project_project_service__["a" /* ProjectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__employee_employee_service__["a" /* EmployeeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__project_projects__["a" /* Projects */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__employee_employees__["a" /* Employees */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__employee_employees__["a" /* Employees */]) === "function" && _g || Object])
], NewMeetingComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-meeting.component.js.map

/***/ }),

/***/ "../../../../../src/app/meeting/new/new-meeting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMeetingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_meeting_component__ = __webpack_require__("../../../../../src/app/meeting/new/new-meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_project_module__ = __webpack_require__("../../../../../src/app/project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_employee_module__ = __webpack_require__("../../../../../src/app/employee/employee.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewMeetingModule = (function () {
    function NewMeetingModule() {
    }
    return NewMeetingModule;
}());
NewMeetingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__project_project_module__["a" /* ProjectModule */],
            __WEBPACK_IMPORTED_MODULE_5__employee_employee_module__["a" /* EmployeeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_meeting_component__["a" /* NewMeetingComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_meeting_component__["a" /* NewMeetingComponent */]],
        providers: [],
        bootstrap: []
    })
], NewMeetingModule);

//# sourceMappingURL=new-meeting.module.js.map

/***/ }),

/***/ "../../../../../src/app/office/new-office/new-office.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD Office</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n<div class=\"container-fluid rounded\"  style=\"background-color:white;\">\r\n<br>     <div>\r\n       <form>\r\n         <div class=\"form-group\">\r\n           <label for=\"office-addess\" class=\"form-control-label\">Address:</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"office-address\" [(ngModel)]=\"address\" name=\"first\">\r\n         </div>\r\n         <div class=\"form-group\">\r\n           <label for=\"office=telephone\" class=\"form-control-label\">Telephone:</label>\r\n           <input type=\"text\" class=\"form-control\" id=\"telephone\" [(ngModel)]=\"telephone\" name=\"first\">\r\n         </div>\r\n         <div class=\"form-group\">\r\n            <label for=\"office=fax\" class=\"form-control-label\">Fax:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"fax\" [(ngModel)]=\"fax\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"company-option\" class=\"form-control-label\">Companies:</label>\r\n            <select id=\"company-option\" class=\"form-control\"   [(ngModel)]=\"companyId\" name=\"companies\">\r\n              <option *ngFor=\"let company of availableCompanies\" [value]=\"company.id\">\r\n                {{ company.companyName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n       </form>\r\n     </div>\r\n     <div class=\"modal-footer\">\r\n       <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n       <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewOffice()\" >Add</button>\r\n     </div>\r\n   </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/office/new-office/new-office.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/office/new-office/new-office.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOfficeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_companies__ = __webpack_require__("../../../../../src/app/company/companies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__office_component__ = __webpack_require__("../../../../../src/app/office/office.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__office_service__ = __webpack_require__("../../../../../src/app/office/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offices__ = __webpack_require__("../../../../../src/app/office/offices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__office__ = __webpack_require__("../../../../../src/app/office/office.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var officeState = { name: 'office', url: '/office', component: __WEBPACK_IMPORTED_MODULE_3__office_component__["a" /* OfficeComponent */] };
var NewOfficeComponent = (function () {
    function NewOfficeComponent(officeService, companyService, offices, companies, stateService) {
        this.officeService = officeService;
        this.companyService = companyService;
        this.offices = offices;
        this.companies = companies;
        this.stateService = stateService;
        //this.router = router;
    }
    NewOfficeComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    NewOfficeComponent.prototype.addNewOffice = function () {
        var _this = this;
        var office = new __WEBPACK_IMPORTED_MODULE_7__office__["a" /* Office */]();
        office.setAddress(this.address);
        office.setTelephone(this.telephone);
        office.setFax(this.fax);
        office.setCompanyId(this.companyId);
        this.officeService.save(office).subscribe(function (data) {
            // console.log(data);
            office.setId(data);
            _this.offices.addOffice(office);
            _this.stateService.go('office');
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewOfficeComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies(null).subscribe(function (data) {
            _this.availableCompanies = _this.companies.getCompanies();
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    NewOfficeComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewOfficeComponent;
}());
NewOfficeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'new-office',
        template: __webpack_require__("../../../../../src/app/office/new-office/new-office.component.html"),
        styles: [__webpack_require__("../../../../../src/app/office/new-office/new-office.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__office_service__["a" /* OfficeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__office_service__["a" /* OfficeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__company_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_company_service__["a" /* CompanyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__offices__["a" /* Offices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__offices__["a" /* Offices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__company_companies__["a" /* Companies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__company_companies__["a" /* Companies */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewOfficeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-office.component.js.map

/***/ }),

/***/ "../../../../../src/app/office/new-office/new-office.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOfficeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_office_component__ = __webpack_require__("../../../../../src/app/office/new-office/new-office.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewOfficeModule = (function () {
    function NewOfficeModule() {
    }
    return NewOfficeModule;
}());
NewOfficeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_office_component__["a" /* NewOfficeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_office_component__["a" /* NewOfficeComponent */]],
        providers: [],
        bootstrap: []
    })
], NewOfficeModule);

//# sourceMappingURL=new-office.module.js.map

/***/ }),

/***/ "../../../../../src/app/office/office.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\" ><br>\r\n  <div class=\"column\" >\r\n      <div class = \"glyphicon glyphicon-cog\">Office</div>\r\n      <a href=\"#/new-office\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Office</a>\r\n  </div>\r\n    <br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n\r\n<div class=\"container-fluid digi-company rounded\" >\r\n <br>\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Address</th>\r\n      <th>Telephone</th>\r\n      <th>Fax</th>\r\n      <th>Company</th>\r\n      <th>Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n       <tr *ngFor=\"let office of offices.offices | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: offices.totalItems, id:'server'} \">\r\n        <td class =  \"table-cell\">{{ office.address }}</td>\r\n        <td class =  \"table-cell\">{{ office.telephone }}</td>\r\n         <td class = \"table-cell\">{{ office.fax }}</td>\r\n         <td class = \"table-cell\">{{ office.companyName }}</td>\r\n\r\n         <td class = \"table-cell\" > \r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Edit</div>\r\n                </div>\r\n              </tooltip-content>\r\n            <button [disabled]=\"!isValid\" class=\"btn-primary\"  (click) = \"updateOffice(office)\">\r\n              <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n             </button>\r\n              <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Delete</div>\r\n                </div>\r\n              </tooltip-content>\r\n             <button style=\"background-color:red;\" class=\"btn-primary\"  (click) = \"getOffice(office)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n            </button> \r\n         </td>\r\n     </tr>\r\n  </tbody>\r\n </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                  <div class=\"content-wrpr\">\r\n                      Are you sure?\r\n                  </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img  src=\"assets/delete.svg\" (click) = \"deletePOffice(currentOfficeId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/office/office.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".column {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/office/office.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__office_service__ = __webpack_require__("../../../../../src/app/office/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offices__ = __webpack_require__("../../../../../src/app/office/offices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfficeComponent = (function () {
    function OfficeComponent(officeService, offices, queryParamsService) {
        this.officeService = officeService;
        this.offices = offices;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getOffices(null);
    }
    OfficeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getOffices(queryParam);
        });
    };
    OfficeComponent.prototype.getOffices = function (queryParams) {
        this.officeService.getOffices(queryParams).subscribe(function (data) {
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });
    };
    OfficeComponent.prototype.updateOffice = function (office) {
        var _this = this;
        this.loading = true;
        this.officeService.update(office).subscribe(function (data) {
            _this.loading = false;
        });
    };
    OfficeComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    OfficeComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    OfficeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    OfficeComponent.prototype.deleteOffice = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.officeService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    OfficeComponent.prototype.getOffice = function (office) {
        this.currentOfficeId = office.getId();
    };
    return OfficeComponent;
}());
OfficeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'office',
        template: __webpack_require__("../../../../../src/app/office/office.component.html"),
        styles: [__webpack_require__("../../../../../src/app/office/office.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__office_service__["a" /* OfficeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__office_service__["a" /* OfficeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__offices__["a" /* Offices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__offices__["a" /* Offices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], OfficeComponent);

var _a, _b, _c;
//# sourceMappingURL=office.component.js.map

/***/ }),

/***/ "../../../../../src/app/office/office.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__office_component__ = __webpack_require__("../../../../../src/app/office/office.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__office_service__ = __webpack_require__("../../../../../src/app/office/office.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offices__ = __webpack_require__("../../../../../src/app/office/offices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var OfficeModule = (function () {
    function OfficeModule() {
    }
    return OfficeModule;
}());
OfficeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__["TooltipModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__office_component__["a" /* OfficeComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__office_component__["a" /* OfficeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__offices__["a" /* Offices */],
            __WEBPACK_IMPORTED_MODULE_2__office_service__["a" /* OfficeService */]
        ],
        bootstrap: []
    })
], OfficeModule);

//# sourceMappingURL=office.module.js.map

/***/ }),

/***/ "../../../../../src/app/office/office.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offices__ = __webpack_require__("../../../../../src/app/office/offices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__office__ = __webpack_require__("../../../../../src/app/office/office.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OfficeService = (function () {
    function OfficeService(http, offices, globals) {
        this.http = http;
        this.offices = offices;
        this.globals = globals;
        this.officeUrl = this.globals.getBackendUrl() + 'office/';
    }
    OfficeService.prototype.getOffices = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.officeUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var offices = new Array();
            for (i = 0; i < response.length; i++) {
                var office = new __WEBPACK_IMPORTED_MODULE_5__office__["a" /* Office */]();
                office.setAddress(response[i].address);
                office.setFax(response[i].fax);
                office.setTelephone(response[i].telephone);
                office.setCompanyName(response[i].companyName);
                office.setId(response[i].id);
                offices.push(office);
            }
            _this.offices.setOffices(offices);
            _this.offices.setTotalItems(res1.totalElements);
            return true;
        });
    };
    OfficeService.prototype.save = function (office) {
        var _this = this;
        var endPoint = this.officeUrl + office.getCompanyId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, office)
            .map(function (res) {
            var res1 = res.json();
            office.setId(res1.id);
            _this.offices.addOffice(office);
            return res1.id;
        });
    };
    OfficeService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.officeUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.offices.deleteOffice(res1.response);
        });
    };
    OfficeService.prototype.update = function (office) {
        var endPoint = this.officeUrl + office.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return OfficeService;
}());
OfficeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__offices__["a" /* Offices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__offices__["a" /* Offices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], OfficeService);

var _a, _b, _c;
//# sourceMappingURL=office.service.js.map

/***/ }),

/***/ "../../../../../src/app/office/office.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Office; });
var Office = (function () {
    function Office() {
    }
    Office.prototype.setId = function (id) {
        this.id = id;
    };
    Office.prototype.getId = function () {
        return this.id;
    };
    Office.prototype.setAddress = function (address) {
        this.address = address;
    };
    Office.prototype.getAddress = function () {
        return this.address;
    };
    Office.prototype.setFax = function (fax) {
        this.fax = fax;
    };
    Office.prototype.getFax = function () {
        return this.fax;
    };
    Office.prototype.setTelephone = function (telephone) {
        this.telephone = telephone;
    };
    Office.prototype.getTelephone = function () {
        return this.telephone;
    };
    Office.prototype.setCompanyId = function (companyId) {
        this.companyId = companyId;
    };
    Office.prototype.getCompanyId = function () {
        return this.companyId;
    };
    Office.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Office.prototype.getCompanyName = function () {
        return this.companyName;
    };
    return Office;
}());

//# sourceMappingURL=office.js.map

/***/ }),

/***/ "../../../../../src/app/office/offices.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Offices = (function () {
    function Offices() {
        this.offices = new Array();
    }
    Offices.prototype.setOffices = function (offices) {
        this.offices = offices;
    };
    Offices.prototype.getOffices = function () {
        return this.offices;
    };
    Offices.prototype.addOffice = function (office) {
        this.offices.push(office);
        this.totalItems++;
    };
    Offices.prototype.deleteOffice = function (id) {
        var officeFound = this.offices.find(function (office) { return id === office.getId(); });
        var index = this.offices.indexOf(officeFound);
        if (index !== -1) {
            this.offices.splice(index, 1);
            this.totalItems--;
        }
    };
    Offices.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Offices.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Offices;
}());
Offices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Offices);

//# sourceMappingURL=offices.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".big-wrpr{\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex;\r\n\tmargin-top:0%;\r\n\tmargin-left:0%;\r\n    margin-right:0%;\r\n    BACKGROUND-COLOR:WHITE; \r\n    height:14em;\r\n}\r\n.section-wrpr{\r\n\tmargin-bottom:3%;\r\n}\r\n.someTable th{\r\n\tpadding:15px;\r\n}\r\n.someTable td{\r\n\tpadding:15px;\r\n\tfont-weight:600;\r\n}\r\n\r\n.someTable tbody tr{\r\n\tborder-bottom:1px solid #e7ebea;\r\n}\r\n\r\n.someTable table tbody tr:nth-child(odd) {\r\n\tbackground: #FFFFFF;\r\n}\r\n\r\n.someTable table tbody tr:nth-child(even) {\r\n\tbackground: #f7f7f7;\r\n}\r\n.box-wrpr{\r\n    font-size:6em;\r\n\tbox-shadow: 2px 0px 0px #ccc;\r\n\twidth:150px;\r\n\theight:130px;\r\n\t/* border-radius:6px; */\r\n\ttext-align:center;\r\n\t-ms-flex-line-pack:center;\r\n\t    align-content:center;\r\n\tmargin:auto;\r\n\tposition: relative;\r\n}\r\n\r\n.box-wrpr:hover{\r\n\tbox-shadow: 0 3px 8px #ccc;\r\n\ttop: -1px;\r\n}\r\n\r\n.content-wrpr{\r\n    \r\n\twidth:100%;\r\n}\r\n.box-label{\r\n\tmargin-top:10%;\r\n\ttext-align:center;\r\n\twidth:100%\r\n}\r\n.someTable thead{\r\n\tbackground-color:#f1f7f7;\r\n}\r\n.appImg{\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex;\r\n\tpadding:25%;\r\n\tcursor: pointer;\r\n}\r\n.pointer{\r\n\tcursor: pointer;\r\n}\r\n.bold{\r\n    font-weight:bold;\r\n    font-size:230%;\r\n    padding:2em;\r\n}\r\n\r\n.marginTop40{\r\n\tmargin-top:40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section-wrpr\"  >\r\n    <div class=\"section-label bold box-border-bottom\" style=\"BACKGROUND-COLOR:WHITE\"> System overview</div>\r\n    \r\n    <div class=\"big-wrpr\" >\r\n      \r\n      <div class=\"content-wrpr\">\r\n          <label class=\"box-label\" for=\"\">TOTAL COMPANIES</label>\r\n        <div class=\" box-wrpr text-center\">{{totalCompany}}  </div>\r\n      </div>\r\n      <div class=\"content-wrpr\">\r\n           <label class=\"box-label\" for=\"\">TOTAL PROJECT</label>\r\n        <div class=\" box-wrpr text-center\">{{totalProjects}}</div>\r\n      </div>\r\n      <div class=\"content-wrpr\">\r\n         <label class=\"box-label\" for=\"\">TOTAL USERS</label>\r\n         <div class=\" box-wrpr text-center\">{{totalUsers}}</div>\r\n      </div>\r\n      <div class=\"content-wrpr\">\r\n          <label class=\"box-label\" for=\"\">TOTAL DOCS</label>\r\n          <div class=\" box-wrpr text-center\">{{totalDocuments}}</div>\r\n      </div>\r\n  </div>\r\n    <div class=\"clearfix\"></div>\r\n    \r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = (function () {
    function OverviewComponent(http, globals) {
        this.http = http;
        this.globals = globals;
        this.overviewUrl = 'http://localhost:8080/overview/';
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.getOverviewDetails();
    };
    OverviewComponent.prototype.getOverviewDetails = function () {
        var _this = this;
        return this.http.get(this.overviewUrl).subscribe(function (res) {
            var res1 = res.json();
            var response = res1.response;
            _this.totalCompany = response.totalCompany;
            _this.totalProjects = response.totalProjects;
            _this.totalDocuments = response.totalDocuments;
            _this.totalUsers = response.totalUsers;
        });
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* Globals */]) === "function" && _b || Object])
], OverviewComponent);

var _a, _b;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { HttpClientModule } from '@angular/common/http';
var OverviewModule = (function () {
    function OverviewModule() {
    }
    return OverviewModule;
}());
OverviewModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__overview_overview_component__["a" /* OverviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_tooltip__["TooltipModule"],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_7__overview_overview_component__["a" /* OverviewComponent */]],
        providers: [],
        bootstrap: []
    })
], OverviewModule);

//# sourceMappingURL=overview.module.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/3/2017.
 */


var PaginationComponent = (function () {
    function PaginationComponent(queryParamsService) {
        this.queryParamsService = queryParamsService;
    }
    PaginationComponent.prototype.getPage = function (page) {
        this.queryParamsService.setPageNumber(page - 1);
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pagination',
        template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by gipai on 10/3/2017.
 */



var PaginationModule = (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());
PaginationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__pagination_component__["a" /* PaginationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__pagination_component__["a" /* PaginationComponent */]],
        providers: [],
        bootstrap: []
    })
], PaginationModule);

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "../../../../../src/app/phase/new/new-phase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD PHASE</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n<div class=\"container-fluid rounded\" >\r\n <br>\r\n      <div>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"phase-name\" class=\"form-control-label\">Phase Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"phase-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>       \r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewPhase()\" >Add</button>\r\n        <img src=\"assets/35.gif\" *ngIf=\"loading\" />\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/phase/new/new-phase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-newphase th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n\n.hr {\n  margin-top: 3px;\n  margin-bottom: 0px;\n  border: 0;\n  border-top: 1px solid #eee; }\n\n.form-control {\n  width: 35%; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phase/new/new-phase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPhaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phase__ = __webpack_require__("../../../../../src/app/phase/phase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phase_service__ = __webpack_require__("../../../../../src/app/phase/phase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phases__ = __webpack_require__("../../../../../src/app/phase/phases.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__phase_component__ = __webpack_require__("../../../../../src/app/phase/phase.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var phaseState = { name: 'phase', url: '/phase', component: __WEBPACK_IMPORTED_MODULE_5__phase_component__["a" /* PhaseComponent */] };
var NewPhaseComponent = (function () {
    function NewPhaseComponent(phaseService, phases, stateService) {
        this.phaseService = phaseService;
        this.phases = phases;
        this.stateService = stateService;
        this.loading = false;
    }
    NewPhaseComponent.prototype.ngOnInit = function () {
    };
    NewPhaseComponent.prototype.addNewPhase = function () {
        var _this = this;
        this.loading = true;
        var phase = new __WEBPACK_IMPORTED_MODULE_0__phase__["a" /* Phase */]();
        phase.setName(this.name);
        this.phaseService.save(phase).subscribe(function (data) {
            // console.log(data);
            window.history.back();
            _this.stateService.go('phase');
            _this.loading = false;
        }, function (error) {
            window.alert(error._body);
            _this.loading = false;
        });
    };
    NewPhaseComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewPhaseComponent;
}());
NewPhaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'new-phase',
        template: __webpack_require__("../../../../../src/app/phase/new/new-phase.component.html"),
        styles: [__webpack_require__("../../../../../src/app/phase/new/new-phase.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phase_service__["a" /* PhaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phase_service__["a" /* PhaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__phases__["a" /* Phases */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__phases__["a" /* Phases */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["StateService"]) === "function" && _c || Object])
], NewPhaseComponent);

var _a, _b, _c;
//# sourceMappingURL=new-phase.component.js.map

/***/ }),

/***/ "../../../../../src/app/phase/new/new-phase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPhaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_phase_component__ = __webpack_require__("../../../../../src/app/phase/new/new-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewPhaseModule = (function () {
    function NewPhaseModule() {
    }
    return NewPhaseModule;
}());
NewPhaseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_phase_component__["a" /* NewPhaseComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_phase_component__["a" /* NewPhaseComponent */]],
        providers: [],
        bootstrap: []
    })
], NewPhaseModule);

//# sourceMappingURL=new-phase.module.js.map

/***/ }),

/***/ "../../../../../src/app/phase/phase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded  \">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">MANAGE PHASES</div>\r\n    <a href=\"#/new-phase\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Phase</a>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-phase rounded\">\r\n<br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Phase Name</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let phase of phases.phases| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: phases.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"phase.name\" (input)=\"phase.name=$event.target.textContent\">{{ phase.name }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button type=\"button\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\" class=\"btn btn-primary\" (click)=\"getPhase(phase)\"\r\n            data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <span class=\"glyphicon glyphicon-remove\"></span>\r\n          </button>\r\n          <!-- <img src=\"assets/35.gif\" *ngIf=\"loading\" /> -->\r\n\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"updatePhase(phase)\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n            <!-- [disabled]=\"!isValid\" -->\r\n            <span class=\"glyphicon glyphicon-edit\"></span>\r\n          </button>\r\n          <!-- <img src=\"assets/edit.svg\" *ngIf=\"loading\" /> -->\r\n\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deletePhase(currentPhaseId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/phase/phase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-phase th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phase/phase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phase_service__ = __webpack_require__("../../../../../src/app/phase/phase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phases__ = __webpack_require__("../../../../../src/app/phase/phases.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhaseComponent = (function () {
    function PhaseComponent(phaseService, phases, queryParamsService) {
        this.phaseService = phaseService;
        this.phases = phases;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getPhases(null);
    }
    PhaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isValid = false;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getPhases(queryParam);
        });
    };
    PhaseComponent.prototype.getPhases = function (queryParams) {
        this.phaseService.getPhases(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    // public deletePhase(phase: Phase) {
    //   this.loading = true;
    //   this.phaseService.delete(phase.getId()).subscribe(data => {
    // 	 this.loading = false;
    //   });
    // }
    PhaseComponent.prototype.deletePhase = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.phaseService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    PhaseComponent.prototype.getPhase = function (phase) {
        this.currentPhaseId = phase.getId();
    };
    PhaseComponent.prototype.updatePhase = function (phase) {
        var _this = this;
        this.loading = true;
        this.phaseService.update(phase).subscribe(function (data) {
            _this.loading = false;
        });
    };
    PhaseComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
        // console.log(event.target.outerText, phase.id);
    };
    PhaseComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    PhaseComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return PhaseComponent;
}());
PhaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'phase',
        template: __webpack_require__("../../../../../src/app/phase/phase.component.html"),
        styles: [__webpack_require__("../../../../../src/app/phase/phase.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phase_service__["a" /* PhaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phase_service__["a" /* PhaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__phases__["a" /* Phases */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__phases__["a" /* Phases */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], PhaseComponent);

var _a, _b, _c;
//# sourceMappingURL=phase.component.js.map

/***/ }),

/***/ "../../../../../src/app/phase/phase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phase_component__ = __webpack_require__("../../../../../src/app/phase/phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phase_service__ = __webpack_require__("../../../../../src/app/phase/phase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_phase_module__ = __webpack_require__("../../../../../src/app/phase/new/new-phase.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__phases__ = __webpack_require__("../../../../../src/app/phase/phases.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PhaseModule = (function () {
    function PhaseModule() {
    }
    return PhaseModule;
}());
PhaseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__phase_component__["a" /* PhaseComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_phase_module__["a" /* NewPhaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__phase_component__["a" /* PhaseComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__phases__["a" /* Phases */],
            __WEBPACK_IMPORTED_MODULE_2__phase_service__["a" /* PhaseService */]
        ],
        bootstrap: []
    })
], PhaseModule);

//# sourceMappingURL=phase.module.js.map

/***/ }),

/***/ "../../../../../src/app/phase/phase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phase__ = __webpack_require__("../../../../../src/app/phase/phase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phases__ = __webpack_require__("../../../../../src/app/phase/phases.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhaseService = (function () {
    function PhaseService(http, phases, globals) {
        this.http = http;
        this.phases = phases;
        this.globals = globals;
        this.phaseUrl = this.globals.getBackendUrl() + 'phase/';
    }
    PhaseService.prototype.getPhases = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.phaseUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var phases = new Array();
            for (i = 0; i < response.length; i++) {
                var phase = new __WEBPACK_IMPORTED_MODULE_3__phase__["a" /* Phase */]();
                phase.setName(response[i].name);
                phase.setId(response[i].id);
                phases.push(phase);
            }
            _this.phases.setPhases(phases);
            _this.phases.setTotalItems(res1.totalElements);
            return true;
        });
    };
    PhaseService.prototype.save = function (phase) {
        var _this = this;
        var endPoint = this.phaseUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, phase)
            .map(function (res) {
            var res1 = res.json();
            phase.setId(res1.id);
            _this.phases.addPhase(phase);
            return res1.id;
        });
    };
    PhaseService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.phaseUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.phases.deletePhase(res1.response);
        });
    };
    PhaseService.prototype.update = function (phase) {
        var endPoint = this.phaseUrl + phase.getId();
        // Returns response
        return this.http.patch(endPoint, phase)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return PhaseService;
}());
PhaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__phases__["a" /* Phases */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__phases__["a" /* Phases */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], PhaseService);

var _a, _b, _c;
//# sourceMappingURL=phase.service.js.map

/***/ }),

/***/ "../../../../../src/app/phase/phase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase; });
var Phase = (function () {
    function Phase() {
    }
    Phase.prototype.setId = function (id) {
        this.id = id;
    };
    Phase.prototype.getId = function () {
        return this.id;
    };
    Phase.prototype.setName = function (name) {
        this.name = name;
    };
    Phase.prototype.getName = function () {
        return this.name;
    };
    return Phase;
}());

//# sourceMappingURL=phase.js.map

/***/ }),

/***/ "../../../../../src/app/phase/phases.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phases; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Phases = (function () {
    function Phases() {
        this.phases = new Array();
    }
    Phases.prototype.setPhases = function (phases) {
        this.phases = phases;
    };
    Phases.prototype.getPhases = function () {
        return this.phases;
    };
    Phases.prototype.addPhase = function (phase) {
        this.phases.push(phase);
        this.totalItems++;
    };
    Phases.prototype.deletePhase = function (id) {
        var phaseFound = this.phases.find(function (phase) { return id === phase.getId(); });
        var index = this.phases.indexOf(phaseFound);
        if (index !== -1) {
            this.phases.splice(index, 1);
            this.totalItems--;
        }
    };
    Phases.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Phases.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Phases;
}());
Phases = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Phases);

//# sourceMappingURL=phases.js.map

/***/ }),

/***/ "../../../../../src/app/product/new/new-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \" style=\"background-color:white;\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD PRODUCT</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n<div class=\"container-fluid rounded \"  style=\"background-color:white;\" >\r\n<br>      <div >\r\n        <form>\r\n          <div class=\"form-group\" >\r\n            <label for=\"section-option\" class=\"form-control-label\">Sections:</label>\r\n            <select id=\"section-option\" class=\"form-control\"   [(ngModel)]=\"sectionId\" name=\"sections\">\r\n              <option *ngFor=\"let section of availableSections\" [value]=\"section.id\">\r\n                {{ section.sectionName }}\r\n              </option>\r\n            </select>            \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"product-name\" class=\"form-control-label\">Product Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"product-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"category-option\" class=\"form-control-label\">Categories:</label>\r\n            <select id=\"category-option\" class=\"form-control\"   [(ngModel)]=\"categoryId\" name=\"categories\">\r\n              <option *ngFor=\"let category of availableCategories\" [value]=\"category.id\">\r\n                {{ category.name }}\r\n              </option>\r\n            </select>            \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"quantity\" class=\"form-control-label\">Quantity:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"quantity\" [(ngModel)]=\"quantity\" name=\"second\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"amount\" class=\"form-control-label\">Amount:</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"quantity\" [(ngModel)]=\"amount\" name=\"third\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"unit\" class=\"form-control-label\">Unit:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"quantity\" [(ngModel)]=\"unit\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"bimId\" class=\"form-control-label\">Bim Id:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"bimId\" [(ngModel)]=\"bimId\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"description\" class=\"form-control-label\">Description:</label>\r\n            <input type=\"textarea\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"first\">\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n\t        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n\t        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewProduct()\" >Add</button>\r\n      \t  </div>\r\n        </form>\r\n      </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product/new/new-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rounded {\n  background: #FFFFFF; }\n\n.hr {\n  margin-top: 3px;\n  margin-bottom: 0px;\n  border: 0;\n  border-top: 1px solid #eee; }\n\n.form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/new/new-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("../../../../../src/app/product/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products__ = __webpack_require__("../../../../../src/app/product/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_section_service__ = __webpack_require__("../../../../../src/app/section/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_categories__ = __webpack_require__("../../../../../src/app/category/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//declare var jQuery:any;
var productState = { name: 'product', url: '/product', component: __WEBPACK_IMPORTED_MODULE_9__product_component__["a" /* ProductComponent */] };
var NewProductComponent = (function () {
    function NewProductComponent(sectionService, productService, categoryService, products, sections, categories, stateService) {
        this.sectionService = sectionService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.products = products;
        this.sections = sections;
        this.categories = categories;
        this.stateService = stateService;
    }
    NewProductComponent.prototype.ngOnInit = function () {
        this.getSections();
        this.getCategories();
        this.sectionId = this.productService.getSelectedSection();
        console.log(this.sectionId);
    };
    NewProductComponent.prototype.addNewProduct = function () {
        var _this = this;
        var product = new __WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]();
        product.setSectionId(this.sectionId);
        product.setProductCatName(this.categoryId);
        product.setName(this.name);
        product.setAmount(this.amount);
        product.setBimId(this.bimId);
        product.setDescription(this.description);
        product.setUnit(this.unit);
        product.setQuantity(this.quantity);
        this.productService.save(product).subscribe(function (data) {
            // console.log(data);
            //product.setId(data);
            // this.products.addProduct(product);
            _this.stateService.go('product');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProductComponent.prototype.getSections = function () {
        var _this = this;
        this.sectionService.getSections(null).subscribe(function (data) {
            _this.availableSections = _this.sections.getSections();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProductComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories(null).subscribe(function (data) {
            _this.availableCategories = _this.categories.getCategories();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProductComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewProductComponent;
}());
NewProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'new-product',
        template: __webpack_require__("../../../../../src/app/product/new/new-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/new/new-product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__section_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__section_section_service__["a" /* SectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__category_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__products__["a" /* Products */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__products__["a" /* Products */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__section_sections__["a" /* Sections */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__section_sections__["a" /* Sections */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__category_categories__["a" /* Categories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__category_categories__["a" /* Categories */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"]) === "function" && _g || Object])
], NewProductComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/new/new-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_product_component__ = __webpack_require__("../../../../../src/app/product/new/new-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewProductModule = (function () {
    function NewProductModule() {
    }
    return NewProductModule;
}());
NewProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_product_component__["a" /* NewProductComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_product_component__["a" /* NewProductComponent */]],
        providers: [],
        bootstrap: []
    })
], NewProductModule);

//# sourceMappingURL=new-product.module.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-color:white;\">\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class=\"glyphicon glyphicon-cog\">MANAGE PRODUCTS</div>\r\n        <div >BOQ id- {{ currentBoQNumber }}</div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 3px;\r\n  margin-bottom: 1px;\">\r\n\r\n  <div class=\"container-fluid\" style=\"background-color:white;\">\r\n      <br>\r\n      <div class=\"column\">\r\n          <label for=\"section-option\" class=\"form-control-label\">Section:</label>\r\n          <select style=\"display: initial;width: 50%;\" item-width=\"50%\" id=\"section-option\" class=\"form-control\" [(ngModel)]=\"sectionId\"\r\n            name=\"sections\">\r\n            <option *ngFor=\"let section of availableSections\" [value]=\"section.id\" (click)=\"setSelectedSectionId(section.id)\">\r\n              {{ section.sectionName }}\r\n            </option>\r\n          </select>\r\n          <a href=\"#/new-product\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Product</a>\r\n        </div>\r\n      <br>\r\n    </div>\r\n    <hr style=\"margin-top: 3px;\r\n    margin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-product\" style=\"background-color:white;\">\r\n  <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table \">\r\n    <thead>\r\n      <tr>\r\n        <th>Product Name</th>\r\n        <th>Unit</th>\r\n        <th>Quantity</th>\r\n        <th>Amount</th>\r\n        <th>Description</th>\r\n        <th>Bim Id</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products.products| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: products.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"product.name\" (input)=\"product.name=$event.target.textContent\">{{ product.name }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"product.unit\" (input)=\"product.unit=$event.target.textContent\">{{ product.unit }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"product.quantity\" (input)=\"product.quantity=$event.target.textContent\">{{ product.quantity }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"product.amount\" (input)=\"product.amount=$event.target.textContent\">{{ product.amount }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"product.description\" (input)=\"product.description=$event.target.textContent\">{{ product.description }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"product.bimId\" (input)=\"product.bimId=$event.target.textContent\">{{ product.bimId }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateProduct(product)\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\">\r\n          </button>\r\n\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getProduct(product)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteProduct(currentProductId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-product th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  border-radius: 10px;\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__("../../../../../src/app/product/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_section_service__ = __webpack_require__("../../../../../src/app/section/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boq_boq_service__ = __webpack_require__("../../../../../src/app/boq/boq.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductComponent = (function () {
    function ProductComponent(productService, sectionService, products, sections, boQService, queryParamsService) {
        this.productService = productService;
        this.sectionService = sectionService;
        this.products = products;
        this.sections = sections;
        this.boQService = boQService;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getProducts(null);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSections();
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getProducts(queryParam);
        });
        this.currentBoQNumber = this.boQService.getSelectedBoQNumber();
    };
    ProductComponent.prototype.getProducts = function (queryParams) {
        this.productService.getProducts(queryParams, this.sectionId).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    ProductComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.loading = true;
        this.productService.update(product).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ProductComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.productService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    ProductComponent.prototype.getProduct = function (product) {
        this.currentProductId = product.getId();
    };
    ProductComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    ProductComponent.prototype.getSections = function () {
        var _this = this;
        this.sectionService.getSections(null).subscribe(function (data) {
            _this.availableSections = _this.sections.getSections();
        }, function (error) {
            window.alert(error._body);
        });
    };
    ProductComponent.prototype.setSelectedSectionId = function (sectionId) {
        this.productService.setSelectedSection(sectionId);
        console.log("Selected Section " + sectionId);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__section_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__section_section_service__["a" /* SectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__products__["a" /* Products */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__products__["a" /* Products */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__section_sections__["a" /* Sections */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__section_sections__["a" /* Sections */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__boq_boq_service__["a" /* BoQService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__boq_boq_service__["a" /* BoQService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _f || Object])
], ProductComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products__ = __webpack_require__("../../../../../src/app/product/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_component__["a" /* ProductComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__product_component__["a" /* ProductComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__products__["a" /* Products */],
            __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]
        ],
        bootstrap: []
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product__ = __webpack_require__("../../../../../src/app/product/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products__ = __webpack_require__("../../../../../src/app/product/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = (function () {
    function ProductService(http, products, globals) {
        this.http = http;
        this.products = products;
        this.globals = globals;
        this.productUrl = this.globals.getBackendUrl() + 'product/';
    }
    ProductService.prototype.setSelectedSection = function (selectedSection) {
        this.selectedSection = selectedSection;
    };
    ProductService.prototype.getSelectedSection = function () {
        return this.selectedSection;
    };
    ProductService.prototype.getProducts = function (queryParams, sectionId) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.productUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint, sectionId)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var products = new Array();
            for (i = 0; i < response.length; i++) {
                var product = new __WEBPACK_IMPORTED_MODULE_3__product__["a" /* Product */]();
                product.setSectionName(response[i].sectionName);
                product.setProductCatName(response[i].productCatName);
                product.setName(response[i].name);
                product.setQuantity(response[i].quantity);
                product.setBimId(response[i].bimId);
                product.setAmount(response[i].amount);
                product.setUnit(response[i].unit);
                product.setDescription(response[i].description);
                products.push(product);
            }
            _this.products.setProducts(products);
            _this.products.setTotalItems(res1.totalElements);
            return true;
        });
    };
    ProductService.prototype.save = function (product) {
        var _this = this;
        var endPoint = this.productUrl + product.getSectionId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, product)
            .map(function (res) {
            var res1 = res.json();
            product.setId(res1.id);
            _this.products.addProduct(product);
            return res1.id;
        });
    };
    ProductService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.productUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.products.deleteProduct(res1.response);
        });
    };
    ProductService.prototype.update = function (product) {
        var endPoint = this.productUrl + product.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__products__["a" /* Products */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__products__["a" /* Products */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], ProductService);

var _a, _b, _c;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setProductCatName = function (productCatName) {
        this.productCatName = productCatName;
    };
    Product.prototype.getProductCatName = function () {
        return this.productCatName;
    };
    Product.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Product.prototype.getQuantity = function () {
        return this.quantity;
    };
    Product.prototype.setBimId = function (bimId) {
        this.bimId = bimId;
    };
    Product.prototype.getBimId = function () {
        return this.bimId;
    };
    Product.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Product.prototype.getAmount = function () {
        return this.amount;
    };
    Product.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    Product.prototype.getUnit = function () {
        return this.unit;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setSectionName = function (sectionName) {
        this.sectionName = sectionName;
    };
    Product.prototype.getSectionName = function () {
        return this.sectionName;
    };
    Product.prototype.setSectionId = function (sectionId) {
        this.sectionId = sectionId;
    };
    Product.prototype.getSectionId = function () {
        return this.sectionId;
    };
    Product.prototype.setCategoryId = function (categoryId) {
        this.categoryId = categoryId;
    };
    Product.prototype.getCategoryId = function () {
        return this.categoryId;
    };
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/product/products.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Products; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Products = (function () {
    function Products() {
        this.products = new Array();
    }
    Products.prototype.setProducts = function (products) {
        this.products = products;
    };
    Products.prototype.getProducts = function () {
        return this.products;
    };
    Products.prototype.deleteProduct = function (productId) {
        var productFound = this.products.find(function (product) { return productId === product.getId(); });
        var index = this.products.indexOf(productFound);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.totalItems--;
        }
    };
    Products.prototype.addProduct = function (product) {
        this.products.push(product);
        this.totalItems++;
    };
    Products.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Products.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Products;
}());
Products = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Products);

//# sourceMappingURL=products.js.map

/***/ }),

/***/ "../../../../../src/app/project/new/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\" >\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">ADD PROJECT</div>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n\r\n<div class=\"container-fluid rounded\" >\r\n  <br>\r\n  <div>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"project-name\" class=\"form-control-label\">Project Name:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"project-name\" [(ngModel)]=\"projectName\" name=\"first\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"site-address\" class=\"form-control-label\">Site Address:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"site-address\" [(ngModel)]=\"siteAddress\" name=\"first\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\" class=\"form-control-label\">Description:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"first\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"start-date\" class=\"form-control-label\">Start Date:</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"start-date\" [(ngModel)]=\"startDate\" name=\"first\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"client-option\" class=\"form-control-label\">Clients:</label>\r\n        <select id=\"client-option\" class=\"form-control\" [(ngModel)]=\"clientId\" name=\"clients\">\r\n          <option *ngFor=\"let client of availableClients\" [value]=\"client.id\">\r\n            {{ client.name }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"phase-option\" class=\"form-control-label\">Phases:</label>\r\n        <select id=\"phase-option\" class=\"form-control\" [(ngModel)]=\"phase\" name=\"phases\">\r\n          <option *ngFor=\"let phase of availablePhases\" [value]=\"phase.id\">\r\n            {{ phase.name }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewProject()\">Add</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/new/new-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n\n.rounded {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/new/new-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_client_service__ = __webpack_require__("../../../../../src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_clients__ = __webpack_require__("../../../../../src/app/client/clients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phase_phases__ = __webpack_require__("../../../../../src/app/phase/phases.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase_phase_service__ = __webpack_require__("../../../../../src/app/phase/phase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project__ = __webpack_require__("../../../../../src/app/project/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//declare var jQuery:any;
var projectState = { name: 'project', url: '/project', component: __WEBPACK_IMPORTED_MODULE_9__project_component__["a" /* ProjectComponent */] };
var NewProjectComponent = (function () {
    function NewProjectComponent(projectService, clientService, phaseService, projects, clients, phases, stateService) {
        this.projectService = projectService;
        this.clientService = clientService;
        this.phaseService = phaseService;
        this.projects = projects;
        this.clients = clients;
        this.phases = phases;
        this.stateService = stateService;
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.getPhases();
    };
    NewProjectComponent.prototype.addNewProject = function () {
        var _this = this;
        var project = new __WEBPACK_IMPORTED_MODULE_5__project__["a" /* Project */]();
        project.setProjectName(this.projectName);
        project.setSiteAddress(this.siteAddress);
        project.setDescription(this.description);
        project.setStartDate(new Date(this.startDate));
        project.setClientId(this.clientId);
        project.setPhase(this.phase);
        this.projectService.save(project).subscribe(function (data) {
            // console.log(data);
            //project.setId(data);
            //this.projects.addProject(project);
            _this.stateService.go('project');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProjectComponent.prototype.getPhases = function () {
        var _this = this;
        this.phaseService.getPhases(null).subscribe(function (data) {
            _this.availablePhases = _this.phases.getPhases();
        }, function (error) {
            // console.log(error._body.toString() + " No phases found");
        });
    };
    NewProjectComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients(null).subscribe(function (data) {
            _this.availableClients = _this.clients.getClients();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProjectComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewProjectComponent;
}());
NewProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-project',
        template: __webpack_require__("../../../../../src/app/project/new/new-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/new/new-project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__phase_phase_service__["a" /* PhaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__phase_phase_service__["a" /* PhaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__projects__["a" /* Projects */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__client_clients__["a" /* Clients */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__client_clients__["a" /* Clients */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__phase_phases__["a" /* Phases */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__phase_phases__["a" /* Phases */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"]) === "function" && _g || Object])
], NewProjectComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/new/new-project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_project_component__ = __webpack_require__("../../../../../src/app/project/new/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewProjectModule = (function () {
    function NewProjectModule() {
    }
    return NewProjectModule;
}());
NewProjectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_project_component__["a" /* NewProjectComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_project_component__["a" /* NewProjectComponent */]],
        providers: [],
        bootstrap: []
    })
], NewProjectModule);

//# sourceMappingURL=new-project.module.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \">\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class=\"glyphicon glyphicon-cog\">MANAGE PROJECTS</div>\r\n        <a href=\"#/new-project\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Project</a>\r\n      </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 3px;\r\n  margin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-project rounded\">\r\n <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table \">\r\n    <thead>\r\n      <tr>\r\n        <th>Project Name</th>\r\n        <th>Job Number</th>\r\n        <th>Site Address</th>\r\n        <th>Description</th>\r\n        <th>Start Date</th>\r\n        <th>Phase</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let project of projects.projects| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: projects.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"project.projectName\" (input)=\"project.projectName=$event.target.textContent\">{{ project.projectName }}</td>\r\n        <td class=\"table-cell\" >{{ project.jobNumber }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"project.siteAddress\" (input)=\"project.siteAddress=$event.target.textContent\">{{ project.siteAddress }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"project.description\" (input)=\"project.description=$event.target.textContent\">{{ project.description }}</td>\r\n        <td class=\"table-cell\">{{ project.startDate | date:'MM/dd/yyyy' }}</td>\r\n        <td class=\"table-cell\">{{ project.phase }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateProject(project)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getProject(project)\" data-toggle=\"modal\" data-target=\".bd1-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd1-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteProject(currentProjectId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br><br>\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h6 class=\"panel-title\">\r\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\r\n        + Phase\r\n      </a>\r\n    </h6>\r\n  </div>\r\n  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"panel-body\">\r\n        <phase></phase>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-project th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(projectService, projects, queryParamsService) {
        this.projectService = projectService;
        this.projects = projects;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getProjects(null);
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getProjects(queryParam);
        });
    };
    ProjectComponent.prototype.getProjects = function (queryParams) {
        this.projectService.getProjects(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    ProjectComponent.prototype.updateProject = function (project) {
        var _this = this;
        this.loading = true;
        this.projectService.update(project).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ProjectComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    ProjectComponent.prototype.deleteProject = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.projectService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    ProjectComponent.prototype.getProject = function (project) {
        this.currentProjectName = project.getProjectName();
        this.currentProjectId = project.getId();
    };
    ProjectComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    ProjectComponent.prototype.toggle = function (id) {
        this.editRowId = id;
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project',
        template: __webpack_require__("../../../../../src/app/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__projects__["a" /* Projects */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], ProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_project_module__ = __webpack_require__("../../../../../src/app/project/new/new-project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__phase_phase_module__ = __webpack_require__("../../../../../src/app/phase/phase.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProjectModule = (function () {
    function ProjectModule() {
    }
    return ProjectModule;
}());
ProjectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_project_module__["a" /* NewProjectModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_11__phase_phase_module__["a" /* PhaseModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__project_component__["a" /* ProjectComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__project_component__["a" /* ProjectComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__projects__["a" /* Projects */],
            __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */]
        ],
        bootstrap: []
    })
], ProjectModule);

//# sourceMappingURL=project.module.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project__ = __webpack_require__("../../../../../src/app/project/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_employee__ = __webpack_require__("../../../../../src/app/employee/employee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectService = (function () {
    function ProjectService(http, projects, globals) {
        this.http = http;
        this.projects = projects;
        this.globals = globals;
        this.projectUrl = this.globals.getBackendUrl() + 'project/';
    }
    ProjectService.prototype.getProjects = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.projectUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var projects = new Array();
            for (i = 0; i < response.length; i++) {
                var project = new __WEBPACK_IMPORTED_MODULE_3__project__["a" /* Project */]();
                project.setProjectName(response[i].projectName);
                project.setJobNumber(response[i].jobNumber);
                project.setSiteAddress(response[i].siteAddress);
                project.setDescription(response[i].description);
                project.setStartDate(new Date(response[i].startDate));
                project.setPhase(response[i].phase);
                project.setClientName(response[i].clientName);
                project.setId(response[i].id);
                if (response[i].employees) {
                    for (var j = 0; j < response[i].employees.length; j++) {
                        var emp = new __WEBPACK_IMPORTED_MODULE_6__employee_employee__["a" /* Employee */]();
                        emp.setFirstname(response[i].employees[j].firstname);
                        emp.setLastname(response[i].employees[j].lastname);
                        emp.setId(response[i].employees[j].id);
                        emp.setCompanyName(response[i].employees[j].companyName);
                        emp.setRole(response[i].employees[j].role);
                        project.addEmployee(emp);
                    }
                }
                projects.push(project);
            }
            _this.projects.setProjects(projects);
            _this.projects.setTotalItems(res1.totalElements);
            return true;
        });
    };
    ProjectService.prototype.save = function (project) {
        var _this = this;
        var endPoint = this.projectUrl + project.getClientId();
        console.log(endPoint);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // Returns response
        return this.http.post(endPoint, project, options)
            .map(function (res) {
            var res1 = res.json();
            project.setId(res1.id);
            _this.projects.addProject(project);
            return res1.id;
        });
    };
    ProjectService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.projectUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.projects.deleteProject(res1.response);
        });
    };
    ProjectService.prototype.update = function (project) {
        var endPoint = this.projectUrl + project.getId();
        // Returns response
        return this.http.patch(endPoint, project)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__projects__["a" /* Projects */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], ProjectService);

var _a, _b, _c;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
        this.pplList = new Array();
    }
    Project.prototype.setId = function (id) {
        this.id = id;
    };
    Project.prototype.getId = function () {
        return this.id;
    };
    Project.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Project.prototype.getProjectName = function () {
        return this.projectName;
    };
    Project.prototype.setJobNumber = function (jobNumber) {
        this.jobNumber = jobNumber;
    };
    Project.prototype.getJobNumber = function () {
        return this.jobNumber;
    };
    Project.prototype.setSiteAddress = function (siteAddress) {
        this.siteAddress = siteAddress;
    };
    Project.prototype.getSiteAddress = function () {
        return this.siteAddress;
    };
    Project.prototype.setDescription = function (description) {
        this.description = description;
    };
    Project.prototype.getDescription = function () {
        return this.description;
    };
    Project.prototype.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    Project.prototype.getStartDate = function () {
        return this.startDate;
    };
    Project.prototype.setClientName = function (clientName) {
        this.clientName = clientName;
    };
    Project.prototype.getClientName = function () {
        return this.clientName;
    };
    Project.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
    };
    Project.prototype.getClientId = function () {
        return this.clientId;
    };
    Project.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    Project.prototype.getPhase = function () {
        return this.phase;
    };
    Project.prototype.getPplList = function () {
        return this.pplList;
    };
    Project.prototype.setPplList = function (employees) {
        this.pplList = employees;
    };
    Project.prototype.addEmployee = function (employee) {
        this.pplList.push(employee);
    };
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/project/projects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Projects = (function () {
    function Projects() {
        this.projects = new Array();
    }
    Projects.prototype.setProjects = function (projects) {
        this.projects = projects;
    };
    Projects.prototype.getProjects = function () {
        return this.projects;
    };
    Projects.prototype.addProject = function (project) {
        this.projects.push(project);
        this.totalItems++;
    };
    Projects.prototype.deleteProject = function (id) {
        var projectFound = this.projects.find(function (project) { return id === project.getId(); });
        var index = this.projects.indexOf(projectFound);
        if (index !== -1) {
            this.projects.splice(index, 1);
            this.totalItems--;
        }
    };
    Projects.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Projects.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Projects;
}());
Projects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Projects);

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ "../../../../../src/app/quality/new/new-quality.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD EMPLOYEE</div>    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid rounded\" >\r\n        <br>\r\n           <form>\r\n          \r\n             <div class=\"form-group\">\r\n               <label for=\"quality-assignee\" class=\"form-control-assignee\">Assignee:</label>\r\n               <input type=\"text\" class=\"form-control\" id=\"quality-assignee\" [(ngModel)]=\"assignee\" name=\"assignee\">\r\n             </div>\r\n             <div class=\"form-group\">\r\n               <label for=\"quality-status\" class=\"form-control-label\">Status:</label>\r\n               <input type=\"text\" class=\"form-control\" id=\"quality-status\" [(ngModel)]=\"status\" name=\"status\">\r\n             </div>\r\n             <div class=\"form-group\">\r\n               <label for=\"quality-targetEnddate\" class=\"form-control-label\">Target Enddate:</label>\r\n               <input type=\"date\" class=\"form-control\" id=\"quality-targetEnddate\" [(ngModel)]=\"targetEnddate\" name=\"targetEnddate\">\r\n             </div>\r\n             <div class=\"form-group\">\r\n                <label for=\"projects\" class=\"form-control-label\">Projects:</label>\r\n                <select id=\"project-option\" class=\"form-control\"   [(ngModel)]=\"projectId\" name=\"projects\" multiple>\r\n                  <option *ngFor=\"let project of availableProjects\" [value]=\"project.id\">\r\n                    {{ project.projectName }}\r\n                  </option>\r\n                </select>          \r\n              </div>\r\n             <div>\r\n               <label for=\"quality-description\" class=\"form-control-label\">Short Description:</label>\r\n               <input type=\"text\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"description\" style= \"height: 100px;\">\r\n             \r\n            </div> \r\n             <!-- <div class=\"form-group\">\r\n                <label for=\"quality-Rectified\" class=\"form-control-label\"> Date Rectified:</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"quality-Rectified\" [(ngModel)]=\"Rectified\" name=\"Rectified\">\r\n              </div> \r\n              <div>\r\n                  <label for=\"quality-Action\" class=\"form-control-label\">Action by:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"Action\" [(ngModel)]=\"Action\" name=\"Action\">\r\n              </div>\r\n              <div>\r\n                  <label for=\"quality-Remark\" class=\"form-control-label\">Notes/Remarks:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"Remark\" [(ngModel)]=\"Remark\" name=\"Remark\" style=\"height:100px\">\r\n              </div> -->\r\n              <label>Attachment:</label>\r\n              <div class=\"form-group\">\r\n                  <input type=\"file\" (change)=\"addNewQuality($event)\" required class=\"form-control \" name=\"attach_file\" id=\"attach_file\">\r\n              </div>\r\n            </form>\r\n          <div class=\"modal-footer\">\r\n           <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n           <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewQuality()\" >Add</button>\r\n         </div>\r\n</div>\r\n   \r\n   \r\n   \r\n   "

/***/ }),

/***/ "../../../../../src/app/quality/new/new-quality.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n\n.rounded {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quality/new/new-quality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQualityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quality__ = __webpack_require__("../../../../../src/app/quality/quality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quality_service__ = __webpack_require__("../../../../../src/app/quality/quality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quality_component__ = __webpack_require__("../../../../../src/app/quality/quality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qualities__ = __webpack_require__("../../../../../src/app/quality/qualities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var qualityState = { name: 'quality', url: '/quality', component: __WEBPACK_IMPORTED_MODULE_5__quality_component__["a" /* QualityComponent */] };
var NewQualityComponent = (function () {
    function NewQualityComponent(qualityservice, projectService, projects, qualities, stateService) {
        this.qualityservice = qualityservice;
        this.projectService = projectService;
        this.projects = projects;
        this.qualities = qualities;
        this.stateService = stateService;
    }
    NewQualityComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewQualityComponent.prototype.addNewQuality = function () {
        var _this = this;
        var quality = new __WEBPACK_IMPORTED_MODULE_3__quality__["a" /* Quality */]();
        quality.setId(this.id);
        quality.setTitle(this.assignee);
        quality.setStatus(this.status);
        quality.setOpened(this.targetEnddate);
        quality.setProjectId(this.projectId);
        this.qualityservice.save(quality).subscribe(function (data) {
            // console.log(data);
            quality.setId(data);
            _this.qualities.addQuality(quality);
            _this.stateService.go('quality');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewQualityComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewQualityComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewQualityComponent;
}());
NewQualityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-quality',
        template: __webpack_require__("../../../../../src/app/quality/new/new-quality.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quality/new/new-quality.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__quality_service__["a" /* QualityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__quality_service__["a" /* QualityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__project_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_projects__["a" /* Projects */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__qualities__["a" /* Qualities */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__qualities__["a" /* Qualities */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewQualityComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-quality.component.js.map

/***/ }),

/***/ "../../../../../src/app/quality/new/new-quality.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQualityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_quality_component__ = __webpack_require__("../../../../../src/app/quality/new/new-quality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewQualityModule = (function () {
    function NewQualityModule() {
    }
    return NewQualityModule;
}());
NewQualityModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_quality_component__["a" /* NewQualityComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_quality_component__["a" /* NewQualityComponent */]],
        providers: [],
        bootstrap: []
    })
], NewQualityModule);

//# sourceMappingURL=new-quality.module.js.map

/***/ }),

/***/ "../../../../../src/app/quality/qualities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qualities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Qualities = (function () {
    function Qualities() {
        this.qualities = new Array();
    }
    Qualities.prototype.setQualities = function (qualities) {
        this.qualities = qualities;
    };
    Qualities.prototype.getQualities = function () {
        return this.qualities;
    };
    Qualities.prototype.deleteQuality = function (qualityId) {
        var qualityFound = this.qualities.find(function (quality) { return qualityId === quality.getId(); });
        var index = this.qualities.indexOf(qualityFound);
        if (index !== -1) {
            this.qualities.splice(index, 1);
            this.totalItems--;
        }
    };
    Qualities.prototype.addQuality = function (quality) {
        this.qualities.push(quality);
        this.totalItems++;
    };
    Qualities.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Qualities.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Qualities;
}());
Qualities = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Qualities);

//# sourceMappingURL=qualities.js.map

/***/ }),

/***/ "../../../../../src/app/quality/quality.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded\">\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">QUALITY CONTROL SHEETS</div><br>\r\n        <a href=\"#/new-quality\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Request</a>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 3px;\r\n  margin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-quality rounded\" >\r\n    <br>\r\n    <nav class=\"navbar\">\r\n      <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\" >\r\n    </nav>\r\n    <table class=\"table \">\r\n      <thead>\r\n      <tr>\r\n        <th>Assignee</th>\r\n        <th>Status</th>\r\n        <th>Target Enddate</th>\r\n        <th>Short Description</th> \r\n        <th>Project Name</th>   \r\n        <th>Actions</th>\r\n      </tr>\r\n      </thead>\r\n       <tbody>\r\n          <tr *ngFor=\"let quality of qualities.qualities| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: qualities.totalItems, id:'server'} \">\r\n            <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"quality.assignee\" (input)=\"quality.assignee=$event.target.textContent\">{{quality.assignee}}</td>\r\n            <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"quality.Status\" (input)=\"quality.status=$event.target.textContent\">{{quality.Status}}</td>\r\n            <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"quality.targetEnddate\" (input)=\"quality.targetEnddate=$event.target.textContent\">{{quality.targetEnddate}}</td>\r\n            <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"quality.description\" (input)=\"quality.description=$event.target.textContent\">{{quality.Description}}</td>\r\n            <td class = \"table-cell\" >{{project.projectName}} </td>\r\n             <td class = \"table-cell\">\r\n                <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n                    <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                      <div class=\"tooltip-text-regisnation\">Edit</div>\r\n                    </div>\r\n                  </tooltip-content>\r\n            <button [disabled]=\"!isValid\" class=\"btn-primary\" (click) = \"updateQuality(quality)\">\r\n                    <img src=\"assets/edit.svg\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\"></button>\r\n                    <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n                        <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                          <div class=\"tooltip-text-regisnation\">Delete</div>\r\n                        </div>\r\n                    </tooltip-content>\r\n            <button style=\"background-color:red;\" class=\"btn-primary\"  (click) = \"getQuality(quality)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n            </button>\r\n          </td>\r\n         </tr>\r\n      </tbody> \r\n     </table>\r\n      <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n    </div>\r\n    <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form>\r\n              <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n                <div class=\"section-wrpr\">\r\n                  <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                      <div class=\"content-wrpr\">\r\n                          Are you sure?\r\n                      </div>\r\n                    <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                      <img  src=\"assets/delete.svg\" (click) = \"deleteQuality(currentQualityId)\" style=\"width:30px\">\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/quality/quality.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-product th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quality/quality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quality_service__ = __webpack_require__("../../../../../src/app/quality/quality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qualities__ = __webpack_require__("../../../../../src/app/quality/qualities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QualityComponent = (function () {
    function QualityComponent(qualityService, projectService, qualities, projects, queryParamsService) {
        this.qualityService = qualityService;
        this.projectService = projectService;
        this.qualities = qualities;
        this.projects = projects;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.isValid = false;
        this.getQualities(null);
    }
    QualityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProjects();
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getQualities(queryParam);
        });
    };
    QualityComponent.prototype.getQualities = function (queryParams) {
        this.qualityService.getQualities(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    QualityComponent.prototype.deleteQuality = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.qualityService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    QualityComponent.prototype.getQuality = function (quality) {
        this.currentQualityId = quality.getId();
    };
    QualityComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    QualityComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    QualityComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    QualityComponent.prototype.updateQuality = function (quality) {
        var _this = this;
        this.loading = true;
        this.qualityService.update(quality).subscribe(function (data) {
            _this.loading = false;
        });
    };
    QualityComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
        // console.log(event.target.outerText, phase.id);
    };
    return QualityComponent;
}());
QualityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quality',
        template: __webpack_require__("../../../../../src/app/quality/quality.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quality/quality.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quality_service__["a" /* QualityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quality_service__["a" /* QualityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__project_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__qualities__["a" /* Qualities */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__qualities__["a" /* Qualities */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__project_projects__["a" /* Projects */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _e || Object])
], QualityComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=quality.component.js.map

/***/ }),

/***/ "../../../../../src/app/quality/quality.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quality_component__ = __webpack_require__("../../../../../src/app/quality/quality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quality_service__ = __webpack_require__("../../../../../src/app/quality/quality.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_quality_module__ = __webpack_require__("../../../../../src/app/quality/new/new-quality.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qualities__ = __webpack_require__("../../../../../src/app/quality/qualities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var QualityModule = (function () {
    function QualityModule() {
    }
    return QualityModule;
}());
QualityModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_quality_module__["a" /* NewQualityModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__quality_component__["a" /* QualityComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__quality_component__["a" /* QualityComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__qualities__["a" /* Qualities */],
            __WEBPACK_IMPORTED_MODULE_2__quality_service__["a" /* QualityService */]
        ],
        bootstrap: []
    })
], QualityModule);

//# sourceMappingURL=quality.module.js.map

/***/ }),

/***/ "../../../../../src/app/quality/quality.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quality__ = __webpack_require__("../../../../../src/app/quality/quality.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qualities__ = __webpack_require__("../../../../../src/app/quality/qualities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QualityService = (function () {
    function QualityService(http, qualities, globals) {
        this.http = http;
        this.qualities = qualities;
        this.globals = globals;
        this.qualityUrl = this.globals.getBackendUrl() + 'qualityControl/';
    }
    QualityService.prototype.getQualities = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.qualityUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var qualities = new Array();
            for (i = 0; i < response.length; i++) {
                var quality = new __WEBPACK_IMPORTED_MODULE_3__quality__["a" /* Quality */]();
                quality.setTitle(response[i].Title);
                quality.setStatus(response[i].status);
                quality.setOpened(response[i].targetEnddate);
                quality.setDescription(response[i].description);
                // quality.setRectified(response[i].Rectified);
                qualities.push(quality);
            }
            _this.qualities.setQualities(qualities);
            _this.qualities.setTotalItems(res1.totalElements);
            return true;
        });
    };
    QualityService.prototype.save = function (quality) {
        var _this = this;
        var endPoint = this.qualityUrl + quality.getProjectId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // Returns response
        return this.http.post(endPoint, quality, options)
            .map(function (res) {
            var res1 = res.json();
            quality.setId(res1.id);
            _this.qualities.addQuality(quality);
            return res1.id;
        });
    };
    QualityService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.qualityUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.qualities.deleteQuality(res1.response);
        });
    };
    QualityService.prototype.update = function (quality) {
        var endPoint = this.qualityUrl + quality.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return QualityService;
}());
QualityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__qualities__["a" /* Qualities */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__qualities__["a" /* Qualities */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], QualityService);

var _a, _b, _c;
//# sourceMappingURL=quality.service.js.map

/***/ }),

/***/ "../../../../../src/app/quality/quality.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quality; });
var Quality = (function () {
    function Quality() {
    }
    Quality.prototype.setId = function (id) {
        this.id = id;
    };
    Quality.prototype.getId = function () {
        return this.id;
    };
    Quality.prototype.setStatus = function (status) {
        this.status = status;
    };
    Quality.prototype.getStatus = function () {
        return this.status;
    };
    Quality.prototype.setTitle = function (assignee) {
        this.assignee = assignee;
    };
    Quality.prototype.getTitle = function () {
        return this.assignee;
    };
    Quality.prototype.setOpened = function (targetEnddate) {
        this.targetEnddate = targetEnddate;
    };
    Quality.prototype.getOpened = function () {
        return this.targetEnddate;
    };
    Quality.prototype.setDescription = function (shortDescription) {
        this.shortDescription = shortDescription;
    };
    Quality.prototype.getDescription = function () {
        return this.shortDescription;
    };
    Quality.prototype.setRectified = function (targetEnddate) {
        this.targetEnddate = targetEnddate;
    };
    Quality.prototype.getRectified = function () {
        return this.targetEnddate;
    };
    Quality.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Quality.prototype.getProjectId = function () {
        return this.projectId;
    };
    Quality.prototype.setProjectName = function (ProjectName) {
        this.ProjectName = ProjectName;
    };
    Quality.prototype.getProjectName = function () {
        return this.ProjectName;
    };
    return Quality;
}());

//# sourceMappingURL=quality.js.map

/***/ }),

/***/ "../../../../../src/app/request/new/new-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">Generate New Request</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid rounded\" >\r\n  <br>\r\n        <form>\r\n           <div class=\"form-group\">\r\n             <label for=\"request-shortDescription\" class=\"form-control-label\">Short Description:</label>\r\n             <input type=\"text\" class=\"form-control\" id=\"request-shortDescription\" [(ngModel)]=\"shortDescription\" name=\"shortDescription\">\r\n           </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"request-status\" class=\"form-control-label\">Status:</label>\r\n            <select id=\"request-option\" class=\"form-control\"   [(ngModel)]=\"status\" name=\"status\">\r\n\t\t\t  \t<option value=\"open\">OPEN</option>\r\n          <option value=\"inprogress\">IN PROGRESS</option>\r\n          <option value=\"completed\">CLOSED</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n             <label for=\"request-targetEnddate\" class=\"form-control-label\">Target Enddate:</label>\r\n             <input type=\"date\" class=\"form-control\" id=\"request-targetEnddate\" [(ngModel)]=\"targetEnddate\" name=\"targetEnddate\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"meeting-tittle\" class=\"form-control-label\">Project</label>\r\n              <select  class=\"form-control\"  [(ngModel)]=\"projectId\" name=\"projects\" (change)=\"onProjectChange()\">\r\n                  <option *ngFor=\"let project of projects.projects\" [value]=\"project.id\">\r\n                      {{ project.projectName }}\r\n                  </option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"request-remarks\" class=\"form-control-label\"> Action:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"request-remarks\" [(ngModel)]=\"remarks\" name=\"remarks\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <img id=\"preview\" src=\"http://placehold.it/180\" alt=\"your image\" />\r\n         <input type=\"file\" id=\"file\" name=\"file\" (change) =\"add($event)\" />\r\n        </div>\r\n          <!-- <div class=\"form-group\">\r\n            <input type=\"file\" (change)=\"addNewRequest($event)\" required class=\"form-control \" name=\"attach_file\" id=\"attach_file\">\r\n           </div> -->\r\n      </form>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewRequest()\" >Add</button>\r\n          </div>\r\n  </div>\r\n          "

/***/ }),

/***/ "../../../../../src/app/request/new/new-request.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n\n.rounded {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request/new/new-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request__ = __webpack_require__("../../../../../src/app/request/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__("../../../../../src/app/request/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_component__ = __webpack_require__("../../../../../src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requests__ = __webpack_require__("../../../../../src/app/request/requests.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_project_service__ = __webpack_require__("../../../../../src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_projects__ = __webpack_require__("../../../../../src/app/project/projects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var requestState = { name: 'request', url: '/request', component: __WEBPACK_IMPORTED_MODULE_3__request_component__["a" /* RequestComponent */] };
var NewRequestComponent = (function () {
    function NewRequestComponent(requestService, requests, stateService, projectService, projects) {
        this.requestService = requestService;
        this.requests = requests;
        this.stateService = stateService;
        this.projectService = projectService;
        this.projects = projects;
    }
    NewRequestComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewRequestComponent.prototype.addNewRequest = function (event) {
        var _this = this;
        var request = new __WEBPACK_IMPORTED_MODULE_1__request__["a" /* Request */]();
        request.setId(this.id);
        request.setDescription(this.shortDescription);
        request.setStatus(this.status);
        request.setTargetEnddate(this.targetEnddate);
        request.setProjectId(this.projectId);
        request.setAssignee(this.assignee);
        request.setRemarks(this.remarks);
        this.requestService.save(request, this.file).subscribe(function (data) {
            // console.log(data);
            request.setId(data);
            _this.requests.addRequest(request);
            _this.stateService.go('request');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewRequestComponent.prototype.getProjects = function () {
        this.projectService.getProjects(null).subscribe(function (data) {
        }, function (error) {
            // console.log(error._body.toString() + " No roles found");
        });
    };
    NewRequestComponent.prototype.add = function (e) {
        var r = new FileReader();
        r.onload = function (e) {
            document.getElementById("preview").setAttribute("src", e.target.result);
        };
        r.readAsDataURL(e.target.files[0]);
        var fileList = e.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
        }
    };
    NewRequestComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewRequestComponent;
}());
NewRequestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-request',
        template: __webpack_require__("../../../../../src/app/request/new/new-request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/request/new/new-request.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__requests__["a" /* Requests */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__requests__["a" /* Requests */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__project_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__project_project_service__["a" /* ProjectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__project_projects__["a" /* Projects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__project_projects__["a" /* Projects */]) === "function" && _e || Object])
], NewRequestComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-request.component.js.map

/***/ }),

/***/ "../../../../../src/app/request/new/new-request.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_new_request_component__ = __webpack_require__("../../../../../src/app/request/new/new-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_project_module__ = __webpack_require__("../../../../../src/app/project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_employee_module__ = __webpack_require__("../../../../../src/app/employee/employee.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewRequestModule = (function () {
    function NewRequestModule() {
    }
    return NewRequestModule;
}());
NewRequestModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__new_new_request_component__["a" /* NewRequestComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__project_project_module__["a" /* ProjectModule */],
            __WEBPACK_IMPORTED_MODULE_7__employee_employee_module__["a" /* EmployeeModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__new_new_request_component__["a" /* NewRequestComponent */]],
        providers: [],
        bootstrap: []
    })
], NewRequestModule);

//# sourceMappingURL=new-request.module.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">CHANGE REQUEST</div>\r\n    <a href=\"#/new-request\" class=\"btn btn-primary round pull-right\" role=\"button\">+Create New</a>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 3px;\r\n  margin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-request rounded\">\r\n <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Short Description</th>\r\n        <th>Status</th>\r\n        <th>Raised by</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let request of requests.requests| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: requests.totalItems, id:'server'} \">\r\n\r\n        <td class=\"table-cell\">{{ request.shortDescription }}</td>\r\n        <td class=\"table-cell\">{{ request.status }}</td>\r\n        <td class=\"table-cell\">{{ request.assignee }}</td>\r\n        <td class=\"table-cell\">{{ request.remarks }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getRequest(request)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteRequest(currentRequestId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/request/request.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-product th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("../../../../../src/app/request/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests__ = __webpack_require__("../../../../../src/app/request/requests.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestComponent = (function () {
    function RequestComponent(requestService, requests, queryParamsService) {
        this.requestService = requestService;
        this.requests = requests;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getRequests(null);
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getRequests(queryParam);
        });
    };
    RequestComponent.prototype.getRequests = function (queryParams) {
        this.requestService.getRequests(queryParams).subscribe(function (data) {
        }, function (error) {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.message);
        });
    };
    // public deleteRequest(request: Request) {
    //   this.requestService.delete(request.getId()).subscribe(data => {
    //   });
    // }
    RequestComponent.prototype.deleteRequest = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.requestService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    RequestComponent.prototype.getRequest = function (request) {
        // this.currentRequestName = request.getName();
        this.currentRequestId = request.getId();
    };
    RequestComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    RequestComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return RequestComponent;
}());
RequestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'request',
        template: __webpack_require__("../../../../../src/app/request/request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/request/request.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__requests__["a" /* Requests */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__requests__["a" /* Requests */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], RequestComponent);

var _a, _b, _c;
//# sourceMappingURL=request.component.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_component__ = __webpack_require__("../../../../../src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__("../../../../../src/app/request/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_request_module__ = __webpack_require__("../../../../../src/app/request/new/new-request.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requests__ = __webpack_require__("../../../../../src/app/request/requests.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RequestModule = (function () {
    function RequestModule() {
    }
    return RequestModule;
}());
RequestModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_request_module__["a" /* NewRequestModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__request_component__["a" /* RequestComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__request_component__["a" /* RequestComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__requests__["a" /* Requests */],
            __WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */]
        ],
        bootstrap: []
    })
], RequestModule);

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request__ = __webpack_require__("../../../../../src/app/request/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requests__ = __webpack_require__("../../../../../src/app/request/requests.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestService = (function () {
    function RequestService(http, requests, globals) {
        this.http = http;
        this.requests = requests;
        this.globals = globals;
        this.requestUrl = this.globals.getBackendUrl() + 'qualityControl/';
    }
    RequestService.prototype.getRequests = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.requestUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var requests = new Array();
            for (i = 0; i < response.length; i++) {
                var request = new __WEBPACK_IMPORTED_MODULE_3__request__["a" /* Request */]();
                request.setId(response[i].id);
                request.setDescription(response[i].shortDescription);
                request.setStatus(response[i].status);
                request.setTargetEnddate(response[i].targetEnddate);
                request.setProjectId(response[i].projectId);
                request.setAssignee(response[i].assignee);
                request.setRemarks(response[i].remarks);
                requests.push(request);
            }
            _this.requests.setRequests(requests);
            _this.requests.setTotalItems(res1.totalElements);
            return true;
        });
    };
    RequestService.prototype.save = function (request, file) {
        var _this = this;
        var endPoint = this.requestUrl + request.getProjectId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', undefined);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var formData = new FormData();
        //if(file !== null){
        formData.append('file', file, file.name);
        formData.append('inputStr', JSON.stringify(request));
        //}
        // Returns response
        return this.http.post(endPoint, formData)
            .map(function (res) {
            var res1 = res.json();
            request.setId(res1.id);
            _this.requests.addRequest(request);
            return res1.id;
        });
    };
    RequestService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.requestUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.requests.deleteRequest(res1.response);
        });
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__requests__["a" /* Requests */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__requests__["a" /* Requests */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], RequestService);

var _a, _b, _c;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
var Request = (function () {
    function Request() {
    }
    Request.prototype.setId = function (id) {
        this.id = id;
    };
    Request.prototype.getId = function () {
        return this.id;
    };
    Request.prototype.setDescription = function (shortDescription) {
        this.shortDescription = shortDescription;
    };
    Request.prototype.getDescription = function () {
        return this.shortDescription;
    };
    Request.prototype.setStatus = function (status) {
        this.status = status;
    };
    Request.prototype.getStatus = function () {
        return this.status;
    };
    Request.prototype.setTargetEnddate = function (targetEnddate) {
        return targetEnddate = targetEnddate;
    };
    Request.prototype.getTargetEnddate = function () {
        return this.targetEnddate;
    };
    Request.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Request.prototype.getProjectId = function () {
        return this.projectId;
    };
    Request.prototype.setAssignee = function (assignee) {
        this.assignee = assignee;
    };
    Request.prototype.getAssignee = function () {
        return this.assignee;
    };
    Request.prototype.setRemarks = function (remarks) {
        this.remarks = remarks;
    };
    Request.prototype.getRemarks = function () {
        return this.remarks;
    };
    Request.prototype.setChangeId = function (changeId) {
        this.changeId = changeId;
    };
    Request.prototype.getChangeId = function () {
        return this.changeId;
    };
    return Request;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ "../../../../../src/app/request/requests.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Requests = (function () {
    function Requests() {
        this.requests = new Array();
    }
    Requests.prototype.setRequests = function (requests) {
        this.requests = requests;
    };
    Requests.prototype.getRequests = function () {
        return this.requests;
    };
    Requests.prototype.deleteRequest = function (requestId) {
        var requestFound = this.requests.find(function (request) { return requestId === request.getId(); });
        var index = this.requests.indexOf(requestFound);
        if (index !== -1) {
            this.requests.splice(index, 1);
            this.totalItems--;
        }
    };
    Requests.prototype.addRequest = function (request) {
        this.requests.push(request);
        this.totalItems++;
    };
    Requests.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Requests.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Requests;
}());
Requests = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Requests);

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ "../../../../../src/app/roles/new/new-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD ROLE</div>\r\n      </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n\r\n<div class=\"container-fluid rounded \" >\r\n  <br>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"role-name\" class=\"form-control-label\">Role Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"role-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>\r\n          \r\n          <div class=\"form-group\" >\r\n            <label for=\"permission-option\" class=\"form-control-label\">Permissions:</label>\r\n            <table class=\"table table-bordered\">\r\n\r\n\t\t\t    <tbody>\r\n\t\t\t    <tr *ngFor=\"let permission of roleHelper.getPermissions() \">\r\n\t\t\t      <td class = \"table-cell\">{{ permission }}</td>\r\n\t\t\t      <td >\r\n\t\t\t      <label class=\"switch\">\r\n\t\t\t\t\t  <input type=\"checkbox\" [checked]=\"permissions[permission]\" (change) = \"onChanged(permission)\"/>\r\n\t\t\t\t\t  <span class=\"slider round\"></span>\r\n\t\t\t\t  </label>\r\n\t\t\t      </td>\r\n\t\t\t    </tr>\r\n\t\t\t    </tbody>\r\n\t\t\t  </table>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewRole()\" >Add</button>\r\n      </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/roles/new/new-role.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-role th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 12px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(8px);\n  transform: translateX(8px); }\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 10px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/roles/new/new-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_service__ = __webpack_require__("../../../../../src/app/roles/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role__ = __webpack_require__("../../../../../src/app/roles/role.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_helper__ = __webpack_require__("../../../../../src/app/roles/role-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roles__ = __webpack_require__("../../../../../src/app/roles/roles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__role_component__ = __webpack_require__("../../../../../src/app/roles/role.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/3/2017.
 */







//declare var jQuery:any;
var roleState = { name: 'role', url: '/role', component: __WEBPACK_IMPORTED_MODULE_6__role_component__["a" /* RoleComponent */] };
var NewRoleComponent = (function () {
    function NewRoleComponent(roleService, roles, roleHelper, stateService) {
        this.roleService = roleService;
        this.roles = roles;
        this.roleHelper = roleHelper;
        this.stateService = stateService;
        this.permissions = {};
        this.permissionsKey = {};
        for (var j = 0; j < this.roleHelper.getPermissions().length; j++) {
            var permission = this.roleHelper.getPermissions()[j];
            this.permissions[permission] = false;
        }
        this.permissionsKey = this.roleHelper.getPermissionskey();
    }
    NewRoleComponent.prototype.addNewRole = function () {
        var _this = this;
        var role = new __WEBPACK_IMPORTED_MODULE_2__role__["a" /* Role */]();
        role.setName(this.name);
        var selectedPermissions = new Array();
        var keys = Object.keys(this.permissions);
        for (var i = 0; i < keys.length; i++) {
            if (this.permissions[keys[i]] === true) {
                selectedPermissions.push(this.permissionsKey[i]);
            }
        }
        role.setPermissions(selectedPermissions);
        this.roleService.save(role).subscribe(function (data) {
            // console.log(data);
            //role.setId(data);
            //this.roles.addRole(role);
            _this.stateService.go('role');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewRoleComponent.prototype.onChanged = function (permission) {
        var value = this.permissions[permission];
        this.permissions[permission] = !value;
    };
    NewRoleComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewRoleComponent;
}());
NewRoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-role',
        template: __webpack_require__("../../../../../src/app/roles/new/new-role.component.html"),
        styles: [__webpack_require__("../../../../../src/app/roles/new/new-role.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__role_service__["a" /* RoleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__roles__["a" /* Roles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__roles__["a" /* Roles */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__role_helper__["a" /* RoleHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__role_helper__["a" /* RoleHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"]) === "function" && _d || Object])
], NewRoleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-role.component.js.map

/***/ }),

/***/ "../../../../../src/app/roles/new/new-role.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_role_component__ = __webpack_require__("../../../../../src/app/roles/new/new-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewRoleModule = (function () {
    function NewRoleModule() {
    }
    return NewRoleModule;
}());
NewRoleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_role_component__["a" /* NewRoleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_role_component__["a" /* NewRoleComponent */]],
        providers: [],
        bootstrap: []
    })
], NewRoleModule);

//# sourceMappingURL=new-role.module.js.map

/***/ }),

/***/ "../../../../../src/app/roles/role-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by gipai on 10/8/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleHelper = (function () {
    function RoleHelper() {
        this.permissions = new Map();
        this.permissions.set('READ_USER', 'Can view the list of Users');
        this.permissions.set('CREATE_USER', 'Can add a User');
        this.permissions.set('DELETE_USER', 'Can delete a User');
        this.permissions.set('UPDATE_USER', 'Can edit a User');
        this.permissions.set('CREATE_ROLE', 'Can add a Role');
        this.permissions.set('DELETE_ROLE', 'Can delete a Role');
        this.permissions.set('READ_ROLE', 'Can view the list of Roles');
        this.permissions.set('UPDATE_ROLE', 'Can edit a Role');
        this.permissions.set('CREATE_PROJECT', 'Can add a new Project');
        this.permissions.set('READ_PROJECT', 'Can view the list of Projects');
        this.permissions.set('DELETE_PROJECT', 'Can delete a Project');
        this.permissions.set('UPDATE_PROJECT', 'Can edit a Project');
        this.permissions.set('UPDATE_COMPANY', 'Can edit a Company');
        this.permissions.set('CREATE_COMPANY', 'Can add a new Company');
        this.permissions.set('DELETE_COMPANY', 'Can delete Company');
        this.permissions.set('READ_COMPANY', 'Can view the list of Companies');
        //
        //    this.permissions.set('CREATE_DEPARTMENT', "Can add a new Department");
        //    this.permissions.set('DELETE_DEPARTMENT', "Can delete a new Department");
        //    this.permissions.set('READ_DEPARTMENT', "Can view the list of Departments");
        //    this.permissions.set('UPDATE_DEPARTMENT', "Can edit a Department");
        this.permissions.set('CREATE_CLIENT', 'Can add a new Client');
        this.permissions.set('DELETE_CLIENT', 'Can delete a Client');
        this.permissions.set('READ_CLIENT', 'Can view the list Clients');
        this.permissions.set('UPDATE_CLIENT', 'Can edit a Client');
        this.permissions.set('CREATE_PHASE', 'Can add a new Phase');
        this.permissions.set('DELETE_PHASE', 'Can delete a Phase');
        this.permissions.set('READ_PHASE', 'Can view the list Phases');
        this.permissions.set('UPDATE_PHASE', 'Can edit a Phase');
        this.permissions.set('CREATE_PRODUCT', 'Can add a new Product');
        this.permissions.set('DELETE_PRODUCT', 'Can delete a Product');
        this.permissions.set('READ_PRODUCT', 'Can view the list Products');
        this.permissions.set('UPDATE_PRODUCT', 'Can edit a Product');
        this.permissions.set('CREATE_CATEGORY', 'Can add a new Category');
        this.permissions.set('DELETE_CATEGORY', 'Can delete a Category');
        this.permissions.set('READ_CATEGORY', 'Can view the list Categories');
        this.permissions.set('UPDATE_CATEGORY', 'Can edit a Category');
        this.permissions.set('CREATE_DOCUMENT', 'Can add a new Document');
        this.permissions.set('DELETE_DOCUMENT', 'Can delete a Document');
        this.permissions.set('READ_DOCUMENT', 'Can view the list Documents');
        this.permissions.set('UPDATE_DOCUMENT', 'Can edit a Document');
        this.permissions.set('CREATE_DRAWING', 'Can add a new Drawing');
        this.permissions.set('DELETE_DRAWING', 'Can delete a Drawing');
        this.permissions.set('READ_DRAWING', 'Can view the list Drawings');
        this.permissions.set('UPDATE_DRAWING', 'Can edit a Drawing');
        this.permissions.set('CREATE_SPECIFICATION', 'Can add a new Specification');
        this.permissions.set('DELETE_SPECIFICATION', 'Can delete a Specification');
        this.permissions.set('READ_SPECIFICATION', 'Can view the list Specifications');
        this.permissions.set('UPDATE_SPECIFICATION', 'Can edit a Specification');
        this.permissions.set('CREATE_BOQ', 'Can add a new BoQ');
        this.permissions.set('DELETE_BOQ', 'Can delete a BoQ');
        this.permissions.set('READ_BOQ', 'Can view the list BoQs');
        this.permissions.set('UPDATE_BOQ', 'Can edit a BoQ');
        this.permissions.set('CREATE_BOQDEPARTMENT', 'Can add a new Department');
        this.permissions.set('DELETE_BOQDEPARTMENT', 'Can delete a Department');
        this.permissions.set('READ_BOQDEPARTMENT', 'Can view the list Department');
        this.permissions.set('UPDATE_BOQDEPARTMENT', 'Can edit a Department');
        this.permissions.set('CREATE_SECTION', 'Can add a new Section');
        this.permissions.set('DELETE_SECTION', 'Can delete a Section');
        this.permissions.set('READ_SECTION', 'Can view the list Sections');
        this.permissions.set('UPDATE_SECTION', 'Can edit a Section');
        this.permissions.set('CREATE_CR', 'Can add a new Change Request');
        this.permissions.set('DELETE_CR', 'Can delete a Change Request');
        this.permissions.set('READ_CR', 'Can view the list Change Requests');
        this.permissions.set('UPDATE_CR', 'Can edit a Change Request');
        this.permissions.set('CREATE_EMPLOYEE', 'Can add a new Employee');
        this.permissions.set('DELETE_EMPLOYEE', 'Can delete a Employee');
        this.permissions.set('READ_EMPLOYEE', 'Can view the list Employees');
        this.permissions.set('UPDATE_EMPLOYEE', 'Can edit a Employee');
        this.permissions.set('CREATE_MOM', 'Can add a new Meeting');
        this.permissions.set('DELETE_MOM', 'Can delete a Meeting');
        this.permissions.set('READ_MOM', 'Can view the list Meetings');
        this.permissions.set('UPDATE_MOM', 'Can edit a Meeting');
        this.permissions.set('CREATE_OFFICE', 'Can add a new Office');
        this.permissions.set('DELETE_OFFICE', 'Can delete Office');
        this.permissions.set('READ_OFFICE', 'Can view the list Officies');
        this.permissions.set('UPDATE_OFFICE', 'Can edit a Office');
    }
    RoleHelper.prototype.getPermissions = function () {
        var permis = new Array();
        this.permissions.forEach(function (value, key) {
            permis.push(value);
        });
        return permis;
    };
    RoleHelper.prototype.getPermissionskey = function () {
        var permis = new Array();
        this.permissions.forEach(function (value, key) {
            permis.push(key);
        });
        return permis;
    };
    return RoleHelper;
}());
RoleHelper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RoleHelper);

//# sourceMappingURL=role-helper.js.map

/***/ }),

/***/ "../../../../../src/app/roles/role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded\">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">MANAGE ROLES AND PERMISSIONS</div>\r\n    <a href=\"#/new-role\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Role</a>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 3px;\r\n  margin-bottom: 1px;\">\r\n\r\n\r\n<div class=\"container-fluid digi-role rounded\">\r\n  <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table table-bordered\" id=\"team-list\">\r\n    <thead>\r\n      <tr>\r\n        <th>Role</th>\r\n        <th>Last Updated </th>\r\n        <th>Actions </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let role of roles.roles| filter:filter\">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"role.name\" (input)=\"role.name=$event.target.textContent\">{{ role.name }}</td>\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"role.lastUpadated\" (input)=\"role.lastUpadated=$event.target.textContent\">{{ role.lastUpadated }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateRole(role)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getRole(role)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <!-- \t<pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls> -->\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteRole(currentRoleId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/roles/role.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-role th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/roles/role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_service__ = __webpack_require__("../../../../../src/app/roles/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__roles__ = __webpack_require__("../../../../../src/app/roles/roles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_helper__ = __webpack_require__("../../../../../src/app/roles/role-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleComponent = (function () {
    function RoleComponent(roleService, roles, roleHelper, queryParamsService) {
        this.roleService = roleService;
        this.roles = roles;
        this.roleHelper = roleHelper;
        this.queryParamsService = queryParamsService;
        this.loading = false;
        this.getRoles(null);
    }
    RoleComponent.prototype.getRoles = function (queryParams) {
        var _this = this;
        this.roleService.getRoles(queryParams).subscribe(function (data) {
            _this.roleMap = new Map();
            for (var i = 0; i < _this.roles.getRoles().length; i++) {
                var role = _this.roles.getRoles()[i];
                var permissions = new Map();
                for (var j = 0; j < _this.roleHelper.getPermissions().length; j++) {
                    var permission = _this.roleHelper.getPermissions()[j];
                    permissions.set(permission, _this.hasPermission(role, permission));
                }
                _this.roleMap.set(_this.roles.getRoles()[i].getId(), permissions);
            }
        }, function (error) {
            window.alert(error._body);
        });
    };
    RoleComponent.prototype.hasPermission = function (role, permission) {
        var permissions = role.getPermissions();
        if (permissions.find(function (item) { return permission == item; })) {
            return true;
        }
        return false;
    };
    RoleComponent.prototype.updateRole = function (role) {
        var _this = this;
        this.loading = true;
        this.roleService.update(role).subscribe(function (data) {
            _this.loading = false;
        });
    };
    RoleComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    RoleComponent.prototype.save = function (role, permission) {
        var value = this.roleMap.get(role.getId()).get(permission);
        this.roleMap.get(role.getId()).set(permission, !value);
        if (value) {
            role.deletePermission(permission);
        }
        else {
            role.addPermission(permission);
        }
        this.roleService.patch(role).subscribe();
    };
    RoleComponent.prototype.deleteRole = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.roleService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    RoleComponent.prototype.getRole = function (role) {
        this.currentRoleName = role.getName();
        this.currentRoleId = role.getId();
    };
    return RoleComponent;
}());
RoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'role',
        template: __webpack_require__("../../../../../src/app/roles/role.component.html"),
        styles: [__webpack_require__("../../../../../src/app/roles/role.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__role_service__["a" /* RoleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__roles__["a" /* Roles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__roles__["a" /* Roles */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__role_helper__["a" /* RoleHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__role_helper__["a" /* RoleHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _d || Object])
], RoleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=role.component.js.map

/***/ }),

/***/ "../../../../../src/app/roles/role.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__role_component__ = __webpack_require__("../../../../../src/app/roles/role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_service__ = __webpack_require__("../../../../../src/app/roles/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roles_new_new_role_module__ = __webpack_require__("../../../../../src/app/roles/new/new-role.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination_dist_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__roles__ = __webpack_require__("../../../../../src/app/roles/roles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__role_helper__ = __webpack_require__("../../../../../src/app/roles/role-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RoleModule = (function () {
    function RoleModule() {
    }
    return RoleModule;
}());
RoleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__role_component__["a" /* RoleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_pagination_dist_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_2__roles_new_new_role_module__["a" /* NewRoleModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__role_component__["a" /* RoleComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_7__roles__["a" /* Roles */],
            __WEBPACK_IMPORTED_MODULE_8__role_helper__["a" /* RoleHelper */]
        ],
        bootstrap: []
    })
], RoleModule);

//# sourceMappingURL=role.module.js.map

/***/ }),

/***/ "../../../../../src/app/roles/role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role__ = __webpack_require__("../../../../../src/app/roles/role.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__roles__ = __webpack_require__("../../../../../src/app/roles/roles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/2/2017.
 */






var RoleService = (function () {
    function RoleService(http, globals, roles) {
        this.http = http;
        this.globals = globals;
        this.roles = roles;
        this.userUrl = 'role/';
    }
    RoleService.prototype.getRoles = function (queryParams) {
        var _this = this;
        var endPoint = this.globals.getBackendUrl() + this.userUrl;
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var roles = new Array();
            for (i = 0; i < response.length; i++) {
                var role = new __WEBPACK_IMPORTED_MODULE_3__role__["a" /* Role */]();
                role.setId(response[i].id);
                role.setName(response[i].name);
                role.setLastUpadated(response[i].lastUpadated);
                role.setPermissions(response[i].permissions);
                roles.push(role);
            }
            _this.roles.setRoles(roles);
        });
    };
    RoleService.prototype.patch = function (role) {
        var endPoint = this.globals.getBackendUrl() + this.userUrl + role.getId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // Returns response
        return this.http.patch(endPoint, role, options)
            .map(function (res) {
            var res1 = res.json();
            return res1.id;
        });
    };
    RoleService.prototype.save = function (role) {
        var _this = this;
        var endPoint = this.globals.getBackendUrl() + this.userUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // Returns response
        return this.http.post(endPoint, role, options)
            .map(function (res) {
            var res1 = res.json();
            role.setId(res1.id);
            _this.roles.addRole(role);
            return res1.id;
        });
    };
    RoleService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.globals.getBackendUrl() + this.userUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.roles.deleteRole(res1.response);
        });
    };
    RoleService.prototype.update = function (role) {
        var endPoint = this.userUrl + role.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return RoleService;
}());
RoleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__globals_globals__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__roles__["a" /* Roles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__roles__["a" /* Roles */]) === "function" && _c || Object])
], RoleService);

var _a, _b, _c;
//# sourceMappingURL=role.service.js.map

/***/ }),

/***/ "../../../../../src/app/roles/role.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Role; });
var Role = (function () {
    function Role() {
    }
    Role.prototype.setName = function (name) {
        this.name = name;
    };
    Role.prototype.getName = function () {
        return this.name;
    };
    Role.prototype.setLastUpadated = function (lastUpadated) {
        this.lastUpadated = lastUpadated;
    };
    Role.prototype.getLastUpadated = function () {
        return this.lastUpadated;
    };
    Role.prototype.setId = function (id) {
        this.id = id;
    };
    Role.prototype.getId = function () {
        return this.id;
    };
    Role.prototype.setPermissions = function (permissions) {
        this.permissions = permissions;
    };
    Role.prototype.getPermissions = function () {
        return this.permissions;
    };
    Role.prototype.addPermission = function (permission) {
        if (this.permissions.find(function (item) { return item === permission; })) {
            return;
        }
        this.permissions.push(permission);
    };
    Role.prototype.deletePermission = function (permission) {
        var item = this.permissions.find(function (item) { return item === permission; });
        var index = this.permissions.indexOf(item);
        if (index !== -1) {
            this.permissions.splice(index, 1);
        }
    };
    return Role;
}());

//# sourceMappingURL=role.js.map

/***/ }),

/***/ "../../../../../src/app/roles/roles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Roles = (function () {
    function Roles() {
        this.roles = new Array();
    }
    Roles.prototype.setRoles = function (roles) {
        this.roles = roles;
    };
    Roles.prototype.getRoles = function () {
        return this.roles;
    };
    Roles.prototype.addRole = function (user) {
        this.roles.push(user);
        this.totalItems++;
    };
    Roles.prototype.deleteRole = function (userId) {
        var userFound = this.roles.find(function (user) { return userId === user.getId(); });
        var index = this.roles.indexOf(userFound);
        if (index !== -1) {
            this.roles.splice(index, 1);
            this.totalItems--;
        }
    };
    Roles.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Roles.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    Roles.prototype.getAllPermissions = function () {
    };
    return Roles;
}());
Roles = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Roles);

//# sourceMappingURL=roles.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<div class=\"pull-right col-xs-3\" >\r\n   <div class=\"input-group stylish-input-group\">\r\n                    <input type=\"text\" class=\"form-control\"  placeholder=\"Search\" [(ngModel)]=\"fiilter\">\r\n                    <span class=\"input-group-addon\">\r\n                        <button type=\"submit\">\r\n                            <span class=\"glyphicon glyphicon-search\"></span>\r\n                        </button>  \r\n                    </span>\r\n                </div>\r\n</div>\r\n<!-- <input type=\"text\"  name=\"search\" placeholder=\"Search..\" [(ngModel)]=\"searchString\"> -->\r\n<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"OnSearch()\" >Go</button> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stylish-input-group .input-group-addon {\n  background: white !important; }\n\n.stylish-input-group .form-control {\n  border-right: 0;\n  box-shadow: 0 0 0;\n  border-color: #ccc; }\n\n.stylish-input-group button {\n  border: 0;\n  background: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(queryParamsService) {
        this.queryParamsService = queryParamsService;
    }
    SearchComponent.prototype.OnSearch = function () {
        this.queryParamsService.setSearchString(this.searchString);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__search_component__["a" /* SearchComponent */]],
        providers: [],
        bootstrap: []
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "../../../../../src/app/section/new/new-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" style=\"background-color:white;\">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"glyphicon glyphicon-cog\">ADD SECTION</div>\r\n  </div>\r\n  <br>\r\n</div>\r\n<hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n<div class=\"container-fluid \" style=\"background-color:white;\">\r\n  <br><br>\r\n  <div>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"secion-name\" class=\"form-control-label\">Section Name:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"secion-name\" [(ngModel)]=\"sectionName\" name=\"first\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"boq-option\" class=\"form-control-label\">BoQs:</label>\r\n        <select id=\"boq-option\" class=\"form-control\" [(ngModel)]=\"boqId\" name=\"boqs\">\r\n          <option *ngFor=\"let boq of availableBoQs\" [value]=\"boq.id\">\r\n            {{ boq.boQDepartmentName }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"specification-option\" class=\"form-control-label\">Specification:</label>\r\n        <select id=\"specification-option\" class=\"form-control\" [(ngModel)]=\"specId\" name=\"specifications\">\r\n          <option *ngFor=\"let specification of availableSpecifications\" [value]=\"specification.Id\">\r\n            {{ specification.specificationName }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"secion-description\" class=\"form-control-label\">Description:</label>\r\n        <textarea type=\"text\" style=\"width: 100%;\" cols=\"50\" rows=\"7\" class=\"form-control\" id=\"secion-description\" [(ngModel)]=\"description\"\r\n          name=\"first\"></textarea>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewSection()\">Add</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/section/new/new-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-newsection th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n\n.hr {\n  margin-top: 3px;\n  margin-bottom: 0px;\n  border: 0;\n  border-top: 1px solid #eee; }\n\n.form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/new/new-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boq_boqs__ = __webpack_require__("../../../../../src/app/boq/boqs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boq_boq_service__ = __webpack_require__("../../../../../src/app/boq/boq.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specification_specifications__ = __webpack_require__("../../../../../src/app/specification/specifications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specification_specification_service__ = __webpack_require__("../../../../../src/app/specification/specification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section__ = __webpack_require__("../../../../../src/app/section/section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_service__ = __webpack_require__("../../../../../src/app/section/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__section_component__ = __webpack_require__("../../../../../src/app/section/section.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//declare var jQuery:any;
var sectionState = { name: 'section', url: '/section', component: __WEBPACK_IMPORTED_MODULE_9__section_component__["a" /* SectionComponent */] };
var NewSectionComponent = (function () {
    function NewSectionComponent(sectionService, boQService, specificationService, sections, specifications, boQs, stateService) {
        this.sectionService = sectionService;
        this.boQService = boQService;
        this.specificationService = specificationService;
        this.sections = sections;
        this.specifications = specifications;
        this.boQs = boQs;
        this.stateService = stateService;
    }
    NewSectionComponent.prototype.ngOnInit = function () {
        this.getBoQs();
        this.getSpecifications();
    };
    NewSectionComponent.prototype.addNewSection = function () {
        var _this = this;
        var section = new __WEBPACK_IMPORTED_MODULE_4__section__["a" /* Section */]();
        section.setSectionName(this.sectionName);
        section.setBoqId(this.boqId);
        section.setSpecId(this.specId);
        section.setDescription(this.description);
        this.sectionService.save(section).subscribe(function (data) {
            // console.log(data);
            //section.setId(data);
            //this.sections.addSection(section);
            _this.stateService.go('section');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSectionComponent.prototype.getBoQs = function () {
        var _this = this;
        this.boQService.getBoQs(null).subscribe(function (data) {
            _this.availableBoQs = _this.boQs.getBoQs();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSectionComponent.prototype.getSpecifications = function () {
        var _this = this;
        this.specificationService.getSpecifications(null).subscribe(function (data) {
            _this.availableSpecifications = _this.specifications.getSpecifications();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSectionComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewSectionComponent;
}());
NewSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'new-section',
        template: __webpack_require__("../../../../../src/app/section/new/new-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/section/new/new-section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__section_service__["a" /* SectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__boq_boq_service__["a" /* BoQService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__boq_boq_service__["a" /* BoQService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__specification_specification_service__["a" /* SpecificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__specification_specification_service__["a" /* SpecificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__sections__["a" /* Sections */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__sections__["a" /* Sections */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__specification_specifications__["a" /* Specifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__specification_specifications__["a" /* Specifications */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__boq_boqs__["a" /* BoQs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__boq_boqs__["a" /* BoQs */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__uirouter_angular__["StateService"]) === "function" && _g || Object])
], NewSectionComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/section/new/new-section.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_section_component__ = __webpack_require__("../../../../../src/app/section/new/new-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewSectionModule = (function () {
    function NewSectionModule() {
    }
    return NewSectionModule;
}());
NewSectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_section_component__["a" /* NewSectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_section_component__["a" /* NewSectionComponent */]],
        providers: [],
        bootstrap: []
    })
], NewSectionModule);

//# sourceMappingURL=new-section.module.js.map

/***/ }),

/***/ "../../../../../src/app/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" ><br>\r\n  <div class=\"column\">\r\n    <div class = \"glyphicon glyphicon-cog\">MANAGE SECTIONS</div>\r\n      <a href=\"#/new-section\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Section</a>\r\n    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n<div class=\"container-fluid digi-section rounded\" ><br>\r\n\r\n<nav class=\"navbar\">\r\n  <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\" >\r\n</nav>\r\n<table class=\"table\">\r\n  <thead>\r\n  <tr>\r\n    <th>Section Name</th>\r\n    <th>Specification</th>\r\n    <th>No. of Products</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let section of sections.sections| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: sections.totalItems, id:'server'} \">\r\n        <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"section.sectionName\" (input)=\"section.sectionName=$event.target.textContent\">{{ section.sectionName }}</td>\r\n        <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"section.specificationName\" (input)=\"section.specificationName=$event.target.textContent\">{{ section.specificationName }}</td>\r\n        <td class = \"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"section.noOfProducts\" (input)=\"section.noOfProducts=$event.target.textContent\">{{ section.noOfProducts }}</td>\r\n \t\t<td class = \"table-cell\">\r\n        <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n        </tooltip-content>\r\n        <button [disabled]=\"!isValid\" class=\"btn-primary\" (click) = \"updateSection(section)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\"></button> \r\n           \r\n            <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n                <div><span><p class=\"fa fa-info-circle fa-tooltip\" ></p></span>\r\n                  <div class=\"tooltip-text-regisnation\">Delete</div>\r\n                </div>\r\n            </tooltip-content>\r\n        <button style=\"background-color:red;\" class=\"btn-primary\"  (click) = \"getSection(section)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n          <img src=\"assets/delete.svg\"  style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n        </button>  \r\n      </td>\r\n     </tr>\r\n  </tbody>\r\n </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n \r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n              <div class=\"section-wrpr\">\r\n                <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                    <div class=\"content-wrpr\">\r\n                        Are you sure?\r\n                    </div>\r\n                  <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                    <img  src=\"assets/delete.svg\" (click) = \"deleteSection(currentSectionId)\" style=\"width:30px\">\r\n                  </button>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/section/section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-section th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n\n.hr {\n  margin-top: 3px;\n  margin-bottom: 1px;\n  border: 0;\n  border-top: 1px solid #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_service__ = __webpack_require__("../../../../../src/app/section/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionComponent = (function () {
    function SectionComponent(sectionService, sections, queryParamsService) {
        this.sectionService = sectionService;
        this.sections = sections;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getSections(null);
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getSections(queryParam);
        });
    };
    SectionComponent.prototype.getSections = function (queryParams) {
        this.sectionService.getSections(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    SectionComponent.prototype.updateSection = function (section) {
        var _this = this;
        this.loading = true;
        this.sectionService.update(section).subscribe(function (data) {
            _this.loading = false;
        });
    };
    SectionComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    SectionComponent.prototype.deleteSection = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.sectionService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    SectionComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    SectionComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    SectionComponent.prototype.getSection = function (section) {
        // this.currentSectionName = section.getSectionName();
        this.currentSectionId = section.getId();
    };
    return SectionComponent;
}());
SectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'section',
        template: __webpack_require__("../../../../../src/app/section/section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/section/section.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__section_service__["a" /* SectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sections__["a" /* Sections */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sections__["a" /* Sections */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], SectionComponent);

var _a, _b, _c;
//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ "../../../../../src/app/section/section.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_component__ = __webpack_require__("../../../../../src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_service__ = __webpack_require__("../../../../../src/app/section/section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_section_module__ = __webpack_require__("../../../../../src/app/section/new/new-section.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SectionModule = (function () {
    function SectionModule() {
    }
    return SectionModule;
}());
SectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__section_component__["a" /* SectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_section_module__["a" /* NewSectionModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__section_component__["a" /* SectionComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__sections__["a" /* Sections */],
            __WEBPACK_IMPORTED_MODULE_2__section_service__["a" /* SectionService */]
        ],
        bootstrap: []
    })
], SectionModule);

//# sourceMappingURL=section.module.js.map

/***/ }),

/***/ "../../../../../src/app/section/section.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section__ = __webpack_require__("../../../../../src/app/section/section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionService = (function () {
    function SectionService(http, sections, globals) {
        this.http = http;
        this.sections = sections;
        this.globals = globals;
        this.sectionUrl = this.globals.getBackendUrl() + 'section/';
    }
    SectionService.prototype.getSections = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.sectionUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var sections = new Array();
            for (i = 0; i < response.length; i++) {
                var section = new __WEBPACK_IMPORTED_MODULE_3__section__["a" /* Section */]();
                section.setSectionName(response[i].sectionName);
                section.setSpecId(response[i].specId);
                section.setSpecificationName(response[i].specificationName);
                section.setProductNames(response[i].productNames);
                section.setId(response[i].id);
                section.setDescription(response[i].description);
                section.setNoOfProducts(response[i].noOfProducts);
                sections.push(section);
            }
            _this.sections.setSections(sections);
            _this.sections.setTotalItems(res1.totalElements);
            return true;
        });
    };
    SectionService.prototype.save = function (section) {
        var _this = this;
        var endPoint = this.sectionUrl + section.getBoqId();
        // + section.getBoqId() ;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, section)
            .map(function (res) {
            var res1 = res.json();
            section.setId(res1.id);
            _this.sections.addSection(section);
            return res1.id;
        });
    };
    SectionService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.sectionUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.sections.deleteSection(res1.response);
        });
    };
    SectionService.prototype.update = function (section) {
        var endPoint = this.sectionUrl + section.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return SectionService;
}());
SectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__sections__["a" /* Sections */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sections__["a" /* Sections */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], SectionService);

var _a, _b, _c;
//# sourceMappingURL=section.service.js.map

/***/ }),

/***/ "../../../../../src/app/section/section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
var Section = (function () {
    function Section() {
    }
    Section.prototype.setId = function (id) {
        this.id = id;
    };
    Section.prototype.getId = function () {
        return this.id;
    };
    Section.prototype.setSectionName = function (name) {
        this.sectionName = name;
    };
    Section.prototype.getSectionName = function () {
        return this.sectionName;
    };
    Section.prototype.setSpecId = function (specId) {
        this.specId = specId;
    };
    Section.prototype.getSpecId = function () {
        return this.specId;
    };
    Section.prototype.setSpecificationName = function (specificationName) {
        this.specificationName = specificationName;
    };
    Section.prototype.getSpecificationName = function () {
        return this.specificationName;
    };
    Section.prototype.setDescription = function (description) {
        this.description = description;
    };
    Section.prototype.getDescription = function () {
        return this.description;
    };
    Section.prototype.setBoqId = function (boqId) {
        this.boqId = boqId;
    };
    Section.prototype.getBoqId = function () {
        return this.boqId;
    };
    Section.prototype.setDrawingIds = function (drawingIds) {
        this.drawingIds = drawingIds;
    };
    Section.prototype.getDrawingIds = function () {
        return this.drawingIds;
    };
    Section.prototype.setProductNames = function (productNames) {
        this.productNames = productNames;
    };
    Section.prototype.getProductNames = function () {
        return this.productNames;
    };
    Section.prototype.setNoOfProducts = function (NoOfProducts) {
        this.noOfProducts = NoOfProducts;
    };
    Section.prototype.getNoOfProducts = function () {
        return this.noOfProducts;
    };
    return Section;
}());

//# sourceMappingURL=section.js.map

/***/ }),

/***/ "../../../../../src/app/section/sections.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sections; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Sections = (function () {
    function Sections() {
        this.sections = new Array();
    }
    Sections.prototype.setSections = function (clients) {
        this.sections = clients;
    };
    Sections.prototype.getSections = function () {
        return this.sections;
    };
    Sections.prototype.deleteSection = function (sectionId) {
        var sectionFound = this.sections.find(function (section) { return sectionId === section.getId(); });
        var index = this.sections.indexOf(sectionFound);
        if (index !== -1) {
            this.sections.splice(index, 1);
            this.totalItems--;
        }
    };
    Sections.prototype.addSection = function (section) {
        this.sections.push(section);
        this.totalItems++;
    };
    Sections.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Sections.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Sections;
}());
Sections = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Sections);

//# sourceMappingURL=sections.js.map

/***/ }),

/***/ "../../../../../src/app/specification/new/new-specification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-specification rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD SPECIFICATION</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n<div class=\"container-fluid rounded\" style=\"background-color:white;\"><br>\r\n  <form style=\" margin-left:5px;margin-right:5px;\">\r\n    <div class=\"row\">  \r\n    <div class=\"col-75 form-group\">\r\n          <label for=\"specification-specificationName\" class=\"form-control-label\">Specification Title</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"specification-specificationName\" [(ngModel)]=\"specificationName\" name=\"specificationName\">\r\n        </div>\r\n        <div class=\"tab\">\r\n            <a (click)='toggleDetailsB()'>{{showDetails ? '+' : '+'}} </a>   \r\n            <a (click)='toggleDetails()'> {{showDetails ? 'Tt':'Tt'}} </a>\r\n            <a (click)='toggleDetailsA()'>{{showDetails ? '=' : '='}} </a>\r\n        </div>\r\n    </div>\r\n        <hr style=\"margin-top: 4px;\">\r\n    <label style=\"text-decoration: underline;\">Description</label>\r\n    <div class=\"row\">\r\n      <div class=\"col-25 form-group\">\r\n        <label for=\"specification-label\" class=\"form-control-label\">Labels:</label>\r\n      </div>\r\n      <div class=\"col-75\">\r\n        <input type=\"text\" class=\"form-control\" id=\"specification-label\" name=\"label\" [(ngModel)]=\"label\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-25 form-group\">\r\n          <label for=\"specification-answer\"  class=\"form-control-label\">Answers:</label>\r\n        </div>\r\n        <div class=\"col-75\">\r\n          <input type=\"text\" class=\"form-control\" id=\"specification-answer\" name=\"answer\" [(ngModel)]=\"answer\">\r\n        </div>\r\n      </div>\r\n      \r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewSpecification()\" >Add</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div>\r\n    \r\n    <div *ngIf='showDetails'>\r\n        <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <form style=\" margin-left:5px;margin-right:5px;\">\r\n              <div class=\"row\">  \r\n                  <div class=\"col-75 form-group\">\r\n                        <label for=\"specification-SpecificationName\" class=\"form-control-label\">New Title</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"specification-SpecificationName\" [(ngModel)]=\"SpecificationName\" name=\"SpecificationName\">\r\n                      </div>\r\n                  </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewSpecification()\" >Add</button>\r\n                </div>\r\n            </form>\r\n         </div>   \r\n    </div>\r\n\r\n    <div *ngIf='showDetailsB'>\r\n        <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <form style=\" margin-left:5px;margin-right:5px;\">\r\n              <div class=\"row\">  \r\n              <div class=\"col-75 form-group\">\r\n                    <label for=\"specification-SpecificationName\" class=\"form-control-label\">Specification Title</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"specification-SpecificationName\" [(ngModel)]=\"SpecificationName\" name=\"SpecificationName\">\r\n                  </div>\r\n                  <div class=\"tab\">\r\n                      <a (click)='toggleDetailsB()'>{{showDetails ? '+' : '+'}} </a>\r\n                      <a (click)='toggleDetails()'> {{showDetails ? 'Tt':'Tt'}} </a>\r\n                      <a (click)='toggleDetailsA()'>{{showDetails ? '=' : '='}} </a>\r\n                  </div>\r\n              </div>\r\n                  <hr>\r\n              <label style=\"text-decoration: underline;\">Description</label>\r\n              <div class=\"row\">\r\n                <div class=\"col-25 form-group\">\r\n                  <label for=\"specification-label\" class=\"form-control-label\">Labels:</label>\r\n                </div>\r\n                <div class=\"col-75\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"specification-label\" name=\"label\" [(ngModel)]=\"label\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-25 form-group\">\r\n                    <label for=\"specification-answer\"  class=\"form-control-label\">Answers:</label>\r\n                  </div>\r\n                  <div class=\"col-75\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"apecification-answer\" name=\"answer\" [(ngModel)]=\"answer\">\r\n                  </div>\r\n                </div>\r\n              <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewSpecification()\" >Add</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n      </div>\r\n\r\n      <!-- <div *ngIf='showDetailsA'>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n              <form style=\" margin-left:5px;margin-right:5px;\">\r\n              <div class=\"row\">  \r\n                  <div class=\"col-75 form-group\">\r\n                        <label for=\"specification-sectionId\" class=\"form-control-label\">Section</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"specification-sectionId\" [(ngModel)]=\"sectionId\" name=\"sectionId\">\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewSpecification()\" >Add</button>\r\n                  </div>\r\n              </div>\r\n              </form>\r\n          </div>    \r\n      </div>     -->\r\n   \r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/specification/new/new-specification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.form-control {\n  height: 45px; }\n\n.input[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: vertical; }\n\n.label {\n  padding: 12px 12px 12px 0;\n  display: inline-block; }\n\n.input[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right; }\n\n.input[type=submit]:hover {\n  background-color: #45a049; }\n\n.container-fluid {\n  margin-right: 195px; }\n\n.container {\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px; }\n\n.tab {\n  height: 75px;\n  float: left;\n  margin-top: 6px;\n  margin-left: 42px;\n  width: 23px;\n  background-color: lightblue;\n  text-align: center; }\n\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px; }\n\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px; }\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media (max-width: 600px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/specification/new/new-specification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSpecificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specification__ = __webpack_require__("../../../../../src/app/specification/specification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specification_service__ = __webpack_require__("../../../../../src/app/specification/specification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specification_component__ = __webpack_require__("../../../../../src/app/specification/specification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specifications__ = __webpack_require__("../../../../../src/app/specification/specifications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__section_sections__ = __webpack_require__("../../../../../src/app/section/sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_section_service__ = __webpack_require__("../../../../../src/app/section/section.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var specificationState = { name: 'specification', url: '/specification', component: __WEBPACK_IMPORTED_MODULE_3__specification_component__["a" /* SpecificationComponent */] };
var NewSpecificationComponent = (function () {
    function NewSpecificationComponent(sectionService, specificationService, specifications, sections, stateService) {
        this.sectionService = sectionService;
        this.specificationService = specificationService;
        this.specifications = specifications;
        this.sections = sections;
        this.stateService = stateService;
        this.showDetails = false;
        this.showDetailsA = false;
        this.showDetailsB = false;
    }
    NewSpecificationComponent.prototype.ngOnInit = function () {
        this.getSections();
    };
    NewSpecificationComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    NewSpecificationComponent.prototype.toggleDetailsA = function () {
        this.showDetailsA = !this.showDetailsA;
    };
    NewSpecificationComponent.prototype.toggleDetailsB = function () {
        this.showDetailsB = !this.showDetailsB;
    };
    NewSpecificationComponent.prototype.addNewSpecification = function () {
        var _this = this;
        var specification = new __WEBPACK_IMPORTED_MODULE_1__specification__["a" /* Specification */]();
        specification.setId(this.Id);
        specification.setSpecificationName(this.specificationName);
        //  specification.setDOB(this.DOB);
        specification.setSectionId(this.sectionId);
        specification.setAnswer(this.answer);
        specification.setLabel(this.label);
        this.specificationService.save(specification).subscribe(function (data) {
            // console.log(data);
            _this.stateService.go('specification');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSpecificationComponent.prototype.getSections = function () {
        var _this = this;
        this.sectionService.getSections(null).subscribe(function (data) {
            _this.availableSections = _this.sections.getSections();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSpecificationComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewSpecificationComponent;
}());
NewSpecificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-specification',
        template: __webpack_require__("../../../../../src/app/specification/new/new-specification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/specification/new/new-specification.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__section_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__section_section_service__["a" /* SectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__specification_service__["a" /* SpecificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__specification_service__["a" /* SpecificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__specifications__["a" /* Specifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__specifications__["a" /* Specifications */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__section_sections__["a" /* Sections */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__section_sections__["a" /* Sections */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewSpecificationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-specification.component.js.map

/***/ }),

/***/ "../../../../../src/app/specification/new/new-specification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSpecificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_specification_component__ = __webpack_require__("../../../../../src/app/specification/new/new-specification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_section_module__ = __webpack_require__("../../../../../src/app/section/section.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewSpecificationModule = (function () {
    function NewSpecificationModule() {
    }
    return NewSpecificationModule;
}());
NewSpecificationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_specification_component__["a" /* NewSpecificationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__section_section_module__["a" /* SectionModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_specification_component__["a" /* NewSpecificationComponent */]],
        providers: [],
        bootstrap: []
    })
], NewSpecificationModule);

//# sourceMappingURL=new-specification.module.js.map

/***/ }),

/***/ "../../../../../src/app/specification/specification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \" ><br>\r\n  <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">MANAGE SPECIFICATION</div>\r\n      <a href=\"#/new-specification\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Specification</a>\r\n    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-specification rounded \">\r\n <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Specification</th>\r\n        <th>Section</th>\r\n        <th></th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let specification of specifications.specifications| filter:filter \">\r\n        <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"specification.specificationName\"\r\n          (input)=\"specification.specificationName=$event.target.textContent\">{{specification.specificationName}}</td>\r\n        <td class=\"table-cell\">{{specification.sectionName}}</td>\r\n        <td class=\"table-cell\"></td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Edit</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updateSpecification(specification)\">\r\n            <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button>\r\n\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getSpecification(specification)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteSpecification(currentSpecificationId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/specification/specification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-specification th {\n  background-color: #efefef; }\n\n.example-tooltip-host {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 50px; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n    ROUND BUTTONS\r\n  ************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n    CUSTON BTN VALUES\r\n  ************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/specification/specification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specification_service__ = __webpack_require__("../../../../../src/app/specification/specification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specifications__ = __webpack_require__("../../../../../src/app/specification/specifications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpecificationComponent = (function () {
    function SpecificationComponent(specificationService, specifications, queryParamsService) {
        this.specificationService = specificationService;
        this.specifications = specifications;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getSpecifications(null);
    }
    SpecificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getSpecifications(queryParam);
        });
    };
    SpecificationComponent.prototype.getSpecifications = function (queryParams) {
        this.specificationService.getSpecifications(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    SpecificationComponent.prototype.updateSpecification = function (specification) {
        var _this = this;
        this.loading = true;
        this.specificationService.update(specification).subscribe(function (data) {
            _this.loading = false;
        });
    };
    SpecificationComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    SpecificationComponent.prototype.deleteSpecification = function (id) {
        //.alert("Are You Sure You want to delete?");
        // console.log("Id "+ id);
        this.specificationService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    SpecificationComponent.prototype.getSpecification = function (specification) {
        // this.currentSpecificationName = specification.getSpecificationName();
        this.currentSpecificationId = specification.getId();
    };
    SpecificationComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    SpecificationComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return SpecificationComponent;
}());
SpecificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'specification',
        template: __webpack_require__("../../../../../src/app/specification/specification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/specification/specification.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__specification_service__["a" /* SpecificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__specification_service__["a" /* SpecificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__specifications__["a" /* Specifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__specifications__["a" /* Specifications */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], SpecificationComponent);

var _a, _b, _c;
//# sourceMappingURL=specification.component.js.map

/***/ }),

/***/ "../../../../../src/app/specification/specification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specification_component__ = __webpack_require__("../../../../../src/app/specification/specification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specifications__ = __webpack_require__("../../../../../src/app/specification/specifications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specification_service__ = __webpack_require__("../../../../../src/app/specification/specification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_new_specification_module__ = __webpack_require__("../../../../../src/app/specification/new/new-specification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SpecificationModule = (function () {
    function SpecificationModule() {
    }
    return SpecificationModule;
}());
SpecificationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__specification_component__["a" /* SpecificationComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_6__new_new_specification_module__["a" /* NewSpecificationModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_tooltip__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__specification_component__["a" /* SpecificationComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__specifications__["a" /* Specifications */],
            __WEBPACK_IMPORTED_MODULE_3__specification_service__["a" /* SpecificationService */]
        ],
        bootstrap: []
    })
], SpecificationModule);

//# sourceMappingURL=specification.module.js.map

/***/ }),

/***/ "../../../../../src/app/specification/specification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specification__ = __webpack_require__("../../../../../src/app/specification/specification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specifications__ = __webpack_require__("../../../../../src/app/specification/specifications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpecificationService = (function () {
    function SpecificationService(http, specifications, globals) {
        this.http = http;
        this.specifications = specifications;
        this.globals = globals;
        this.specificationUrl = this.globals.getBackendUrl() + 'specification/';
    }
    SpecificationService.prototype.getSpecifications = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.specificationUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var specifications = new Array();
            for (i = 0; i < response.length; i++) {
                var specification = new __WEBPACK_IMPORTED_MODULE_3__specification__["a" /* Specification */]();
                specification.setId(response[i].id);
                specification.setSpecificationName(response[i].specificationName);
                specification.setSectionName(response[i].sectionName);
                specification.setDOB(response[i].DOB);
                specification.setSectionId(response[i].sectionId);
                specification.setSectionName(response[i].sectionName);
                specification.setAnswer(response[i].answer);
                specifications.push(specification);
            }
            _this.specifications.setSpecifications(specifications);
            _this.specifications.setTotalItems(res1.totalElements);
            return true;
        });
    };
    SpecificationService.prototype.save = function (specification) {
        var _this = this;
        var endPoint = this.specificationUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // Returns response
        return this.http.post(endPoint, specification, options)
            .map(function (res) {
            var res1 = res.json();
            specification.setId(res1.id);
            _this.specifications.addSpecification(specification);
            return res1.id;
        });
    };
    SpecificationService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.specificationUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.specifications.deleteSpecification(res1.response);
        });
    };
    SpecificationService.prototype.update = function (specification) {
        var endPoint = this.specificationUrl + specification.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return SpecificationService;
}());
SpecificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__specifications__["a" /* Specifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__specifications__["a" /* Specifications */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], SpecificationService);

var _a, _b, _c;
//# sourceMappingURL=specification.service.js.map

/***/ }),

/***/ "../../../../../src/app/specification/specification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Specification; });
var Specification = (function () {
    function Specification() {
    }
    Specification.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Specification.prototype.getId = function () {
        return this.Id;
    };
    Specification.prototype.setDOB = function (DOB) {
        this.DOB = DOB;
    };
    Specification.prototype.getDOB = function () {
        return this.DOB;
    };
    Specification.prototype.setSpecificationName = function (specificationName) {
        this.specificationName = specificationName;
    };
    Specification.prototype.getSpecificationName = function () {
        return this.specificationName;
    };
    Specification.prototype.setSectionId = function (sectionsId) {
        this.sectionId = sectionsId;
    };
    Specification.prototype.getSectionId = function () {
        return this.sectionId;
    };
    Specification.prototype.setAnswer = function (answer) {
        return answer = answer;
    };
    Specification.prototype.getAnswer = function () {
        return this.answer;
    };
    Specification.prototype.setSectionName = function (sectionsName) {
        this.sectionName = sectionsName;
    };
    Specification.prototype.getSectionName = function () {
        return this.sectionName;
    };
    Specification.prototype.setLabel = function (label) {
        return label = label;
    };
    Specification.prototype.getLabel = function () {
        return this.label;
    };
    return Specification;
}());

//# sourceMappingURL=specification.js.map

/***/ }),

/***/ "../../../../../src/app/specification/specifications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Specifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Specifications = (function () {
    function Specifications() {
        this.specifications = new Array();
    }
    Specifications.prototype.setSpecifications = function (specifications) {
        this.specifications = specifications;
    };
    Specifications.prototype.getSpecifications = function () {
        return this.specifications;
    };
    Specifications.prototype.deleteSpecification = function (specificationId) {
        var specificationFound = this.specifications.find(function (specification) { return specificationId === specification.getId(); });
        var index = this.specifications.indexOf(specificationFound);
        if (index !== -1) {
            this.specifications.splice(index, 1);
            this.totalItems--;
        }
    };
    Specifications.prototype.addSpecification = function (specification) {
        this.specifications.push(specification);
        this.totalItems++;
    };
    Specifications.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Specifications.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Specifications;
}());
Specifications = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Specifications);

//# sourceMappingURL=specifications.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/new/new-subcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid digi-section rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD SUBCATEGORY</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n<div class=\"container-fluid rounded\"  >\r\n<br>      <div >\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"category-name\" class=\"form-control-label\">Subcategory Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"category-name\" [(ngModel)]=\"name\" name=\"first\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"description\" class=\"form-control-label\">Description:</label>\r\n            <input type=\"textarea\" style=\"width: 100%;\" cols=\"50\" rows=\"7\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"category-option\" class=\"form-control-label\">Categories:</label>\r\n            <select id=\"category-option\" class=\"form-control\"   [(ngModel)]=\"categoryId\" name=\"categories\">\r\n              <option *ngFor=\"let category of availableCategories\" [value]=\"category.id\">\r\n                {{ category.name }}\r\n              </option>\r\n            </select>            \t\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n          \t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n\t        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewSubcategory()\" >Add</button>\r\n      \t  </div>\r\n        </form>\r\n      </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/subcategory/new/new-subcategory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rounded {\n  background: #FFFFFF; }\n\n.hr {\n  margin-top: 3px;\n  margin-bottom: 0px;\n  border: 0;\n  border-top: 1px solid #eee; }\n\n.form-control {\n  width: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategory/new/new-subcategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSubcategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_categories__ = __webpack_require__("../../../../../src/app/category/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subcategory_service__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subcategory_component__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//declare var jQuery:any;
var subcategoryState = { name: 'subcategory', url: '/subcategory', component: __WEBPACK_IMPORTED_MODULE_6__subcategory_component__["a" /* SubcategoryComponent */] };
var NewSubcategoryComponent = (function () {
    function NewSubcategoryComponent(subcategoryService, categoryService, categories, stateService) {
        this.subcategoryService = subcategoryService;
        this.categoryService = categoryService;
        this.categories = categories;
        this.stateService = stateService;
    }
    NewSubcategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    NewSubcategoryComponent.prototype.addNewSubcategory = function () {
        var _this = this;
        var category = new __WEBPACK_IMPORTED_MODULE_2__subcategory__["a" /* Subcategory */]();
        category.setName(this.name);
        category.setDescription(this.description);
        category.setCategoryId(this.categoryId);
        this.subcategoryService.save(category).subscribe(function (data) {
            // console.log(data);
            _this.stateService.go('subcategory');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSubcategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories(null).subscribe(function (data) {
            _this.availableCategories = _this.categories.getCategories();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSubcategoryComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewSubcategoryComponent;
}());
NewSubcategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'new-subcategory',
        template: __webpack_require__("../../../../../src/app/subcategory/new/new-subcategory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subcategory/new/new-subcategory.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__subcategory_service__["a" /* SubcategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__subcategory_service__["a" /* SubcategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__category_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__category_categories__["a" /* Categories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_categories__["a" /* Categories */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__uirouter_angular__["StateService"]) === "function" && _d || Object])
], NewSubcategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-subcategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/new/new-subcategory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSubcategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_subcategory_component__ = __webpack_require__("../../../../../src/app/subcategory/new/new-subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewSubcategoryModule = (function () {
    function NewSubcategoryModule() {
    }
    return NewSubcategoryModule;
}());
NewSubcategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_subcategory_component__["a" /* NewSubcategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_subcategory_component__["a" /* NewSubcategoryComponent */]],
        providers: [],
        bootstrap: []
    })
], NewSubcategoryModule);

//# sourceMappingURL=new-subcategory.module.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subcategories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Subcategories = (function () {
    function Subcategories() {
        this.subcategories = new Array();
    }
    Subcategories.prototype.setSubcategories = function (subcategories) {
        this.subcategories = subcategories;
    };
    Subcategories.prototype.getSubcategories = function () {
        return this.subcategories;
    };
    Subcategories.prototype.deleteSubcategory = function (categoryId) {
        var categoryFound = this.subcategories.find(function (category) { return categoryId === category.getId(); });
        var index = this.subcategories.indexOf(categoryFound);
        if (index !== -1) {
            this.subcategories.splice(index, 1);
            this.totalItems--;
        }
    };
    Subcategories.prototype.addSubcategory = function (category) {
        this.subcategories.push(category);
        this.totalItems++;
    };
    Subcategories.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Subcategories.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Subcategories;
}());
Subcategories = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Subcategories);

//# sourceMappingURL=subcategories.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\">\r\n  <br>\r\n  <div class=\"column\">\r\n    <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">MANAGE SUBCATEGORIES</div>\r\n      <a href=\"#/new-subcategory\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add Subcategory</a>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 3px;margin-bottom: 1px;\">\r\n<br>\r\n  <div class=\"container-fluid digi-subcategory rounded\">\r\n   <br>\r\n    <div class=\"column\">\r\n      <nav class=\"navbar\">\r\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n      </nav>\r\n    </div>\r\n    <table class=\"table \">\r\n      <thead>\r\n        <tr>\r\n          <th>SubCategory Name</th>\r\n          <th>Description</th>\r\n          <th>Parent Category</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let subcategory of subcategories.subcategories| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: subcategories.totalItems, id:'server'} \">\r\n          <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"subcategory.name\" (input)=\"subcategory.name=$event.target.textContent\">{{ subcategory.name }}</td>\r\n          <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"subcategory.description\" (input)=\"subcategory.description=$event.target.textContent\">{{ subcategory.description }}</td>\r\n          <td class=\"table-cell\" contenteditable='true' (input)=\"onRowClick($event)\" [textContent]=\"subcategory.parentName\" (input)=\"subcategory.parentName=$event.target.textContent\">{{ subcategory.parentName }}</td>\r\n          <td class=\"table-cell\">\r\n            <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n              <div>\r\n                <span>\r\n                  <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n                </span>\r\n                <div class=\"tooltip-text-regisnation\">Edit</div>\r\n              </div>\r\n            </tooltip-content>\r\n            <button [disabled]=\"!isValid\" class=\"btn-primary\" (click)=\"updatesubcategory(subcategory)\">\r\n              <img src=\"assets/edit.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n            </button>\r\n\r\n            <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n              <div>\r\n                <span>\r\n                  <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n                </span>\r\n                <div class=\"tooltip-text-regisnation\">Delete</div>\r\n              </div>\r\n            </tooltip-content>\r\n            <button style=\"background-color:red;\" class=\"btn-primary\" (click)=\"getSubcategory(subcategory)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n              <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n  </div>\r\n  <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n              <div class=\"section-wrpr\">\r\n                <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                  <div class=\"content-wrpr\">\r\n                    Are you sure?\r\n                  </div>\r\n                  <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                    <img src=\"assets/delete.svg\" (click)=\"deleteSubcategory(currentSubcategoryId)\" style=\"width:30px\">\r\n                  </button>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-subcategory th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_category_service__ = __webpack_require__("../../../../../src/app/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory_service__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subcategories__ = __webpack_require__("../../../../../src/app/subcategory/subcategories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubcategoryComponent = (function () {
    function SubcategoryComponent(subcategoryService, categoryService, queryParamsService, subcategories) {
        this.subcategoryService = subcategoryService;
        this.categoryService = categoryService;
        this.queryParamsService = queryParamsService;
        this.subcategories = subcategories;
        this.currentPage = 1;
        this.loading = false;
        this.getSubcategories(null);
    }
    SubcategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getSubcategories(queryParam);
        });
    };
    SubcategoryComponent.prototype.getSubcategories = function (queryParams) {
        this.subcategoryService.getSubcategories(queryParams).subscribe(function (data) {
            //  console.log(data);
        }, function (error) {
            window.alert(error._body);
        });
    };
    SubcategoryComponent.prototype.deleteSubcategory = function (category) {
        var parentCatId = this.categoryService.getCategory(category.getParentName());
        this.subcategoryService.delete(category.getId(), parentCatId).subscribe(function (data) {
        });
    };
    // public deleteSubcategory(id: string) {
    //   //.alert("Are You Sure You want to delete?");
    //   console.log("Id "+ id);
    //    this.subcategoryService.delete(category.getId(), parentCatId).subscribe(data => {
    //    });
    //  }
    SubcategoryComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    SubcategoryComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    SubcategoryComponent.prototype.updateSubcategory = function (category) {
        var _this = this;
        this.loading = true;
        this.subcategoryService.update(category).subscribe(function (data) {
            _this.loading = false;
        });
    };
    SubcategoryComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    return SubcategoryComponent;
}());
SubcategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'subcategory',
        template: __webpack_require__("../../../../../src/app/subcategory/subcategory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subcategory/subcategory.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__subcategory_service__["a" /* SubcategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__subcategory_service__["a" /* SubcategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__category_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__subcategories__["a" /* Subcategories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__subcategories__["a" /* Subcategories */]) === "function" && _d || Object])
], SubcategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=subcategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subcategory_component__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory_service__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subcategories__ = __webpack_require__("../../../../../src/app/subcategory/subcategories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SubcategoryModule = (function () {
    function SubcategoryModule() {
    }
    return SubcategoryModule;
}());
SubcategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__subcategory_component__["a" /* SubcategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__subcategory_component__["a" /* SubcategoryComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__subcategories__["a" /* Subcategories */],
            __WEBPACK_IMPORTED_MODULE_2__subcategory_service__["a" /* SubcategoryService */]
        ],
        bootstrap: []
    })
], SubcategoryModule);

//# sourceMappingURL=subcategory.module.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subcategory__ = __webpack_require__("../../../../../src/app/subcategory/subcategory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subcategories__ = __webpack_require__("../../../../../src/app/subcategory/subcategories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubcategoryService = (function () {
    function SubcategoryService(http, subcategories, globals) {
        this.http = http;
        this.subcategories = subcategories;
        this.globals = globals;
        this.categoryUrl = this.globals.getBackendUrl() + 'category/';
    }
    SubcategoryService.prototype.getSubcategories = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.categoryUrl + 'subCategory' + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var subcategories = new Array();
            for (i = 0; i < response.length; i++) {
                var subcategory = new __WEBPACK_IMPORTED_MODULE_3__subcategory__["a" /* Subcategory */]();
                subcategory.setName(response[i].name);
                subcategory.setDescription(response[i].description);
                subcategory.setParentName(response[i].parentName);
                subcategories.push(subcategory);
            }
            _this.subcategories.setSubcategories(subcategories);
            _this.subcategories.setTotalItems(res1.totalElements);
            return true;
        });
    };
    SubcategoryService.prototype.save = function (subcategory) {
        var _this = this;
        var endPoint = this.categoryUrl + subcategory.getCategoryId() + '/';
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, subcategory)
            .map(function (res) {
            var res1 = res.json();
            subcategory.setId(res1.id);
            _this.subcategories.addSubcategory(subcategory);
            return res1.id;
        });
    };
    SubcategoryService.prototype.delete = function (id, parentId) {
        var _this = this;
        var endPoint = this.categoryUrl + parentId + '/' + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.subcategories.deleteSubcategory(res1.response);
        });
    };
    SubcategoryService.prototype.update = function (subcategory) {
        var endPoint = this.categoryUrl + subcategory.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return SubcategoryService;
}());
SubcategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__subcategories__["a" /* Subcategories */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__subcategories__["a" /* Subcategories */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], SubcategoryService);

var _a, _b, _c;
//# sourceMappingURL=subcategory.service.js.map

/***/ }),

/***/ "../../../../../src/app/subcategory/subcategory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subcategory; });
var Subcategory = (function () {
    function Subcategory() {
    }
    Subcategory.prototype.setId = function (id) {
        this.id = id;
    };
    Subcategory.prototype.getId = function () {
        return this.id;
    };
    Subcategory.prototype.setName = function (name) {
        this.name = name;
    };
    Subcategory.prototype.getName = function () {
        return this.name;
    };
    Subcategory.prototype.setDescription = function (description) {
        this.description = description;
    };
    Subcategory.prototype.getDescription = function () {
        return this.description;
    };
    Subcategory.prototype.setParentName = function (parentName) {
        this.parentName = parentName;
    };
    Subcategory.prototype.getParentName = function () {
        return this.parentName;
    };
    Subcategory.prototype.setCategoryId = function (categoryId) {
        this.categoryId = categoryId;
    };
    Subcategory.prototype.getCategoryId = function () {
        return this.categoryId;
    };
    return Subcategory;
}());

//# sourceMappingURL=subcategory.js.map

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  rounded\" >\r\n    <br>\r\n    <div class=\"column\">\r\n        <div class = \"glyphicon glyphicon-cog\">ADD USER</div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <hr style=\"margin-top: 5px;margin-bottom: 0px;\">\r\n<div class=\"container-fluid rounded\"  >\r\n  <br>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"user-name\" class=\"form-control-label\">User Id:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"user-id\" [(ngModel)]=\"userId\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user-name\" class=\"form-control-label\">First Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"firstName\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user-name\" class=\"form-control-label\">Last Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"lastName\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user-name\" class=\"form-control-label\">Email:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"email-text\" [(ngModel)]=\"email\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user-name\" class=\"form-control-label\">Phone Number:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"phone-number\" [(ngModel)]=\"phoneNumber\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password-text\" class=\"form-control-label\">Password:</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password-text\" [(ngModel)]=\"password\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"role-option\" class=\"form-control-label\">Roles:</label>\r\n            <select id=\"role-option\" class=\"form-control\"   [(ngModel)]=\"userRole\" name=\"roles\">\r\n              <option *ngFor=\"let role of availableRoles\" [value]=\"role.id\">\r\n                {{ role.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n       <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewUser()\" >Add</button>\r\n      </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 35%; }\n\n.rounded {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roles_role_service__ = __webpack_require__("../../../../../src/app/roles/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__roles_roles__ = __webpack_require__("../../../../../src/app/roles/roles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_component__ = __webpack_require__("../../../../../src/app/users/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var jQuery:any;
var userState = { name: 'user', url: '/user', component: __WEBPACK_IMPORTED_MODULE_7__user_component__["a" /* UserComponent */] };
var NewUserComponent = (function () {
    function NewUserComponent(userService, roleService, roles, users, stateService) {
        this.userService = userService;
        this.roleService = roleService;
        this.roles = roles;
        this.users = users;
        this.stateService = stateService;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    NewUserComponent.prototype.addNewUser = function () {
        var _this = this;
        this.appliedRoles = new Array();
        this.appliedRoles.push(this.userRole);
        var user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        user.setUserId(this.userId);
        user.setFirstName(this.firstName);
        user.setLastName(this.lastName);
        user.setEmail(this.email);
        user.setPhoneNumber(this.phoneNumber);
        user.setPassword(this.password);
        user.setRoleIds(this.appliedRoles);
        this.userService.save(user).subscribe(function (data) {
            _this.stateService.go('user');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewUserComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewUserComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles(null).subscribe(function (data) {
            _this.availableRoles = _this.roles.getRoles();
        }, function (error) {
            window.alert(error._body);
        });
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-user',
        template: __webpack_require__("../../../../../src/app/users/new/new-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/new/new-user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__roles_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__roles_role_service__["a" /* RoleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__roles_roles__["a" /* Roles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__roles_roles__["a" /* Roles */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__uirouter_angular__["StateService"]) === "function" && _e || Object])
], NewUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_user_component__ = __webpack_require__("../../../../../src/app/users/new/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewUserModule = (function () {
    function NewUserModule() {
    }
    return NewUserModule;
}());
NewUserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_user_component__["a" /* NewUserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_user_component__["a" /* NewUserComponent */]],
        providers: [],
        bootstrap: []
    })
], NewUserModule);

//# sourceMappingURL=new-user.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rounded \" ><br>\r\n  <div class=\"column\">\r\n      <div class=\"glyphicon glyphicon-cog\">MANAGE USER</div>\r\n      <a href=\"#/new-user\" class=\"btn btn-primary round pull-right\" role=\"button\">+Add User</a>\r\n    </div><br>\r\n</div>\r\n<hr style= \"margin-top: 3px;\r\nmargin-bottom: 1px;\">\r\n\r\n<div class=\"container-fluid digi-user rounded\">\r\n <br>\r\n  <nav class=\"navbar\">\r\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Search\">\r\n  </nav>\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>User</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>email</th>\r\n        <th>Phone Number</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users.users| filter:filter | paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: users.totalItems, id:'server'} \">\r\n        <td class=\"table-cell\">{{ user.userId }}</td>\r\n        <td class=\"table-cell\">{{ user.firstName }}</td>\r\n        <td class=\"table-cell\">{{ user.lastName }}</td>\r\n        <td class=\"table-cell\">{{ user.email }}</td>\r\n        <td class=\"table-cell\">{{ user.phoneNumber }}</td>\r\n        <td class=\"table-cell\">\r\n          <tooltip-content #screeningOptions class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">View</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button  class=\"btn-primary\">\r\n            <img src=\"assets/view.svg\" style=\"width:30px\"  tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\">\r\n          </button> \r\n          <!-- <button class=\"btn-primary\"><img src=\"assets/view.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOptions\"></button> -->\r\n          <tooltip-content #screeningOption1 class=\"recommended-programs-tooltip\">\r\n            <div>\r\n              <span>\r\n                <p class=\"fa fa-info-circle fa-tooltip\"></p>\r\n              </span>\r\n              <div class=\"tooltip-text-regisnation\">Delete</div>\r\n            </div>\r\n          </tooltip-content>\r\n          <button class=\"btn-primary\" style=\"background-color:red\" (click)=\"getUser(user)\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\r\n            <img src=\"assets/delete.svg\" style=\"width:30px\" tooltipPlacement=\"right\" [tooltip]=\"screeningOption1\">\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #428bca;\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"container-fluid rounded\" style=\"background-color:white;\">\r\n            <div class=\"section-wrpr\">\r\n              <div class=\"small-wrpr\" style=\"margin-top: 10px; margin-left:20px;\">\r\n                <div class=\"content-wrpr\">\r\n                  Are you sure?\r\n                </div>\r\n                <button class=\"close\" data-dismiss=\"modal\" style=\"background-color:red;\">\r\n                  <img src=\"assets/delete.svg\" (click)=\"deleteUser(currentUserId)\" style=\"width:30px\">\r\n                </button>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-user th {\n  background-color: #efefef; }\n\n.btn {\n  display: inline-block;\n  padding: 2px 5px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 8px 12px; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border-color: #357ebd; }\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #285e8e; }\n\n/***********************\r\n  ROUND BUTTONS\r\n************************/\n.round {\n  border-radius: 24px; }\n\n/***********************\r\n  CUSTON BTN VALUES\r\n************************/\n.btn {\n  border: 0 none;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn:focus, .btn:active:focus, .btn.active:focus {\n  outline: 0 none; }\n\n.btn-primary {\n  background: #00ADEE;\n  color: #ffffff; }\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {\n  background: #33a6cc; }\n\n.btn-primary:active, .btn-primary.active {\n  background: #007299;\n  box-shadow: none; }\n\n.rounded {\n  background: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, users, queryParamsService) {
        this.userService = userService;
        this.users = users;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.getUsers(null);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            // console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getUsers(queryParam);
        });
    };
    UserComponent.prototype.getUsers = function (queryParams) {
        this.userService.getUsers(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    UserComponent.prototype.deleteUser = function (id) {
        // console.log("Id "+ id);
        this.userService.delete(id).subscribe(function (data) {
        });
        //  console.log("delete");
    };
    UserComponent.prototype.getUser = function (user) {
        this.currentUserId = user.getId();
    };
    UserComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user',
        template: __webpack_require__("../../../../../src/app/users/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/users/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_user_module__ = __webpack_require__("../../../../../src/app/users/new/new-user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__roles_role_service__ = __webpack_require__("../../../../../src/app/roles/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_tooltip__ = __webpack_require__("../../../../ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_tooltip__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_user_module__["a" /* NewUserModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_tooltip__["TooltipModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__users__["a" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__roles_role_service__["a" /* RoleService */]
        ],
        bootstrap: []
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__("../../../../../src/app/globals/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, users, globals) {
        this.http = http;
        this.users = users;
        this.globals = globals;
        this.userUrl = this.globals.getBackendUrl() + 'user/';
    }
    UserService.prototype.getUsers = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 10;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.userUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var users = new Array();
            for (i = 0; i < response.length; i++) {
                var user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
                user.setUserId(response[i].userId);
                user.setFirstName(response[i].firstName);
                user.setLastName(response[i].lastName);
                user.setEmail(response[i].email);
                user.setPhoneNumber(response[i].phoneNumber);
                user.setPassword(response[i].password);
                user.setId(response[i].id);
                user.setRoleIds(response[i].roleIds);
                users.push(user);
            }
            _this.users.setUsers(users);
            _this.users.setTotalItems(res1.totalElements);
            return true;
        });
    };
    UserService.prototype.save = function (user) {
        var _this = this;
        var endPoint = this.userUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, user)
            .map(function (res) {
            var res1 = res.json();
            user.setId(res1.id);
            _this.users.addUser(user);
            return res1.id;
        });
    };
    UserService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.userUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.users.deleteUser(res1.response);
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* Globals */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    User.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setRoleIds = function (roleIds) {
        this.roleIds = roleIds;
    };
    User.prototype.getRoleIds = function () {
        return this.roleIds;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Users = (function () {
    function Users() {
        this.users = new Array();
    }
    Users.prototype.setUsers = function (users) {
        this.users = users;
    };
    Users.prototype.getUsers = function () {
        return this.getUsers();
    };
    Users.prototype.addUser = function (user) {
        this.users.push(user);
        this.totalItems++;
    };
    Users.prototype.deleteUser = function (userId) {
        var userFound = this.users.find(function (user) { return userId === user.getId(); });
        var index = this.users.indexOf(userFound);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.totalItems--;
        }
    };
    Users.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Users.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Users;
}());
Users = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Users);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map