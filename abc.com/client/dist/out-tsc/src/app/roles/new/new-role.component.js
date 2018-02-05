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
 * Created by gipai on 10/3/2017.
 */
var core_1 = require("@angular/core");
var role_service_1 = require("../role.service");
var role_1 = require("../role");
var role_helper_1 = require("../role-helper");
var roles_1 = require("../roles");
var angular_1 = require("@uirouter/angular");
var role_component_1 = require("../role.component");
//declare var jQuery:any;
var roleState = { name: 'role', url: '/role', component: role_component_1.RoleComponent };
var NewRoleComponent = (function () {
    function NewRoleComponent(roleService, roles, roleHelper, stateService) {
        this.roleService = roleService;
        this.roles = roles;
        this.roleHelper = roleHelper;
        this.stateService = stateService;
        this.permissions = {};
        this.permissionsKey = {};
        for (var j = 0; j < this.roleHelper.getPermissions().length; j++) {
            var permission = this.roleHelper.getPermissions()[j];
            this.permissions[permission] = false;
        }
        this.permissionsKey = this.roleHelper.getPermissionskey();
    }
    NewRoleComponent.prototype.addNewRole = function () {
        var _this = this;
        var role = new role_1.Role();
        role.setName(this.name);
        var selectedPermissions = new Array();
        var keys = Object.keys(this.permissions);
        for (var i = 0; i < keys.length; i++) {
            if (this.permissions[keys[i]] === true) {
                selectedPermissions.push(this.permissionsKey[i]);
            }
        }
        role.setPermissions(selectedPermissions);
        this.roleService.save(role).subscribe(function (data) {
            console.log(data);
            //role.setId(data);
            //this.roles.addRole(role);
            _this.stateService.go('role');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewRoleComponent.prototype.onChanged = function (permission) {
        var value = this.permissions[permission];
        this.permissions[permission] = !value;
    };
    NewRoleComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewRoleComponent;
}());
NewRoleComponent = __decorate([
    core_1.Component({
        selector: 'new-role',
        templateUrl: './new-role.component.html',
        styleUrls: ['./new-role.component.scss']
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService, roles_1.Roles, role_helper_1.RoleHelper, angular_1.StateService])
], NewRoleComponent);
exports.NewRoleComponent = NewRoleComponent;
//# sourceMappingURL=new-role.component.js.map