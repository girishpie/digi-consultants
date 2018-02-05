"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by gipai on 10/4/2017.
 */
var core_1 = require("@angular/core");
var query_params_1 = require("./query-params");
var Subject_1 = require("rxjs/Subject");
var QueryParamsService = (function () {
    function QueryParamsService() {
        this.subject = new Subject_1.Subject();
        this.queryParams = new query_params_1.QueryParams();
    }
    QueryParamsService.prototype.setSearchString = function (searchString) {
        this.queryParams.searchString = searchString;
        this.subject.next(this.queryParams);
    };
    QueryParamsService.prototype.setPageNumber = function (page) {
        this.queryParams.pageNumber = page;
        this.subject.next(this.queryParams);
    };
    QueryParamsService.prototype.getQueryParams = function () {
        return this.subject.asObservable();
    };
    return QueryParamsService;
}());
QueryParamsService = __decorate([
    core_1.Injectable()
], QueryParamsService);
exports.QueryParamsService = QueryParamsService;
//# sourceMappingURL=query-params.service.js.map