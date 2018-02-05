"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Projects = (function () {
    function Projects() {
        this.projects = new Array();
    }
    Projects.prototype.setProjects = function (projects) {
        this.projects = projects;
    };
    Projects.prototype.getProjects = function () {
        return this.projects;
    };
    Projects.prototype.addProject = function (project) {
        this.projects.push(project);
        this.totalItems++;
    };
    Projects.prototype.deleteProject = function (projectName) {
        var projectFound = this.projects.find(function (project) { return projectName === project.getProjectName(); });
        var index = this.projects.indexOf(projectFound);
        if (index !== -1) {
            this.projects.splice(index, 1);
            this.totalItems--;
        }
    };
    Projects.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Projects.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Projects;
}());
Projects = __decorate([
    core_1.Injectable()
], Projects);
exports.Projects = Projects;
//# sourceMappingURL=projects.js.map