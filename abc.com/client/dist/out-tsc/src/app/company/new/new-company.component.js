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
var company_1 = require("../company");
var companies_1 = require("../companies");
var company_service_1 = require("../company.service");
var angular_1 = require("@uirouter/angular");
var company_component_1 = require("../company.component");
var core_1 = require("@angular/core");
//declare var jQuery:any;
var companyState = { name: 'company', url: '/company', component: company_component_1.CompanyComponent };
var NewCompanyComponent = (function () {
    function NewCompanyComponent(companyService, companies, stateService) {
        this.companyService = companyService;
        this.companies = companies;
        this.stateService = stateService;
    }
    NewCompanyComponent.prototype.ngOnInit = function () {
    };
    NewCompanyComponent.prototype.addNewCompany = function () {
        var _this = this;
        var company = new company_1.Company();
        company.setCompanyName(this.companyName);
        company.setAddress(this.address);
        this.companyService.save(company).subscribe(function (data) {
            console.log(data);
            // company.setId(data);
            // this.companies.addCompany(company);
            _this.stateService.go('company');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewCompanyComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewCompanyComponent;
}());
NewCompanyComponent = __decorate([
    core_1.Component({
        selector: 'new-company',
        templateUrl: './new-company.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService,
        companies_1.Companies, angular_1.StateService])
], NewCompanyComponent);
exports.NewCompanyComponent = NewCompanyComponent;
//# sourceMappingURL=new-company.component.js.map