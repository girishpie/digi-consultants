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
var companies_1 = require("../../company/companies");
var company_service_1 = require("../../company/company.service");
var client_1 = require("../client");
var client_service_1 = require("../client.service");
var clients_1 = require("../clients");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var client_component_1 = require("../client.component");
//declare var jQuery:any;
var clientState = { name: 'client', url: '/client', component: client_component_1.ClientComponent };
var NewClientComponent = (function () {
    function NewClientComponent(clientService, companyService, clients, companies, stateService) {
        this.clientService = clientService;
        this.companyService = companyService;
        this.clients = clients;
        this.companies = companies;
        this.stateService = stateService;
    }
    NewClientComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    NewClientComponent.prototype.addNewClient = function () {
        var _this = this;
        var client = new client_1.Client();
        client.setName(this.name);
        client.setCompanyId(this.companyId);
        client.setAddress(this.address);
        this.clientService.save(client).subscribe(function (data) {
            console.log(data);
            // client.setId(data);
            //this.clients.addClient(client);
            _this.stateService.go('client');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewClientComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies(null).subscribe(function (data) {
            _this.availableCompanies = _this.companies.getCompanies();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewClientComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewClientComponent;
}());
NewClientComponent = __decorate([
    core_1.Component({
        selector: 'new-client',
        templateUrl: './new-client.component.html',
        styleUrls: ['./new-client.component.scss']
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService, company_service_1.CompanyService,
        clients_1.Clients, companies_1.Companies, angular_1.StateService])
], NewClientComponent);
exports.NewClientComponent = NewClientComponent;
//# sourceMappingURL=new-client.component.js.map