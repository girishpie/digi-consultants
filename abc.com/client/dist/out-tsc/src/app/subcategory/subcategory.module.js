"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var subcategory_component_1 = require("./subcategory.component");
var subcategory_service_1 = require("./subcategory.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var subcategories_1 = require("./subcategories");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var SubcategoryModule = (function () {
    function SubcategoryModule() {
    }
    return SubcategoryModule;
}());
SubcategoryModule = __decorate([
    core_1.NgModule({
        declarations: [
            subcategory_component_1.SubcategoryComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        exports: [subcategory_component_1.SubcategoryComponent],
        providers: [subcategories_1.Subcategories,
            subcategory_service_1.SubcategoryService
        ],
        bootstrap: []
    })
], SubcategoryModule);
exports.SubcategoryModule = SubcategoryModule;
//# sourceMappingURL=subcategory.module.js.map