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
var project_service_1 = require("./project.service");
var projects_1 = require("./projects");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var ProjectComponent = (function () {
    function ProjectComponent(projectService, projects, queryParamsService) {
        this.projectService = projectService;
        this.projects = projects;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getProjects(null);
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getProjects(queryParam);
        });
    };
    ProjectComponent.prototype.getProjects = function (queryParams) {
        this.projectService.getProjects(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    ProjectComponent.prototype.updateProject = function (project) {
        var _this = this;
        this.loading = true;
        this.projectService.update(project).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ProjectComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    ProjectComponent.prototype.deleteProject = function (project) {
        this.projectService.delete(project.getId()).subscribe(function (data) {
        });
    };
    ProjectComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    core_1.Component({
        selector: 'project',
        templateUrl: './project.component.html',
        styleUrls: ['./project.component.scss']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        projects_1.Projects,
        query_params_service_1.QueryParamsService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map