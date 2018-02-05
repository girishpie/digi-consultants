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
var boqs_1 = require("../../boq/boqs");
var boq_service_1 = require("../../boq/boq.service");
var section_1 = require("../section");
var section_service_1 = require("../section.service");
var sections_1 = require("../sections");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var section_component_1 = require("../section.component");
//declare var jQuery:any;
var sectionState = { name: 'section', url: '/section', component: section_component_1.SectionComponent };
var NewSectionComponent = (function () {
    function NewSectionComponent(sectionService, boQService, sections, boQs, stateService) {
        this.sectionService = sectionService;
        this.boQService = boQService;
        this.sections = sections;
        this.boQs = boQs;
        this.stateService = stateService;
    }
    NewSectionComponent.prototype.ngOnInit = function () {
        this.getBoQs();
    };
    NewSectionComponent.prototype.addNewSection = function () {
        var _this = this;
        var section = new section_1.Section();
        section.setSectionName(this.sectionName);
        section.setBoqId(this.boqId);
        this.sectionService.save(section).subscribe(function (data) {
            console.log(data);
            //section.setId(data);
            //this.sections.addSection(section);
            _this.stateService.go('section');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSectionComponent.prototype.getBoQs = function () {
        var _this = this;
        this.boQService.getBoQs(null).subscribe(function (data) {
            _this.availableBoQs = _this.boQs.getBoQs();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSectionComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewSectionComponent;
}());
NewSectionComponent = __decorate([
    core_1.Component({
        selector: 'new-section',
        templateUrl: './new-section.component.html',
    }),
    __metadata("design:paramtypes", [section_service_1.SectionService,
        boq_service_1.BoQService,
        sections_1.Sections,
        boqs_1.BoQs, angular_1.StateService])
], NewSectionComponent);
exports.NewSectionComponent = NewSectionComponent;
//# sourceMappingURL=new-section.component.js.map