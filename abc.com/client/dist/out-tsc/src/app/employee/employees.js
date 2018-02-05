"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employees = (function () {
    function Employees() {
        this.employees = new Array();
    }
    Employees.prototype.setEmployees = function (employees) {
        this.employees = employees;
    };
    Employees.prototype.getEmployees = function () {
        return this.employees;
    };
    Employees.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        this.totalItems++;
    };
    Employees.prototype.deleteEmployee = function (id) {
        var employeeFound = this.employees.find(function (employee) { return id === employee.getId(); });
        var index = this.employees.indexOf(employeeFound);
        if (index !== -1) {
            this.employees.splice(index, 1);
            this.totalItems--;
        }
    };
    Employees.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Employees.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Employees;
}());
Employees = __decorate([
    core_1.Injectable()
], Employees);
exports.Employees = Employees;
//# sourceMappingURL=employees.js.map