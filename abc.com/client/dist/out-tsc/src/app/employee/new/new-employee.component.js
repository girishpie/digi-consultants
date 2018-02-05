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
var projects_1 = require("../../project/projects");
var project_service_1 = require("../../project/project.service");
var companies_1 = require("../../company/companies");
var company_service_1 = require("../../company/company.service");
var employee_1 = require("../employee");
var employee_service_1 = require("../employee.service");
var employee_component_1 = require("../employee.component");
var employees_1 = require("../employees");
var angular_1 = require("@uirouter/angular");
//declare var jQuery:any;
var employeeState = { name: 'employee', url: '/employee', component: employee_component_1.EmployeeComponent };
var NewEmployeeComponent = (function () {
    function NewEmployeeComponent(employeeService, companyService, projectService, employees, companies, projects, stateService) {
        this.employeeService = employeeService;
        this.companyService = companyService;
        this.projectService = projectService;
        this.employees = employees;
        this.companies = companies;
        this.projects = projects;
        this.stateService = stateService;
        //this.router = router;
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
        this.getCompanies();
        this.getProjects();
    };
    NewEmployeeComponent.prototype.addNewEmployee = function () {
        var _this = this;
        var employee = new employee_1.Employee();
        employee.setFirstname(this.firstname);
        employee.setEmail(this.email);
        employee.setLastname(this.lastname);
        employee.setGender(this.gender);
        employee.setRole(this.role);
        employee.setAddress(this.address);
        employee.setCity(this.city);
        employee.setCountry(this.country);
        employee.setTelephone(this.telephone);
        employee.setMobile(this.mobile);
        employee.setEmail(this.email);
        employee.setDOB(this.DOB);
        employee.setCompanyId(this.companyId);
        employee.setProjectIds(this.projectIds);
        this.employeeService.save(employee, this.file).subscribe(function (data) {
            console.log(data);
            employee.setId(data);
            _this.employees.addEmployee(employee);
            _this.stateService.go('employee');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewEmployeeComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies(null).subscribe(function (data) {
            _this.availableCompanies = _this.companies.getCompanies();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewEmployeeComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewEmployeeComponent.prototype.add = function (e) {
        var r = new FileReader();
        r.onload = function (e) {
            document.getElementById("preview").setAttribute("src", e.target.result);
        };
        r.readAsDataURL(e.target.files[0]);
        var fileList = e.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
        }
    };
    NewEmployeeComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewEmployeeComponent;
}());
NewEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'new-employee',
        templateUrl: './new-employee.component.html',
        styleUrls: ['./new-employee.component.scss']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, company_service_1.CompanyService, project_service_1.ProjectService,
        employees_1.Employees, companies_1.Companies, projects_1.Projects,
        angular_1.StateService])
], NewEmployeeComponent);
exports.NewEmployeeComponent = NewEmployeeComponent;
//# sourceMappingURL=new-employee.component.js.map