"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_specification_component_1 = require("./new-specification.component");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var NewSpecificationModule = (function () {
    function NewSpecificationModule() {
    }
    return NewSpecificationModule;
}());
NewSpecificationModule = __decorate([
    core_1.NgModule({
        declarations: [
            new_specification_component_1.NewSpecificationComponent
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule
        ],
        exports: [new_specification_component_1.NewSpecificationComponent],
        providers: [],
        bootstrap: []
    })
], NewSpecificationModule);
exports.NewSpecificationModule = NewSpecificationModule;
//# sourceMappingURL=new-specification.module.js.map