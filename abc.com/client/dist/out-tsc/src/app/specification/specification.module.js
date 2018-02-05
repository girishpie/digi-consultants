"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var specification_component_1 = require("./specification.component");
var specifications_1 = require("./specifications");
var specification_service_1 = require("./specification.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_specification_module_1 = require("./new/new-specification.module");
var ngx_pagination_1 = require("ngx-pagination");
var ngx_tooltip_1 = require("ngx-tooltip");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var SpecificationModule = (function () {
    function SpecificationModule() {
    }
    return SpecificationModule;
}());
SpecificationModule = __decorate([
    core_1.NgModule({
        declarations: [
            specification_component_1.SpecificationComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_specification_module_1.NewSpecificationModule,
            ngx_tooltip_1.TooltipModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        exports: [specification_component_1.SpecificationComponent],
        providers: [
            specifications_1.Specifications,
            specification_service_1.SpecificationService
        ],
        bootstrap: []
    })
], SpecificationModule);
exports.SpecificationModule = SpecificationModule;
//# sourceMappingURL=specification.module.js.map