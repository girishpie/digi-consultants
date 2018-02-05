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
var company_1 = require("./company");
var companies_1 = require("./companies");
var globals_1 = require("../globals/globals");
var CompanyService = (function () {
    function CompanyService(http, companies, globals) {
        this.http = http;
        this.companies = companies;
        this.globals = globals;
        this.companyUrl = this.globals.getBackendUrl() + 'company/';
    }
    CompanyService.prototype.getCompanies = function (queryParams) {
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
        var endPoint = this.companyUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var companies = new Array();
            for (i = 0; i < response.length; i++) {
                var company = new company_1.Company();
                company.setCompanyName(response[i].companyName);
                company.setAddress(response[i].address);
                company.setEmployeeNames(response[i].employeeNames);
                company.setClientNames(response[i].clientNames);
                company.setOfficeNames(response[i].officeNames);
                company.setId(response[i].id);
                companies.push(company);
            }
            _this.companies.setCompanies(companies);
            _this.companies.setTotalItems(res1.totalElements);
            return true;
        });
    };
    CompanyService.prototype.save = function (company) {
        var _this = this;
        var endPoint = this.companyUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, company)
            .map(function (res) {
            var res1 = res.json();
            company.setId(res1.id);
            _this.companies.addCompany(company);
            return res1.id;
        });
    };
    CompanyService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.companyUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.companies.deleteCompany(res1.response);
        });
    };
    CompanyService.prototype.update = function (company) {
        var endPoint = this.companyUrl + company.getId();
        // Returns response
        return this.http.patch(endPoint, company)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, companies_1.Companies, globals_1.Globals])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map