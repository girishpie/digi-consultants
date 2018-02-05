"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Departments = (function () {
    function Departments() {
        this.departments = new Array();
    }
    Departments.prototype.setDepartments = function (departments) {
        this.departments = departments;
    };
    Departments.prototype.getDepartments = function () {
        return this.departments;
    };
    Departments.prototype.deleteDepartment = function (departmentId) {
        var departmentFound = this.departments.find(function (department) { return departmentId === department.getId(); });
        var index = this.departments.indexOf(departmentFound);
        if (index !== -1) {
            this.departments.splice(index, 1);
            this.totalItems--;
        }
    };
    Departments.prototype.addDepartment = function (department) {
        this.departments.push(department);
        this.totalItems++;
    };
    Departments.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Departments.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Departments;
}());
Departments = __decorate([
    core_1.Injectable()
], Departments);
exports.Departments = Departments;
//# sourceMappingURL=departments.js.map