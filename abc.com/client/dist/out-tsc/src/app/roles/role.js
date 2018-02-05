"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role = (function () {
    function Role() {
    }
    Role.prototype.setName = function (name) {
        this.name = name;
    };
    Role.prototype.getName = function () {
        return this.name;
    };
    Role.prototype.setLastUpdated = function (lastUpdated) {
        this.lastUpdated = lastUpdated;
    };
    Role.prototype.getLastUpdated = function () {
        return this.lastUpdated;
    };
    Role.prototype.setId = function (id) {
        this.id = id;
    };
    Role.prototype.getId = function () {
        return this.id;
    };
    Role.prototype.setPermissions = function (permissions) {
        this.permissions = permissions;
    };
    Role.prototype.getPermissions = function () {
        return this.permissions;
    };
    Role.prototype.addPermission = function (permission) {
        if (this.permissions.find(function (item) { return item === permission; })) {
            return;
        }
        this.permissions.push(permission);
    };
    Role.prototype.deletePermission = function (permission) {
        var item = this.permissions.find(function (item) { return item === permission; });
        var index = this.permissions.indexOf(item);
        if (index !== -1) {
            this.permissions.splice(index, 1);
        }
    };
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=role.js.map