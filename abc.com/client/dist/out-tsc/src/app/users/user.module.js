"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_component_1 = require("./user.component");
var user_service_1 = require("./user.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var new_user_module_1 = require("./new/new-user.module");
var role_service_1 = require("../roles/role.service");
var users_1 = require("./users");
var ngx_pagination_1 = require("ngx-pagination");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        declarations: [
            user_component_1.UserComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_user_module_1.NewUserModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        exports: [user_component_1.UserComponent],
        providers: [users_1.Users,
            user_service_1.UserService,
            role_service_1.RoleService
        ],
        bootstrap: []
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map