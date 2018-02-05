"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_component_1 = require("./employee.component");
var employee_service_1 = require("./employee.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var employees_1 = require("./employees");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            //RouterModule,
            ngx_pagination_1.NgxPaginationModule,
            //NewEmployeeModule
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        declarations: [
            employee_component_1.EmployeeComponent
        ],
        exports: [employee_component_1.EmployeeComponent],
        providers: [employees_1.Employees,
            employee_service_1.EmployeeService
        ],
        bootstrap: []
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map