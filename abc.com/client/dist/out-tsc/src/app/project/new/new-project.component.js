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
var client_service_1 = require("../../client/client.service");
var clients_1 = require("../../client/clients");
var phases_1 = require("../../phase/phases");
var phase_service_1 = require("../../phase/phase.service");
var project_1 = require("../project");
var project_service_1 = require("../project.service");
var projects_1 = require("../projects");
var angular_1 = require("@uirouter/angular");
var project_component_1 = require("../project.component");
//declare var jQuery:any;
var projectState = { name: 'project', url: '/project', component: project_component_1.ProjectComponent };
var NewProjectComponent = (function () {
    function NewProjectComponent(projectService, clientService, phaseService, projects, clients, phases, stateService) {
        this.projectService = projectService;
        this.clientService = clientService;
        this.phaseService = phaseService;
        this.projects = projects;
        this.clients = clients;
        this.phases = phases;
        this.stateService = stateService;
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.getPhases();
    };
    NewProjectComponent.prototype.addNewProject = function () {
        var _this = this;
        var project = new project_1.Project();
        project.setProjectName(this.projectName);
        project.setSiteAddress(this.siteAddress);
        project.setDescription(this.description);
        project.setStartDate(new Date(this.startDate));
        project.setClientId(this.clientId);
        project.setPhase(this.phase);
        this.projectService.save(project).subscribe(function (data) {
            console.log(data);
            //project.setId(data);
            //this.projects.addProject(project);
            _this.stateService.go('project');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProjectComponent.prototype.getPhases = function () {
        var _this = this;
        this.phaseService.getPhases(null).subscribe(function (data) {
            _this.availablePhases = _this.phases.getPhases();
        }, function (error) {
            console.log(error._body.toString() + " No phases found");
        });
    };
    NewProjectComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients(null).subscribe(function (data) {
            _this.availableClients = _this.clients.getClients();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProjectComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewProjectComponent;
}());
NewProjectComponent = __decorate([
    core_1.Component({
        selector: 'new-project',
        templateUrl: './new-project.component.html',
        styleUrls: ['./new-project.component.scss']
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, client_service_1.ClientService,
        phase_service_1.PhaseService, projects_1.Projects,
        clients_1.Clients, phases_1.Phases, angular_1.StateService])
], NewProjectComponent);
exports.NewProjectComponent = NewProjectComponent;
//# sourceMappingURL=new-project.component.js.map