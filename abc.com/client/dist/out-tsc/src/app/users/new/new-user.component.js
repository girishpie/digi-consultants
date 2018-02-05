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
var user_service_1 = require("../user.service");
var role_service_1 = require("../../roles/role.service");
var user_1 = require("../user");
var users_1 = require("../users");
var roles_1 = require("../../roles/roles");
var angular_1 = require("@uirouter/angular");
var user_component_1 = require("../user.component");
//declare var jQuery:any;
var userState = { name: 'user', url: '/user', component: user_component_1.UserComponent };
var NewUserComponent = (function () {
    function NewUserComponent(userService, roleService, roles, users, stateService) {
        this.userService = userService;
        this.roleService = roleService;
        this.roles = roles;
        this.users = users;
        this.stateService = stateService;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    NewUserComponent.prototype.addNewUser = function () {
        var _this = this;
        this.appliedRoles = new Array();
        this.appliedRoles.push(this.userRole);
        console.log(this.userId + this.password + this.userRole);
        var user = new user_1.User();
        user.setUserId(this.userId);
        user.setFirstName(this.firstName);
        user.setLastName(this.lastName);
        user.setEmail(this.email);
        user.setPhoneNumber(this.phoneNumber);
        user.setPassword(this.password);
        user.setRoleIds(this.appliedRoles);
        this.userService.save(user).subscribe(function (data) {
            console.log(data);
            // user.setId(data);
            //this.users.addUser(user);
            _this.stateService.go('user');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewUserComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewUserComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles(null).subscribe(function (data) {
            _this.availableRoles = _this.roles.getRoles();
        }, function (error) {
            window.alert(error._body);
        });
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    core_1.Component({
        selector: 'new-user',
        templateUrl: './new-user.component.html',
        styleUrls: ['./new-user.component.scss']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        role_service_1.RoleService,
        roles_1.Roles,
        users_1.Users, angular_1.StateService])
], NewUserComponent);
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=new-user.component.js.map