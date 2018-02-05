"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Products = (function () {
    function Products() {
        this.products = new Array();
    }
    Products.prototype.setProducts = function (products) {
        this.products = products;
    };
    Products.prototype.getProducts = function () {
        return this.products;
    };
    Products.prototype.deleteProduct = function (productId) {
        var productFound = this.products.find(function (product) { return productId === product.getId(); });
        var index = this.products.indexOf(productFound);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.totalItems--;
        }
    };
    Products.prototype.addProduct = function (product) {
        this.products.push(product);
        this.totalItems++;
    };
    Products.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Products.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Products;
}());
Products = __decorate([
    core_1.Injectable()
], Products);
exports.Products = Products;
//# sourceMappingURL=products.js.map