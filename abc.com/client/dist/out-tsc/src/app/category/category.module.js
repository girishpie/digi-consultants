"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var category_component_1 = require("./category.component");
var category_service_1 = require("./category.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
//import {NewCategoryComponent} from './new/new-category.component';
var categories_1 = require("./categories");
var ngx_pagination_1 = require("ngx-pagination");
var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    core_1.NgModule({
        declarations: [
            category_component_1.CategoryComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule
        ],
        exports: [category_component_1.CategoryComponent],
        providers: [categories_1.Categories,
            category_service_1.CategoryService
        ],
        bootstrap: []
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map