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
var request_service_1 = require("./request.service");
var requests_1 = require("./requests");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var RequestComponent = (function () {
    function RequestComponent(requestService, requests, queryParamsService) {
        this.requestService = requestService;
        this.requests = requests;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getRequests(null);
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getRequests(queryParam);
        });
    };
    RequestComponent.prototype.getRequests = function (queryParams) {
        this.requestService.getRequests(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    RequestComponent.prototype.deleteRequest = function (request) {
        this.requestService.delete(request.getId()).subscribe(function (data) {
        });
    };
    RequestComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    RequestComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return RequestComponent;
}());
RequestComponent = __decorate([
    core_1.Component({
        selector: 'request',
        templateUrl: './request.component.html',
        styleUrls: ['./request.component.scss']
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        requests_1.Requests,
        query_params_service_1.QueryParamsService])
], RequestComponent);
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=request.component.js.map