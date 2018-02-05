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
var employee_service_1 = require("./employee.service");
var employees_1 = require("./employees");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, employees, queryParamsService) {
        this.employeeService = employeeService;
        this.employees = employees;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getEmployees(null);
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getEmployees(queryParam);
        });
    };
    EmployeeComponent.prototype.getEmployees = function (queryParams) {
        this.employeeService.getEmployees(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    EmployeeComponent.prototype.updateEmployee = function (employee) {
        var _this = this;
        this.loading = true;
        this.employeeService.update(employee).subscribe(function (data) {
            _this.loading = false;
        });
    };
    EmployeeComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    EmployeeComponent.prototype.deleteEmployee = function (employee) {
        this.employeeService.delete(employee.getId()).subscribe(function (data) {
        });
    };
    EmployeeComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employee',
        templateUrl: './employee.component.html',
        styleUrls: ['./employee.component.scss']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        employees_1.Employees,
        query_params_service_1.QueryParamsService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map