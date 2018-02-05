"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var company_component_1 = require("./company.component");
var company_service_1 = require("./company.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_company_module_1 = require("./new/new-company.module");
var companies_1 = require("./companies");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    core_1.NgModule({
        declarations: [
            company_component_1.CompanyComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_company_module_1.NewCompanyModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        exports: [company_component_1.CompanyComponent],
        providers: [companies_1.Companies,
            company_service_1.CompanyService
        ],
        bootstrap: []
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map