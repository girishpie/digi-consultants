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
var company_service_1 = require("./company.service");
var companies_1 = require("./companies");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var CompanyComponent = (function () {
    function CompanyComponent(companyService, companies, queryParamsService) {
        this.companyService = companyService;
        this.companies = companies;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getCompanies(null);
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getCompanies(queryParam);
        });
    };
    CompanyComponent.prototype.getCompanies = function (queryParams) {
        this.companyService.getCompanies(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    CompanyComponent.prototype.updateCompany = function (company) {
        var _this = this;
        this.loading = true;
        this.companyService.update(company).subscribe(function (data) {
            _this.loading = false;
        });
    };
    CompanyComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    CompanyComponent.prototype.deleteCompany = function (company) {
        this.companyService.delete(company.getId()).subscribe(function (data) {
        });
    };
    CompanyComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    CompanyComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'company',
        templateUrl: './company.component.html',
        styleUrls: ['./company.component.scss']
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService,
        companies_1.Companies,
        query_params_service_1.QueryParamsService])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map