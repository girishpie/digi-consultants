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
var client_service_1 = require("./client.service");
var clients_1 = require("./clients");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var ClientComponent = (function () {
    function ClientComponent(clientService, clients, queryParamsService) {
        this.clientService = clientService;
        this.clients = clients;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getClients(null);
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getClients(queryParam);
        });
    };
    ClientComponent.prototype.getClients = function (queryParams) {
        this.clientService.getClients(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    ClientComponent.prototype.updateClient = function (client) {
        var _this = this;
        this.loading = true;
        this.clientService.update(client).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ClientComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    ClientComponent.prototype.deleteClient = function (client) {
        this.clientService.delete(client.getId()).subscribe(function (data) {
        });
    };
    ClientComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    core_1.Component({
        selector: 'client',
        templateUrl: './client.component.html',
        styleUrls: ['./client.component.scss']
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        clients_1.Clients,
        query_params_service_1.QueryParamsService])
], ClientComponent);
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map