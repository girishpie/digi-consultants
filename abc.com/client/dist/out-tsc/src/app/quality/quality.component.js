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
var quality_service_1 = require("./quality.service");
var qualities_1 = require("./qualities");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var projects_1 = require("../project/projects");
var project_service_1 = require("../project/project.service");
var QualityComponent = (function () {
    function QualityComponent(qualityService, projectService, qualities, projects, queryParamsService) {
        this.qualityService = qualityService;
        this.projectService = projectService;
        this.qualities = qualities;
        this.projects = projects;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.isValid = false;
        this.getQualities(null);
    }
    QualityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProjects();
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getQualities(queryParam);
        });
    };
    QualityComponent.prototype.getQualities = function (queryParams) {
        this.qualityService.getQualities(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    QualityComponent.prototype.deleteQuality = function (quality) {
        this.qualityService.delete(quality.getId()).subscribe(function (data) {
        });
    };
    QualityComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    QualityComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    QualityComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    QualityComponent.prototype.updateQuality = function (quality) {
        var _this = this;
        this.loading = true;
        this.qualityService.update(quality).subscribe(function (data) {
            _this.loading = false;
        });
    };
    QualityComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
        // console.log(event.target.outerText, phase.id);
    };
    return QualityComponent;
}());
QualityComponent = __decorate([
    core_1.Component({
        selector: 'quality',
        templateUrl: './quality.component.html',
        styleUrls: ['./quality.component.scss']
    }),
    __metadata("design:paramtypes", [quality_service_1.QualityService, project_service_1.ProjectService,
        qualities_1.Qualities, projects_1.Projects,
        query_params_service_1.QueryParamsService])
], QualityComponent);
exports.QualityComponent = QualityComponent;
//# sourceMappingURL=quality.component.js.map