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
var phase_1 = require("../phase");
var phase_service_1 = require("../phase.service");
var phases_1 = require("../phases");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var phase_component_1 = require("../phase.component");
//declare var jQuery:any;
var phaseState = { name: 'phase', url: '/phase', component: phase_component_1.PhaseComponent };
var NewPhaseComponent = (function () {
    function NewPhaseComponent(phaseService, phases, stateService) {
        this.phaseService = phaseService;
        this.phases = phases;
        this.stateService = stateService;
        this.loading = false;
    }
    NewPhaseComponent.prototype.ngOnInit = function () {
    };
    NewPhaseComponent.prototype.addNewPhase = function () {
        var _this = this;
        this.loading = true;
        var phase = new phase_1.Phase();
        phase.setName(this.name);
        this.phaseService.save(phase).subscribe(function (data) {
            console.log(data);
            // phase.setId(data);
            // this.phases.addPhase(phase);
            _this.stateService.go('phase');
            _this.loading = false;
        }, function (error) {
            window.alert(error._body);
            _this.loading = false;
        });
    };
    NewPhaseComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewPhaseComponent;
}());
NewPhaseComponent = __decorate([
    core_1.Component({
        selector: 'new-phase',
        templateUrl: './new-phase.component.html'
    }),
    __metadata("design:paramtypes", [phase_service_1.PhaseService, phases_1.Phases, angular_1.StateService])
], NewPhaseComponent);
exports.NewPhaseComponent = NewPhaseComponent;
//# sourceMappingURL=new-phase.component.js.map