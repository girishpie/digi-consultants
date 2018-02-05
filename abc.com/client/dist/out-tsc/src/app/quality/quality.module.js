"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quality_component_1 = require("./quality.component");
var quality_service_1 = require("./quality.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_quality_module_1 = require("./new/new-quality.module");
var qualities_1 = require("./qualities");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var QualityModule = (function () {
    function QualityModule() {
    }
    return QualityModule;
}());
QualityModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_quality_module_1.NewQualityModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        declarations: [
            quality_component_1.QualityComponent
        ],
        exports: [quality_component_1.QualityComponent],
        providers: [qualities_1.Qualities,
            quality_service_1.QualityService
        ],
        bootstrap: []
    })
], QualityModule);
exports.QualityModule = QualityModule;
//# sourceMappingURL=quality.module.js.map