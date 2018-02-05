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
var project_1 = require("./project");
var projects_1 = require("./projects");
var globals_1 = require("../globals/globals");
var employee_1 = require("../employee/employee");
var ProjectService = (function () {
    function ProjectService(http, projects, globals) {
        this.http = http;
        this.projects = projects;
        this.globals = globals;
        this.projectUrl = this.globals.getBackendUrl() + 'project/';
    }
    ProjectService.prototype.getProjects = function (queryParams) {
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
        var endPoint = this.projectUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var projects = new Array();
            for (i = 0; i < response.length; i++) {
                var project = new project_1.Project();
                project.setProjectName(response[i].projectName);
                project.setJobNumber(response[i].jobNumber);
                project.setSiteAddress(response[i].siteAddress);
                project.setDescription(response[i].description);
                project.setStartDate(new Date(response[i].startDate));
                project.setClientName(response[i].clientName);
                project.setId(response[i].id);
                if (response[i].employees) {
                    for (var j = 0; j < response[i].employees.length; j++) {
                        var emp = new employee_1.Employee();
                        emp.setFirstname(response[i].employees[j].firstname);
                        emp.setLastname(response[i].employees[j].lastname);
                        emp.setId(response[i].employees[j].id);
                        emp.setCompanyName(response[i].employees[j].companyName);
                        emp.setRole(response[i].employees[j].role);
                        project.addEmployee(emp);
                    }
                }
                projects.push(project);
            }
            _this.projects.setProjects(projects);
            _this.projects.setTotalItems(res1.totalElements);
            return true;
        });
    };
    ProjectService.prototype.save = function (project) {
        var _this = this;
        var endPoint = this.projectUrl + project.getClientId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        // Returns response
        return this.http.post(endPoint, project, options)
            .map(function (res) {
            var res1 = res.json();
            project.setId(res1.id);
            _this.projects.addProject(project);
            return res1.id;
        });
    };
    ProjectService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.projectUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.projects.deleteProject(res1.response);
        });
    };
    ProjectService.prototype.update = function (project) {
        var endPoint = this.projectUrl + project.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, projects_1.Projects, globals_1.Globals])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map