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
var quality_1 = require("../quality");
var quality_service_1 = require("../quality.service");
var quality_component_1 = require("../quality.component");
var qualities_1 = require("../qualities");
var angular_1 = require("@uirouter/angular");
//declare var jQuery:any;
var qualityState = { name: 'quality', url: '/quality', component: quality_component_1.QualityComponent };
var NewQualityComponent = (function () {
    function NewQualityComponent(qualityservice, projectService, projects, qualities, stateService) {
        this.qualityservice = qualityservice;
        this.projectService = projectService;
        this.projects = projects;
        this.qualities = qualities;
        this.stateService = stateService;
    }
    NewQualityComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewQualityComponent.prototype.addNewQuality = function () {
        var _this = this;
        var quality = new quality_1.Quality();
        quality.setId(this.id);
        quality.setTitle(this.Title);
        quality.setStatus(this.Status);
        quality.setOpened(this.Opened);
        quality.setDescription(this.Description);
        quality.setRectified(this.Rectified);
        quality.setProjectId(this.projectId);
        this.qualityservice.save(quality).subscribe(function (data) {
            console.log(data);
            quality.setId(data);
            _this.qualities.addQuality(quality);
            _this.stateService.go('quality');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewQualityComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewQualityComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewQualityComponent;
}());
NewQualityComponent = __decorate([
    core_1.Component({
        selector: 'new-quality',
        templateUrl: './new-quality.component.html',
        styleUrls: ['./new-quality.component.scss']
    }),
    __metadata("design:paramtypes", [quality_service_1.QualityService, project_service_1.ProjectService,
        projects_1.Projects, qualities_1.Qualities, angular_1.StateService])
], NewQualityComponent);
exports.NewQualityComponent = NewQualityComponent;
//# sourceMappingURL=new-quality.component.js.map