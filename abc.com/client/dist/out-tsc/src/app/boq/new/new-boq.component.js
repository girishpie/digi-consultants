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
var boq_1 = require("../boq");
var boqs_1 = require("../boqs");
var boq_service_1 = require("../boq.service");
var boq_component_1 = require("../boq.component");
var departments_1 = require("../../department/departments");
var department_service_1 = require("../../department/department.service");
var angular_1 = require("@uirouter/angular");
var core_1 = require("@angular/core");
//declare var jQuery:any;
var boqState = { name: 'boq', url: '/boq', component: boq_component_1.BoQComponent };
var NewBoQComponent = (function () {
    function NewBoQComponent(departmentService, boqService, boqs, departments, stateService) {
        this.departmentService = departmentService;
        this.boqService = boqService;
        this.boqs = boqs;
        this.departments = departments;
        this.stateService = stateService;
    }
    NewBoQComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    NewBoQComponent.prototype.addNewBoQ = function () {
        var _this = this;
        var boq = new boq_1.BoQ();
        boq.setBoQDepartmentId(this.boQDepartmentId);
        this.boqService.save(boq).subscribe(function (data) {
            console.log(data);
            // boq.setId(data);
            //this.boqs.addBoQ(boq);
            _this.stateService.go('boq');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewBoQComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments(null).subscribe(function (data) {
            _this.availableDepartments = _this.departments.getDepartments();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewBoQComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewBoQComponent;
}());
NewBoQComponent = __decorate([
    core_1.Component({
        selector: 'new-boq',
        templateUrl: './new-boq.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [department_service_1.DepartmentService, boq_service_1.BoQService,
        boqs_1.BoQs, departments_1.Departments, angular_1.StateService])
], NewBoQComponent);
exports.NewBoQComponent = NewBoQComponent;
//# sourceMappingURL=new-boq.component.js.map