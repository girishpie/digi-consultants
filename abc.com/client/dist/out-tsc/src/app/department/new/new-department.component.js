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
var department_1 = require("../department");
var departments_1 = require("../departments");
var department_service_1 = require("../department.service");
var projects_1 = require("../../project/projects");
var project_service_1 = require("../../project/project.service");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var department_component_1 = require("../department.component");
//declare var jQuery:any;
var departmentState = { name: 'department', url: '/department', component: department_component_1.DepartmentComponent };
var NewDepartmentComponent = (function () {
    function NewDepartmentComponent(departmentService, projectService, departments, projects, stateService) {
        this.departmentService = departmentService;
        this.projectService = projectService;
        this.departments = departments;
        this.projects = projects;
        this.stateService = stateService;
    }
    NewDepartmentComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewDepartmentComponent.prototype.addNewDepartment = function () {
        var _this = this;
        var department = new department_1.Department();
        department.setBoqDepartmentName(this.name);
        department.setProjectId(this.projectId);
        this.departmentService.save(department).subscribe(function (data) {
            console.log(data);
            // department.setId(data);
            // this.departments.addDepartment(department);
            _this.stateService.go('department');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDepartmentComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDepartmentComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewDepartmentComponent;
}());
NewDepartmentComponent = __decorate([
    core_1.Component({
        selector: 'new-department',
        templateUrl: './new-department.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [department_service_1.DepartmentService, project_service_1.ProjectService,
        departments_1.Departments, projects_1.Projects, angular_1.StateService])
], NewDepartmentComponent);
exports.NewDepartmentComponent = NewDepartmentComponent;
//# sourceMappingURL=new-department.component.js.map