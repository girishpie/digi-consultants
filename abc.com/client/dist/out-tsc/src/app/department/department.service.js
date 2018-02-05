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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var department_1 = require("./department");
var departments_1 = require("./departments");
var globals_1 = require("../globals/globals");
var DepartmentService = (function () {
    function DepartmentService(http, departments, globals) {
        this.http = http;
        this.departments = departments;
        this.globals = globals;
        this.departmentUrl = this.globals.getBackendUrl() + 'boqdepartment/';
    }
    DepartmentService.prototype.getDepartments = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.departmentUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var departments = new Array();
            for (i = 0; i < response.length; i++) {
                var department = new department_1.Department();
                department.setBoqDepartmentName(response[i].boqDepartmentName);
                department.setProjectName(response[i].projectName);
                department.setId(response[i].id);
                departments.push(department);
            }
            _this.departments.setDepartments(departments);
            _this.departments.setTotalItems(res1.totalElements);
            return true;
        });
    };
    DepartmentService.prototype.save = function (department) {
        var _this = this;
        var endPoint = this.departmentUrl + department.getProjectId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, department)
            .map(function (res) {
            var res1 = res.json();
            department.setId(res1.id);
            _this.departments.addDepartment(department);
            return res1.id;
        });
    };
    DepartmentService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.departmentUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.departments.deleteDepartment(res1.response);
        });
    };
    DepartmentService.prototype.update = function (department) {
        var endPoint = this.departmentUrl + department.getId();
        // Returns response
        return this.http.patch(endPoint, department)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return DepartmentService;
}());
DepartmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, departments_1.Departments, globals_1.Globals])
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map