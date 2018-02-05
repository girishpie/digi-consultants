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
var subcategory_1 = require("./subcategory");
var subcategories_1 = require("./subcategories");
var globals_1 = require("../globals/globals");
var SubcategoryService = (function () {
    function SubcategoryService(http, subcategories, globals) {
        this.http = http;
        this.subcategories = subcategories;
        this.globals = globals;
        this.categoryUrl = this.globals.getBackendUrl() + 'category/';
    }
    SubcategoryService.prototype.getSubcategories = function (queryParams) {
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
        var endPoint = this.categoryUrl + 'subCategory' + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var subcategories = new Array();
            for (i = 0; i < response.length; i++) {
                var subcategory = new subcategory_1.Subcategory();
                subcategory.setName(response[i].name);
                subcategory.setDescription(response[i].description);
                subcategory.setParentName(response[i].parentName);
                subcategories.push(subcategory);
            }
            _this.subcategories.setSubcategories(subcategories);
            _this.subcategories.setTotalItems(res1.totalElements);
            return true;
        });
    };
    SubcategoryService.prototype.save = function (subcategory) {
        var _this = this;
        var endPoint = this.categoryUrl + subcategory.getCategoryId() + '/';
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, subcategory)
            .map(function (res) {
            var res1 = res.json();
            subcategory.setId(res1.id);
            _this.subcategories.addSubcategory(subcategory);
            return res1.id;
        });
    };
    SubcategoryService.prototype.delete = function (id, parentId) {
        var _this = this;
        var endPoint = this.categoryUrl + parentId + '/' + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.subcategories.deleteSubcategory(res1.response);
        });
    };
    SubcategoryService.prototype.update = function (subcategory) {
        var endPoint = this.categoryUrl + subcategory.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return SubcategoryService;
}());
SubcategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, subcategories_1.Subcategories, globals_1.Globals])
], SubcategoryService);
exports.SubcategoryService = SubcategoryService;
//# sourceMappingURL=subcategory.service.js.map