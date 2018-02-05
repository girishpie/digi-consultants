"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Phases = (function () {
    function Phases() {
        this.phases = new Array();
    }
    Phases.prototype.setPhases = function (phases) {
        this.phases = phases;
    };
    Phases.prototype.getPhases = function () {
        return this.phases;
    };
    Phases.prototype.addPhase = function (phase) {
        this.phases.push(phase);
        this.totalItems++;
    };
    Phases.prototype.deletePhase = function (id) {
        var phaseFound = this.phases.find(function (phase) { return id === phase.getId(); });
        var index = this.phases.indexOf(phaseFound);
        if (index !== -1) {
            this.phases.splice(index, 1);
            this.totalItems--;
        }
    };
    Phases.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Phases.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Phases;
}());
Phases = __decorate([
    core_1.Injectable()
], Phases);
exports.Phases = Phases;
//# sourceMappingURL=phases.js.map