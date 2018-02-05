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
var category_1 = require("./category");
var categories_1 = require("./categories");
var globals_1 = require("../globals/globals");
var CategoryService = (function () {
    function CategoryService(http, categories, globals) {
        this.http = http;
        this.categories = categories;
        this.globals = globals;
        this.categoryUrl = this.globals.getBackendUrl() + 'category/';
    }
    CategoryService.prototype.getCategories = function (queryParams) {
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
        var endPoint = this.categoryUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var categories = new Array();
            for (i = 0; i < response.length; i++) {
                var category = new category_1.Category();
                category.setId(response[i].id);
                category.setName(response[i].name);
                category.setDescription(response[i].description);
                category.setSubCategories(response[i].subCatNames);
                categories.push(category);
            }
            _this.categories.setCategories(categories);
            _this.categories.setTotalItems(res1.totalElements);
            return true;
        });
    };
    CategoryService.prototype.save = function (category) {
        var _this = this;
        var endPoint = this.categoryUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, category)
            .map(function (res) {
            var res1 = res.json();
            category.setId(res1.id);
            _this.categories.addCategory(category);
            return res1.id;
        });
    };
    CategoryService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.categoryUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.categories.deleteCategory(res1.response);
        });
    };
    CategoryService.prototype.getCategory = function (name) {
        this.getCategories(null).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body.errorMessage);
        });
        var i = 0;
        for (i = 0; i < this.categories.getTotalItems(); i++) {
            if (this.categories[i].getName() === name) {
                return this.categories[i].getId();
            }
        }
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, categories_1.Categories, globals_1.Globals])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map