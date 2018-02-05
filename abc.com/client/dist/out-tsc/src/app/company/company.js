"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company() {
    }
    Company.prototype.setId = function (id) {
        this.id = id;
    };
    Company.prototype.getId = function () {
        return this.id;
    };
    Company.prototype.setAddress = function (address) {
        this.address = address;
    };
    Company.prototype.getAddress = function () {
        return this.address;
    };
    Company.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    Company.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Company.prototype.setEmployeeNames = function (employeeNames) {
        this.employeeNames = employeeNames;
    };
    Company.prototype.getEmployeeNames = function () {
        return this.employeeNames;
    };
    Company.prototype.setClientNames = function (clientNames) {
        this.clientNames = clientNames;
    };
    Company.prototype.getClientNames = function () {
        return this.clientNames;
    };
    Company.prototype.setOfficeNames = function (officeNames) {
        this.officeNames = officeNames;
    };
    Company.prototype.getOfficeNames = function () {
        return this.officeNames;
    };
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map