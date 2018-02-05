"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client() {
    }
    Client.prototype.setId = function (id) {
        this.id = id;
    };
    Client.prototype.getId = function () {
        return this.id;
    };
    Client.prototype.setName = function (name) {
        this.name = name;
    };
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Client.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Client.prototype.setCompanyId = function (companyId) {
        this.companyId = companyId;
    };
    Client.prototype.getCompanyId = function () {
        return this.companyId;
    };
    Client.prototype.setAddress = function (address) {
        this.address = address;
    };
    Client.prototype.getAddress = function () {
        return this.address;
    };
    Client.prototype.setProjectNames = function (projectNames) {
        this.projectNames = projectNames;
    };
    Client.prototype.getProjectNames = function () {
        return this.projectNames;
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map