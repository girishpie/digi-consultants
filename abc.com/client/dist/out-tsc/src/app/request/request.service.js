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
var request_1 = require("./request");
var requests_1 = require("./requests");
var globals_1 = require("../globals/globals");
var RequestService = (function () {
    function RequestService(http, requests, globals) {
        this.http = http;
        this.requests = requests;
        this.globals = globals;
        this.requestUrl = this.globals.getBackendUrl() + 'request/';
    }
    RequestService.prototype.getRequests = function (queryParams) {
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
        var endPoint = this.requestUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var requests = new Array();
            for (i = 0; i < response.length; i++) {
                var request = new request_1.Request();
                request.setId(response[i].id);
                request.setDescription(response[i].Description);
                request.setStatus(response[i].Status);
                request.setDOB(response[i].DOB);
                request.setProject(response[i].project);
                request.setRaised(response[i].Raised);
                request.setAction(response[i].Action);
                requests.push(request);
                requests.push(request);
            }
            _this.requests.setRequests(requests);
            _this.requests.setTotalItems(res1.totalElements);
            return true;
        });
    };
    RequestService.prototype.save = function (request) {
        var _this = this;
        var endPoint = this.requestUrl + request.getId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        // Returns response
        return this.http.post(endPoint, request, options)
            .map(function (res) {
            var res1 = res.json();
            request.setId(res1.id);
            _this.requests.addRequest(request);
            return res1.id;
        });
    };
    RequestService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.requestUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.requests.deleteRequest(res1.id);
        });
    };
    return RequestService;
}());
RequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, requests_1.Requests, globals_1.Globals])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map