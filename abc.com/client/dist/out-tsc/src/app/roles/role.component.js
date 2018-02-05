"use strict";
/**
 * Created by gipai on 10/8/2017.
 */
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
var core_1 = require("@angular/core");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var role_service_1 = require("./role.service");
var roles_1 = require("./roles");
var role_helper_1 = require("./role-helper");
var RoleComponent = (function () {
    function RoleComponent(roleService, roles, roleHelper, queryParamsService) {
        this.roleService = roleService;
        this.roles = roles;
        this.roleHelper = roleHelper;
        this.queryParamsService = queryParamsService;
        this.getRoles(null);
    }
    RoleComponent.prototype.getRoles = function (queryParams) {
        var _this = this;
        this.roleService.getRoles(queryParams).subscribe(function (data) {
            _this.roleMap = new Map();
            for (var i = 0; i < _this.roles.getRoles().length; i++) {
                var role = _this.roles.getRoles()[i];
                var permissions = new Map();
                for (var j = 0; j < _this.roleHelper.getPermissions().length; j++) {
                    var permission = _this.roleHelper.getPermissions()[j];
                    permissions.set(permission, _this.hasPermission(role, permission));
                }
                _this.roleMap.set(_this.roles.getRoles()[i].getId(), permissions);
            }
        }, function (error) {
            window.alert(error._body);
        });
    };
    RoleComponent.prototype.hasPermission = function (role, permission) {
        var permissions = role.getPermissions();
        if (permissions.find(function (item) { return permission == item; })) {
            return true;
        }
        return false;
    };
    RoleComponent.prototype.save = function (role, permission) {
        var value = this.roleMap.get(role.getId()).get(permission);
        this.roleMap.get(role.getId()).set(permission, !value);
        if (value) {
            role.deletePermission(permission);
        }
        else {
            role.addPermission(permission);
        }
        this.roleService.patch(role).subscribe();
    };
    RoleComponent.prototype.deleteRole = function (role) {
        this.roleService.delete(role.getId()).subscribe(function (data) {
        });
    };
    return RoleComponent;
}());
RoleComponent = __decorate([
    core_1.Component({
        selector: 'role',
        templateUrl: './role.component.html',
        styleUrls: ['./role.component.scss']
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        roles_1.Roles,
        role_helper_1.RoleHelper,
        query_params_service_1.QueryParamsService])
], RoleComponent);
exports.RoleComponent = RoleComponent;
//# sourceMappingURL=role.component.js.map