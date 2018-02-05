"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by gipai on 10/4/2017.
 */
var core_1 = require("@angular/core");
var Users = (function () {
    function Users() {
        this.users = new Array();
    }
    Users.prototype.setUsers = function (users) {
        this.users = users;
    };
    Users.prototype.getUsers = function () {
        return this.getUsers();
    };
    Users.prototype.addUser = function (user) {
        this.users.push(user);
        this.totalItems++;
    };
    Users.prototype.deleteUser = function (userId) {
        var userFound = this.users.find(function (user) { return userId === user.getId(); });
        var index = this.users.indexOf(userFound);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.totalItems--;
        }
    };
    Users.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Users.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Users;
}());
Users = __decorate([
    core_1.Injectable()
], Users);
exports.Users = Users;
//# sourceMappingURL=users.js.map