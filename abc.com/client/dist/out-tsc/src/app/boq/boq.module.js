"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var boq_component_1 = require("./boq.component");
var boq_service_1 = require("./boq.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var boqs_1 = require("./boqs");
var ngx_pagination_1 = require("ngx-pagination");
var BoQModule = (function () {
    function BoQModule() {
    }
    return BoQModule;
}());
BoQModule = __decorate([
    core_1.NgModule({
        declarations: [
            boq_component_1.BoQComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
        ],
        exports: [boq_component_1.BoQComponent],
        providers: [boqs_1.BoQs,
            boq_service_1.BoQService
        ],
        bootstrap: []
    })
], BoQModule);
exports.BoQModule = BoQModule;
//# sourceMappingURL=boq.module.js.map