"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var projectlist_component_1 = require("./projectlist.component");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var document_module_1 = require("../document/document.module");
var boq_module_1 = require("../boq/boq.module");
var employee_module_1 = require("../employee/employee.module");
var http_1 = require("@angular/http");
var ngx_pagination_1 = require("ngx-pagination");
var meeting_module_1 = require("../meeting/meeting.module");
var ProjectListModule = (function () {
    function ProjectListModule() {
    }
    return ProjectListModule;
}());
ProjectListModule = __decorate([
    core_1.NgModule({
        declarations: [
            projectlist_component_1.ProjectListComponent
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            document_module_1.DocumentModule,
            boq_module_1.BoQModule,
            employee_module_1.EmployeeModule,
            ngx_pagination_1.NgxPaginationModule,
            meeting_module_1.MeetingModule,
        ],
        exports: [projectlist_component_1.ProjectListComponent],
        providers: [],
        bootstrap: []
    })
], ProjectListModule);
exports.ProjectListModule = ProjectListModule;
//# sourceMappingURL=projectlist.module.js.map