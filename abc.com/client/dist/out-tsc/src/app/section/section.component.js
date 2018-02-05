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
var section_service_1 = require("./section.service");
var sections_1 = require("./sections");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var SectionComponent = (function () {
    function SectionComponent(sectionService, sections, queryParamsService) {
        this.sectionService = sectionService;
        this.sections = sections;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getSections(null);
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getSections(queryParam);
        });
    };
    SectionComponent.prototype.getSections = function (queryParams) {
        this.sectionService.getSections(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    SectionComponent.prototype.updateSection = function (section) {
        var _this = this;
        this.loading = true;
        this.sectionService.update(section).subscribe(function (data) {
            _this.loading = false;
        });
    };
    SectionComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    SectionComponent.prototype.deleteSection = function (section) {
        this.sectionService.delete(section.getId()).subscribe(function (data) {
        });
    };
    SectionComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    SectionComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return SectionComponent;
}());
SectionComponent = __decorate([
    core_1.Component({
        selector: 'section',
        templateUrl: './section.component.html',
        styleUrls: ['./section.component.scss']
    }),
    __metadata("design:paramtypes", [section_service_1.SectionService,
        sections_1.Sections,
        query_params_service_1.QueryParamsService])
], SectionComponent);
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=section.component.js.map