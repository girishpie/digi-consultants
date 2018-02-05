"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var document_component_1 = require("./document.component");
var document_service_1 = require("./document.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_file_module_1 = require("./new/new-file.module");
var documents_1 = require("./documents");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var DocumentModule = (function () {
    function DocumentModule() {
    }
    return DocumentModule;
}());
DocumentModule = __decorate([
    core_1.NgModule({
        declarations: [
            document_component_1.DocumentComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_file_module_1.NewDocumentModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        exports: [document_component_1.DocumentComponent],
        providers: [documents_1.Documents,
            document_service_1.DocumentService
        ],
        bootstrap: []
    })
], DocumentModule);
exports.DocumentModule = DocumentModule;
//# sourceMappingURL=document.module.js.map