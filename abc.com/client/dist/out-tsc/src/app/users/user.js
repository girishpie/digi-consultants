"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    User.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setRoleIds = function (roleIds) {
        this.roleIds = roleIds;
    };
    User.prototype.getRoleIds = function () {
        return this.roleIds;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map