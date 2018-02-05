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
var phase_service_1 = require("./phase.service");
var phases_1 = require("./phases");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var PhaseComponent = (function () {
    function PhaseComponent(phaseService, phases, queryParamsService) {
        this.phaseService = phaseService;
        this.phases = phases;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getPhases(null);
    }
    PhaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isValid = false;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getPhases(queryParam);
        });
    };
    PhaseComponent.prototype.getPhases = function (queryParams) {
        this.phaseService.getPhases(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    PhaseComponent.prototype.deletePhase = function (phase) {
        var _this = this;
        this.loading = true;
        this.phaseService.delete(phase.getId()).subscribe(function (data) {
            _this.loading = false;
        });
    };
    PhaseComponent.prototype.updatePhase = function (phase) {
        var _this = this;
        this.loading = true;
        this.phaseService.update(phase).subscribe(function (data) {
            _this.loading = false;
        });
    };
    PhaseComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
        // console.log(event.target.outerText, phase.id);
    };
    PhaseComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    PhaseComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return PhaseComponent;
}());
PhaseComponent = __decorate([
    core_1.Component({
        selector: 'phase',
        templateUrl: './phase.component.html',
        styleUrls: ['./phase.component.scss']
    }),
    __metadata("design:paramtypes", [phase_service_1.PhaseService,
        phases_1.Phases,
        query_params_service_1.QueryParamsService])
], PhaseComponent);
exports.PhaseComponent = PhaseComponent;
//# sourceMappingURL=phase.component.js.map