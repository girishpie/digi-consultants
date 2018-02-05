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
var projects_1 = require("../../project/projects");
var project_service_1 = require("../../project/project.service");
var document_1 = require("../document");
var document_service_1 = require("../document.service");
var documents_1 = require("../documents");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var document_component_1 = require("../document.component");
//declare var jQuery:any;
var documentState = { name: 'document', url: '/document', component: document_component_1.DocumentComponent };
var NewDocumentComponent = (function () {
    function NewDocumentComponent(documentService, projectService, documents, projects, stateService) {
        this.documentService = documentService;
        this.projectService = projectService;
        this.documents = documents;
        this.projects = projects;
        this.stateService = stateService;
    }
    NewDocumentComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    NewDocumentComponent.prototype.addNewDocument = function (event) {
        var _this = this;
        var document = new document_1.Document();
        document.setProjectId(this.projectId);
        this.documentService.save(event, document).subscribe(function (data) {
            console.log(data);
            _this.stateService.go('document');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDocumentComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects(null).subscribe(function (data) {
            _this.availableProjects = _this.projects.getProjects();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewDocumentComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewDocumentComponent;
}());
NewDocumentComponent = __decorate([
    core_1.Component({
        selector: 'new-document',
        templateUrl: './new-file.component.html',
        styleUrls: ['./new-file.component.scss']
    }),
    __metadata("design:paramtypes", [document_service_1.DocumentService,
        project_service_1.ProjectService,
        documents_1.Documents,
        projects_1.Projects, angular_1.StateService])
], NewDocumentComponent);
exports.NewDocumentComponent = NewDocumentComponent;
//# sourceMappingURL=new-file.component.js.map