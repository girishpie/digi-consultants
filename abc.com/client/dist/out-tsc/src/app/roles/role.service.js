"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by gipai on 10/2/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var role_1 = require("./role");
var globals_1 = require("../globals/globals");
var roles_1 = require("./roles");
var RoleService = (function () {
    function RoleService(http, globals, roles) {
        this.http = http;
        this.globals = globals;
        this.roles = roles;
        this.userUrl = 'role/';
    }
    RoleService.prototype.getRoles = function (queryParams) {
        var _this = this;
        var endPoint = this.globals.getBackendUrl() + this.userUrl;
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var roles = new Array();
            for (i = 0; i < response.length; i++) {
                var role = new role_1.Role();
                role.setId(response[i].id);
                role.setName(response[i].name);
                role.setLastUpdated(response[i].lastUpdated);
                role.setPermissions(response[i].permissions);
                roles.push(role);
            }
            _this.roles.setRoles(roles);
        });
    };
    RoleService.prototype.patch = function (role) {
        var endPoint = this.globals.getBackendUrl() + this.userUrl + role.getId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        // Returns response
        return this.http.patch(endPoint, role, options)
            .map(function (res) {
            var res1 = res.json();
            return res1.id;
        });
    };
    RoleService.prototype.save = function (role) {
        var _this = this;
        var endPoint = this.globals.getBackendUrl() + this.userUrl;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        // Returns response
        return this.http.post(endPoint, role, options)
            .map(function (res) {
            var res1 = res.json();
            role.setId(res1.id);
            _this.roles.addRole(role);
            return res1.id;
        });
    };
    RoleService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.globals.getBackendUrl() + this.userUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.roles.deleteRole(res1.response);
        });
    };
    return RoleService;
}());
RoleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, globals_1.Globals, roles_1.Roles])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map