"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Clients = (function () {
    function Clients() {
        this.clients = new Array();
    }
    Clients.prototype.setClients = function (clients) {
        this.clients = clients;
    };
    Clients.prototype.getClients = function () {
        return this.clients;
    };
    Clients.prototype.deleteClient = function (clientId) {
        var clientFound = this.clients.find(function (client) { return clientId === client.getId(); });
        var index = this.clients.indexOf(clientFound);
        if (index !== -1) {
            this.clients.splice(index, 1);
            this.totalItems--;
        }
    };
    Clients.prototype.addClient = function (client) {
        this.clients.push(client);
        this.totalItems++;
    };
    Clients.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Clients.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Clients;
}());
Clients = __decorate([
    core_1.Injectable()
], Clients);
exports.Clients = Clients;
//# sourceMappingURL=clients.js.map