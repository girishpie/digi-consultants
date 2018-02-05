"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var role_component_1 = require("./role.component");
var role_service_1 = require("./role.service");
var new_role_module_1 = require("../roles/new/new-role.module");
var ngx_pagination_1 = require("ngx-pagination/dist/ngx-pagination");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var roles_1 = require("./roles");
var role_helper_1 = require("./role-helper");
var forms_1 = require("@angular/forms");
var ng2_search_filter_1 = require("ng2-search-filter");
var RoleModule = (function () {
    function RoleModule() {
    }
    return RoleModule;
}());
RoleModule = __decorate([
    core_1.NgModule({
        declarations: [
            role_component_1.RoleComponent
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_role_module_1.NewRoleModule,
            ng2_search_filter_1.Ng2SearchPipeModule
        ],
        exports: [role_component_1.RoleComponent],
        providers: [
            role_service_1.RoleService,
            roles_1.Roles,
            role_helper_1.RoleHelper
        ],
        bootstrap: []
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map