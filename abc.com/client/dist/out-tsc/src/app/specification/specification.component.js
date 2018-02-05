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
var specification_service_1 = require("./specification.service");
var specifications_1 = require("./specifications");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var SpecificationComponent = (function () {
    function SpecificationComponent(specificationService, specifications, queryParamsService) {
        this.specificationService = specificationService;
        this.specifications = specifications;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getSpecifications(null);
    }
    SpecificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getSpecifications(queryParam);
        });
    };
    SpecificationComponent.prototype.getSpecifications = function (queryParams) {
        this.specificationService.getSpecifications(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    SpecificationComponent.prototype.updateSpecification = function (specification) {
        var _this = this;
        this.loading = true;
        this.specificationService.update(specification).subscribe(function (data) {
            _this.loading = false;
        });
    };
    SpecificationComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    SpecificationComponent.prototype.deleteSpecification = function (specification) {
        this.specificationService.delete(specification.getId()).subscribe(function (data) {
        });
    };
    SpecificationComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    SpecificationComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return SpecificationComponent;
}());
SpecificationComponent = __decorate([
    core_1.Component({
        selector: 'specification',
        templateUrl: './specification.component.html',
        styleUrls: ['./specification.component.scss']
    }),
    __metadata("design:paramtypes", [specification_service_1.SpecificationService,
        specifications_1.Specifications,
        query_params_service_1.QueryParamsService])
], SpecificationComponent);
exports.SpecificationComponent = SpecificationComponent;
//# sourceMappingURL=specification.component.js.map