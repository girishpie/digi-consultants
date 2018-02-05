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
var product_1 = require("./product");
var products_1 = require("./products");
var globals_1 = require("../globals/globals");
var ProductService = (function () {
    function ProductService(http, products, globals) {
        this.http = http;
        this.products = products;
        this.globals = globals;
        this.productUrl = this.globals.getBackendUrl() + 'product/';
    }
    ProductService.prototype.getProducts = function (queryParams, sectionId) {
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
        var endPoint = this.productUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint, sectionId)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var products = new Array();
            for (i = 0; i < response.length; i++) {
                var product = new product_1.Product();
                product.setSectionName(response[i].sectionName);
                product.setProductCatName(response[i].productCatName);
                product.setName(response[i].name);
                product.setQuantity(response[i].quantity);
                product.setBimId(response[i].bimId);
                product.setAmount(response[i].amount);
                product.setUnit(response[i].unit);
                product.setDescription(response[i].description);
                products.push(product);
            }
            _this.products.setProducts(products);
            _this.products.setTotalItems(res1.totalElements);
            return true;
        });
    };
    ProductService.prototype.save = function (product) {
        var _this = this;
        var endPoint = this.productUrl + product.getSectionId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, product)
            .map(function (res) {
            var res1 = res.json();
            product.setId(res1.id);
            _this.products.addProduct(product);
            return res1.id;
        });
    };
    ProductService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.productUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.products.deleteProduct(res1.response);
        });
    };
    ProductService.prototype.update = function (product) {
        var endPoint = this.productUrl + product.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, products_1.Products, globals_1.Globals])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map