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
var request_1 = require("../request");
var request_service_1 = require("../request.service");
var request_component_1 = require("../request.component");
var requests_1 = require("../requests");
var angular_1 = require("@uirouter/angular");
//declare var jQuery:any;
var requestState = { name: 'request', url: '/request', component: request_component_1.RequestComponent };
var NewRequestComponent = (function () {
    function NewRequestComponent(requestService, requests, stateService) {
        this.requestService = requestService;
        this.requests = requests;
        this.stateService = stateService;
    }
    NewRequestComponent.prototype.ngOnInit = function () { };
    NewRequestComponent.prototype.addNewRequest = function () {
        var _this = this;
        var request = new request_1.Request();
        request.setId(this.id);
        request.setDescription(this.Description);
        request.setStatus(this.Status);
        request.setDOB(this.DOB);
        request.setProject(this.project);
        request.setRaised(this.Raised);
        request.setAction(this.Action);
        this.requestService.save(request).subscribe(function (data) {
            console.log(data);
            _this.stateService.go('request');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewRequestComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewRequestComponent;
}());
NewRequestComponent = __decorate([
    core_1.Component({
        selector: 'new-request',
        templateUrl: './new-request.component.html',
        styleUrls: ['./new-request.component.scss']
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        requests_1.Requests,
        angular_1.StateService])
], NewRequestComponent);
exports.NewRequestComponent = NewRequestComponent;
//# sourceMappingURL=new-request.component.js.map