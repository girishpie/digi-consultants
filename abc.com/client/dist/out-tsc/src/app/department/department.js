"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = (function () {
    function Department() {
    }
    Department.prototype.setId = function (id) {
        this.id = id;
    };
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.setBoqDepartmentName = function (name) {
        this.departmentName = name;
    };
    Department.prototype.getBoqDepartmentName = function () {
        return this.departmentName;
    };
    Department.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Department.prototype.getProjectName = function () {
        return this.projectName;
    };
    Department.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Department.prototype.getProjectId = function () {
        return this.projectId;
    };
    return Department;
}());
exports.Department = Department;
//# sourceMappingURL=department.js.map