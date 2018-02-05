"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var section_component_1 = require("./section.component");
var section_service_1 = require("./section.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_section_module_1 = require("./new/new-section.module");
var sections_1 = require("./sections");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var SectionModule = (function () {
    function SectionModule() {
    }
    return SectionModule;
}());
SectionModule = __decorate([
    core_1.NgModule({
        declarations: [
            section_component_1.SectionComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_section_module_1.NewSectionModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        exports: [section_component_1.SectionComponent],
        providers: [sections_1.Sections,
            section_service_1.SectionService
        ],
        bootstrap: []
    })
], SectionModule);
exports.SectionModule = SectionModule;
//# sourceMappingURL=section.module.js.map