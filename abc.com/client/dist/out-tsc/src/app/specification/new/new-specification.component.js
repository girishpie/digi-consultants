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
var specification_1 = require("../specification");
var specification_service_1 = require("../specification.service");
var specification_component_1 = require("../specification.component");
var specifications_1 = require("../specifications");
var angular_1 = require("@uirouter/angular");
//declare var jQuery:any;
var specificationState = { name: 'specification', url: '/specification', component: specification_component_1.SpecificationComponent };
var NewSpecificationComponent = (function () {
    function NewSpecificationComponent(specificationService, specifications, stateService) {
        this.specificationService = specificationService;
        this.specifications = specifications;
        this.stateService = stateService;
        this.showDetails = false;
        this.showDetailsA = false;
        this.showDetailsB = false;
    }
    NewSpecificationComponent.prototype.ngOnInit = function () { };
    NewSpecificationComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    NewSpecificationComponent.prototype.toggleDetailsA = function () {
        this.showDetailsA = !this.showDetailsA;
    };
    NewSpecificationComponent.prototype.toggleDetailsB = function () {
        this.showDetailsB = !this.showDetailsB;
    };
    NewSpecificationComponent.prototype.addNewSpecification = function () {
        var _this = this;
        var specification = new specification_1.Specification();
        specification.setId(this.Id);
        specification.setSpecificationName(this.specificationName);
        specification.setDOB(this.DOB);
        specification.setSectionId(this.sectionId);
        specification.setAnswer(this.answer);
        this.specificationService.save(specification).subscribe(function (data) {
            console.log(data);
            _this.stateService.go('specification');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSpecificationComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewSpecificationComponent;
}());
NewSpecificationComponent = __decorate([
    core_1.Component({
        selector: 'new-specification',
        templateUrl: './new-specification.component.html',
        styleUrls: ['./new-specification.component.scss']
    }),
    __metadata("design:paramtypes", [specification_service_1.SpecificationService,
        specifications_1.Specifications,
        angular_1.StateService])
], NewSpecificationComponent);
exports.NewSpecificationComponent = NewSpecificationComponent;
//# sourceMappingURL=new-specification.component.js.map