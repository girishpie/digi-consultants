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
/**
 * Created by gipai on 10/3/2017.
 */
var core_1 = require("@angular/core");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var PaginationComponent = (function () {
    function PaginationComponent(queryParamsService) {
        this.queryParamsService = queryParamsService;
    }
    PaginationComponent.prototype.getPage = function (page) {
        this.queryParamsService.setPageNumber(page - 1);
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss']
    }),
    __metadata("design:paramtypes", [query_params_service_1.QueryParamsService])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map