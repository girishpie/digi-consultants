"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Created by gipai on 10/8/2017.
 */
var Roles = (function () {
    function Roles() {
        this.roles = new Array();
    }
    Roles.prototype.setRoles = function (roles) {
        this.roles = roles;
    };
    Roles.prototype.getRoles = function () {
        return this.roles;
    };
    Roles.prototype.addRole = function (user) {
        this.roles.push(user);
        this.totalItems++;
    };
    Roles.prototype.deleteRole = function (userId) {
        var userFound = this.roles.find(function (user) { return userId === user.getId(); });
        var index = this.roles.indexOf(userFound);
        if (index !== -1) {
            this.roles.splice(index, 1);
            this.totalItems--;
        }
    };
    Roles.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Roles.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    Roles.prototype.getAllPermissions = function () {
    };
    return Roles;
}());
Roles = __decorate([
    core_1.Injectable()
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map