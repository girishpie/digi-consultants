"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phase_component_1 = require("./phase.component");
var phase_service_1 = require("./phase.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_phase_module_1 = require("./new/new-phase.module");
var phases_1 = require("./phases");
var ngx_pagination_1 = require("ngx-pagination");
var forms_1 = require("@angular/forms");
var ng2_search_filter_1 = require("ng2-search-filter");
var PhaseModule = (function () {
    function PhaseModule() {
    }
    return PhaseModule;
}());
PhaseModule = __decorate([
    core_1.NgModule({
        declarations: [
            phase_component_1.PhaseComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            ngx_pagination_1.NgxPaginationModule,
            new_phase_module_1.NewPhaseModule,
            ng2_search_filter_1.Ng2SearchPipeModule
        ],
        exports: [phase_component_1.PhaseComponent],
        providers: [phases_1.Phases,
            phase_service_1.PhaseService
        ],
        bootstrap: []
    })
], PhaseModule);
exports.PhaseModule = PhaseModule;
//# sourceMappingURL=phase.module.js.map