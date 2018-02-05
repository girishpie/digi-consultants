"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Requests = (function () {
    function Requests() {
        this.requests = new Array();
    }
    Requests.prototype.setRequests = function (requests) {
        this.requests = requests;
    };
    Requests.prototype.getRequests = function () {
        return this.requests;
    };
    Requests.prototype.deleteRequest = function (requestId) {
        var requestFound = this.requests.find(function (request) { return requestId === request.getId(); });
        var index = this.requests.indexOf(requestFound);
        if (index !== -1) {
            this.requests.splice(index, 1);
            this.totalItems--;
        }
    };
    Requests.prototype.addRequest = function (request) {
        this.requests.push(request);
        this.totalItems++;
    };
    Requests.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Requests.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Requests;
}());
Requests = __decorate([
    core_1.Injectable()
], Requests);
exports.Requests = Requests;
//# sourceMappingURL=requests.js.map