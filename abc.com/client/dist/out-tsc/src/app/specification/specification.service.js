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
var specification_1 = require("./specification");
var specifications_1 = require("./specifications");
var globals_1 = require("../globals/globals");
var SpecificationService = (function () {
    function SpecificationService(http, specifications, globals) {
        this.http = http;
        this.specifications = specifications;
        this.globals = globals;
        this.specificationUrl = this.globals.getBackendUrl() + 'specification/';
    }
    SpecificationService.prototype.getSpecifications = function (queryParams) {
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
        var endPoint = this.specificationUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var specifications = new Array();
            for (i = 0; i < response.length; i++) {
                var specification = new specification_1.Specification();
                specification.setId(response[i].Id);
                specification.setSpecificationName(response[i].specificationName);
                specification.setDOB(response[i].DOB);
                specification.setSectionId(response[i].sectionId);
                specification.setAnswer(response[i].answer);
                specifications.push(specification);
            }
            _this.specifications.setSpecifications(specifications);
            _this.specifications.setTotalItems(res1.totalElements);
            return true;
        });
    };
    SpecificationService.prototype.save = function (specification) {
        var _this = this;
        var endPoint = this.specificationUrl + specification.getId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        // Returns response
        return this.http.post(endPoint, specification, options)
            .map(function (res) {
            var res1 = res.json();
            specification.setId(res1.id);
            _this.specifications.addSpecification(specification);
            return res1.id;
        });
    };
    SpecificationService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.specificationUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.specifications.deleteSpecification(res1.id);
        });
    };
    SpecificationService.prototype.update = function (specification) {
        var endPoint = this.specificationUrl + specification.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return SpecificationService;
}());
SpecificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, specifications_1.Specifications, globals_1.Globals])
], SpecificationService);
exports.SpecificationService = SpecificationService;
//# sourceMappingURL=specification.service.js.map