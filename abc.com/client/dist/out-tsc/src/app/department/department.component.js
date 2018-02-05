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
var department_service_1 = require("./department.service");
var departments_1 = require("./departments");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var DepartmentComponent = (function () {
    function DepartmentComponent(departmentService, departments, queryParamsService) {
        this.departmentService = departmentService;
        this.departments = departments;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getDepartments(null);
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getDepartments(queryParam);
        });
    };
    DepartmentComponent.prototype.getDepartments = function (queryParams) {
        this.departmentService.getDepartments(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    DepartmentComponent.prototype.updateDepartment = function (department) {
        var _this = this;
        this.loading = true;
        this.departmentService.update(department).subscribe(function (data) {
            _this.loading = false;
        });
    };
    DepartmentComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    DepartmentComponent.prototype.deleteDepartment = function (department) {
        this.departmentService.delete(department.getId()).subscribe(function (data) {
        });
    };
    DepartmentComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    DepartmentComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return DepartmentComponent;
}());
DepartmentComponent = __decorate([
    core_1.Component({
        selector: 'department',
        templateUrl: './department.component.html',
        styleUrls: ['./department.component.scss']
    }),
    __metadata("design:paramtypes", [department_service_1.DepartmentService,
        departments_1.Departments,
        query_params_service_1.QueryParamsService])
], DepartmentComponent);
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map