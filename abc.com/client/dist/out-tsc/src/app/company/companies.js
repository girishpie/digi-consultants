"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Companies = (function () {
    function Companies() {
        this.companies = new Array();
    }
    Companies.prototype.setCompanies = function (companies) {
        this.companies = companies;
    };
    Companies.prototype.getCompanies = function () {
        return this.companies;
    };
    Companies.prototype.deleteCompany = function (companyId) {
        var companyFound = this.companies.find(function (company) { return companyId === company.getId(); });
        var index = this.companies.indexOf(companyFound);
        if (index !== -1) {
            this.companies.splice(index, 1);
            this.totalItems--;
        }
    };
    Companies.prototype.addCompany = function (company) {
        this.companies.push(company);
        this.totalItems++;
    };
    Companies.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Companies.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Companies;
}());
Companies = __decorate([
    core_1.Injectable()
], Companies);
exports.Companies = Companies;
//# sourceMappingURL=companies.js.map