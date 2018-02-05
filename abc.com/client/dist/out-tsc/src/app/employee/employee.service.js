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
var employee_1 = require("./employee");
var employees_1 = require("./employees");
var globals_1 = require("../globals/globals");
var EmployeeService = (function () {
    function EmployeeService(http, employees, globals) {
        this.http = http;
        this.employees = employees;
        this.globals = globals;
        this.employeeUrl = this.globals.getBackendUrl() + 'employee/';
    }
    EmployeeService.prototype.getEmployees = function (queryParams) {
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
        var endPoint = this.employeeUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var employees = new Array();
            for (i = 0; i < response.length; i++) {
                var employee = new employee_1.Employee();
                employee.setFirstname(response[i].firstname);
                employee.setRole(response[i].role);
                employee.setTelephone(response[i].telephone);
                employee.setCompanyName(response[i].companyName);
                employee.setNoOfProjects(response[i].noOfProjects);
                employee.setId(response[i].id);
                employees.push(employee);
            }
            _this.employees.setEmployees(employees);
            _this.employees.setTotalItems(res1.totalElements);
            return true;
        });
    };
    EmployeeService.prototype.save = function (employee, file) {
        var _this = this;
        var endPoint = this.employeeUrl + employee.getCompanyId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', undefined);
        var options = new http_1.RequestOptions({ headers: headers });
        var formData = new FormData();
        //if(file !== null){
        formData.append('file', file, file.name);
        formData.append('inputStr', JSON.stringify(employee));
        //}
        // Returns response
        return this.http.post(endPoint, formData)
            .map(function (res) {
            var res1 = res.json();
            employee.setId(res1.id);
            _this.employees.addEmployee(employee);
            return res1.id;
        });
    };
    EmployeeService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.employeeUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.employees.deleteEmployee(res1.response);
        });
    };
    EmployeeService.prototype.update = function (employee) {
        var endPoint = this.employeeUrl + employee.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, employees_1.Employees, globals_1.Globals])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map