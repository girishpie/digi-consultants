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
var client_1 = require("./client");
var clients_1 = require("./clients");
var globals_1 = require("../globals/globals");
var ClientService = (function () {
    function ClientService(http, clients, globals) {
        this.http = http;
        this.clients = clients;
        this.globals = globals;
        this.clientUrl = this.globals.getBackendUrl() + 'client/';
    }
    ClientService.prototype.getClients = function (queryParams) {
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
        var endPoint = this.clientUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var clients = new Array();
            for (i = 0; i < response.length; i++) {
                var client = new client_1.Client();
                client.setName(response[i].name);
                client.setAddress(response[i].address);
                client.setCompanyName(response[i].companyName);
                client.setProjectNames(response[i].projectNames);
                client.setId(response[i].id);
                clients.push(client);
            }
            _this.clients.setClients(clients);
            _this.clients.setTotalItems(res1.totalElements);
            return true;
        });
    };
    ClientService.prototype.save = function (client) {
        var _this = this;
        var endPoint = this.clientUrl + client.getCompanyId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, client)
            .map(function (res) {
            var res1 = res.json();
            client.setId(res1.id);
            _this.clients.addClient(client);
            return res1.id;
        });
    };
    ClientService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.clientUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.clients.deleteClient(res1.response);
        });
    };
    ClientService.prototype.update = function (client) {
        var endPoint = this.clientUrl + client.getId();
        // Returns response
        return this.http.patch(endPoint, client)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, clients_1.Clients, globals_1.Globals])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map