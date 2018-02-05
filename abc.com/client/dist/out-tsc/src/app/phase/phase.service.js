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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var phase_1 = require("./phase");
var phases_1 = require("./phases");
var globals_1 = require("../globals/globals");
var PhaseService = (function () {
    function PhaseService(http, phases, globals) {
        this.http = http;
        this.phases = phases;
        this.globals = globals;
        this.phaseUrl = this.globals.getBackendUrl() + 'phase/';
    }
    PhaseService.prototype.getPhases = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.phaseUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var phases = new Array();
            for (i = 0; i < response.length; i++) {
                var phase = new phase_1.Phase();
                phase.setName(response[i].name);
                phase.setId(response[i].id);
                phases.push(phase);
            }
            _this.phases.setPhases(phases);
            _this.phases.setTotalItems(res1.totalElements);
            return true;
        });
    };
    PhaseService.prototype.save = function (phase) {
        var _this = this;
        var endPoint = this.phaseUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, phase)
            .map(function (res) {
            var res1 = res.json();
            phase.setId(res1.id);
            _this.phases.addPhase(phase);
            return res1.id;
        });
    };
    PhaseService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.phaseUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.phases.deletePhase(res1.response);
        });
    };
    PhaseService.prototype.update = function (phase) {
        var endPoint = this.phaseUrl + phase.getId();
        // Returns response
        return this.http.patch(endPoint, phase)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return PhaseService;
}());
PhaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, phases_1.Phases, globals_1.Globals])
], PhaseService);
exports.PhaseService = PhaseService;
//# sourceMappingURL=phase.service.js.map