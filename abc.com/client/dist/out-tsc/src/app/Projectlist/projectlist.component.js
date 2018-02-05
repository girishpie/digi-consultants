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
var projects_1 = require("../project/projects");
var project_service_1 = require("../project/project.service");
var angular_1 = require("@uirouter/angular");
var project_component_1 = require("../project/project.component");
var core_1 = require("@angular/core");
// declare var jQuery:any;
var projectState = { name: 'project', url: '/project', component: project_component_1.ProjectComponent };
var ProjectListComponent = (function () {
    function ProjectListComponent(projectService, projects, stateService) {
        this.projectService = projectService;
        this.projects = projects;
        this.stateService = stateService;
    }
    ProjectListComponent.prototype.ngOnInit = function () { };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    core_1.Component({
        selector: 'projectlist',
        templateUrl: './projectlist.component.html',
        styleUrls: ['./projectlist.component.css']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, projects_1.Projects,
        angular_1.StateService])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=projectlist.component.js.map