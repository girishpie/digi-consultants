"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_category_component_1 = require("./new-category.component");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var NewCategoryModule = (function () {
    function NewCategoryModule() {
    }
    return NewCategoryModule;
}());
NewCategoryModule = __decorate([
    core_1.NgModule({
        declarations: [
            new_category_component_1.NewCategoryComponent
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule
        ],
        exports: [new_category_component_1.NewCategoryComponent],
        providers: [],
        bootstrap: []
    })
], NewCategoryModule);
exports.NewCategoryModule = NewCategoryModule;
//# sourceMappingURL=new-category.module.js.map